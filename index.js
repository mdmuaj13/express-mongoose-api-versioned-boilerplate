const express = require("express")
const morgan = require("morgan") 
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")


const port = process.env.PORT || 3000;
require("./utils/apiResponse");

const routerV1 = require("./routers/v1/index")
const routerV2 = require("./routers/v2/index")


const app = express()
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))


mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

var db = mongoose.connection;

if (!db) {
  console.log("Error mongo connection");
} else {
  console.log("MongoDB connection established");
}


// api register here
app.use("/api/v1", routerV1);
app.use("/api/v2", routerV2);



app.use("/",(req,res,next) => {
    res.json("server running")
})


app.listen(port, () => {
    console.log(`Listening on ${port} port`);
})