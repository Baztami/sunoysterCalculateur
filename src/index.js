import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 
import Home from './Home';
import App from "./App"
import Simulation from './Simulation'
 
import { Provider } from 'react-redux'
 
//
 
import { render } from "react-dom"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from "react-router-dom";
 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render (


    <BrowserRouter>
   
    
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="ConfigForm" element={<App />} />
    <Route path="/simulation" element={<Simulation />} />
       
  
     
    </Routes>
   
    
  </BrowserRouter>
 
 );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
