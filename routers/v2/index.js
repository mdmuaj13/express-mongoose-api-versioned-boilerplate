const route = require("express").Router();
const testRouter = require("./testRouter")

route.use("/tests", testRouter);

module.exports = route;