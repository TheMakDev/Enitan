// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Resume />
    </div>
  );
};

export default App;
