import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function App() {
  return (
    <div id="App">
      <Navbar/>
      <Hero/>
      <AnimationOnScroll animateIn='animate__fadeIn' offset={200}> <About/> </AnimationOnScroll>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
