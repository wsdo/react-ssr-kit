const CONST = require("./const")
const util = require("./util")
/**
 * @module HJWidget/cctalk
 */

module.exports = {

    /**
     * @typedef {Object} GroupInfo
     * @property {number} groupId - 群ID
     * @property {boolean} isLiving - 是否在直播
     */

    /**
     * @typedef UserInfo
     * @property {string} name - 用户名
     * @property {number} id - 用户ID
     * @property {string} avater - 用户头像
     * @property {string} nickName - 昵称
     */

    /**
     * 获取群信息
     * 
     * @returns {Promise} 
     * @resolves {module:HJWidget/cctalk~GroupInfo} 
     * @rejects {Error}
     * @example
     * HJWidget.cctalk.getGroupInfo().then((data)=>{
     * 
     * })
     */
    getGroupInfo(){
        return util.bridgeInvoke(CONST.cctalk_getGroupInfo)
    },

    /**
     * 获取老师信息
     * @returns {Promise}
     * @resolves {module:HJWidget/cctalk~UserInfo}
     * @example
     * HJWidget.cctalk.getTeacher().then((data)=>{
     * 
     * })
     */
    getTeacher(){
        return util.bridgeInvoke(CONST.cctalk_getTeacher)
    },
    /**
     * @returns {Promise}
     * @resolves {Array.<module:HJWidget/cctalk~UserInfo>}
     * @example
     * HJWidget.cctalk.getUsersOnMic((data)=>{
     * 
     * })
     */
    getUsersOnMic(){
        return util.bridgeInvoke(CONST.cctalk_getUsersOnMic)
    }
}