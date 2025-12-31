"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experience = [
    {
        id: 1,
        company: "Learn with Leaders",
        role: "Senior AI Engineer",
        period: "Dec 2025 – Present",
        type: "Remote",
        description:
            "Designed and built AI-powered internal platforms automating workflows across marketing, operations, analytics, and customer engagement teams. Built internal dashboards and reporting tools to track KPIs and AI-driven business outcomes.",
        stack: ["FastAPI", "Python", "React", "OpenAI/Claude APIs"],
    },
    {
        id: 2,
        company: "CompetitivIA",
        role: "Senior AI Developer / Full Stack Engineer",
        period: "Oct 2025 – Present",
        type: "Remote (Andorra/France)",
        description:
            "Built and owned AI integration layers within product features using Python, FastAPI, and LLM APIs. Led technical execution while coordinating requirements and delivery across multiple teams.",
        stack: ["Next.js", "Python", "Unity Integration", "LLMs"],
    },
    {
        id: 3,
        company: "Rise Smart Technology Institute",
        role: "AI Engineer / Program Lead",
        period: "2025",
        type: "Hyderabad, India",
        description:
            "Built end-to-end AI applications combining frontend UI, backend APIs, and LLM services. Focused on practical system building rather than academic prototypes.",
        stack: ["End-to-End AI", "System Design", "Mentorship"],
    },
];

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section id="experience" ref={containerRef} className="container mx-auto px-4 py-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Experience
                </h2>
                <p className="mt-4 text-zinc-400">
                    Rapid execution in fast-moving environments.
                </p>
            </motion.div>

            <div className="relative mx-auto max-w-4xl">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent md:left-1/2 md:-translate-x-1/2" />

                <div className="space-y-12">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[20px] top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-zinc-500 bg-zinc-950 md:left-1/2 z-10">
                                <div className="absolute inset-0 rounded-full bg-zinc-400 opacity-20 animate-ping" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                                <GlassCard className="p-6 group transition-all hover:-translate-y-1 hover:border-zinc-700">
                                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                                        <h3 className="font-bold text-white group-hover:text-blue-200 transition-colors">
                                            {job.company}
                                        </h3>
                                        <span className="text-xs font-medium text-zinc-500 rounded-full bg-zinc-900 px-2 py-1 border border-zinc-800">
                                            {job.period}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <p className="text-sm font-medium text-blue-400">
                                            {job.role}
                                        </p>
                                        <p className="text-xs text-zinc-500">{job.type}</p>
                                    </div>
                                    <p className="text-sm leading-relaxed text-zinc-400">
                                        {job.description}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {job.stack.map(tech => (
                                            <span key={tech} className="text-[10px] text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Empty side for layout balance */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
