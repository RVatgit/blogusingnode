const exp=require('express');
const mong = require('mongoose');
const cors= require('cors');
const app= exp();

app.use(cors());
app.use(exp.json());
// app.use(exp.urlencoded({extended:false}));

mong.connect("mongodb://localhost/firstdb",
{   useNewUrlParser: true ,
    useUnifiedTopology: true
})
.then(()=>console.log("connected"))
.catch((err)=>console.log("not connected",err));

app.use('/articles',require('./routes/articles'));
app.use('/add',require('./routes/add'));
app.use('/update',require('./routes/edit'));
app.use('/delete',require('./routes/delete'));
app.listen("4000");