const express =require('express');
const router =express.Router();
const Users= require('../models/users');
const Buyers= require('../models/buyers');
// const bcrypt=require('bcrypt');

router.get('/', (req,res)=>{
    res.send("Please use /api/users or /api/buyers ");
    res.render()
});

//to get all users
router.get('/users', async function (req, res ) {
    res.send(await Users.find({}))
});

router.get('/buyers', async function (req, res ) {
    res.send(await Buyers.find({}))
});


//login
router.get('/users/login',async (req,res)=>{
    if (req.query.password=="")
    {
        console.log("User not found. Please type password correctly")
        
    }
    else
    {
        res.send(await Users.findOne({email:req.query.email,password:req.query.password}))
    }
    
})


router.get('/buyers/login',async (req,res)=>{
    if (req.query.password=="")
    {
        console.log("User not found. Please type password correctly")
        
    }
    else
    {
        res.send(await Buyers.findOne({email:req.query.email,password:req.query.password}))
    }
    
})


// router.get('/users/login',async (req,res)=>{
    
//     res.send(await Users.findOne({email:req.query.mail,password:req.query.password}))

//     if(user)
//     {
//         console.log("User found")
//     }
//     else
//     {
//         return res.json({
//                     status:'error',
//                     error:'Users does not exist'
//                 })
//     }
    
// })

//signup
router.post('/users/signup', async(req, res)=>{
    
    res.send(await(Users.create(req.body)))

    
    // const{fname,lname,emailid,pass,phone}= req.body
    // const password=await bcrypt.hash(pass,10)
    // if(password.length<3)
    // {
    //     return res.json({
    //         status:'error',
    //         error:'Password too small. Must be atleats 4 charachters'
    //     })
    // }
    

    // try{
    //     await Users.create({fname,lname,emailid,pass,phone})
    //     console.log("Signed-up Successfully!!")

    // }catch(error){
    //     if(error.code===11000) 
    //     {
    //         return res.json({status:'error',error:'Username alredy exists'})
    //     }
    // }
    // throw error


});

// router.post('/users/products', async(req, res)=>{
//     res.send(await(Users.findOneAndUpdate(
//         {email:req.body.email}
//         ,{$push:
//         {
//             product:req.body.product
//         }})))

// });


router.post('/users/products', async(req, res)=>{
    res.send(await(Users.findOneAndUpdate(
        {email:req.body.email}
        ,{$push:
        {
            product:req.body.product
        }})))

});

// router.get('/buyers/products', async(req, res)=>{
    
//     res.send(await(Users.find({product:req.body.product.forEach(element => {
//         console.log(element);
        
//     })})))})
    

router.post('/buyers/signup', async(req, res)=>{
    
    res.send(await(Buyers.create(req.body)))

});



module.exports=router;