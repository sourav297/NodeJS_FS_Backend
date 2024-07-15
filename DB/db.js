const mongoose=require('mongoose');
require('dotenv').config();

const connect= async()=>{
    await mongoose.connect(process.env.mongo).then(()=>{
        console.log('MongoDB is up and running');
    }).catch((err)=>{
        console.log(`Could not connect to dadabase ${err.message}`);
    })
}


module.exports={connect}