import Link from "next/link"
import { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router";
import { ThemeContext } from "../context/ThemeContext"


export default function Header() {
    const { theme, setTheme } = useContext(ThemeContext);
    const router = useRouter();

    const activeItem = (href = null) => {
        let classes = "mr-5 font-semibold dark:text-white "
        classes += router.pathname === href ? "text-indigo-700" : "text-black"
        return classes
    }

    return (
        <header className="body-font bg-gray-100 dark:bg-black w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/"><a className={activeItem("/")}>Home</a></Link>
                    <Link href="/blog"><a className={activeItem("/blog")}>Blog</a></Link>
                    <Link href="https://drive.google.com/file/d/1JqX1lxDO6vEObWCgiaFd_1hvimfJvRkt/view"><a className={activeItem()} target="_blank">Resume</a></Link>
                    {/* <button className="mr-5" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
                        {theme === "dark" ? <svg xmlns="http://www.w3.org/2000/svg" className="fill-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>}
                    </button> */}
                </nav>
            </div>
        </header>
    )
}
