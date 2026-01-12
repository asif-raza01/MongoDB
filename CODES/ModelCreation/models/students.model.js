const mongoose=require('mongoose');

// idea to make schema is to make collection using these schema
const studentSchema=new mongoose.Schema({
    name:String,
    age: Number
})

//this is used to create the collections in mongoDb the collection with name Students gets created plural hojaega khud hi
module.exports=mongoose.model("Student",studentSchema);
