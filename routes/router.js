const express=require('express')
const route=express.Router()
const Register=require('../models/model')
const mongodb=require('../db/database')


route.get('/',(req,res)=>{
    res.render('index')
})

route.get('/login',(req,res)=>{
    res.render('login')
})

route.get('/signup',(req,res)=>{
    res.render('signup')
})

route.post('/signup',async(req,res)=>{
    try{
        const password=req.body.password
        const cpassword=req.body.cpassword
        if(password===cpassword){
            const data=new Register({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cpassword:req.body.cpassword
            })
            const saveData=await data.save();
            //re.status(201).render('index')
            res.redirect('/login')
        }else{
            res.send("Please enter the same password")
        }
    }catch(error){
        res.status(400).send(error)
    }
    
})

route.post('/login',async(req,res)=>{
    try{
        const email=req.body.email 
        const password=req.body.password 
        //console.log(`${email} and password ${password}`)
        const userEmail =await Register.findOne({email:email})
        if(userEmail.password===password){
            // res.status(201).render('index');
         res.send(userEmail)
            
        }else{
            res.send("Entered password is wrong")
        }
        
        //res.send(userEmail.password)   to get password only
        console.log(userEmail)
    }catch(error){
        res.status(400).send("Invalid email")
    }
})


module.exports=route;