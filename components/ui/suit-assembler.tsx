"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SuitContextType = {
    assembled: boolean;
    initiateAssembly: () => void;
};

const SuitContext = createContext<SuitContextType>({
    assembled: false,
    initiateAssembly: () => { },
});

export const useSuit = () => useContext(SuitContext);

export function SuitAssembler({ children }: { children: React.ReactNode }) {
    const [assembled, setAssembled] = useState(false);

    // Check session storage on mount to skip animation if already shown
    useEffect(() => {
        const hasAssembled = sessionStorage.getItem("suitAssembled");
        if (hasAssembled) {
            setAssembled(true);
        }
    }, []);

    const initiateAssembly = () => {
        setAssembled(true);
        sessionStorage.setItem("suitAssembled", "true");
        sessionStorage.setItem("hasLoaded", "true"); // Also mark preloader as done
    };

    return (
        <SuitContext.Provider value={{ assembled, initiateAssembly }}>
            {children}
        </SuitContext.Provider>
    );
}

// Wrapper for main content to give it the "Suit Up" fly-in effect
export function SuitContainer({ children, className }: { children: React.ReactNode; className?: string }) {
    const { assembled } = useSuit();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98, z: 100 }}
            animate={
                assembled
                    ? { opacity: 1, scale: 1, z: 0, transition: { duration: 0.4, ease: "circOut" } }
                    : { opacity: 0, scale: 0.98, z: 100 }
            }
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Wrapper for fixed elements like Header/Chat to fly in from edges
export function SuitPart({
    children,
    direction = "top",
    delay = 0
}: {
    children: React.ReactNode;
    direction?: "top" | "bottom" | "left" | "right";
    delay?: number
}) {
    const { assembled } = useSuit();

    const variants = {
        hidden: {
            y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            opacity: 0
        },
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                type: "spring",
                stiffness: 120,
                damping: 20
            } as any // Cast to any to avoid strict type mismatch with Variants
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate={assembled ? "visible" : "hidden"}
            variants={variants}
            className="z-50"
        >
            {children}
        </motion.div>
    );
}
