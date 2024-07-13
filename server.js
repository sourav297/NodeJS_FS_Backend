const http=require('http');
require('dotenv').config();

http.createServer().listen(process.env.port, ()=>{
    console.log(`server is running on port ${process.env.port}`);
})