export const isHJApp = () => {
  let res = false
  if (window.HJSDK && window.HJSDK.isContainer()) {
    res = true
  }
  return res
}

export const isHjIosApp = () => {
  return isHJApp() && /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export const getLoginUrl = () => {
  let url = 'pass.hujiang.com/?url=' + encodeURIComponent(window.location.href)
  if (window.location.hostname.indexOf('qa') === 0 || window.location.hostname.indexOf('dev') === 0
    || window.location.hostname === 'localhost'
  ) {
    url = 'qa' + url
  }
  url = '//' + url
  return url
}

// 题目序号小于10时添加0
export const paddingQuesNo = (no) => {
  return no < 10 ? '0' + no : '' + no
}

// 如果题干处理后长度小于5，输入框和题干显示在同一行
const MAX_INLINE_LENGTH = 5

export const isInline = (question) => {
  let questionBody = question.questionBody ? question.questionBody.replace('[]', '').trim() : ''
  if (
    !question.audioContext
    && !question.imageContext
    && questionBody.length < MAX_INLINE_LENGTH
    && questionBody.indexOf('(') === 0
  ) {
    return true
  }
  return false
}
export const isWeixin = () => {
  return /MicroMessenger/i.test(navigator.userAgent)
}

export function HTML2Text(htmlStr = '') {
  if (!htmlStr) {
    return htmlStr
  }
  return htmlStr.replace(/<[^>]*>/g, '').trim().replace(/&nbsp;/g, ' ')
}
export function HTML2TextExceptImg(htmlStr = '') {
  if (!htmlStr) {
    return htmlStr
  }
  return htmlStr.replace(/<[^(>|img)]*>/g, '').trim().replace(/&nbsp;/g, ' ')
}
