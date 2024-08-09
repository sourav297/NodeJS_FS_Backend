
const { findAuthor, findAuthorById, saveAuthor, updateAuthor, deleteAuthor } = require('../DB/authorDB');
const authorModel=require('../Models/authorModel');
const mongoose=require('mongoose');
const successTemplate = require('../Templates/successTemplate');
const messages = require('../message/messages');
const errorTemplate = require('../Templates/errorTemplate');

const getAuthors=async(req, res)=>{
    try{
        const authors=await findAuthor({});
        if(authors.length>0){
            return successTemplate(res, authors, messages.authors_found, 200);
        }
        else{
            return successTemplate(res, authors, messages.no_authors_found, 206);
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message, 500);
    }
}


const getAuthorById = async (req, res)=>{
    try{
        const Result=await findAuthorById({_id: req.params.authorId});
        if(Result.length>0){
            return successTemplate(res, Result, messages.author_found, 200);
        }
        else{
            return successTemplate(res, Result, messages.no_author_found, 206);
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message, 501);
    }
}


const postAuthor = async (req, res)=>{
    console.log('....................This is inside POST Author section in authorServices................');
    //console.log(res);  //See what is going by response to the frontend from the backend
    try{
        const author=await findAuthorById({
            name: req.body.name,
            authorWroteBook: req.body.bookId
        });
        if(author){
            throw new Error(messages.author_exist);
        }
        else{
            let newAuthor = new authorModel();
            newAuthor._id = new mongoose.Types.ObjectId();
            newAuthor=Object.assign(newAuthor, req.body);
            const addedAuthor = await saveAuthor(newAuthor);
            return successTemplate(res, addedAuthor, messages.author_saved, 200);
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message, 502);
    }
}


const updateAuthorById = async(req, res)=>{
    try {
        let author=new authorModel();
        author=Object.assign(author, req.body);
        const Result = await updateAuthor({_id: req.params.authorId}, author);
        return successTemplate(res, Result, messages.author_updated, 200);
    }
    catch(err){
        return errorTemplate(res, err, err.message, 503);
    }
}


const deleteAuthorById = async(req, res)=>{
    try {
       const Result = await deleteAuthor({_id: req.params.authorId});
       return successTemplate(res, Result, messages.author_deleted, 203); 
    }
    catch(err){
        return errorTemplate(res, err, err.message, 504);
    }
}



module.exports={getAuthors, getAuthorById, postAuthor, updateAuthorById, deleteAuthorById};