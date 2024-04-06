import React from 'react';
import './App.css';
import Header from  "./Components/Header/Header"
import Footer from './Components/Footer/Footer';
import Heropage from './Components/Hero/Hero';
import Content from './Pages/Content/content';
import Contact from './Pages/Contact/contact';
import About from './Pages/About/About';
import Billing from './Pages/Billing/Billing';
import { Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <div>
        
        <Header/>
        <Routes> 
         <Route path="/" element={<Heropage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contact" element={<Billing/>} />
           </Routes>
           <Footer/>

        
        
    </div>
  )
}

export default App
