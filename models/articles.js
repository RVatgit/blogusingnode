const mong = require('mongoose');
const schema = mong.Schema;

const articleschema = new schema({
    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    }
});

module.exports=mong.model("articles",articleschema);