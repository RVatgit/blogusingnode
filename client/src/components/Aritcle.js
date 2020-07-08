import React, { useState } from 'react';
import spin from "../364.gif";
import {Link} from "react-router-dom"
import Axios from 'axios';
const Article=({data})=> {
    const [art,setart]=useState('');
    const deleteart= id=>{
        console.log(id);
        Axios.delete('/delete/'+id)
        .then(res=>alert("Deleted"))
        .catch(err=>console.log(err))
        setart(art.forEach(e=>(e._id!==id)))
    }
    return (
        <div className="container">
             {!data.length ? <img className="container d-block mx-auto" width="3rem" src={spin} alt="loading...."/>:<div>
                <h1>welcome to  the Aricle</h1>
                {data.map((art,ind)=>(
                        <div key={art._id}className="bg-dark mt-5 text-white">
                        <h3> <Link to={{pathname:'/'+art._id}}>{art.title}</Link> </h3>
                        <p className="bg-secondary"> {art.body} </p>
                        <button className="btn">
                                <span className="badge badge-info">{art.author}</span>
                        </button>
                        <Link className="btn btn-primary m-3" to={'/edit/'+art._id} role="button">Edit</Link>
                        <Link onClick={()=>deleteart(art._id)} className="btn btn-danger  m-3" role="button">Delete</Link>

                </div>))}
            </div>
             } 
        </div>
    )
};

export default Article ;
