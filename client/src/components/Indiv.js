import React,{useState,useEffect} from 'react'
import axios from 'axios' 
const Indiv = (data) => {
    const [tit,settit] =useState('')
    const [art,setart]=useState('')
    const [aut,setaut]=useState('')
    useEffect(()=>{
        console.log(data.match.params.id);
        axios.get('articles/'+data.match.params.id)
         .then(res=>[settit(res.data.title),setart(res.data.body),setaut(res.data.author)])
         .catch(err=>console.log (err));
    });

    return (
        <div>
            <h1>{tit}</h1>
            <h5>{aut}</h5>
            <p>{art}</p>
        </div>
    )
}

export default Indiv
