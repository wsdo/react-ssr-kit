const express = require('express')
const ReactSSR = require('react-dom/server')
const fs = require('fs')
const path = require('path')
const app = express()

const serverEntry = require('../dist/server-entry').default
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8')
// 设置public加在的静态目录
app.use('/public', express.static(path.join(__dirname, '../dist')))
app.get('*', function (req, res) {
  const appString = ReactSSR.renderToString(serverEntry)
  res.send(template.replace('<!-- stark -->', appString))
})

app.listen(3006, function () {
  console.log('====================================')
  console.log('open url view website')
  console.log('====================================')
  console.log("http://localhost:3006")
})
