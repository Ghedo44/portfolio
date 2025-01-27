"use client"

import { useParallax } from 'react-scroll-parallax';

const SpaceAnimation = () => {
    // const mage = useParallax<HTMLDivElement>({
    //     scale: [0.5, 1, 'easeInQuad'],
    // });

    const frog: any = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [0, 100],

    });

    // const moon: any = useParallax<HTMLDivElement>({
    //     scale: [1.5, 1, 'easeInQuad'],
    // });
    return (
        <div className="w-full text-8xl">
            {/* <div className="mage" ref={mage.ref}>
                🧙🏻‍♂️
            </div> */}
            <div className="frog" ref={frog.ref}>
                🚀
            </div>
            {/* <div className="moon" ref={moon.ref}>
                🌚
            </div> */}
        </div>
    );

};

export default SpaceAnimation;

