const util = require("./util")
const CONST = require("./const")
const socket = require("./socket")
const cctalk = require("./cctalk")

const getbridgeEventName = (eventName) => {
  let mapping = {
    close: CONST.widget_onClose,
    maximize: CONST.widget_onMaximize,
    minimize: CONST.widget_onMinimize
  }
  return mapping[eventName]
}

/**
 * @module HJWidget
 */
module.exports = {
  /**
   * @typedef {Object} EnvironmentInfo
   * @property {number} sceneType - 场景类型
   * @property {number} sceneId - 场景Id
   * @property {number} businessType - 业务类型
   */

  /**
  * 获取当前Widget的环境信息
  * @returns {Promise} 
  * @resolves {module:HJWidget~EnvironmentInfo}
  * @example
  * HJWidget.getEnvironment().then((data)=>{
  *
  * })
  */
  getEnvironment() {
    return util.bridgeInvoke(CONST.get_widget_environment)
  },

  /**
   * 获取当前登陆用户的用户信息
   * @returns {Promise}
   * @resolves {module:HJWidget/cctalk~UserInfo}
   * @example
   * HJWidget.getEnvironment().then((data)=>{
   * 
   * })
   */
  getUser() {
    return util.bridgeInvoke(CONST.widget_getUser)
  },

  /**
   * @returns Promise
   * @example
   * HJWidget.getWidgetInfo("gohwe93523645").then((info)=>{
   * })
   */
  getWidgetInfo() {
    let widgetKey = util.getWidgetKey()
    return util.fetch(`${CONST.widgetService}/v1/widget`, {
      method: 'POST'
    })
  },

  /**
   * 最大化widget窗口
   * @returns Promise
   * @example
   * HJWidget.maximize().then(()=>{
   * 
   * })
   */
  maximize(){
    return util.bridgeInvoke(CONST.widget_maximize)
  },

  /**
   * 最小化widget
   * @returns Promise
   * @example
   * HJWidget.minimize().then(()=>{
   * 
   * })
   */
  minimize(){
    return util.bridgeInvoke(CONST.widget_minimize)
  },

  /**
   * 窗口关闭事件
   * @event module:HJWidget~close
   * @example
   * HJWidget.on("close", ()=>{
   * 
   * })
   */

  /**
   * 窗口最大化事件
   * @event module:HJWidget~maximize
   * @example
   * HJWidget.on("maximize", ()=>{
   * 
   * })
   */

  /**
   * 窗口最小化事件
   * @event module:HJWidget~minimize
   * @example
   * HJWidget.on("minimize", ()=>{
   * 
   * })
   */

  /**
   * @callback EventCallback
   * @param {module:HJWidget~event:close|module:HJWidget~event:maximize|module:HJWidget~event:minimize} e
   * @listens module:HJWidget~event:close|module:HJWidget~event:maximize|module:HJWidget~event:minimize
   */

  /**
   * 绑定事件
   * @param {string} eventName - 事件名，可选值为close
   * @param {module:HJWidget~EventCallback} callback -事件回调
   */
  on(eventName, callback) {
    util.on(getbridgeEventName(eventName), callback, null)
  },

  /**
   * 绑定一次时间
   * @param {string} eventName - 事件名，可选值为close
   * @param {module:HJWidget~EventCallback} callback -事件回调
   */
  once(eventName, callback) {
    util.on(getbridgeEventName(eventName), callback, null, true)
  },

  /**
   * 取消绑定事件
   * @param {string} eventName - 事件名，可选值为close
   * @param {module:HJWidget~EventCallback} callback -事件回调
   */
  off(eventName, callback) {
    util.off(getbridgeEventName(eventName), callback)
  },
  /**
   * socket对象
   * @see {@link module:@hujiang/HJWidget/socket}
   */
  socket,
  /**
   * cctalk 对象 
   * @see {@link module:@hujiang/HJWidget/cctalk}
   */
  cctalk
}