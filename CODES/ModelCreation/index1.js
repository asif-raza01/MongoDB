const mongoose=require('mongoose');
require("dotenv").config();
const Student=require("./models/students.model.js");
const Address=require("./models/address.model.js");

(async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        const add=await Address.create({line:"Thokar_5",city:"Delhi",country:"India"});
        const student=await Student.create({name:"Asif",age:"23",address:add._id})
        console.log(add);
        console.log(student)
    }catch(err){
        console.log("Mongo Error",err)
    }finally{
        await mongoose.disconnect();
        console.log("Disconnected")
    }
})();