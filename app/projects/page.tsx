"use client";

import { PROJECTS } from "@/lib/data";
import { FloatingPanel } from "@/components/ui/floating-panel";
import { GlassCard } from "@/components/ui/glass-card";
import { getTechIcon } from "@/components/ui/tech-icons";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[250px] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">
                        W.O.R.K
                    </div>
                    <div className="relative z-10">
                        <h1 className="text-5xl font-black text-white md:text-7xl mb-6">Selected <span className="text-blue-500">Deployments</span></h1>
                        <p className="text-zinc-400 text-lg">AI-driven platforms and engineering breakthroughs.</p>
                    </div>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, i) => (
                        <FloatingPanel key={project.id} intensity={15}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="h-full"
                            >
                                <Link href={`/projects/${project.slug}`} className="block h-full">
                                    <div className="group relative h-full overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">

                                        {/* Image Placeholder / Gradient Header */}
                                        <div className="h-48 bg-gradient-to-br from-blue-900/40 to-purple-900/40 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30 bg-center" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <project.icon className="w-20 h-20 text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500" />
                                            </div>

                                            {/* Status Badge */}
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 border border-white/20 rounded-full text-xs font-mono text-white backdrop-blur-md">
                                                DEPLOYED
                                            </div>
                                        </div>

                                        <div className="p-8 space-y-6">
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                                <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {/* Tech Stack Chips */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.slice(0, 4).map(tag => {
                                                    const Icon = getTechIcon(tag);
                                                    return (
                                                        <div key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-zinc-300 group-hover:border-white/10 transition-colors">
                                                            <Icon className="w-3.5 h-3.5" />
                                                            {tag}
                                                        </div>
                                                    )
                                                })}
                                                {project.tags.length > 4 && (
                                                    <div className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-zinc-500">
                                                        +{project.tags.length - 4}
                                                    </div>
                                                )}
                                            </div>

                                            {/* View Project Button */}
                                            <div className="pt-4 flex items-center text-sm font-bold text-blue-500 group-hover:translate-x-2 transition-transform">
                                                VIEW CASE STUDY <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </FloatingPanel>
                    ))}
                </div>
            </div>
        </main>
    )
}
