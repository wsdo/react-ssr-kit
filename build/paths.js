const path = require('path')
const PATH_ROOT = path.resolve(__dirname, '..')
const PATH_SRC = `${PATH_ROOT}/client`
const PATH_DIST = `${PATH_ROOT}/dist`
const PATH_PKG = `${PATH_ROOT}/package.json`

export default {
  PATH_ROOT,
  PATH_SRC,
  PATH_DIST,
  PATH_PKG,
  PATH_NODE_MODULES: `${PATH_ROOT}/node_modules`
}
