const mongoose=require('mongoose');

const buyerSchema=mongoose.Schema({
    
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
    }

});

module.exports=mongoose.model("buyers",buyerSchema );