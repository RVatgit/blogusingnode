const exp=require('express');
const router= exp.Router();
const Articles= require('../models/articles');

router.post('/:id',(req,res)=>{
    const article={
        title:req.body.title,
        body:req.body.body,
        author:req.body.author
    }
    Articles.update({_id:req.params.id},article)
    .then(user=>console.log("updated"))
    .catch(err=>console,log(err));
});

module.exports=router;