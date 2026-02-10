const mongoose = require("mongoose");
const newschema = new mongoose.Schema({
    name :{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    rollno :{
        type:Number,
        require:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("Student",newschema);