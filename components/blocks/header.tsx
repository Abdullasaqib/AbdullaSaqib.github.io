"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "Work", href: "/projects" }, // Keeping projects listing on a separate page or section
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const [active, setActive] = useState("Home");

    useEffect(() => {
        // Logic to properly highlight parent items
        let current = "Home";

        // Find best match (longest matching prefix)
        // e.g. /projects/slug matches /projects better than /
        const match = items
            .filter(item => {
                if (item.href === "/") return pathname === "/"; // Exact match for Home
                return pathname?.startsWith(item.href);
            })
            .sort((a, b) => b.href.length - a.href.length)[0];

        if (match) {
            current = match.label;
        }

        setActive(current);
    }, [pathname]);

    // Render standard header, animation handled by SuitPart in layout
    return (
        <header className="w-full">
            <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-2 backdrop-blur-lg shadow-2xl">
                {items.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setActive(item.label)}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium transition-colors hover:text-white",
                            active === item.label ? "text-white" : "text-zinc-400"
                        )}
                    >
                        {active === item.label && (
                            <motion.div
                                layoutId="header-active"
                                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
