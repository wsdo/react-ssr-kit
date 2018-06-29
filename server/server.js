const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const app = express()

const isDev = process.env.NODE_ENV === 'development'

if (!isDev) {
  const serverEntry = require('../dist/server-entry').default
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
  app.use('/public', express.static(path.join(__dirname, '../dist')))

  console.log(serverEntry);

  app.get('*', function (req, res) {
    const appString = ReactSSR.renderToString(serverEntry)
    console.log(11, appString);

    res.send(template.replace('<!-- stark -->', appString))
  })
} else {
  const devStatic = require('./util/dev-static')
  devStatic(app)
}

app.listen(3006, function () {
  console.log('====================================')
  console.log('open url view website')
  console.log('====================================')
  console.log('http://localhost:3006')
})
