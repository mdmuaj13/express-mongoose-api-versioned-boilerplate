const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    subtitle: {
        type: String,
    }
},{
    timestamps: true
});

var Test = mongoose.model("Test", testSchema)

module.exports = Test;