require("./common")
const sdk = require("../")
const assert = require("assert")
const CONST = require("../lib/const")

const createSocket = (options = {}) => {
    options = Object.assign({
        operatorId: 685733,
        businessType: 1,
        sceneType: 1,
        sceneId: 3424343,
        widgetKey: "hifsiufncvasng"
    }, options)
    return sdk.socket(options)
}

describe("method", () => {
    it("sendMessage", function (done) {
        let socket = createSocket()
        socket.sendMessage({
            userType: sdk.socket.BROADCAST_USER_TYPE.tag,
            tag: '32244',
            message: "sdgdsdgsd"
        }).then((data) => {
            assert.ok(1, "call success")
            done()
        })
    })
})

describe("events", () => {
    it("on message", function (done) {
        let socket = createSocket()
        setTimeout(function () {
            HJApp.invokeFromNative(CONST.on_socket_message, {
                widgetKey: 'hifsiufncvasng',
                data: "asgdshfdfgd"
            })
        }, 100);
        socket.on("message", (data) => {
            assert.ok(1, "message event fired")
            done()
        })
    })

    it("message: more than one instance", function(done){
        let socket1 = createSocket({
            widgetKey:"widget_key1"
        })

        let socket2 = createSocket({
            widgetKey: "widget_key2"
        })

        setTimeout(function() {
            HJApp.invokeFromNative(CONST.on_socket_message, {
                widgetKey:"widget_key1",
                message: "message 1"
            })
        }, 50);
        setTimeout(function() {
            HJApp.invokeFromNative(CONST.on_socket_message, {
                widgetKey:"widget_key2",
                message:"message 2"
            })
        }, 600);

        socket1.on("message", (data)=>{
            assert.deepEqual(data, {
                widgetKey:"widget_key1",
                message: "message 1"
            })
        })

        socket2.on("message", (data)=>{
            assert.deepEqual(data, {
                widgetKey:"widget_key2",
                message:"message 2"
            })
        })

        setTimeout(function() {
            done()
        }, 600);
    })

    it("statusChanged", function(done){
        let socket = createSocket({
            widgetKey:"widget_key1"
        })
        setTimeout(function() {
            HJApp.invokeFromNative(CONST.on_socket_statusChanged, {
                widgetKey: "widget_key1",
                status: "online"
            })
        }, 50);
        socket.on("statusChanged", (data)=>{
            assert.deepEqual(data, {
                widgetKey: "widget_key1",
                status: "online"
            })
            done()
        })
    })
})