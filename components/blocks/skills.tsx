"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Languages & Core",
        items: ["Python", "Node.js", "JavaScript/TypeScript", "SQL"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend & API",
        items: ["FastAPI", "Flask", "REST API Design", "Authentication"],
    },
    {
        category: "AI & LLMs",
        items: [
            "OpenAI API",
            "Claude API",
            "Gemini API",
            "LangChain",
            "RAG",
            "Prompt Engineering",
        ],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "Cursor", "Replit", "Antigravity", "Docker"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Technical Arsenal
                </h2>
                <p className="mt-4 text-zinc-400">
                    Production-grade stack for modern AI platforms.
                </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skills.map((skillGroup, index) => (
                    <GlassCard
                        key={skillGroup.category}
                        className="p-6"
                        gradient
                        style={{
                            // Staggered delay handled by parent usually, but simple here
                        }}
                    >
                        <h3 className="mb-4 text-lg font-semibold text-zinc-200">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item) => (
                                <SkillBadge key={item}>{item}</SkillBadge>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
    return (
        <motion.span
            whileHover={{ scale: 1.1, z: 20 }}
            className="inline-block cursor-default rounded-md bg-white/5 px-2.5 py-1 text-sm font-medium text-zinc-300 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white hover:ring-white/30"
        >
            {children}
        </motion.span>
    );
}
