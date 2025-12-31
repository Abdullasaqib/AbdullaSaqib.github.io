"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./glass-card";

type Step = {
    id: string;
    label: string;
    description?: string;
};

export function WorkflowDiagram({ title, steps }: { title: string; steps: Step[] }) {
    return (
        <div className="w-full py-10">
            <h3 className="mb-8 text-center text-xl font-semibold text-zinc-300">
                {title}
            </h3>

            <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
                {/* Connecting Line (Horizontal on Desktop, Vertical on Mobile) */}
                <div className="absolute inset-0 flex justify-center md:items-center">
                    {/* Desktop Line */}
                    <div className="hidden h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent md:block" />
                    {/* Mobile Line */}
                    <div className="block h-full w-0.5 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent md:hidden" />
                </div>

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative z-10 w-full max-w-[200px]"
                    >
                        <GlassCard className="flex flex-col items-center p-6 text-center hover:bg-blue-900/10 transition-colors border-blue-500/20">
                            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-400 ring-1 ring-blue-500/50">
                                {index + 1}
                            </div>
                            <h4 className="mb-2 text-sm font-bold text-white">{step.label}</h4>
                            <p className="text-xs text-zinc-400">{step.description}</p>
                        </GlassCard>

                        {/* Arrow for direction (Desktop) */}
                        {index !== steps.length - 1 && (
                            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-blue-500/50">
                                →
                            </div>
                        )}
                        {/* Arrow for direction (Mobile) */}
                        {index !== steps.length - 1 && (
                            <div className="block md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-blue-500/50">
                                ↓
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
