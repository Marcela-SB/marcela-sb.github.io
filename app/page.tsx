import Image from "next/image";
import AboutMe from "@/components/AboutMe/page"
import Skills from "@/components/Skills/page"
import CodeIcon from '@mui/icons-material/Code';

export default function Home() {
  return (
    <div className="m-10 md:m-25">
      
      <AboutMe />

      <Skills />

      

    </div>
  );
}
