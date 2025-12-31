"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSuit } from "./suit-assembler";
import { Power, Fingerprint, Cpu, ShieldCheck } from "lucide-react";

export function Preloader() {
    const [step, setStep] = useState<"boot" | "scan" | "ready">("boot");
    const [bootLogs, setBootLogs] = useState<string[]>([]);
    const { assembled, initiateAssembly } = useSuit();
    const logContainerRef = useRef<HTMLDivElement>(null);

    const BOOT_SEQUENCE = [
        "INITIALIZING_KERNEL...",
        "LOADING_MODULES: [CPU, MEM, GPU]...",
        "MOUNTING_FILE_SYSTEM...",
        "ESTABLISHING_SECURE_UPLINK...",
        "SYNCING_NEURAL_PATHWAYS...",
        "OPTIMIZING_RENDER_ENGINE...",
        "CHECKING_INTEGRITY: OK",
        "ACCESS_REQUESTED..."
    ];

    useEffect(() => {
        // Prepare boot logs
        if (assembled) return;

        let delay = 0;
        BOOT_SEQUENCE.forEach((log, i) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setBootLogs(prev => [...prev, log]);
                if (logContainerRef.current) {
                    logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
                }
                if (i === BOOT_SEQUENCE.length - 1) {
                    setTimeout(() => setStep("scan"), 500);
                }
            }, delay);
        });
    }, [assembled]);

    useEffect(() => {
        if (step === "scan") {
            setTimeout(() => setStep("ready"), 2000);
        }
    }, [step]);

    if (assembled) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden cursor-crosshair">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />

            {/* Scanner Line */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="h-1 w-full bg-blue-500/20 blur-sm animate-scan-vertical" />
            </div>

            <div className="relative w-full max-w-2xl px-4 flex flex-col items-center gap-12 z-10">

                {/* Central Reactor / Scanner */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                    {/* Rotating Rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-spin-slow" />
                    <div className="absolute inset-4 rounded-full border border-blue-500/20 border-dashed animate-reverse-spin" />
                    <div className="absolute inset-10 rounded-full border-2 border-blue-500/10 animate-pulse" />

                    {/* Step Content */}
                    <AnimatePresence mode="wait">
                        {step === "boot" && (
                            <motion.div
                                key="boot"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <Cpu className="w-16 h-16 text-blue-500 animate-pulse" />
                                <span className="mt-4 text-xs font-mono text-blue-400 animate-pulse">BOOTING...</span>
                            </motion.div>
                        )}
                        {step === "scan" && (
                            <motion.div
                                key="scan"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                                className="relative flex items-center justify-center"
                            >
                                <Fingerprint className="w-24 h-24 text-red-500 animate-pulse" />
                                <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping" />
                                <span className="absolute -bottom-12 text-xs font-mono text-red-400">VERIFYING_BIOMETRICS</span>
                            </motion.div>
                        )}
                        {step === "ready" && (
                            <motion.div
                                key="ready"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center"
                            >
                                <ShieldCheck className="w-24 h-24 text-green-500 mb-4" />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={initiateAssembly}
                                    className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold font-mono tracking-widest rounded-sm overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <Power className="w-4 h-4" />
                                        ENTER_SYSTEM
                                    </span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Boot Logs */}
                <div
                    ref={logContainerRef}
                    className="w-full max-w-md h-32 overflow-hidden bg-black/50 border-l-2 border-blue-500/50 p-4 font-mono text-xs text-blue-400/80 leading-relaxed shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                >
                    {bootLogs.map((log, i) => (
                        <div key={i} className="truncate">
                            <span className="text-blue-500 mr-2">{`>`}</span>
                            {log}
                        </div>
                    ))}
                    <div className="animate-pulse">_</div>
                </div>
            </div>

            {/* Version Text */}
            <div className="absolute bottom-8 right-8 text-[10px] font-mono text-zinc-600">
                SYS.VER.4.2.0 // BUILD_2025
            </div>
        </div>
    );
}
