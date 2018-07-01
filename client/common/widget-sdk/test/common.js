global.window = {}
global.HJApp = {}
global.__DEBUG__ = true
window.HJApp = HJApp
HJApp.invoke = (method, param, successKey, failKey, id) => {
    setTimeout(() => {
        HJApp.invokeFromNative(successKey, {
            id,
            param,
            method
        })
    }, 50)
}