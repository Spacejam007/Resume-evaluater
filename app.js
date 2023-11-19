const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs')
const mongoose = require('mongoose');
const Company = require('./models/employer')
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use(express.static(__dirname+'/'))
app.use(express.urlencoded({extended:true}));


mongoose.connect('mongodb://127.0.0.1:27017/resume')
.then(()=>{
    console.log("Successfully connected to MONGODB!!")
})
.catch((err)=>{
    console.log("Not able to connect with Mongodb!")
    console.log(err)
});



app.get('/',(req,res)=>{
    res.send("YOHO")
});

app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('/home/employer',(req,res)=>{
    res.render('employer')
});

app.get('/home/employee',(req,res)=>{
    res.render('employee')
})

//to create a job
app.post('/home/employer',async(req,res)=>{
    const company = new Company(req.body.job)
    await company.save();
    res.render('employee',{company})
})

app.get('/home/employeeapply',(req,res)=>{
    res.render('employeeapply')
})

//finding data
app.get('/home/resume',(req,res)=>{
    
    res.render('resume')
})




app.listen(3000,()=>{
    console.log("Running on server 3000")
})

