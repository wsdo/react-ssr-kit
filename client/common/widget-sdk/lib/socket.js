const CONST = require("./const")
const bridge = require("@hujiang/js-bridge")

const util = require("./util")

/**
 * @module HJWidget/socket
 */

/**
 * @typedef {Object} SocketOptions
 * @property {number} operatorId - 操作者ID
 * @property {module:HJWidget/socket~BUSINESS_TYPE} businessType - 业务类型
 * @property {module:HJWidget/socket~CCTALK_SCENE_TYPE} sceneType - 场景类型
 * @property {number} sceneId - 场景ID
 * @property {string} [widgetKey] - widget实例唯一key
 */

/**
 * @typedef {Object} MessageBody
 * @property {module:HJWidget/socket~BROADCAST_USER_TYPE} userType - 广播消息的对象类型
 * @property {string} tag - 对tag进行发送
 * @property {Array.<number>} users - 对用户进行发送
 * @property {Object} message - 消息内容
 */

/**
 * @typedef {Object} SocketBeginArgs
 * @property {module:HJWidget/socket~INIT_USER_TYPE} userType - 启动socket的时候，需要广播的类型
 * @property {number[]} toUsers - 指定广播的用户id数组
 */

/**
 * business type
 * @readonly
 * @enum {number}
 */
const BUSINESS_TYPE = {
    CCTalk: 1
}

/**
 * cctalk scene type
 * @enum {number}
 * @readonly
 */
const CCTALK_SCENE_TYPE = {
    CHART: 0,
    GROUP_CHART: 1
}

/**
 * 广播的用户类型，在启动widget的时候使用
 * @enum {number}
 * @readonly
 */
const INIT_USER_TYPE = {
    /** 所有用户 */
    all: 1,
    /** 群成员 */
    onMic: 2,
    /** 指定用户 */
    special: 3
}

/**
 * 广播消息时广播目标的类型
 * @enum {number}
 * @readonly
 */
const BROADCAST_USER_TYPE = {
    /** 全部用户 */
    all: 0,
    /** 标签 */
    tag: 1,
    /** 指定用户 */
    special: 2
}

const methods = {};
const methodsAPIMapping = {
    begin: `${CONST.widgetService}/v1/operation/begin`,
    addTag: `${CONST.widgetService}/v1/operation/user/tags/add`,
    removeTag: `${CONST.widgetService}/v1/operation/user/tags/del`,
    end: `${CONST.widgetService}/v1/operation/end`,
    connect: `${CONST.widgetService}/v1/operation/register`
}

const getbridgeEventName = (eventName) => {
    let mapping = {
        message: CONST.on_socket_message,
        statusChanged: CONST.on_socket_statusChanged
    }
    return mapping[eventName]
}


Object.keys(methodsAPIMapping).forEach((key) => {
    let api = methodsAPIMapping[key]
    methods[key] = (args, options) => {
        let body = util.toUnderline(Object.assign({}, options, args))
        return util.fetch(api, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json;chartset=utf-8"
            }
        })
    }
})

const bridgeInvoke = (methodName, param, id, timeout) => {
    param = util.toUnderline(param)
    return bridge.invoke(methodName, param, id, timeout)
}

// /**
//  * @class {Socket}
//  * 
//  */
// class Socket{
//     constructor(options){
//         this.options = options
//     }

//     begin(aras){
//         return methods["begin"](args, options)
//     },

// }

/**
 * 初始化socket对象
 * @param {module:HJWidget/socket~SocketOptions} options - 初始化需要的参数
 * @example
 * const socket = HJWidget.socket({
 *      operatorId: 79779696,
 *      businessType: 1,
 *      sceneType: 1,
 *      sceneId: 9923792,
 *      widgetKey: "6896gsdsds"
 * })
 */
const socket = (options) => {
    options.widgetKey = options.widgetKey || util.getWidgetKey()
    /**
     * @instance
     */
    let instance = {
        /**
         * 开始启动widget实例
         * @param {module:HJWidget/socket~SocketBeginArgs} args 
         * @returns {Promise}
         * @example
         * socket.begin({
         *      userType: HJWidget.socket.INIT_USER_TYPE.onMic
         * }).then(()=>{
         *      
         * })
         * // Or
         * socket.begin({
         *      userType: HJWidget.socket.INIT_USER_TYPE.special,
         *      // for special users
         *      toUsers: [253232, 6467373]
         * })
         */
        begin(args) {
            return methods["begin"](args, options)
        },
        /**
         * 客户端连接socket，发起者不必调用此方法
         * @param {string[]} [tags] - 初始链接的tag，可以不传
         * @returns {Promise}
         * @example
         * socket.connect().then(()=>{
         * 
         * })
         * // or
         * socket.connect(['tag1']).then(()=>{
         * })
         */
        connect(tags) {
            let args = {
                userId: options.operatorId
            }
            if (tags) {
                args.tags = tags
            }
            return methods["connect"](args, options).then(() => {
                instance.connected = true
            })
        },
        /**
         * @typedef TagObject
         * @property {number} [userId] - 要修改的tag的用户ID, 如果没有设置userId，则修改操作者的tags
         * @property {string[]} tags - tag数组
         */

        /**
         * 给当前连接的用户添加tag
         * @param {module:HJWidget/socket~TagObject|string[]} args - tag对象
         * @returns {Promise}
         * @example
         * socket.addTag({
         *      userId: 979699679,
         *      tags: ["tag1", "tag2"]
         * }).then(()=>{
         * 
         * })
         * // or
         * socket.addTag(["tag1", "tag2"]).then(()=>{
         * 
         * })
         */
        addTag(args) {
            if (args.length) {
                args = {
                    tags: args
                }
            }
            if (typeof args.userId === "undefined") {
                args.userId = options.operatorId
            }

            return methods["addTag"](args, options)
        },
        /**
         * 给当前连接的用户移除tag
         * @param {module:HJWidget/socket~TagObject|string[]} args - tag类型
         * @returns {Promise}
         * @example
         * socket.removeTag({
         *      userId: 979699679,
         *      tags: ["tag1", "tag2"]
         * }).then(()=>{
         * 
         * })
         */
        removeTag(args) {
            if (args.length) {
                args = {
                    tags: args
                }
            }
            if (typeof args.user_id === "undefined") {
                aras.user_id = options.operator_id
            }
            return methods["removeTag"](args, options)
        },
        /** 关闭连接
         * @returns {Promise}
         * @example
         * socket.end().then(()=>{
         * 
         * })
         */
        end() {
            return methods["end"](options).then(()=>{
                return bridge.invoke(CONST.widget_closeWidget)
            })
        },
        /**
         * 发送广播消息
         * @param {module:HJWidget/socket~MessageBody} args
         * @returns {Promise} 
         * @example
         * socket.sendMessage({
         *      userType: HJWidget.socket.BROADCAST_USER_TYPE.all,
         *      message:{
         *      // message Object
         *      }
         * }).then(()=>{
         * 
         * })
         * // Or
        * socket.sendMessage({
         *      userType: HJWidget.socket.BROADCAST_USER_TYPE.tag,
         *      tag: 'tag1',
         *      message:{
         *      // message Object
         *      }
         * }).then(()=>{
         * 
         * })
         * // Or
         * socket.sendMessage({
         *      userType: HJWidget.socket.BROADCAST_USER_TYPE.special,
         *      users: [425253, 643267474],
         *      message:{
         *      // message Object
         *      }
         * }).then(()=>{
         * 
         * })
         */
        sendMessage(args) {
            args = Object.assign({}, options, args)
            if (args.userType === BROADCAST_USER_TYPE.all) {
                args.userType = BROADCAST_USER_TYPE.tag
                args.tag = 0
            }
            if(args.message){
                args.message = JSON.stringify(args.message)
            }
            return util.bridgeInvoke(CONST.socket_sendMessage, args)
            // // TODO remove these codes.
            // return util.bridgeInvoke(CONST.socket_sendMessage, {
            //     cmd: 1,
            //     data: args
            // })
        },

        /**
         * 接收消息事件.
         * @event module:HJWidget/socket~message
         * @type {Object} - 接收到的消息
         * @example
         * socket.on("message", (data)=>{
         *      // 参数data就是其他的socket通过sendMessage方法发送过来的。
         * })
         */

        /**
         * 状态变更事件
         * @event module:HJWidget/socket~statusChanged
         * @property {string} status - 状态
         * @property {number} userId -用户ID，哪一个用户出现了网络变化
         * @example
         * socket.on("statusChanged", (data)=>{
         *      // data.status表示当前状态
         *      console.log(data.status)
         * })
         */

        /**
         * @callback EventCallback
         * @param {module:HJWidget/socket~event:message|module:HJWidget/socket~event:statusChanged} e 
         * @listens module:HJWidget/socket~event:message|module:HJWidget/socket~event:statusChanged
         */

        /**
         * 绑定事件
         * @param {string} eventName - 事件名称，可以绑定的值为 message和statusChanged
         * @param {module:HJWidget/socket~EventCallback} callback - 事件回调 
         */
        on(eventName, callback) {
            util.on(getbridgeEventName(eventName), callback, (data)=>{
                return options.widgetKey === data.widgetKey
            })
        },

        /**
         * 绑定一次事件
         * @param {string} eventName - 事件名称，值为 message和statusChanged
         * @param {module:HJWidget/socket~EventCallback} callback 
         */
        once(eventName, callback) {
            util.on(getbridgeEventName(eventName), callback, (data)=>{
                return data.widgetKey === options.widgetKey
            },one)
        },

        /** 
         * 取消绑定事件。
         * @param {string} eventName - 事件名称
         * @param {function} callback - 取消绑定的事件处理函数，此值如果不传，将取消绑定页面上所有的socket对象的事件。
         * @example
         * socket.off("statusChanged")
         */
        off(eventName, callback) {
            util.off(getbridgeEventName(eventName), callback)
        }
    }
    return instance
}

socket.BROADCAST_USER_TYPE = BROADCAST_USER_TYPE
socket.INIT_USER_TYPE = INIT_USER_TYPE
socket.CCTALK_SCENE_TYPE = CCTALK_SCENE_TYPE
socket.BUSINESS_TYPE = BUSINESS_TYPE
module.exports = socket