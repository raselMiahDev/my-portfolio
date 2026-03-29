import Home from './view/components/home/Home';
import About from './view/components/about/About';
import Skills from './view/components/skills/Skills';
import Projects from './view/components/project/Project';
import Contact from './view/components/contact/Contact';
import Experience from './view/components/experience/Experience';
import MasterLayout from '../src/layout/MasterLayout';

function App() {
  return (
    <div className="min-h-screen">
      <MasterLayout>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Contact />
      </MasterLayout>
    </div>
  );
}

export default App;