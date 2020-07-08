import React, { useState ,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Header from "./components/layouts/Header";
import Article from "./components/Aritcle";
import Nabar from "./components/layouts/Nabar";
import {Route} from 'react-router-dom'
import axios from 'axios';
import addarticle from './components/Addart';
import Edit from './components/Edit';
import Indiv from "./components/Indiv"


function App() {
  const [posts,setposts] =useState([]);
  useEffect(()=>{
    axios.get('articles')
    .then(res=>setposts(res.data))
    .catch(err=>console.log("ERROR im14"));
  }); 
  return (
    <div className="App">
      <Header/>
      <Nabar/>
       <div className="container bg-warning mt-5">
        <Route exact path='/' render={()=> <Article data={posts}/>} ></Route>
        <Route path='/:id' render={(props)=> <Indiv {...props} />} ></Route>
        <Route path='/edit/:id' render={(props)=> <Edit {...props} />} ></Route>
        <Route path='/add' component={addarticle} ></Route>
      </div>
    </div> 
  );
}

export default App;
