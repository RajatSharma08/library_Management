const { router } = require("express");
// const {author} = require ('authorSchema');
// const {books} = require ('booksSchema');
// const {inventory} = require ('inventorySchema');
// const {issuanceTable} = require ('issuanceTableSchema');
// const {userDetails} = require ('userDetailsSchema');


const Route = use(router);
module.exports = router;

//API endpoints for books

router.post('/', booksCRUD.createBook);
router.get('/', booksCRUD.getAllBooks);
router.get('/:id', booksCRUD.getBookById);
router.put('/:id', booksCRUD.updateBook);
router.delete('/:id', booksCRUD.deleteBook);


 //API endpoints for author
 router.post('/', authorCRUD.createAuthor);
 router.get('/', authorCRUD.getAllAuthor);
 router.get('/:id', authorCRUD.getBookAuthor);
 router.put('/:id', authorCRUD.updateAuthor);
 router.delete('/:id', authorCRUD.deleteAuthor);

 //API endpoints for user
 router.post('/', userCRUD.createUser);
 router.get('/', userCRUD.getAllUser);
 router.get('/:id', userCRUD.getUserById);
 router.put('/:id', userCRUD.updateUser);
 router.delete('/:id', userCRUD.deleteUser);

  //API endpoints for issuanceTable
  router.post('/', issuanceCRUD.createRecord);
  router.get('/', issuanceCRUD.getAllRecord);
  router.get('/:id', issuanceCRUD.getBookById);
  router.put('/:id', issuanceCRUD.updateBook);
  router.delete('/:id', issuanceCRUD.deleteBook);

  //API endpoints for inventory
  router.post('/', inventoryCRUD.createRecord);
  router.get('/', inventoryCRUD.getAllUser);
  router.get('/:id', inventoryCRUD.getUserById);
  router.put('/:id', inventoryCRUD.updateUser);
  router.delete('/:id', inventoryCRUD.deleteUser);
 
