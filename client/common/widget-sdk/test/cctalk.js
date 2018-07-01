require("./common")
const assert = require("assert")
const sdk = require("../")

describe("cctalk", ()=>{
    it("getGroupInfo", (done)=>{
        sdk.cctalk.getGroupInfo().then((data)=>{
            assert.ok(true, "success")
            done()
        })
    })

    it("getTeacher", (done)=>{
        sdk.cctalk.getTeacher().then((data)=>{
            assert.ok(true, "success")
            done()
        })
    })

    it("getUsersOnMic", (done)=>{
        sdk.cctalk.getUsersOnMic().then((data)=>{
            assert.ok(true, "success")
            done()
        })
    })
})