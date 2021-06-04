const testRouter = require("express").Router();
const testController = require("../../controllers/v1/testController")


testRouter.route("/")
    .get(testController.index)
    .post(testController.index)


testRouter.route("/:testId")
    .get(testController.show)
    .put(testController.update)
    .delete(testController.destroy)


module.exports = testRouter;