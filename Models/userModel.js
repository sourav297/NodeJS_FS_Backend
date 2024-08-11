const mongoose=require('mongoose');

const userSchema=new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        firstName:{type: String, required: true},
        lastName:{type: String, required: true},
        address:{type: String},
        city:{type: String, required: true},
        state:{type: String, required: true},
        zipcode:{type: Number, required: true},
        email:{type: String, required:true},
        password:{type: String, required: true}
    }
)

module.exports = mongoose.model('User', userSchema); //ALWAYS USE THIS SYNTAX

//const userModel = mongoose.model('user', userSchema); --.NOT USE THIS
//module.exports=userModel;