const mongoose = require('mno')

const   whatsappSchema = mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
});

export default mongoose.model('messageContents',whatsappSchema)