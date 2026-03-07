import React from 'react';
import Navbar from './view/components/common/Navbar';
import Home from './view/components/home/Home';
import About from './view/components/about/About';
import Skills from './view/components/skills/Skills';
import Projects from './view/components/project/Project';
import Contact from './view/components/contact/Contact';
import Footer from './view/components/common/Footer';
import Experience from './view/components/experience/Experience';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;