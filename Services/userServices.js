const express=require('express');
const {findUser, saveUser}=require('../DB/db');
const userModel=require('../Models/userModel');
const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const {errorTemplate}=require('../Templates/errorTemplate');


//Registration
const registerUser = async(req, res, next)=>{
    console.log('Registering...');
    try{
        //find whether the user exist
        const user=await findUser({email: req.body.email});
        //console.log("till there ok");
        //if user exist
        if(user){
            console.log('reached till here');
            //This status code is very important. Here this is the case of success so if we give any unsuccess 
            //status code then this will give an Error in frontend files
            res.status(206).json({message: "User already exists. Try to login "});
        }
        else{
            const user=new userModel();
            user._id=new mongoose.Types.ObjectId();
            //map our req.body to our userModel
            const newUser=Object.assign(user, req.body);
            //encrypt the password
            const hash=await bcrypt.hash(newUser.password, 10);
            //set the password to the encrypted password
            newUser.password=hash;
            //now save the newUser to the database
            const savedUser=await saveUser(newUser);
            res.status(201).json({
                message: 'Registration successful',
                registeredUser: savedUser
            })
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message);
    }
}


//Login
const loginUser = async(req, res, next)=>{
    try{
        //find the user and return the user
        const loggedUser=await findUser({email: req.body.email});
        //if the user is not found, return response stating "Authentication failed"
        if(!loggedUser){
            res.status(404).json({
                message: "Authentication failed, User is NOT found"
            });
        }
        else{
            //use bcrypt to compare the password
            const result=await bcrypt.compare(req.body.password, loggedUser.password);
            if(result){
                //create a JSON web token     jwt.sign(header, {payload}, secret)
                const token=jwt.sign({user: loggedUser}, process.env.jwt_secret);
                loggedUser.password=null;
                //return response stating Authentication successful, token, logged:true
                res.status(200).json({
                    message: "Logged in successfully",
                    Token: token,
                    Logged: true,
                    Result: loggedUser
                })
            }
            else{
                //response authentication failed
                throw new Error('Authentication failed, User email/password NOT matched');
            }
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message);
    }
}


module.exports={registerUser, loginUser};