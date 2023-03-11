import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';

function App() {
  return (
    <div id="App">
      <div>
        <Navbar/>
      </div>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
