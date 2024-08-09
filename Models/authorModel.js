//..........................Author Model............................
const mongoose=require('mongoose');
const bookModel=require('./bookModel');

const authorSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    authorWroteBook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bookModel',
        required: true
    },
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


const authorModel=mongoose.model('author', authorSchema);

module.exports=authorModel;