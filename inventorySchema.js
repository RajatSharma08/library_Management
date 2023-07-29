const inventorySchema = new mongoose.schema 
({
    books: 'string',
    bookId:'objectId',
    quantity:'int',
    price: 'int'
});
module.exports= mongoose.model('inventory',inventorySchema);