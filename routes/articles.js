const exp=require('express');
const router= exp.Router();
const Articles= require('../models/articles');


router.get('/',(req,res)=>{
    Articles.find()
    .then(article=>{
        res.json(article);
    })
    .catch(err=>console.log("error in fetching"));
});

router.get('/:id',(req,res)=>{
    Articles.findById(req.params.id)
    .then(article=>{
        res.json(article);
    })
    .catch(err=>console.log("error in fetching+++id",req.params.id));
});

module.exports=router;