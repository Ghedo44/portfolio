import Image from "next/image";
// import ProfilePic from "@/../images/galaxy.png";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <h1 className="text-4xl font-bold mb-4">Hi! I&apos;m Ghedo.</h1>
        <p className="text-base text-gray-800 dark:text-gray-300">
          I am an aerospace engineering student with a passion for designing and building innovative 
          aircraft and spacecraft. My journey in aerospace engineering has equipped me with a strong 
          foundation in aerodynamics, propulsion systems, and structural analysis. I am dedicated to
           pushing the boundaries of what is possible in the field of aerospace and am excited to 
           contribute to the future of aviation and space exploration.
        </p>
      </div>
      <div className="flex items-center justify-center md:mb-0">
        <Image
          src="/images/galaxy.png"
          alt="Yatharth"
          width={160}
          height={160}
          className="border-2 border-primary rounded-full object-cover"
        />
      </div>
    </div>
  );
}