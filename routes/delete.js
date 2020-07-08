const exp=require('express');
const router= exp.Router();
const Articles= require('../models/articles');

router.delete('/:id',(req,res)=>{
    Articles.remove({_id:req.params.id})
    .then(user=>console.log("deleted"))
    .catch(err=>console,log(err));
});

module.exports=router;