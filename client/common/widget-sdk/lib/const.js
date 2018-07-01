const data = {
    get_widget_environment: "widget.getEnvironment",
    widget_getUser: "widget.getUser",
    widget_onClose: "widget.close",
    widget_closeWidget: "widget.closeWidget",
    widget_maximize: "widget.maximize",
    widget_minimize: "widget.minimize",
    widget_onMaximize: "widget.onMaximize",
    widget_onMinimize: "widget.onMinimize",
    socket_sendMessage: "socket.sendMessage",
    on_socket_message: "socket.message",
    on_socket_statusChanged: "socket.statusChanged",
    cctalk_getGroupInfo: "cctalk.getGroupInfo",
    cctalk_getTeacher: "cctalk.getTeacher",
    cctalk_getUsersOnMic: "cctalk.getUsersOnMic",
    widgetService: "//widget-store.hujiang.com"
}

// if (__DEBUG__) {
//     data.widgetService = "//192.168.38.106:9098/"
// }

if (location.hostname.indexOf('dev') === 0 || location.hostname === 'localhost'){
    data.widgetService = "//devwidget-store.hujiang.com"
} else if (location.hostname.indexOf('qa') === 0){
    data.widgetService = "//qawidget-store.hujiang.com"
} else if (location.hostname.indexOf('yz') === 0){
    data.widgetService = "//yzwidget-store.hujiang.com"
}

module.exports = data
