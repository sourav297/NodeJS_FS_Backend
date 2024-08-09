const { default: mongoose } = require('mongoose');
const {findAllBooks, findOneBook, saveBook, updateBook, deleteBook}=require('../DB/bookDB');
const bookModel = require('../Models/bookModel');
const errorTemplate=require('../Templates/errorTemplate');
const successTemplate=require('../Templates/successTemplate');
const messages=require('../message/messages');

//getAllBooks
const getAllBooks=async(req, res)=>{
    try{
        const books=await findAllBooks({}, '-__v');
        res.status(200).json({
            message: messages.books_found,
            Result: books
        });
    }
    catch(err){
        return errorTemplate(res, err, messages.book_not_found, 500);
    }
}


//getAllBooksIds
const getAllBooksIds=async(req, res)=>{
    try{
        const books=await findAllBooks({}, '_id, title');
        console.log(books);
        return successTemplate(res, books, messages.books_found, 200);
    }
    catch(err){
        return errorTemplate(res, err, messages.book_not_found, 500);
    }
}


//getBookByIds
const getBookByIds=async(req, res)=>{
    try{
        const book=await findOneBook({_id: req.params.bookId}, '-__v');
        if(!book){
            throw new Error(messages.book_not_found);
        }
        else{
            return successTemplate(res, book, messages.book_found, 200);
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message, 500);
    }
}


//postBooks
const postBooks=async(req, res)=>{
    try{
        let bookStub=new bookModel();
        bookStub=Object.assign(bookStub, req.body);
        const book=await findOneBook(bookStub);
        if(book){
            return new Error(messages.book_cataloged);
        }
        else{
            let newBook=new bookModel();
            newBook._id=new mongoose.Types.ObjectId();
            newBook=Object.assign(newBook, req.body);
            const savedBook=await saveBook(newBook);
            return successTemplate(res, savedBook, messages.book_saved, 201);
        }
    }
    catch(err){
        return errorTemplate(res, err, err.message, 500);
    }
}


//updateBooks
const updateBooks=async(req, res)=>{
    try{
        let book=new bookModel();
        book=Object.assign(book, req.body);
        const updatedBook=await updateBook({_id: req.params.bookId}, book);
        console.log(updatedBook);
        
        return successTemplate(res, updatedBook, messages.book_updated, 201);
    }
    catch(err){
        return errorTemplate(res, err, messages.book_not_updated, 500);
    }
}


//deleteBooks
const deleteBooks=async(req, res)=>{
    try{
        const deletedBook=await deleteBook({_id: req.params.bookId});
        return successTemplate(res, deletedBook, messages.book_deleted, 200);
    }
    catch(err){
        return errorTemplate(res, err, messages.book_not_deleted, 500);
    }
}


module.exports={getAllBooks, getAllBooksIds, getBookByIds, postBooks, updateBooks, deleteBooks};