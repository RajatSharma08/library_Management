const userDetailsSchema = new mongoose.schema 
({
    name:'string',
    userId :'objectId', 
    email:'string'
});
module.exports= mongoose.model('user',userDetailsSchema);