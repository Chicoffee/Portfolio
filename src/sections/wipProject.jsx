import { wipProjects } from '../data/wipProject.js'
import { GithubIcon } from '../components/ui/SocialIcons.jsx'
import { Globe } from 'lucide-react'

function wipProject() {
    return(
      <div className="w-full flex sm:flex-col items-center justify-center gap-16 p-8">
        <div className="w-full max-w-5xl">
          {wipProjects.map((wipProj, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-black/40 p-3">

            {/* Image */}
            <div className="h-48 w-full md:w-2/5 md:h-auto shrink-0 overflow-hidden bg-gray-950 rounded-md">
              <img src={wipProj.image} alt={wipProj.title} className="w-full h-full object-cover"/>
            </div>

            {/* Context */}
            <div className="flex flex-col flex-1 p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="order-2 md:order-1 font-bold text-lg text-gray-900 dark:text-white">
                  {wipProj.title}
                </h3>

                <div className="order-1 sm:order-2 md:order-2 flex flex-wrap gap-2">
                  {wipProj.highlight.map((wipHL, k) => (
                    <span key={k} className="text-xs font-semibold px-2.5 py-1 rounded-full border border-dashed text-gray-700 dark:text-gray-300">
                      {wipHL}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {wipProj.description}
              </p>

            {/* TechStack */}
            <div className="flex flex-wrap gap-2 mb-5">
                {wipProj.stack.map((wipTech, j) => (
                  <span key={j} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {wipTech}
                  </span>
                ))}
              </div>

            {/* Links */}
            <div className="flex gap-3 mt-auto">
                <a href={wipProj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500 transition-colors rounded-md px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  <GithubIcon className="w-4 h-4"/>
                  Github Repo
                </a>

                {wipProj.demo && (
                  <a href={wipProj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 transition-colors rounded-md px-4 py-2 text-sm font-semibold text-white">
                    <Globe size={16}/>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
}

export default wipProject