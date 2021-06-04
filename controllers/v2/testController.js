var testController = {

    index: async(req,res,next) => {
        res.json("v2 get method")
    },

    store: async(req,res,next) => {
        res.json("v2 post method")
    },

    show: async(req,res,next) => {
        res.json("v2 show get method")
    },

    update: async(req,res,next) => {
        res.json("v2 put method")
    },

    destroy: async(req,res,next) => {
        res.json("v2 delete method")
    }
}


module.exports = testController;