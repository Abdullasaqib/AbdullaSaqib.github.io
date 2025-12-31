"use client";

import { FloatingPanel } from "@/components/ui/floating-panel";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Building2, Calendar, Globe, Cpu, ChevronRight, Zap } from "lucide-react";
import { useRef } from "react";

const EXPERIENCES = [
    {
        role: "Senior AI Engineer",
        company: "Learn with Leaders",
        period: "Dec 2025 – Present",
        description: "Spearheading the integration of Agentic AI into educational platforms.",
        tech: ["LangChain", "Pinecone", "Next.js"],
        achievements: [
            "Architected a custom RAG pipeline using LangChain & Pinecone to answer student queries from thousands of course documents.",
            "Deployed multi-agent workflows for automated assignment grading, reducing manual instructor load by 60%.",
            "Optimized LLM token usage, reducing API costs by 40% via caching and prompt compression."
        ]
    },
    {
        role: "Senior Full Stack Eng",
        company: "CompetitivIA",
        period: "Sep 2025 – Present",
        description: "Building the core intelligence platform for competitor analysis.",
        tech: ["Python", "Selenium", "D3.js"],
        achievements: [
            "Developed a high-throughput scraping engine using Python/Selenium to aggregate competitor data from web & social.",
            "Built the main dashboard using Next.js, visualizing market trends with D3.js.",
            "Implemented secure JWT authentication and Role-Based Access Control (RBAC) for enterprise clients."
        ]
    },
    {
        role: "AI Engineer / Program Lead",
        company: "Rise Smart Technology Institute",
        period: "Jan 2025 – Present",
        description: "Mentoring the next generation of AI developers and leading bootcamp programs.",
        tech: ["GenAI", "Fine-tuning", "Mentorship"],
        achievements: [
            "Designed curriculum for 'Generative AI for Developers' bootcamp.",
            "Mentored 50+ students in building their first RAG applications.",
            "Conducted workshops on Prompt Engineering and LLM Fine-tuning."
        ]
    },
    {
        role: "Freelance Full Stack Developer",
        company: "Self-Employed",
        period: "2024 – Jan 2025",
        description: "Delivered bespoke web and AI solutions for global clients.",
        tech: ["Shopify", "Node.js", "GPT-4"],
        achievements: [
            "E-Commerce: Built a custom Shopify Headless store using Next.js for a fashion brand, increasing load speed by 300%.",
            "Real Estate: Developed a CRM for a local agency to track leads and automate follow-up emails using Node.js.",
            "Legal Tech: Created a document summarization tool for a law firm using GPT-4 API to extract key clauses from contracts."
        ]
    }
];

export default function ExperiencePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <main ref={containerRef} className="min-h-screen pt-32 pb-40 px-4 overflow-hidden perspective-1000">
            {/* Ambient Matrix Rain (Simplified CSS) */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 flex justify-between px-10">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: `${i * 1.5}s` }} />
                ))}
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-32 text-center relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
                    <h1 className="relative text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 glitch-text" data-text="EXPERIENCE">
                        EXPERIENCE
                    </h1>
                    <p className="text-xl text-blue-400 font-mono tracking-[0.5em] uppercase">System_Logs_Access_Granted</p>
                </motion.div>

                <div className="relative">
                    {/* Central Power Conduit */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2 md:-translate-x-1/2 bg-zinc-900 border-x border-blue-500/30">
                        <div className="absolute inset-0 bg-blue-500/20 animate-pulse" />
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute top-0 left-0 right-0 bg-blue-500 origin-top shadow-[0_0_20px_#3b82f6]"
                        />
                    </div>

                    <div className="space-y-32">
                        {EXPERIENCES.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                                className={`relative flex flex-col md:flex-row gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Connector Arm */}
                                <div className="hidden md:block absolute top-12 left-1/2 w-16 h-1 bg-blue-500/50 -translate-x-1/2 z-0" style={{ transform: i % 2 === 0 ? "translateX(-100%)" : "translateX(0)" }}>
                                    <div className="absolute mx-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] animate-ping" style={{ left: i % 2 === 0 ? "0" : "100%" }} />
                                </div>

                                {/* Central Reactor Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-20">
                                    <div className="relative w-16 h-16 flex items-center justify-center bg-black rounded-full border-4 border-zinc-800 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                                        <Cpu className="text-blue-500 w-8 h-8 animate-pulse" />
                                        <div className="absolute inset-0 border-2 border-blue-500/50 rounded-full border-dashed animate-spin-slow" />
                                    </div>
                                </div>

                                {/* The Crazy Card */}
                                <div className="ml-16 md:ml-0 md:w-[45%]">
                                    <FloatingPanel intensity={20}>
                                        <div className="group relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                                            {/* Holographic Header */}
                                            <div className="relative h-24 bg-gradient-to-r from-blue-900/40 to-black p-6 flex items-center justify-between border-b border-white/10 overflow-hidden">
                                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
                                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-transparent w-full" />

                                                <div>
                                                    <div className="text-xs font-mono text-blue-400 mb-1 flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                        {exp.period}
                                                    </div>
                                                    <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                                                </div>
                                                <Building2 className="text-white/20 w-12 h-12" />
                                            </div>

                                            <div className="p-8 relative">
                                                {/* Tech Specs */}
                                                <div className="mb-6 flex flex-wrap gap-2">
                                                    {exp.tech.map(t => (
                                                        <span key={t} className="px-2 py-1 text-[10px] font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center text-white font-bold text-xl">
                                                        {exp.company.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm text-zinc-400">Organization</div>
                                                        <div className="text-white font-bold">{exp.company}</div>
                                                    </div>
                                                </div>

                                                <p className="text-zinc-300 mb-6 leading-relaxed border-l-2 border-blue-500/50 pl-4 bg-gradient-to-r from-blue-500/5 to-transparent py-2">
                                                    {exp.description}
                                                </p>

                                                <div className="space-y-4">
                                                    {exp.achievements.map((item, j) => (
                                                        <div key={j} className="flex gap-3 group/item">
                                                            <div className="mt-1 w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover/item:border-blue-500 transition-colors">
                                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                            </div>
                                                            <p className="text-sm text-zinc-400 group-hover/item:text-white transition-colors">
                                                                {item}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Decorative Scanline */}
                                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none translate-y-[-100%] group-hover:animate-scan" />
                                            </div>

                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500/50" />
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500/50" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500/50" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500/50" />
                                        </div>
                                    </FloatingPanel>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
