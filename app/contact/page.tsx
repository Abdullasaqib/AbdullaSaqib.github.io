"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid gap-8 md:grid-cols-2 items-center"
                >
                    {/* Left: Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl font-bold text-white mb-4">Let's Build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Something Crazy.</span></h1>
                            <p className="text-zinc-400 text-lg">
                                Ready to bring your AI ideas to life? I'm available for freelance projects and full-time opportunities.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:sasaqib151@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-blue-500/20 text-blue-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Email</div>
                                    <div className="text-white font-mono group-hover:text-blue-400 transition-colors">sasaqib151@gmail.com</div>
                                </div>
                            </a>

                            <a href="tel:+919030801636" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="p-3 rounded-full bg-green-500/20 text-green-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Phone</div>
                                    <div className="text-white font-mono group-hover:text-green-400 transition-colors">+91 9030801636</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Location</div>
                                    <div className="text-white font-mono">Hyderabad, India</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <SocialButton icon={Github} label="GitHub" href="https://github.com/Abdullasaqib" />
                            <SocialButton icon={Linkedin} label="LinkedIn" href="https://linkedin.com/in/sasaqib" />
                        </div>
                    </div>

                    {/* Right: Interactive Form (Visual Only) */}
                    {/* Right: Interactive Form (Secure Uplink) */}
                    <GlassCard className="p-8 space-y-6 relative overflow-hidden border-blue-500/30">
                        {/* Scanline overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20" />

                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono text-blue-400 animate-pulse">● ENCRYPTED CONNECTION</span>
                            <span className="text-xs font-mono text-zinc-500">SECURE_V4.2</span>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-blue-300 uppercase tracking-widest pl-1">Agent Name</label>
                            <input type="text" placeholder="ENTER_IDENTITY..." className="w-full bg-black/60 border border-blue-500/20 rounded-none p-4 text-white font-mono placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-blue-300 uppercase tracking-widest pl-1">Contact Frequency (Email)</label>
                            <input type="email" placeholder="user@netscape..." className="w-full bg-black/60 border border-blue-500/20 rounded-none p-4 text-white font-mono placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono text-blue-300 uppercase tracking-widest pl-1">Mission Brief</label>
                            <textarea placeholder="// Initialize message sequence..." rows={4} className="w-full bg-black/60 border border-blue-500/20 rounded-none p-4 text-white font-mono placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all resize-none" />
                        </div>
                        <button className="w-full py-4 relative overflow-hidden group bg-blue-600 hover:bg-blue-500 transition-all clip-path-polygon">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-30" />
                            <span className="relative z-10 flex items-center justify-center gap-2 font-mono font-bold tracking-widest text-white">
                                <Send className="w-4 h-4" />
                                ESTABLISH_UPLINK
                            </span>
                        </button>
                    </GlassCard>
                </motion.div>
            </div>
        </main>
    )
}

function SocialButton({ icon: Icon, href, label }: any) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
        </a>
    )
}
