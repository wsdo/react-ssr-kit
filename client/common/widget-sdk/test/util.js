const util = require("../lib/util")
const assert = require("assert")

describe("util", () => {
    it("toCamel:basic", () => {
        let obj = {
            name_test_camel: 'name_test_camel'
        }
        assert.deepEqual(util.toCamel(obj), {
            nameTestCamel: 'name_test_camel'
        })
    })
    it("toCamel:Object", () => {
        let obj = {
            nick_name: "ssss",
            test_users: {
                name_test_camel: 'dfgsgas'
            },
            string: "test_users",
            arr: ["test_users"],
            test_arr: [{
                name_test_camel: "name_test_camel"
            }, "name_test_camel"]
        }
        assert.deepEqual(util.toCamel(obj), {
            nickName: "ssss",
            testUsers: {
                nameTestCamel: 'dfgsgas'
            },
            string: "test_users",
            arr: ["test_users"],
            testArr: [{
                nameTestCamel: "name_test_camel"
            }, "name_test_camel"]
        })
    })

    it("toUnderline:basic", () => {
        let obj = {
            nameTestCamel: 'name_test_camel'
        }
        assert.deepEqual(util.toUnderline(obj), {
            name_test_camel: 'name_test_camel'
        })
    })

    it("toUnderline:object", ()=>{
        let obj = {
            nickName: "ssss",
            testUsers: {
                nameTestCamel: 'dfgsgas'
            },
            string: "test_users",
            arr: ["test_users"],
            testArr: [{
                nameTestCamel: "name_test_camel"
            }, "name_test_camel"]
        }
        assert.deepEqual(util.toUnderline(obj), {
            nick_name: "ssss",
            test_users: {
                name_test_camel: 'dfgsgas'
            },
            string: "test_users",
            arr: ["test_users"],
            test_arr: [{
                name_test_camel: "name_test_camel"
            }, "name_test_camel"]
        }, "correct")
    })
})