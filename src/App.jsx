import { useState, useEffect} from 'react'
import profilePic from './assets/profilepic.png'
import { Mail, MapPin, Calendar, User, FileText, ArrowRight, Sun, Moon, Menu, X} from 'lucide-react'

export function GithubIcon({ className }) {
  return(
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
  );
}

export function LinkedinIcon({ className }) {
  return (
    <svg
      role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return(
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className}>
      <title>Facebook</title>
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
      </svg>
  );
}

const entries = [
  {
    date: "2025 - Present",
    title: "Freelance Developer"
  },
  {
    date: "2024 - Present",
    title: "Bachelor of Science in Information System"
  },
];

const techStack = [
  {title: "React"}, {title: "Tailwind CSS"}, {title: "Godot Engine"}, {title: "C#"}, {title: "Java"}, {title: "C++"}, {title: "Firebase"}, {title: "HTML"},
  {title: "CSS"}, {title: "Javascript"}, {title: "SQL"}, 
];

function App() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [darkMode, setDarkMode] = useState(() => {
    // Respect saved preference, fall back to system preference
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
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
      {/*NavBar*/}
      <nav className="sticky top-0 left-0 w-full z-50 border-b border-black/10 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 px-6 py-4 transition-colors duration-300">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold md:px-10">Kohi<span className="text-blue-600">.dev</span></h1>

          <div className="flex items-center gap-8">
            {/* Desktop links */}
            <ul className="hidden md:flex font-bold gap-6 text-xl">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Project</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="flex items-center gap-3">
              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile hamburger toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-4 font-bold text-lg pb-2">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/*Home section*/}
      <div id="home" className="flex items-center justify-center p-8">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center border-l-2 border-gray-400 dark:border-gray-700 pl-10 relative">
          

          <div className="order-2 md:order-1">
            <p className="text-blue-500 font-serif italic text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-2">John Lenard</h1>
            <h1 className="text-5xl font-extrabold text-blue-500 leading-tight mb-2">Fetalco.</h1>
            <p className='italic font-semibold text-gray-800 dark:text-gray-200 mb-2'>BS Information Systems Student | Freelance Developer</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Aspiring full-stack and game developer passionate about
              creative, efficient user experiences — from web apps to
              games. I turn ideas into working code.
            </p>

            {/* Buttons */}
            <div className="flex gap-5 mb-4">
              <a href="#contact" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 transition-colors text-white font-semibold text-sm px-5 py-2.5 rounded-md cursor-pointer">Let's Connect <ArrowRight size={16}/></a>
              <a target='_blank' href='https://canva.link/fnmcilnwm0xqq1i' className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 transition-colors text-gray dark:text-gray-200 font-semibold text-sm px-5 py-2.5 rounded-md cursor-pointer">View Resume <FileText size={20}/></a>
            </div>

            {/* Social Links */}
            <div>
              <ul className="flex gap-5 items-center mt-3">
                <li><a target='_blank' href="https://github.com/Chicoffee"><GithubIcon className="w-7 h-7"/></a></li>
                <li><a target='_blank' href="www.linkedin.com/in/john-lenard-fetalco-b67303381"><LinkedinIcon className="w-7 h-7"/></a></li>
                <li><a target='_blank' href="https://www.facebook.com/nard.fe"><FacebookIcon className="w-7 h-7"/></a></li>
                <li><a target='_blank' href="mailto:fetalcojohnlenard@gmail.com "><Mail size={28}/></a></li>
              </ul>
            </div>

            {/* info box */}
            <div className='border border-black dark:border-gray-600 max-w-5xl mt-5 rounded-lg px-5 py-2.5 transition-colors duration-300'>
              <div className="flex gap-2 mb-1">
                <MapPin/>
                <p>Philippines</p>
              </div>

              <div className='flex gap-2 mb-1'>
                <Mail/>
                <p>fetalcojohnlenard@gmail.com</p>
              </div>

              <div className='flex gap-2 mb-1'>
                <Calendar/>
                <p>August 2006</p>
              </div>

              <div className='flex gap-2 mb-1'>
                <User/>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Profile Pic*/}
          <div className="order-1 md:order-2 flex justify-center items-center relative mb-4">
            <div className="absolute w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full blur-2xl opacity-70"></div>
              <img
                src={profilePic}
                alt="John Lenard's Profile Pic"
                className="relative w-64 h-64 object-contain"
              />
          </div>  

        </div>
      </div>

      {/* About Section */}
      <div id="about" className="w-full flex flex-col items-center justify-center gap-16 p-8">
        {/* Career Background */}
        <div className="w-full max-w-7xl">
          <div className="flex justify-between">
            <h1 className="text-2xl font-extrabold dark:text-white mb-6">Career Background</h1>
            <a href="" className="flex items-center gap-2 dark:hover:text-gray-700 hover:text-gray-500">Full History<ArrowRight size={16}/></a>
          </div>

          <div className="flex flex-col gap-4">
            {entries.map((entry, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:gap-4 border-t-2 border-gray-400 dark:border-gray-700 pt-4">
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 w-40 shrink-0">
                  {entry.date}
                </span>
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 sm:text-right sm:flex-1">{entry.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack*/}
        <div className="w-full max-w-7xl">
          <div className="flex justify-between">
            <h1 className="text-2xl font-extrabold dark:text-white mb-6">Tech Stack</h1>
            <a href="" className="flex items-center gap-2 dark:hover:text-gray-700 hover:text-gray-500">Full History<ArrowRight size={16}/></a>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((techStack, i) => (
              <div key={i} className="flex items-center justify-center rounded-md border border-gray-400 dark:border-gray-700 px-3 py-2 whitespace-nowrap">
                <span className="font-semibold">{techStack.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="project" className="min-h-screen">
      </div>
      <div id="contact" className="min-h-screen"></div>
    </div>
  );
}

export default App;