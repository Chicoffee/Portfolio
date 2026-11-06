import { useState } from 'react';
import { Sun, Moon, Menu, X,} from 'lucide-react';

function Navbar({ darkMode, setDarkMode}) {
 const [menuOpen, setMenuOpen] = useState(false);

 return(
      <nav className="sticky top-0 left-0 w-full z-50 border-b border-black/10 dark:border-white/20 px-4 md:px-8 py-4 transition-colors duration-300">
        <div aria-hidden="true" className={`absolute inset-x-0 top-0 -z-10 backdrop-blur-md bg-white/70 dark:bg-gray-950/70 transition-[height] duration-300 ease-in-out md:h-full ${menuOpen ? 'h-[calc(100%+8rem)]' : 'h-full'}`}/>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-3xl font-bold">Kohi<span className="text-blue-600">.dev</span></a>

            <div className="flex items-center gap-8">
              {/* Desktop links */}
              <ul className="hidden md:flex font-bold gap-6 text-xl">
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
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`absolute top-full left-0 w-full px-4 md:hidden overflow-hidden transition-all duration-300 ease-in-out 
            ${menuOpen
              ? 'h-32 opacity-100'
              : 'h-0 opacity-0 pointer-events-none'
        }`}>
          <ul className="flex flex-col gap-4 font-bold text-lg pb-2">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
 );
}

export default Navbar;