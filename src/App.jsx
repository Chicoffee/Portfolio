import { useState, useEffect} from 'react'
import zuittcert from './assets/zuittcert.png'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import WipProject from './sections/wipProject.jsx'
import Project from './sections/Project.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import { projects } from './data/project.js'
import About from './sections/About.jsx'
import { techStack } from './data/techStack.js'
import { entries } from './data/CareerEntries.js'

function App() {
    const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem('theme');

    if (saved) return saved === 'dark';

    return window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return( 
    <div className="min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Hero/>
      <WipProject/>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;