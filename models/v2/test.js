const mongoose = require("mongoose")

const testSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    subtitle: {
        type: String,
    }
},{
    timestamps: true
});


module.exports = testSchema;