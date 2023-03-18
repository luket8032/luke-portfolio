import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div id="App">
      <div>
        <Navbar/>
      </div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
