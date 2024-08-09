const authorModel=require('../Models/authorModel');
const mongoose=require('mongoose');

const saveAuthor = async(newAuthor)=>{
    return await newAuthor.save();
}

//.select('-__v) means everything will be selected except __v
const findAuthor = async(obj)=>{
    return await authorModel.find(obj).populate('authorWroteBook').select('-__v').exec();
}

const findAuthorById = async(obj) =>{
    return await authorModel.findOne(obj).populate(path='authorWroteBook', select="-__v").exec();
}

const updateAuthor = async (filter, update) =>{
    return await authorModel.updateOne(filter, update, {new: true}).exec();
}

const deleteAuthor = async (obj) =>{
    return await authorModel.deleteOne(obj).exec();
}

module.exports={saveAuthor, findAuthor, findAuthorById, updateAuthor, deleteAuthor};