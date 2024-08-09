const bookModel=require('../Models/bookModel');
const mongoose=require('mongoose');

const findAllBooks= async(obj, selectValues)=>{
    return await bookModel.find(obj).select(selectValues).exec();
}

const findOneBook=async(obj, selectValues)=>{
    return await bookModel.findOne(obj).select(selectValues).exec();
}

const saveBook=async(newBook)=>{
    return await newBook.save();
}

const updateBook=async(filter, update)=>{
    return await bookModel.findOneAndUpdate(filter, update).exec();
}

const deleteBook=async(filter)=>{
    return await bookModel.deleteOne(filter);
}


module.exports={findAllBooks, findOneBook, saveBook, updateBook, deleteBook};