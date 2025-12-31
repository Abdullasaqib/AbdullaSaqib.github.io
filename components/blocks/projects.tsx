"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { FloatingPanel } from "@/components/ui/floating-panel"; // Use our tilt logic
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { getTechIcon } from "@/components/ui/tech-icons";

export function Projects() {
    return (
        <section id="projects" className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Selected Works
                </h2>
                <p className="mt-4 text-zinc-400">
                    Real-world AI implementations delivering business value.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project, index) => {
                    const Icon = project.icon;
                    return (
                        <Link key={project.id} href={`/projects/${project.slug}`} className="block h-full">
                            <FloatingPanel intensity={8} className="h-full">
                                <GlassCard className="h-full flex flex-col p-8 bg-black/60 hover:bg-black/80 transition-colors group">
                                    <div className="mb-4 flex items-start justify-between">
                                        <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10 group-hover:bg-blue-500/20 group-hover:ring-blue-500/50 transition-all">
                                            <Icon className="h-6 w-6 text-zinc-300 group-hover:text-blue-400" />
                                        </div>
                                        <div className="flex gap-2">
                                            <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" />
                                        </div>
                                    </div>

                                    <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="mb-6 flex-grow text-sm leading-relaxed text-zinc-400 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => {
                                                const TechIcon = getTechIcon(tag);
                                                return (
                                                    <div
                                                        key={tag}
                                                        className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10 transition-colors group-hover:bg-white/10 group-hover:text-white"
                                                    >
                                                        <TechIcon className="h-3.5 w-3.5" />
                                                        <span>{tag}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </GlassCard>
                            </FloatingPanel>
                        </Link>
                    )
                })}
            </div>
        </section>
    );
}
