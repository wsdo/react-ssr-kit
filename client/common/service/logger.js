// 用法用量：
// 添加host，devlog.hujiang.com到指定日志收集服务器
// 开启debug
// 在 日志收集服务器上看access_log
const log = (msg) => {
  if (typeof __DEBUG__ !== 'undefined' && __DEBUG__) {
    msg = typeof msg === 'string' ? msg : JSON.stringify(msg)
    let img = document.createElement('img')
    img.src = '//devlog.hujiang.com/a.png?msg=' + msg
  }
}

export default {
  log
}
