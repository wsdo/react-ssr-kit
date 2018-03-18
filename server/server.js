const express = require('express')
const ReactSSR = require('react-dom/server')
const serverEntry = require('../dist/server-entry').default
const fs = require('fs')
const path = require('path')
const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'),'utf8')
const app = express()


console.log(serverEntry);

app.use('/public',express.static(path.join(__dirname, '../dist')))
app.get('*',function (req,res) {
    const appString = ReactSSR.renderToString(serverEntry)
    console.log(11,appString);
    
    res.send(template.replace('<!-- app -->', appString))
})

app.listen(3333, function () {
    console.log("server is listening on 3333")
})