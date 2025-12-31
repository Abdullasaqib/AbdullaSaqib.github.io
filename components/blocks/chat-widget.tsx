"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, User } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { getBotResponse } from "@/lib/chat-logic";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    sender: "user" | "bot";
    text: string;
};

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            sender: "bot",
            text: "Hello! I'm Syed's AI Assistant. Ask me anything about his skills, projects, or experience.",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: inputValue,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate think time
        const responseText = getBotResponse(userMsg.text);
        const delay = Math.min(1000, Math.max(500, responseText.length * 20));

        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                sender: "bot",
                text: responseText,
            };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, delay);
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-colors hover:bg-blue-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <X className="h-6 w-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="bot"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                        >
                            <Bot className="h-7 w-7 text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 text-align-left w-[90vw] max-w-sm"
                    >
                        <GlassCard className="flex h-[500px] flex-col overflow-hidden border-blue-500/30 p-0 shadow-2xl">
                            {/* Header */}
                            <div className="flex items-center gap-2 border-b border-white/10 bg-blue-600/20 px-4 py-3 backdrop-blur-md">
                                <Sparkles className="h-4 w-4 text-blue-400" />
                                <span className="font-semibold text-white">AI Assistant</span>
                                <span className="ml-auto text-xs text-blue-300">Beta</span>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={cn(
                                            "flex w-full",
                                            msg.sender === "user" ? "justify-end" : "justify-start"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                                                msg.sender === "user"
                                                    ? "bg-blue-600 text-white rounded-br-none"
                                                    : "bg-white/10 text-zinc-200 rounded-bl-none"
                                            )}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="flex items-center gap-1 rounded-2xl rounded-bl-none bg-white/10 px-4 py-3">
                                            <motion.div
                                                className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.5, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                                            />
                                            <motion.div
                                                className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <form
                                onSubmit={handleSendMessage}
                                className="border-t border-white/10 bg-black/20 px-4 py-3"
                            >
                                <div className="relative flex items-center">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Ask about Syed..."
                                        className="w-full rounded-full bg-white/5 py-2 pl-4 pr-10 text-sm text-white placeholder-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-blue-500/50"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim()}
                                        className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white transition-opacity hover:bg-blue-500 disabled:opacity-50"
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </div>
                            </form>
                        </GlassCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
