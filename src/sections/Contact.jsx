import { Mail, MoveRight} from 'lucide-react'

function Contact() {
    return(
      <div id="contact" className="w-full flex flex-col items-center justify-center gap-16 p-8">
        <div className="w-full max-w-5xl">
          <h1 className="text-2xl font-extrabold dark:text-white mb-2">Let's work together.</h1>
          {/* Link Container */}
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start mt-6">
            <div className="space-y-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you have a project in mind, an opportunity to discuss, or simply want to connect, I'd be happy to hear from you. Feel free to reach out through any of the platforms below, and I'll get back to you as soon as I can.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-black dark:hover:shadow-black/40">
              <a href="mailto:fetalcojohnlenard@gmail.com" className="group flex items-center gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-5 py-4 hover:border-gray-400 dark:hover:border-gray-600 transition colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 shrink-0">
                  <Mail size={16}/>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold tracking-wide text-blue-600 dark:text-blue-400 uppercase">Email</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white ">fetalcojohnlenard@gmail.com</p>
                </div>
                <MoveRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-colors shrink-0"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact