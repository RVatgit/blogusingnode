import React,{useState,useEffect} from 'react'
import axios from "axios";
const Edit = (data) => {
    const [title ,settit]=useState('')
    const [art,setart]=useState('')
    const [aut ,setaut]=useState('')
    
    const change = e=>{
        e.preventDefault();
        const article={
            title:title,
            body:art,
            author:aut 
        }
        settit("")
        setart("")
        setaut("")
        console.log(data.match.params.id);
        axios.post('../update/'+data.match.params.id,article)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
    useEffect(()=>{
        console.log(data.match.params.id);
        axios.get('../articles/'+data.match.params.id)
         .then(res=>[settit(res.data.title),setart(res.data.body),setaut(res.data.author)])
         .catch(err=>console.log (err));
    },[]);
    return (
            <form className="container" encType="multipart/form-data" onSubmit={change}>
                <div className="form-group">
                <label >Title</label>
                <input type="text" value={title} onChange={e=>settit(e.target.value)} className="form-control" name="title" placeholder="Title"/>
                </div>
                <div className="form-group">
                <label >Author</label>
                <input type="text" value={aut}  onChange={e=>setaut(e.target.value)} className="form-control" name="aut" placeholder="Author"/>
                </div>
                <div className="form-group">
                <label >Body</label>
                <textarea rows="7" value={art} onChange={e=>setart(e.target.value)} className="form-control" name="art" placeholder="Body"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
    )
};

export default  Edit;