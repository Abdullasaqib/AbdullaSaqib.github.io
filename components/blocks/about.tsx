"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FloatingPanel } from "@/components/ui/floating-panel";
import { GlassCard } from "@/components/ui/glass-card";
import { Brain, Code2, Heart, Rocket, User } from "lucide-react";


import { ResumeGate } from "@/components/features/resume-gate";
import { useState } from "react";

// ... (keep imports)

export function About() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    const [isResumeOpen, setIsResumeOpen] = useState(false);

    return (
        <section id="about" ref={containerRef} className="relative py-32 px-4 overflow-hidden">
            <ResumeGate isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

            {/* ... (keep existing JSX content until the button) ... */}
            <div className="container mx-auto max-w-7xl">
                <motion.div style={{ opacity, y }} className="mb-20 text-center relative z-10">
                    <div className="inline-block mb-4 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-xs tracking-[0.2em] uppercase backdrop-blur-md">
                        Identity_Signature_Verified
                    </div>
                    <h2 className="text-5xl font-black text-white md:text-7xl tracking-tighter mb-8">
                        ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient-x">INTELLIGENCE</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-zinc-400 leading-relaxed">
                        My journey isn't just about code—it's about <span className="text-white font-semibold">bridging the gap</span> between abstract mathematical logic and tangible, human-centric user experiences.
                    </p>
                </motion.div>

                <div className="grid gap-16 lg:grid-cols-12">
                    {/* Left Column: Holographic Data Log */}
                    <div className="lg:col-span-7 space-y-8">
                        <FloatingPanel intensity={5}>
                            <GlassCard className="p-1 relative overflow-hidden group border-blue-500/20" gradient>
                                {/* Header Bar */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/10 flex items-center px-4 justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">origin_story.log</div>
                                </div>

                                <div className="p-8 pt-12 space-y-6 font-mono text-sm md:text-base leading-loose text-zinc-300">
                                    <p>
                                        <span className="text-blue-400">root@syed:~$</span> cat biography.txt
                                    </p>
                                    <p>
                                        I started my journey in the abstract world of <strong className="text-white bg-white/10 px-1">Mathematics (B.Sc.)</strong>, untangling complex logic and finding patterns in chaos. But I realized that equations on paper stay on paper, while <strong className="text-white bg-white/10 px-1">code builds worlds</strong>.
                                    </p>
                                    <p>
                                        Transitioning into tech, I didn't just learn to code; I learned to <strong className="text-purple-400">architect</strong>. From the precise logic of backend algorithms to the fluid dynamics of React frontends, I found my rhythm in Full Stack engineering.
                                    </p>
                                    <p className="border-l-2 border-blue-500 pl-4 py-2 bg-blue-500/5 text-blue-100">
                                        "Today, I sit at the bleeding edge of AI. I don't just use LLMs; I orchestrate them. I build systems where agents converse, learn, and execute tasks autonomously."
                                    </p>
                                </div>
                            </GlassCard>
                        </FloatingPanel>

                        {/* Philosophy Grid */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <GlassCard className="p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Brain className="w-16 h-16 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    Agentic Simplicity
                                </h4>
                                <p className="text-sm text-zinc-400">Complex AI systems should feel effortless to the user. I hide the complexity behind intuitive interfaces.</p>
                            </GlassCard>
                            <GlassCard className="p-6 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Heart className="w-16 h-16 text-white" />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                                    User Obsession
                                </h4>
                                <p className="text-sm text-zinc-400">If the user can't figure it out in 3 seconds, the design failed. I build for clarity and delight.</p>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Right Column: Mission Timeline */}
                    <div className="lg:col-span-5 relative pl-8 lg:pl-12">
                        {/* Laser Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

                        <div className="space-y-12">
                            <TimelineItem
                                year="2025 - Present"
                                role="Senior AI Engineer"
                                company="Learn with Leaders"
                                description="Architecting custom RAG pipelines and deploying autonomous multi-agent workflows."
                                icon={Rocket}
                                isActive
                            />
                            <TimelineItem
                                year="2025"
                                role="Senior Full Stack Eng"
                                company="CompetitivIA"
                                description="Built high-throughput scraping engines and enterprise dashboards using Next.js."
                                icon={Code2}
                            />
                            <TimelineItem
                                year="2020 - 2024"
                                role="B.Sc. Mathematics"
                                company="Gulbarga University"
                                description="Laid the rigorous logical foundation for algorithmic problem solving."
                                icon={Brain}
                            />
                        </div>

                        {/* Download Resume Button */}
                        <motion.button
                            onClick={() => setIsResumeOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-12 w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all group cursor-pointer"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-ping" />
                            Request Full Resume
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ year, role, company, description, icon: Icon, isActive }: any) {
    return (
        <div className={`relative group ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100 transition-opacity'}`}>
            <div className={`absolute -left-[45px] lg:-left-[61px] top-1 p-2 rounded-full bg-black border ${isActive ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]' : 'border-white/20'} text-white z-10`}>
                <Icon className="w-4 h-4" />
            </div>

            {/* Connector Line for active item */}
            {isActive && <div className="absolute -left-[30px] lg:-left-[46px] top-5 w-8 h-px bg-blue-500" />}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-zinc-300'}`}>{role}</h4>
                <span className="text-[10px] font-mono py-1 px-2 rounded bg-white/5 border border-white/10 text-zinc-400">{year}</span>
            </div>
            <div className="text-blue-400 font-medium mb-2 tracking-wide text-sm">{company}</div>
            <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>
    )
}
