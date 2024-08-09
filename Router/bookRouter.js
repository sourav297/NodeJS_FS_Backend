const express=require('express');
const router=express.Router();
const {getAllBooks, getAllBooksIds, getBookByIds, postBooks, updateBooks, deleteBooks}=require('../Services/bookServices');


//https://localhost:3004/books
router.get('/', getAllBooks);

//https://localhost:3004/books/books
router.get('/books', getAllBooksIds);

//https://localhost:3004/books/:bookId
router.get('/:bookId', getBookByIds);

//https://localhost:3004/books
router.post('/', postBooks);

//https://localhost:3004/books/:bookId
router.put('/:bookId', updateBooks);

//https://localhost:3004/books/:bookId
router.delete('/:bookId', deleteBooks);

module.exports=router;