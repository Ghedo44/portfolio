import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Hobbies from "@/components/home/hobbies";
import Intro from "@/components/home/intro";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import WorkExperience from "@/components/home/work-experience";
import Meteors from "@/components/meteors";
import { ParallaxProvider } from "@/components/parallax-provider";

export default function Home() {
  return (
    <>
      
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <Meteors number={40} />
      
      <ParallaxProvider>
        <Intro />
        <Education />
        <Skills />
        {/* <SpaceAnimation /> */}
        <Projects />
        <WorkExperience />
        <Hobbies />
        <Contact />
      </ParallaxProvider>
    </>

  );
}