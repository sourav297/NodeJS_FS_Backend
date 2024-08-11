const Author=require('../Models/authorModel');

const saveAuthor = async(newAuthor)=>{
    return await newAuthor.save();
}

//.select('-__v) means everything will be selected except __v
const findAuthor = async(obj)=>{
    return await Author.find(obj).populate(path='authorWroteBook', select='-__v').select('-__v').exec();
}

const findAuthorById = async(obj) =>{
    return await Author.findOne(obj).populate(path='authorWroteBook', select="-__v").exec();
}

const updateAuthor = async (filter, update) =>{
    return await Author.updateOne(filter, update, {new: true}).exec();
}

const deleteAuthor = async (obj) =>{
    return await Author.deleteOne(obj).exec();
}

module.exports = {saveAuthor, findAuthor, findAuthorById, updateAuthor, deleteAuthor};