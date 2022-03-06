
import './App.css';
import React from 'react';
import Body from "./Components/Body/Body";
import PrimarySearchAppBar from "./Components/Header/AppBar";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  SignUp from "./Components/SignUp/Signup";
import  SignIn from "./Components/SignIn/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import JobberSignUp from "./Components/JobberSignUp/JobberSignUp";
import  Post from "./Components/PostService/PostService";
import  ListOfServices from "./Components/ListOfServices/ListOfServices";
import  PostService from "./Components/PostService/PostService";



const  App = () => (
 
  <div className="App">
    
    <div>
   <PrimarySearchAppBar/>
   
  
  <div>
    <Router>
    <Routes>
           <Route path="/" element={<Body/>}/>
       </Routes>
       <Routes>
           <Route path="/SignUp" element={<SignUp/>}/>
       </Routes>
      
       <Routes>
             <Route path="/SignIn" element={<SignIn/>}/>
       </Routes>
       
       <Routes>
         <Route path="/Dashboard" element={<Dashboard/>}/>
       </Routes>
       <Routes>
         <Route path="/Post" element={<Post/>}/>
       </Routes>
       <Routes>
         <Route path="/JobberSignUp" element={<JobberSignUp/>}/>
       </Routes>
       <Routes>
         <Route path="/ListOfServices" element={<ListOfServices/>}/>
       </Routes>
       <Routes>
         <Route path="/PostService" element={<PostService/>}/>
       </Routes>
       </Router>
   </div>
  </div>
  
   </div>

   
   

    
    
    
);
export default App;
