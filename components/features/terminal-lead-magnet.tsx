"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Wifi, ShieldAlert, CheckCircle2 } from "lucide-react";

export function TerminalLeadMagnet() {
    const [minimized, setMinimized] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const [email, setEmail] = useState("");
    const [step, setStep] = useState<"init" | "scanning" | "prompt" | "success">("init");
    const [visitorData, setVisitorData] = useState<any>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    // Initial Scan Sequence
    useEffect(() => {
        const sequence = async () => {
            // 1. Fetch Data (Silent)
            let data = { ip: "127.0.0.1", city: "Unknown", country: "Unknown" };
            try {
                // We use our own API to get the info reflected back
                // Or just use public IP API here for the 'show'
                const res = await fetch("http://ip-api.com/json/");
                const json = await res.json();
                if (json.status === "success") data = json;
            } catch (e) { }
            setVisitorData(data);

            // 2. Typewriter Effect
            const addLine = (line: string, delay: number) =>
                new Promise(resolve => setTimeout(() => {
                    setHistory(prev => [...prev, line]);
                    if (bottomRef.current) bottomRef.current.scrollTop = bottomRef.current.scrollHeight;
                    resolve(true);
                }, delay));

            setStep("scanning");
            await addLine("> INITIALIZING_SURVEILLANCE_NODE...", 1000);
            await addLine(`> DETECTED_IP: ${data.ip || "HIDDEN"}`, 800);
            await addLine(`> TRIANGULATING_SIGNAL... ${data.city?.toUpperCase()}, ${data.country?.toUpperCase()}`, 1200);
            await addLine("> CONNECTION_STRENGTH: UNSTABLE (72%)", 800);
            await addLine("> IDENTITY_PROTOCOL: FAILED", 1000);
            await addLine("> WARNING: ANONYMOUS TRAFFIC RESTRICTED.", 500);

            setStep("prompt");
        };

        const timer = setTimeout(sequence, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes("@")) return;

        // Send to backend
        await fetch("/api/track", {
            method: "POST",
            body: JSON.stringify({ email, type: "terminal_capture" })
        });

        setHistory(prev => [...prev, `> VALIDATING UPLINK: ${email}...`]);
        setTimeout(() => {
            setHistory(prev => [...prev, "> ACCESS_GRANTED. WELCOME_RECRUITER."]);
            setStep("success");
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`fixed bottom-4 left-4 z-50 w-full max-w-[320px] font-mono text-xs transition-all duration-500 ease-in-out ${minimized ? "h-10 overflow-hidden" : "h-auto"}`}
        >
            <div className="bg-black/90 backdrop-blur-md border border-blue-500/30 rounded-lg shadow-[0_0_20px_rgba(59,130,246,0.2)] overflow-hidden flex flex-col">

                {/* Header / Toggle */}
                <div
                    onClick={() => setMinimized(!minimized)}
                    className="flex items-center justify-between px-3 py-2 bg-blue-900/10 border-b border-blue-500/20 cursor-pointer hover:bg-blue-500/10 transition-colors"
                >
                    <div className="flex items-center gap-2 text-blue-400">
                        <Terminal className="w-3 h-3" />
                        <span className="tracking-widest font-bold">SYS.LOG</span>
                    </div>
                    <div className="flex gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${step === "success" ? "bg-green-500 animate-pulse" : "bg-red-500 animate-pulse"}`} />
                    </div>
                </div>

                {/* Content */}
                {!minimized && (
                    <div className="p-3 space-y-3">
                        {/* Wrapper for scrolling logs */}
                        <div
                            ref={bottomRef}
                            className="space-y-1 h-32 overflow-y-auto scrollbar-none text-zinc-400"
                        >
                            {history.map((line, i) => (
                                <div key={i} className={line.includes("WARNING") ? "text-red-400" : line.includes("ACCESS") ? "text-green-400" : ""}>
                                    {line}
                                </div>
                            ))}
                            {step === "prompt" && (
                                <div className="animate-pulse text-blue-400">_ AWAITING_INPUT</div>
                            )}
                        </div>

                        {/* Input Area */}
                        {step === "prompt" && (
                            <form onSubmit={handleSubmit} className="relative mt-2">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-500">{">"}</span>
                                <input
                                    autoFocus
                                    type="email"
                                    placeholder="ENTER_EMAIL_FOR_UPLINK"
                                    className="w-full bg-black/50 border border-blue-500/30 rounded px-6 py-2 text-blue-100 placeholder:text-blue-500/30 focus:outline-none focus:border-blue-500 text-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </form>
                        )}

                        {step === "success" && (
                            <div className="flex items-center gap-2 text-green-400 p-2 bg-green-500/10 rounded border border-green-500/20">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>UPLINK_ESTABLISHED</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
