const axios = require('axios')
const path = require('path')
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const proxy = require('http-proxy-middleware')
const ReactDOMServer = require('react-dom/server')

// const serverRender = require('./server-render')

const serverConfig = require('../../build/webpack.config.server')

const getTemplate = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:8888/public/index.html')
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    })
}

const NativeModule = require('module')
const vm = require('vm')

// `(function(exports, require, module, __finename, __dirname){ ...bundle code })`
// const getModuleFromString = (bundle, filename) => {
//     const m = { exports: {} }
//     const wrapper = NativeModule.wrap(bundle)
//     const script = new vm.Script(wrapper, {
//         filename: filename,
//         displayErrors: true,
//     })
//     const result = script.runInThisContext()
//     result.call(m.exports, m.exports, require, m)
//     return m
// }

const Module = module.constructor

const mfs = new MemoryFs
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
let serverBundle
serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(warn => console.warn(warn))

    const bundlePath = path.join(
        serverConfig.output.path,
        serverConfig.output.filename
    )
    const bundle = mfs.readFileSync(bundlePath, 'utf-8')
    // const m = getModuleFromString(bundle, 'server-entry.js')
    const m = new Module()
    m._compile(bundle)
    serverBundle = m.default
})

module.exports = function (app) {

    app.use('/public', proxy({
        target: 'http://localhost:8888'
    }))

    app.get('*', function (req, res, next) {
        if (!serverBundle) {
            return res.send('waiting for compile, refresh later')
        }
        getTemplate().then(template => {
            const appString = ReactDOMServer.renderToString(serverBundle)
                console.log(11, appString);

                res.send(template.replace('<!-- app -->', appString))
            // return serverRender(serverBundle, template, req, res)
        })
    })

}
