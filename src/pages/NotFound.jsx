import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import coffeeCup from '../assets/coffe-cup-white.png'

function NotFound() {
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const darkMode = savedTheme
            ? savedTheme === 'dark'
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            document.documentElement.classList.toggle('dark', darkMode);
    }, []);

    return(
        <div className="min-h-dvh flex flex-col items-center justify-center gap-5 p-8 text-center bg-white text-gray-950 dark:bg-gray-950 dark:text-white">
            <img src={coffeeCup} alt="Coffee icon" className="w-40 h-40 sm:w-52 sm:h-52 object-contain brightness-0 dark:brightness-100"/>
            <h1 className="text-4xl font-extrabold">404 Page not found</h1>
            <p className="max-w-md text-gray-600 dark:text-gray-400">The page you're looking for doesn't exist.</p>
            <Link to="/" className="rounded-lg bg-blue-800 hover:bg-blue-900 px-5 py-3 font-semibold transition-colors">Back to home</Link>
        </div>
    );
}

export default NotFound