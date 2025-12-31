"use client";

import { use } from "react";
import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import { FloatingPanel } from "@/components/ui/floating-panel";
import { GlassCard } from "@/components/ui/glass-card";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";
import { InteractiveDiagram } from "@/components/ui/interactive-diagram";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const Icon = project.icon;

    return (
        <main className="relative min-h-screen overflow-hidden pb-20">
            {/* Background Ambience */}
            <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black" />
            <div className="fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                {/* Hero Section */}
                <section className="mb-20 mt-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 flex justify-center"
                    >
                        <div className="rounded-full bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-3xl">
                            <Icon className="h-8 w-8 text-white" />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6 text-4xl font-bold text-white md:text-6xl"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mb-8 max-w-2xl text-xl text-zinc-400"
                    >
                        {project.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-2"
                    >
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-white/5 px-3 py-1 text-sm text-zinc-300 ring-1 ring-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </section>

                {/* Content Grid */}
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview Card */}
                        <FloatingPanel intensity={5}>
                            <GlassCard className="p-8">
                                <h2 className="mb-4 text-2xl font-bold text-white">Project Overview</h2>
                                <p className="text-lg leading-relaxed text-zinc-300">
                                    {project.fullDescription}
                                </p>
                            </GlassCard>
                        </FloatingPanel>

                        {/* Workflow Diagram */}
                        {project.mermaidCode && (
                            <div className="space-y-2">
                                <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">System Architecture</h3>
                                <InteractiveDiagram className="h-[600px] w-full backdrop-blur-sm mt-4">
                                    <MermaidDiagram code={project.mermaidCode} title="" />
                                </InteractiveDiagram>
                                <p className="text-xs text-center text-zinc-600">
                                    Use mouse wheel to zoom • Drag to pan
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Key Features & Links */}
                    <div className="space-y-8">
                        <GlassCard className="p-6">
                            <h3 className="mb-4 text-lg font-bold text-white">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-zinc-300">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>

                        <div className="grid gap-4">
                            {project.github && (
                                <a href={project.github} className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-3 font-semibold text-white transition-colors hover:bg-white/20">
                                    <Github className="h-5 w-5" />
                                    View Source
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-black transition-transform hover:scale-105">
                                    <ExternalLink className="h-5 w-5" />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
