//..........................Author Model............................
const mongoose=require('mongoose');

const authorSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    authorWroteBook: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }],
    publisher: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    about: {
        type: String,
        required: true
    }
})

//module.exports = mongoose.model('Collection name/Model name', Schema_of_this_collection);-->THIS IS CORRECT
module.exports = mongoose.model('Author', authorSchema); //Always use this syntax, NOT store the model in another variable

//module.exports=authorModel;
//The above line is giving the error "Schema has not been registered for model 'bookModel'"
//This syntax will not work when we want to perform some relationships among models.