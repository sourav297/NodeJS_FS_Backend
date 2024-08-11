const Book=require('../Models/bookModel');
const mongoose=require('mongoose');

const findAllBooks= async(obj, selectValues)=>{
    return await Book.find(obj).select(selectValues).exec();
}

const findOneBook=async(obj, selectValues)=>{
    return await Book.findOne(obj).select(selectValues).exec();
}

const saveBook=async(newBook)=>{
    return await newBook.save();
}

const updateBook=async(filter, update)=>{
    return await Book.findOneAndUpdate(filter, update).exec();
}

const deleteBook=async(filter)=>{
    return await Book.deleteOne(filter);
}

module.exports={findAllBooks, findOneBook, saveBook, updateBook, deleteBook};