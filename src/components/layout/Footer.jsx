import { GithubIcon, LinkedinIcon} from '../ui/SocialIcons'
import { Mail } from 'lucide-react'

function Footer() {
    return(
    <div className="w-full flex flex-col items-center justify-center gap-16 p-8">
        <div className="w-full max-w-5xl border-t border-dashed border-gray-400 dark:border-gray-800">
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center pt-10">
                <div className="order-2 sm:order-1">
                    <p className="italic font-semibold text-gray-900 dark:text-gray-400 pb-1">Same as Always</p>
                    <p className="font-bold">Lenard Fetalco | Consistently learning | Bulacan, PH</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} Lenard Fetalco. All rights reserved.</p>
                </div>
            

                <div className="order-1 sm:order-2">
                    <ul className="flex gap-5 items-center">
                        <li><a target='_blank' href="https://github.com/Chicoffee"><GithubIcon className="w-5 h-5"/></a></li>
                        <li><a target='_blank' href="https://www.linkedin.com/in/john-lenard-fetalco-b67303381"><LinkedinIcon className="w-5 h-5"/></a></li>
                        <li><a target='_blank' href="mailto:fetalcojohnlenard@gmail.com"><Mail size={25}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Footer