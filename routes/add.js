const exp=require('express');
const router= exp.Router();
const Articles= require('../models/articles');

router.post('/',(req,res)=>{
    const {title,body,author}=req.body;
    const newarticle = new Articles({
        title,
        body,
        author
    });
    newarticle.save()
    .then(res=>console.log("Saved"))
    .catch(err=>console.log("Not saved"));
});

module.exports=router;