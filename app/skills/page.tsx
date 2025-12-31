"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { getTechIcon } from "@/components/ui/tech-icons";
import { FloatingPanel } from "@/components/ui/floating-panel";

const SKILL_CATEGORIES = [
    {
        title: "AI & LLM Orchestration",
        skills: ["LangChain", "OpenAI API", "Pinecone", "RAG", "Prompt Engineering", "Hugging Face", "LlamaIndex"],
        description: "Building autonomous agents and knowledge retrieval systems."
    },
    {
        title: "Full Stack Development",
        skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion", "Redux"],
        description: "Crafting pixel-perfect, high-performance web applications."
    },
    {
        title: "Backend & Cloud",
        skills: ["Python", "FastAPI", "Flask", "Docker", "AWS", "MongoDB", "PostgreSQL", "Firebase"],
        description: "Architecting scalable APIs and microservices."
    },
    {
        title: "Techniques & Tools",
        skills: ["Git", "Cursor", "Replit", "Agile", "System Design", "WebSockets", "Selenium"],
        description: "The workflow and methodologies that power my speed."
    }
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[200px] font-black text-white/5 whitespace-nowrap pointer-events-none select-none z-0">
                        ARSENAL
                    </div>
                    <div className="relative z-10">
                        <span className="inline-block mb-4 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-xs tracking-[0.2em] uppercase backdrop-blur-md">
                            System_Capabilities_V9.0
                        </span>
                        <h1 className="text-5xl font-black text-white md:text-7xl mb-6 tracking-tighter">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">Arsenal</span>
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            The advanced weaponry I use to architect intelligent systems and bend silicon to my will.
                        </p>
                    </div>
                </motion.div>

                <div className="space-y-24">
                    {SKILL_CATEGORIES.map((category, i) => (
                        <div key={i} className="relative">
                            {/* Category Header with Tech Decor */}
                            <div className="flex items-end gap-6 mb-12 relative z-10">
                                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 uppercase tracking-tighter">
                                    {category.title}
                                </h2>
                                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent mb-4" />
                                <div className="hidden md:flex gap-1 mb-4">
                                    {[...Array(3)].map((_, k) => (
                                        <div key={k} className="w-2 h-2 rounded-sm bg-blue-500/30" />
                                    ))}
                                </div>
                            </div>

                            {/* Skills Grid - Masonryish */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill, j) => {
                                    const Icon = getTechIcon(skill);
                                    // Pseudo-random mastery level for visual flair
                                    const mastery = 85 + (skill.length * 2) % 15;

                                    return (
                                        <FloatingPanel key={skill} intensity={15}>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                                                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: j * 0.05 }}
                                                className="group relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 flex flex-col justify-between hover:bg-white/5 transition-all duration-500"
                                            >
                                                {/* Background Tech/Circuit Lines */}
                                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 group-hover:opacity-20 transition-opacity bg-[length:20px_20px]" />
                                                <div className="absolute -right-12 -top-12 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-purple-500/30 transition-colors" />

                                                {/* Top Row: Icon Name */}
                                                <div className="relative z-10 flex items-start justify-between">
                                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                                                        <Icon className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div className="text-[10px] font-mono text-zinc-500 group-hover:text-blue-400 transition-colors">
                                                        SYS.ID_{j + 1}
                                                    </div>
                                                </div>

                                                {/* Bottom Row: Name & Mastery */}
                                                <div className="relative z-10 space-y-3">
                                                    <h3 className="text-xl font-bold text-white tracking-wide group-hover:translate-x-2 transition-transform">{skill}</h3>

                                                    {/* Fake Mastery Bar */}
                                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${mastery}%` }}
                                                            transition={{ duration: 1, delay: 0.5 + (j * 0.1) }}
                                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                        />
                                                    </div>
                                                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                                                        <span>SYNCED</span>
                                                        <span>{mastery}%</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </FloatingPanel>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
