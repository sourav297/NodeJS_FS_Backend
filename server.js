const http=require('http');
require('dotenv').config();
const app=require('./Apps/app');

http.createServer(app).listen(process.env.port, ()=>{
    console.log(`server is running on port ${process.env.port}`);
});