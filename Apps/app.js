const express=require('express');
const cors=require('cors');
const userRouter=require('../Router/userRouter');
const bookRouter=require('../Router/bookRouter');
const authorRouter=require('../Router/authorRouter');
const {connect, disconnect}=require('../DB/db');

const app=express();
//Before anythying connect to database
connect();
// use middleware to form our contract for incoming json payloads ONLY!!
app.use(express.json());
//use middleware for url encoding
app.use(express.urlencoded({extended: true}));
//use middleware to handle cors policy
app.use(cors());



//health point or actuators
app.get('/', (req, res, next)=>{
    res.status(200).json({message: "service is up"});
});

//routers
app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/authors', authorRouter);



//we can handle error or bad url by middleware
app.use((req, res, next)=>{
    const error=new Error('Not Found');
    error.status=404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    })
})



//After all disconnect from database
//disconnect();




module.exports=app;