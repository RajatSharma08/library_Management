const booksSchema = new mongoose.schema 
({
 name : 'string',
 author : 'string', 
 isbnNo : 'int', 
 price : 'float', 
 photo :'image'
});

module.exports= mongoose.model('books',booksSchema);