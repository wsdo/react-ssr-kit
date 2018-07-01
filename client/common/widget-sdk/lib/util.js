const bridge = require("@hujiang/js-bridge")
require('unfetch/polyfill')
function getURLParameter(name, searchStr) {
  searchStr = searchStr || location.search
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(searchStr) || [null, ''])[1]) || null
}
/**
 * @ignore
 * 将下划线连接的字段转成驼峰式
 */

const convertName = {
  toCamel(str) {
    return str.replace(/_([a-zA-Z])/g, function (all, $1) {
      return $1.toUpperCase()
    })
  },
  toUnderline(str) {
    return str.replace(/[A-Z]/g, function (all) {
      return '_' + all.toLowerCase()
    })
  }
}

const convertObjectName = (data, mode = "toCamel") => {
  let convert = convertName[mode]
  let type = toString.call(data)
  if (type === "[object Object]") {
    let result = {}
    Object.keys(data).forEach((key) => {
      result[convert(key)] = convertObjectName(data[key], mode)
    })
    return result
  } else if (type === "[object Array]") {
    let result = []
    data.forEach((item) => {
      result.push(convertObjectName(item, mode))
    })
    return result
  } else {
    return data
  }
}

module.exports = {
  getURLParameter: getURLParameter,
  getWidgetKey() {
    return getURLParameter("widgetKey")
  },
  toCamel(obj) {
    return convertObjectName(obj, "toCamel")
  },
  toUnderline(obj) {
    return convertObjectName(obj, "toUnderline")
  },
  bridgeInvoke(methodName, params, id, timeout) {
    params = convertObjectName(params, "toUnderline")
    return bridge.invoke(methodName, params, id, timeout).then((data) => {
      return convertObjectName(data, "toCamel")
    })
  },
  fetch(url, options) {
    return fetch(url, options).then((response) => {
      var contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function (data) {
          data = convertObjectName(data, "toCamel")
          if (data.status !== 0) {
            return Promise.reject(new Error(data.message))
          }
          return Promise.resolve(data)
        });
      } else {
        return Promise.reject(new Error("the response is not JSON"))
      }
    })
  },
  on(eventName, callback, filter, one = false) {
    if (eventName) {
      let bindMethod = bridge.on
      if (one) {
        bindMethod = bridge.once
      }
      bindMethod(eventName, (data) => {
        data = convertObjectName(data, "toCamel")
        let needTrigger = true
        if(filter){
          needTrigger = false
          needTrigger = filter.call(null, data)
        }
        if (needTrigger) {
          typeof callback === "function" && callback(data)
        }
      })
    }
  },
  off(eventName, callback) {
    if (eventName) {
      bridge.off(eventName, callback)
    }
  }
}
