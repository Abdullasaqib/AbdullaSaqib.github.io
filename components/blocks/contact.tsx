"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Copy, Mail } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "sasaqib151@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="container mx-auto px-4 py-24">
            <div className="relative mx-auto max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <GlassCard className="p-12" gradient>
                        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                            Let's Build the Future
                        </h2>
                        <p className="mb-8 text-lg text-zinc-400">
                            Open to exploring senior engineering roles and high-impact AI
                            projects.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <a
                                href={`mailto:${email}`}
                                className="group flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
                            >
                                <Mail className="h-5 w-5" />
                                <span>Contact Me</span>
                            </a>
                            <button
                                onClick={handleCopy}
                                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                            >
                                <span className={cn("transition-all", copied ? "text-green-400" : "")}>
                                    {email}
                                </span>
                                <Copy className={cn("h-4 w-4 transition-all", copied && "text-green-400 scale-110")} />
                            </button>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Glow effect behind contact */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-500/10 via-purple-500/5 to-transparent blur-3xl rounded-full opacity-50" />
            </div>
        </section>
    );
}
