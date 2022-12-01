import React from 'react';
import './App.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact.js';
import Playground from './components/Playground.js';
import ToTopButton from './components/ToTopButton';

function App() {
  return (
    // Display componenets
    <div  className='App'>
      <header>
        <Header />
      </header>
      <main>
        <ToTopButton />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <a href='/playground' className='playground-link'>Playground</a>
      </main>
    </div>
  );
}


export default App;
