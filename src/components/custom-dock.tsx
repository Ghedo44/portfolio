"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/dock";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

export function CustomDock() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isMobile, setIsMobile] = useState(true);
    const [hideDock, setHideDock] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) return;
        const handleScroll = () => {
            const currentY = window.scrollY;
            const diff = currentY - lastScrollY;
            if (diff > 50) {
                setHideDock(true);
                setLastScrollY(currentY);
            } else if (diff < -50) {
                setHideDock(false);
                setLastScrollY(currentY);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile, lastScrollY]);

    return (
        <div
            className={cn(
                isMobile
                    ? "fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center transition-transform duration-300"
                    : "fixed left-40 top-0 bottom-0 w-24 flex items-center",
                isMobile && hideDock && "translate-y-full",
                "z-50"
            )}
        >
            <TooltipProvider>
                <Dock direction="middle" orientation={isMobile ? "horizontal" : "vertical"}>
                    {siteConfig.mainNav.navbar.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-full rounded-full"
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side={isMobile ? "top" : "right"}>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation={!isMobile ? "horizontal" : "vertical"} />
                    {Object.entries(siteConfig.mainNav.contact.social).map(([name, social]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            buttonVariants({ variant: "ghost", size: "icon" }),
                                            "size-full rounded-full"
                                        )}
                                    >
                                        <social.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side={isMobile ? "top" : "right"}>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    <Separator orientation={!isMobile ? "horizontal" : "vertical"} />
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="size-full rounded-full flex items-center justify-center"
                                    onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
                                >
                                    {resolvedTheme === "light" ? (
                                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                                    ) : (
                                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                                    )}
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side={isMobile ? "top" : "right"}>
                                <p>Theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}