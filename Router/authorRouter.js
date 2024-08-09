const {getAuthors, getAuthorById, postAuthor, updateAuthorById, deleteAuthorById}=require('../Services/authorServices');
const express=require('express');
const router=express.Router();

//https://localhost:3004/authors

//get All Authors
router.get('/', getAuthors);

//get Author by Id
router.get('/:authorId', getAuthorById);

//post/add new Author to the DB
router.post('/', postAuthor);

//update Author to the DB
router.put('/:authorId', updateAuthorById);

//delete Author from the DB
router.delete('/:authorId', deleteAuthorById);

module.exports=router;