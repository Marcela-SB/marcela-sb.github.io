import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaGithub, FaPython} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiEclipseide, SiC, SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";


// Map of styles for icons
const iconStyles = {
    html: "hover:text-orange-500",
    css: "hover:text-blue-500",
    js: "hover:text-yellow-400",
    java: "hover:text-red-700",
    react: "hover:text-cyan-400",
    ts: "hover:text-blue-400",
    tailwind: "hover:text-sky-400",
    python: "hover:text-yellow-500",
    c: "hover:text-blue-700",
    cpp: "hover:text-indigo-500",
    vscode: "hover:text-blue-600",
    github: "hover:text-black dark:hover:text-black", 
    nextjs: "hover:text-gray-900 dark:hover:text-gray-800",
    eclipse: "hover:text-purple-600",
}

// Common base class for all icons
const baseIconClass =
  "text-gray-500 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_100px_black] dark:hover:drop-shadow-[0_0_7px_white]";

export default function Skills() {
   
    return (
        <div className="p-10 md:p-25">
            <div className="flex flex-wrap text-[60px] md:text-[80px] justify-center flex-wrap gap-5">
                <div className="relative group">
                    <FaHtml5 className={`${baseIconClass} ${iconStyles.html}`} />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        HTML5
                    </span>
                </div>
                <div className="relative group">
                    <FaHtml5 className={`${baseIconClass} ${iconStyles.html}`} />
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        HTML5
                    </span>
                </div>

                <FaCss3Alt className={`${baseIconClass} ${iconStyles.css}`} />
                <IoLogoJavascript className={`${baseIconClass} ${iconStyles.js}`} />
                <FaJava className={`${baseIconClass} ${iconStyles.java}`} />
                <FaReact className={`${baseIconClass} ${iconStyles.react}`} />
                <SiTypescript className={`${baseIconClass} ${iconStyles.ts}`} />
                <SiTailwindcss className={`${baseIconClass} ${iconStyles.tailwind}`} />
                <FaPython className={`${baseIconClass} ${iconStyles.python}`} />
                <SiC className={`${baseIconClass} ${iconStyles.c}`} />
                <SiCplusplus className={`${baseIconClass} ${iconStyles.cpp}`} />
                <VscVscode className={`${baseIconClass} ${iconStyles.vscode}`} />
                <FaGithub className={`${baseIconClass} ${iconStyles.github}`} />
                <RiNextjsFill className={`${baseIconClass} ${iconStyles.nextjs}`} />
                <SiEclipseide className={`${baseIconClass} ${iconStyles.eclipse}`} />
            </div>
        </div>
    );
}
