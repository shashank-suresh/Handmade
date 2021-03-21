const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    
    firstname:
    {
        type:String,
        required:true,
        unique:true
    },
    lastname:
    {
        type:String,
        required:true,
        unique:true
    },
    phone:
    {
        type:String,
        required:true,
        unique:true
    },
    email:
    {
        type:String, 
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true
    },
    product:
    {
        type:[String],
        required:true
    }

});

module.exports=mongoose.model("users",userSchema );