"use client";

import React, { forwardRef, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dockVariants = cva(
    "mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl shadow-md border border-slate-200 supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md dark:border-slate-800 bg-white/10 dark:bg-black/10"
);

export interface DockProps extends VariantProps<typeof dockVariants> {
    className?: string;
    magnification?: number;
    distance?: number;
    direction?: "top" | "middle" | "bottom";
    children: React.ReactNode;
    orientation?: "horizontal" | "vertical";
}

export const Dock = forwardRef<HTMLDivElement, DockProps>(
    (
        {
            className,
            children,
            direction = "bottom",
            orientation = "horizontal",
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                {...props}
                className={cn(dockVariants({ className }), {
                    "items-start": direction === "top",
                    "items-center": direction === "middle",
                    "items-end": direction === "bottom",
                    "flex-col h-max": orientation === "vertical",
                    "flex-row": orientation === "horizontal",
                })}
            >
                {children}
            </div>
        );
    }
);

Dock.displayName = "Dock";

export interface DockIconProps {
    size?: number;
    magnification?: number;
    distance?: number;
    className?: string;
    children?: React.ReactNode;
    orientation?: "horizontal" | "vertical";
}

export const DockIcon = ({
    size = 40,
    className,
    children,
    ...props
}: DockIconProps) => {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            style={{ height: size, width: size }}
            className={cn(
                "flex aspect-square cursor-pointer items-center justify-center rounded-full",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

DockIcon.displayName = "DockIcon";
