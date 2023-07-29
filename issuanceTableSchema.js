const issuanceTableSchema = new mongoose.schema
 ({
    users :'string', 
    books:'string', 
    bookId:'objectId', 
    issueDate:'date',
     returnDate:'date',
     penalty:'int'
    });
    module.exports= mongoose.model('issuanceTable',issuanceTableSchema);