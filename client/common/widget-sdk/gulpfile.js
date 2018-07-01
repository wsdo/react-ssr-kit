const gulp = require("gulp")

gulp.task("doc", ()=>{
    const fs = require("fs")
    const jsdoc2md = require("jsdoc-to-markdown")
    const output = jsdoc2md.renderSync({
        files: "./lib/*.js"
    })
    fs.writeFile("./docs/api.md", output)
})