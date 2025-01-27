"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface MeteorsProps {
    number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
        [],
    );

    //   const styles = [...new Array(number)].map(() => ({
    //     top: -5,
    //     left: Math.floor(Math.random() * window.innerWidth) - 100 + "px",
    //     animationDelay: Math.random() * 1 + 0.2 + "s",
    //     animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    //     rotate: Math.floor(Math.random() * 20 + 0) + "deg",
    //   }));
    //   setMeteorStyles(styles);

    const generateMeteorStyles = () => {
        const number = Math.floor(window.innerWidth / 50);

        const meteorStyles = [...new Array(number)].map(() => ({
            top: -5,
            left: Math.floor(Math.random() * window.innerWidth) - 100 + "px",
            animationDelay: Math.random() * 1 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
            rotate: Math.floor(Math.random() * 10 + 0) + "deg",
        }));

        setMeteorStyles(meteorStyles);
    };


    useEffect(() => {
        generateMeteorStyles();
        let resizeTimeout: number;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(() => generateMeteorStyles(), 100);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [number]);

    return (
        <>
            {[...meteorStyles].map((style, idx) => (
                // Meteor Head
                <span
                    key={idx}
                    className={cn(
                        "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full from-primary shadow-[0_0_0_1px_#ffffff10]",
                    )}
                    style={style}
                >
                    {/* Meteor Tail */}
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-primary to-transparent" />
                </span>
            ))}
        </>
    );
};

export default Meteors;