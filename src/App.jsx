import { useState } from 'react';
import Contact from './components/Contact';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Footer from './components/footer';

function App() {
  

  return (
    <div className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 min-h-screen'>
      <Aboutme />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
