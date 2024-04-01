import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Work from './components/Work';
import Resume from './components/Resume';




function App() { 

  return (
    <div>      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Resume /> 
      
    </div>
  )
}

export default App
