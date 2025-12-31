"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanFace, Lock, Timer, Loader2 } from "lucide-react";

export function IdentityModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "" });

    useEffect(() => {
        // Check if already identified
        const hasIdentity = localStorage.getItem("visitor_identity");
        if (hasIdentity) return;

        // Trigger after 8 seconds of browsing
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Send to our tracking API
            await fetch("/api/track", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            // Save locally
            localStorage.setItem("visitor_identity", JSON.stringify(formData));

            // Success animation duration
            setTimeout(() => {
                setVerified(true);
                setTimeout(() => {
                    setIsOpen(false);
                }, 1500);
            }, 1000);

        } catch (error) {
            console.error("Identity capture failed", error);
            setIsOpen(false); // Close anyway
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative z-10 w-full max-w-md bg-black border border-red-500/30 p-1"
            >
                {/* Cyberpunk Decorative Borders */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-500" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-500" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500" />

                <div className="bg-zinc-900/50 p-6 relative overflow-hidden">
                    {/* Scan Line Animation */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="h-full w-full bg-[linear-gradient(transparent,rgba(239,68,68,0.1),transparent)] animate-scan-vertical" />
                    </div>

                    <div className="relative z-10 text-center space-y-6">
                        <div className="flex justify-center">
                            {verified ? (
                                <div className="p-4 rounded-full bg-green-500/20 border border-green-500/50">
                                    <ScanFace className="w-12 h-12 text-green-500" />
                                </div>
                            ) : (
                                <div className="p-4 rounded-full bg-red-500/20 border border-red-500/50 animate-pulse">
                                    <ScanFace className="w-12 h-12 text-red-500" />
                                </div>
                            )}
                        </div>

                        <div>
                            <h3 className={`text-xl font-bold font-mono ${verified ? "text-green-500" : "text-red-500"}`}>
                                {verified ? "IDENTITY VERIFIED" : "UNIDENTIFIED USER DETECTED"}
                            </h3>
                            <p className="text-xs text-zinc-500 font-mono mt-2">
                                {verified
                                    ? "ESTABLISHING SECURE CONNECTION..."
                                    : "SYSTEM PROTOCOL REQUIRES IDENTIFICATION FOR CONTINUED ACCESS."}
                            </p>
                        </div>

                        {!verified && (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    required
                                    type="text"
                                    placeholder="ENTER CODE NAME"
                                    className="w-full bg-black border border-red-500/30 p-2 text-red-400 font-mono text-center focus:outline-none focus:border-red-500"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="ENTER UPLINK ADDRESS (EMAIL)"
                                    className="w-full bg-black border border-red-500/30 p-2 text-red-400 font-mono text-center focus:outline-none focus:border-red-500"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                                <button
                                    disabled={isLoading}
                                    className="w-full bg-red-900/30 hover:bg-red-900/50 border border-red-500 text-red-500 py-2 font-mono text-sm tracking-widest transition-colors flex items-center justify-center gap-2"
                                >
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                                    AUTHENTICATE
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
