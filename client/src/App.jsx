import React from 'react';
import Navbar from '../src/view/components/common/Navbar';
import Home from '../src/view/components/home/Home';
import About from './view/components/about/About';
import Skills from './view/components/skills/Skills';
import Projects from './view/components/project/Project';
import Contact from './view/components/contact/Contact';
import Footer from './view/components/common/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;