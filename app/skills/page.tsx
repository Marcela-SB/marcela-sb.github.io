import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiEclipseide } from "react-icons/si";
import { SiC, SiCplusplus } from "react-icons/si";


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
  "text-gray-500 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_100px_black] dark:hover:drop-shadow-[0_0_10px_white]";

export default function Skills() {
   
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">HABILIDADES</h2>
            <div className="flex flex-wrap text-[80px] justify-between flex-wrap gap-4">
                <FaHtml5 className={`${baseIconClass} ${iconStyles.html}`} />
                <FaCss3Alt className={`${baseIconClass} ${iconStyles.css}`} />
                <IoLogoJavascript className={`${baseIconClass} ${iconStyles.js}`} />
                <FaJava className={`${baseIconClass} ${iconStyles.java}`} />
                <FaReact className={`${baseIconClass} ${iconStyles.react}`} />
                <SiTypescript className={`${baseIconClass} ${iconStyles.ts}`} />
                <SiTailwindcss className={`${baseIconClass} ${iconStyles.tailwind}`} />
                <FaPython className={`${baseIconClass} ${iconStyles.python}`} />
                <SiC className={`${baseIconClass} ${iconStyles.c}`} />
                <SiCplusplus className={`${baseIconClass} ${iconStyles.cpp}`} />
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">FERRAMENTAS</h2>
            <div className="flex flex-wrap text-[80px] justify-between flex-wrap gap-4">
                <VscVscode className={`${baseIconClass} ${iconStyles.vscode}`} />
                <FaGithub className={`${baseIconClass} ${iconStyles.github}`} />
                <RiNextjsFill className={`${baseIconClass} ${iconStyles.nextjs}`} />
                <SiEclipseide className={`${baseIconClass} ${iconStyles.eclipse}`} />
            </div>
        </>
    );
}
