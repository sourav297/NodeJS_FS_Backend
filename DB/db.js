const mongoose=require('mongoose');
const userModel = require('../Models/userModel');
require('dotenv').config();

const connect= async()=>{
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.mongo).then(()=>{
        console.log('MongoDB connection is established and running');
    }).catch((err)=>{
        console.log(`Could not connect to dadabase ${err.message}`);
    })
}

const disconnect=async()=>{
    await mongoose.connection.close();
}

//find by object:{firstName: "", email: "", etc}
const findUser=async(obj)=>{
    return userModel.findOne(obj).exec();
}

const saveUser=async(newUser)=>{
    return await newUser.save();
}


module.exports={connect, disconnect, findUser, saveUser};