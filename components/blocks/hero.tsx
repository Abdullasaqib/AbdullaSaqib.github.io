"use client";

import { FloatingPanel } from "@/components/ui/floating-panel";
import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Activity, Code2, Globe, Laptop, Terminal, Cpu } from "lucide-react";

function StatCard({ icon: Icon, label, value, color }: any) {
    return (
        <GlassCard className="flex items-center gap-4 p-4" gradient>
            <div className={`rounded-xl p-3 bg-opacity-20 ${color} text-white`}>
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider">{label}</div>
                <div className="text-lg font-bold text-white font-mono">{value}</div>
            </div>
        </GlassCard>
    );
}

export function Hero() {
    return (
        <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-32 pb-20 perspective-1000">
            <div className="container mx-auto max-w-6xl">
                <div className="grid gap-8 lg:grid-cols-12">

                    {/* Main Identity Box */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <FloatingPanel intensity={15}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, type: "spring" }}
                                className="relative z-10"
                            >
                                <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl mix-blend-screen animate-pulse" />

                                <h1 className="font-display text-6xl font-black tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl mb-6 leading-[0.85]">
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 hover:text-blue-500 transition-colors duration-500">SYED</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-white hover:text-purple-500 transition-colors duration-500 ml-12 md:ml-24">ABDULLAH</span>
                                    <span className="block text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:text-white transition-colors duration-500">SAQIB</span>
                                </h1>

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-px w-20 bg-blue-500/50" />
                                    <span className="font-mono text-sm text-blue-400 tracking-[0.3em] uppercase">System Online</span>
                                    <div className="h-px w-full max-w-[200px] bg-gradient-to-r from-blue-500/50 to-transparent" />
                                </div>

                                <h2 className="text-2xl font-light text-zinc-300 md:text-3xl max-w-2xl leading-relaxed backdrop-blur-sm">
                                    Architecting <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">Intelligent Systems</span> <br />
                                    & <span className="text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">Agentic AI</span>
                                </h2>

                                <p className="mt-8 text-zinc-400 max-w-xl text-lg border-l-2 border-white/20 pl-4">
                                    Senior Full Stack Developer specializing in API-first design, LLM orchestration, and high-performance production systems.
                                </p>
                            </motion.div>
                        </FloatingPanel>
                    </div>

                    {/* Holographic Stats Dashboard */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <FloatingPanel intensity={20} className="h-full">
                            <div className="grid gap-4 h-full content-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <StatCard icon={Terminal} label="Stack" value="Full Stack + AI" color="bg-blue-500" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <StatCard icon={Activity} label="Experience" value="Senior Level" color="bg-green-500" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <StatCard icon={Cpu} label="Focus" value="LLM & RAG" color="bg-purple-500" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <StatCard icon={Globe} label="Base" value="Hyd, India" color="bg-orange-500" />
                                </motion.div>
                            </div>
                        </FloatingPanel>
                    </div>
                </div>
            </div>

            {/* Ambient Elements */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
        </section>
    );
}
