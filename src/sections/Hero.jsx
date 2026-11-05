import { Mail, MapPin, Calendar, User, FileText, ArrowRight, } from 'lucide-react'
import { GithubIcon, LinkedinIcon, FacebookIcon } from '../components/ui/SocialIcons.jsx'
import profilePic from '../assets/profilepic2.png';

function Hero() {
    return(
      <div id="home" className="flex items-center justify-center p-8">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 items-center border-l-2 border-gray-400 dark:border-gray-700 pl-10 relative">
          

          <div className="order-2 md:order-1">
            <p className="text-blue-500 font-serif italic text-lg mb-2">Hello, I'm</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-2">John Lenard</h1>
            <h1 className="text-5xl font-extrabold text-blue-500 leading-tight mb-2">Fetalco.</h1>
            <p className='italic font-semibold text-gray-800 dark:text-gray-200 mb-2'>BS Information Systems Student | Freelance Developer</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Aspiring full-stack and game developer passionate about
              creative, efficient user experiences from web apps to
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
            
              <img
                src={profilePic}
                alt="John Lenard's Profile Pic"
                className="relative w-64 h-64 rounded-full object-cover object-top border-4 border-white dark:border-gray-600 shadow-lg"
              />
          </div>  

        </div>
      </div>
      
    );
}

export default Hero