
import './App.css';

// import { Routes, Route } from "react-router-dom";
// import Com1 from "./compount/comA";
import Home from "./compount/Home/Home"
import Skills from "./compount/Skills/Skills"
import About from './compount/About/About';

// import Skills from "./compount/Skills"

import Navbar from './compount/Navbar/Navbar';

import Project from './compount/Project/Project';
import Contact from './compount/Contact/Contact';




function App() {
  
  return (
    
  <>

  <main >
  
      <Navbar />
    <div className="container">
  
      <Home />
       <About />
      <Skills />
      <Project/>
      <Contact /> 
      
      </div>
     

      
    </main>
  
  </>
  
  );
}

export default App;
