const Test = require("../../models/v1/test")

var testController = {

    index: async(req,res,next) => {
        const tests = await Test.find({});

        let object = {
            success : true,
            status_code : 200, 
            message: "Test found successfully!",
            data: tests
        }

        return apiResponse.success(res,object);
    },

    store: async(req,res,next) => {
        res.json("post method")
    },

    show: async(req,res,next) => {
        res.json("show get method")
    },

    update: async(req,res,next) => {
        res.json("put method")
    },

    destroy: async(req,res,next) => {
        res.json("delete method")
    }
}


module.exports = testController;