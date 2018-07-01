import queryString from 'query-string'
export const encodeParam = (params) => {
  let paramArr = []
  Object.keys(params).forEach((key) => {
    if (typeof params[key] !== 'undefined') {
      paramArr.push(key + '=' + encodeURIComponent(params[key]))
    }
  })
  return paramArr.join('&')
}

export const genUrl = (url, params) => {
  // let paramStr = encodeParam(params)
  let paramStr = queryString.stringify(params)
  if (paramStr.length > 0) {
    let splitChar = url.indexOf('?') === -1 ? '?' : '&'
    return url + splitChar + paramStr
  }
  return url
}

export const genAmsWrappedUrl = (url, params) => {
  const keys = ['key', 'orgId', 'lessonId', 'classId', 'paperId', 'cbUrl']
  const queryStringParams = queryString.parse(window.location.search)
  let urlParams = keys.reduce((obj, key) => {
    if (typeof queryStringParams[key] !== 'undefined') {
      obj[key] = queryStringParams[key]
    }
    return obj
  }, {})
  Object.assign(urlParams, params)
  return genUrl(url, urlParams)
}


export const genFEAuthWrappedUrl = (url, params) => {
  const keys = ['key', 'orgId', 'lessonId', 'classId', 'paperId', 'cbUrl']
  const queryStringParams = queryString.parse(window.location.search)
  let urlParams = keys.reduce((obj, key) => {
    if (typeof queryStringParams[key] !== 'undefined') {
      obj[key] = queryStringParams[key]
    }
    return obj
  }, {})
  Object.assign(urlParams, params)
  return genUrl(url, urlParams)
}
