const express=require('express');
const router=express.Router();
const {getAllBooks, getAllBooksIds, getBookByIds, postBooks, updateBooks, deleteBooks}=require('../Services/bookServices');
const authorize = require('../Auth/authorization');


//https://localhost:3004/books
router.get('/', authorize, getAllBooks);

//https://localhost:3004/books/books
router.get('/books', [authorize, getAllBooksIds]);

//https://localhost:3004/books/:bookId
router.get('/:bookId', authorize, getBookByIds);

//https://localhost:3004/books
router.post('/', [authorize, postBooks]);

//https://localhost:3004/books/:bookId
router.put('/:bookId', authorize, updateBooks);

//https://localhost:3004/books/:bookId
router.delete('/:bookId', authorize, deleteBooks);

module.exports=router;