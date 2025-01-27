import React from "react";

const skillsData = [
    "Matlab",
    "C/C++",
    "Python",
    "TypeScript",
    "JavaScript",
    "Git",
    "GitHub",
    "Angular",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "Firebase",
];

const softwaresData = [
    "Invetor",
    "SolidWorks",
    "Solid Edge",
    "AutoCAD",
    "Simulink",
    "Blender",
    "Unity",
];

function Skills() {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex flex-wrap gap-2">
                {skillsData.map((skill, index) => (
                    <span
                        key={index}
                        className="bg-secondary text-secondary-foreground text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <h2 className="text-lg font-semibold">Softwares</h2>
            <div className="flex flex-wrap gap-2">
                {softwaresData.map((software, index) => (
                    <span
                        key={index}
                        className="bg-secondary text-secondary-foreground text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                    >
                        {software}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Skills;