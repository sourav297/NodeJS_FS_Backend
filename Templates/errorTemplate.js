const errorTemplate=(res, err, message)=>{
    console.log(message);
    return res.status(501).json(
        {
            error:{
                message: err.message,
                status: err.status
            }
        }
    );
}

module.exports={errorTemplate};