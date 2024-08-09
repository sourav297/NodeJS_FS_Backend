const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    noOfPages: {
        type: Number,
        required: true,
    },
    yearPublished: {
        type: Number,
        required: true,
    }
})

const bookModel=mongoose.model('book', bookSchema);

module.exports=bookModel;