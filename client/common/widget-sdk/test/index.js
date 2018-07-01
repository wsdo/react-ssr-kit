require("./common")
const sdk = require("../")
const assert = require("assert")
describe("common", ()=>{
    it("getEnvironment", function(done){
        sdk.getEnvironment().then((data)=>{
            console.log(data)
            done()
        })
    })
})