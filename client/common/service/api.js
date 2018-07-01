import fetch from 'isomorphic-fetch'
import queryString from 'query-string'

import { HTTP_STATUS, COMMON_STATUS } from 'consts/statusCode'
import { genUrl, encodeParam } from './url'

const METHOD_GET = 'GET'
const METHOD_POST = 'POST'

const commonFetch = (api, config = {}) => {
  return fetch(api, config)
}


export async function fetchJson(api, config, apiCfg) {
  const COMMON_ERROR_MESSAGE = '出错了，请稍后再试...'
  try {
    let res = await commonFetch(api, config)
    if (res.status === HTTP_STATUS.AUTHENTICATE) {
      return Promise.reject({ status: COMMON_STATUS.AUTHENTICATE, data: null, message: '认证错误' })
    } else if (res.status === HTTP_STATUS.CLIENT_ERROR) {
      return Promise.reject({ status: COMMON_STATUS.CLIENT_ERROR, data: null, message: COMMON_ERROR_MESSAGE })
    } else if (res.status === HTTP_STATUS.SERVER_ERROR) {
      return Promise.reject({ status: COMMON_STATUS.SERVER_ERROR, data: null, message: COMMON_ERROR_MESSAGE })
    } else if (res.status !== 200) {
      // if (!navigator.onLine) {
      //   return Promise.reject({ status: res.status, data: null, message: '网络无法连接' })
      // }
      return Promise.reject({ status: res.status, data: null, message: COMMON_ERROR_MESSAGE })
    }

    res = await res.json()
    res = res || { status: COMMON_STATUS.RESPONSE_IS_EMPTY, message: COMMON_ERROR_MESSAGE }

    if (res.status !== 0) {
      return Promise.reject({ status: res.status, data: res.data, message: res.message, serverTime: res.time })
    }

    // return apiCfg && apiCfg.serverTime ? Promise.resolve({ ...res.data, serverTime: res.time }) : Promise.resolve(res.data)
    return Promise.resolve(res)
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      console.error(e)
    }
    return Promise.reject({ status: COMMON_STATUS.EXCEPTION, message: e.message })
  }
}

export const fetchApi = (url, params, options) => {
  let cfg = {
    method: METHOD_GET,
    credentials: 'same-origin'
  };
  let thisParams = { ...params }
  if (!thisParams['_timestamp']) {
    thisParams['_timestamp'] = Date.now()
  }
  let fetchUrl = genUrl(url, thisParams)
  return fetchJson(fetchUrl, Object.assign({}, cfg, options))
}

export const postApi = (url, data, options) => {
  let cfg = {
    method: METHOD_POST,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetchJson(url, Object.assign({}, cfg, options))
}

export const postFormData = (url, data, options) => {
  let cfg = {
    method: METHOD_POST,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodeParam(data)
  }
  return fetchJson(url, Object.assign({}, cfg, options))
}


export const getFEAuthParams = () => {
  const keys = ['orgId', 'lessonId', 'classId', 'paperId']
  const queryStringParams = queryString.parse(window.location.search)
  let urlParams = keys.reduce((obj, key) => {
    if (typeof queryStringParams[key] !== 'undefined') {
      obj[key] = queryStringParams[key]
    }
    return obj
  }, {})
  return urlParams
}
export const getFEAuthHeader = () => {
  const queryStringParams = queryString.parse(window.location.search)
  const key = queryStringParams.key
  let header = {}
  if (key) {
    header = queryString.parse(key)
  }
  return header
}
export const getFEAuthUrl = (url) => {
  const queryStringParams = queryString.parse(window.location.search)
  let ret = url
  if (queryStringParams.key && url.indexOf('/webapi/gls/v3/') === 0) {
    ret = ret.replace('/webapi/gls/v3/', '/webapi/gls/v4/')
  }
  return ret
}

export const feAuthFetchApi = (url, params) => {
  const feAuthParams = getFEAuthParams()
  const header = getFEAuthHeader()

  return fetchApi(getFEAuthUrl(url), Object.assign({}, feAuthParams, params), { headers: header })
}

export const feAuthPostApi = (url, params) => {
  const feAuthParams = getFEAuthParams()
  const header = getFEAuthHeader()
  let apiUrl = genUrl(getFEAuthUrl(url), feAuthParams)
  return postApi(apiUrl, params, {
    headers: {
      ...header,
      'Content-Type': 'application/json'
    }
  })
}
