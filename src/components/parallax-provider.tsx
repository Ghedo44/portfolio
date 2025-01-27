"use client"

import * as React from "react"
import { ParallaxProvider as ScrollParallaxProvider } from 'react-scroll-parallax';

export function ParallaxProvider({
    children,
}: React.ComponentProps<typeof ScrollParallaxProvider>) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }

    return <ScrollParallaxProvider>{children}</ScrollParallaxProvider>
}
