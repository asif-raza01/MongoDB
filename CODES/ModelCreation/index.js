const mongoose=require('mongoose');
require("dotenv").config();
const Student=require("./models/students.model.js");

(async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        // console.log("Connection has been established")
        // //insert records
        // const student=await Student.insertOne({name:"Abdullah",age:25})
        // console.log(student)
        // //delete multiple recoords;
        // const delObj=await Student.deleteMany({});
        // //now to insert many at atime you can pass array of objects simple
        // const students=await Student.insertMany([{name:"Asif",age:23},{name:"Yusuf",age:22}]);
        // console.log(students)
        const count=await Student.countDocuments();
        console.log(count)
        
    }catch(err){
        console.log("Mongo Error",err)
    }finally{
        await mongoose.disconnect();
        console.log("Disconnected")
    }
})();