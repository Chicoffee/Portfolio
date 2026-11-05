import { MoveRight} from 'lucide-react'
import { entries } from '../data/CareerEntries.js'
import {techStack } from '../data/techStack.js'

function About() {
    return(
        <div id="about" className="w-full flex flex-col items-center justify-center gap-16 p-8">

        {/* Career Background */}
        <div className="w-full max-w-5xl">
          <div className="flex justify-between items-start">
            <h1 className="text-xl sm:text-2xl font-extrabold dark:text-white mb-6">Career Background</h1>
            <a href="" className="flex items-center gap-2 dark:hover:text-gray-700 hover:text-gray-500 shrink-0">Full History<MoveRight size={16}/></a>
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
        <div className="w-full max-w-5xl">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-extrabold dark:text-white mb-6">Tech Stack</h1>
            <a href="" className="flex items-center gap-2 dark:hover:text-gray-700 hover:text-gray-500">Full History<MoveRight size={16}/></a>
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
    );
}

export default About