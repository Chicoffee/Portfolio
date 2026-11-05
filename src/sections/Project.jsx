import { GithubIcon} from '../components/ui/SocialIcons'
import { MoveRight, Globe } from 'lucide-react'
import { projects } from '../data/project'

function Project() {
  const visibleProjects = projects.slice(0, 4);

  return(
      <div id="project" className="w-full flex flex-col items-center justify-center gap-16 p-8">
        {/* Projects List */}
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl font-extrabold dark:text-white mb-2">Projects</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mb-8">
            Explore a collection of projects that demonstrate my skills, creativity, and continuous growth as a developer. More exciting projects will be added as I continue learning and building.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Porject Card */}

            {visibleProjects.map((project,i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-black/40">

                {/* Project Image */}
                <div className="h-48 w-full overflow-hidden bg-gray-950 rounded-md">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md p-2"/>
                </div>

                {/* Project Context */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Project Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech, j) => (
                      <span key={j} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500 transition-colors rounded-md px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                      <GithubIcon className="w-4 h-4"/>
                      Github Repo
                    </a>

                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 transition-colors rounded-md px-4 py-2 text-sm font-semibold text-white">
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

        {/* Show all button */}
        {projects.length > 4 && (
          <button
            className="group flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:border-gray-500 dark:hover:border-gray-500 rounded-md px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            View all projects
            <MoveRight size={16} className="duration-300 group-hover:translate-x-1"/>
          </button>
        )}
      </div>
    );
}

export default Project