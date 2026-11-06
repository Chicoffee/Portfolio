import { MoveRight} from 'lucide-react'
import { entries } from '../data/CareerEntries.js'
import { techStack } from '../data/techStack.js'

function About() {
    return(
        <div id="about" className="w-full flex flex-col items-center justify-center gap-16 p-8">

        {/* Career Background */}
       <section className="w-full max-w-5xl p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-gray-950 dark:text-gray-100">Career Background</h2>

            <a href="/career" className="group flex items-center gap-1 shrink-0 text-xs text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 hover:-translate-y-2 duration-300 transition-all">
            Full history <MoveRight size={16} className="group-hover:translate-x-1 duration-300"/></a>
          </div>

          <div className="relative pl-8">
            <div aria-hidden="true" className="absolute bottom-0 left-2 top-0 w-px bg-gray-300 dark:bg-slate-600"/>

            <div className="space-y-3">
              {entries.map((entry) => (
                <article key={entry.title} className="relative rounded-xl border border-gray-200 bg-white p-3 sm:p-4 dark:border-slate-700 dark:bg-gray-900">
                  <span aria-hidden="true" className="absolute -left-6 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400"/>

                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                    {entry.date}
                  </p>

                  <p className="mt-2 text-base font-bold text-gray-900 dark:text-gray-100">
                    {entry.title}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                    {entry.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span key={tag} className="rounded-lg bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
       </section>

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