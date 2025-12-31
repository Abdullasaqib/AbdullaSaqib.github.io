"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, ShieldAlert, Loader2, Download } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

interface ResumeGateProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ResumeGate({ isOpen, onClose }: ResumeGateProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [accessGranted, setAccessGranted] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", org: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call / tracking
        try {
            await fetch("/api/track", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            // Artificial delay for "processing" effect
            setTimeout(() => {
                setAccessGranted(true);
                setIsLoading(false);

                // Trigger actual download after delay
                setTimeout(() => {
                    window.open("/resume.pdf", "_blank"); // Replace with actual path
                    onClose();
                }, 2000);
            }, 1500);

        } catch (error) {
            console.error("Tracking failed", error);
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative z-10 w-full max-w-md"
            >
                <GlassCard className={`p-8 border-2 ${accessGranted ? "border-green-500/50" : "border-red-500/50"}`} gradient>
                    <div className="text-center mb-8">
                        <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            {accessGranted ? (
                                <Unlock className="w-8 h-8 text-green-500 animate-pulse" />
                            ) : (
                                <Lock className="w-8 h-8 text-red-500" />
                            )}
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                            {accessGranted ? "ACCESS GRANTED" : "RESTRICTED AREA"}
                        </h2>
                        <p className="text-zinc-400 text-sm">
                            {accessGranted
                                ? "Downloading personnel file..."
                                : "Identity verification required to view sensitive documentation."}
                        </p>
                    </div>

                    {!accessGranted && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="CODENAME (Name)"
                                    required
                                    className="w-full bg-black/40 border border-white/10 p-3 rounded text-white placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none font-mono"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="CONTACT_UPLINK (Email)"
                                    required
                                    className="w-full bg-black/40 border border-white/10 p-3 rounded text-white placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none font-mono"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="AGENCY (Organization - Optional)"
                                    className="w-full bg-black/40 border border-white/10 p-3 rounded text-white placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none font-mono"
                                    value={formData.org}
                                    onChange={e => setFormData({ ...formData, org: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        VERIFYING...
                                    </>
                                ) : (
                                    <>
                                        <ShieldAlert className="w-4 h-4" />
                                        REQUEST CLEARANCE
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    {accessGranted && (
                        <div className="flex flex-col items-center justify-center py-4 text-green-500">
                            <Download className="w-8 h-8 animate-bounce mb-2" />
                            <span className="font-mono text-xs">TRANSFERRING DATA_PACKET...</span>
                        </div>
                    )}
                </GlassCard>
            </motion.div>
        </div>
    );
}
