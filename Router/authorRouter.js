const {getAuthors, getAuthorById, postAuthor, updateAuthorById, pushBookIntoAuthor, deleteAuthorById}=require('../Services/authorServices');
const express=require('express');
const router=express.Router();
const authorize = require('../Auth/authorization');

//https://localhost:3004/authors

//get All Authors
router.get('/', [authorize, getAuthors]);

//get Author by Id
router.get('/:authorId', [authorize, getAuthorById]);

//post/add new Author to the DB
router.post('/', [authorize, postAuthor]);

//update Author to the DB
router.put('/:authorId', [authorize, updateAuthorById]);

//push books by IDs into Author by AuthorId
//router.put('/:authorId', [authorize, pushBookIntoAuthor]);

//delete Author from the DB
router.delete('/:authorId', authorize, deleteAuthorById);

module.exports=router;