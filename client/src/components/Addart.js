import React,{useState} from 'react'
import axios from "axios";
const Addart = () => {
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
        axios.post('/add',article)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }
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

export default Addart;
