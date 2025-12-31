"use client";

import React, { useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface InteractiveDiagramProps {
    children: React.ReactNode;
    className?: string;
}

export function InteractiveDiagram({ children, className }: InteractiveDiagramProps) {
    return (
        <div className={`group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm ${className}`}>
            {/* Holographic Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />

            {/* Scanline Effect */}
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-10">
                <div className="h-full w-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px]" />
                <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
            </div>

            {/* Cybernetic Corner Accents */}
            <div className="absolute top-0 left-0 h-8 w-8 border-l-2 border-t-2 border-blue-500/50 rounded-tl-lg" />
            <div className="absolute top-0 right-0 h-8 w-8 border-r-2 border-t-2 border-blue-500/50 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 h-8 w-8 border-l-2 border-b-2 border-blue-500/50 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 h-8 w-8 border-r-2 border-b-2 border-blue-500/50 rounded-br-lg" />

            {/* HUD Status Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    SYSTEM_LINKED
                </div>
            </div>

            <TransformWrapper
                initialScale={0.9}
                minScale={0.5}
                maxScale={3}
                centerOnInit
                limitToBounds={false}
            >
                {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 p-1.5 rounded-full bg-black/80 border border-white/10 shadow-xl backdrop-blur-md">
                            <button
                                onClick={() => zoomIn()}
                                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all active:scale-95"
                                title="Zoom In"
                            >
                                <ZoomIn className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => zoomOut()}
                                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all active:scale-95"
                                title="Zoom Out"
                            >
                                <ZoomOut className="w-4 h-4" />
                            </button>
                            <div className="w-px h-4 bg-white/10 self-center mx-1" />
                            <button
                                onClick={() => resetTransform()}
                                className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-blue-400 transition-all active:scale-95"
                                title="Reset View"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        </div>

                        <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full flex items-center justify-center">
                            <div className="cursor-grab active:cursor-grabbing p-20 w-full h-full flex items-center justify-center filter drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                                {children}
                            </div>
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
}
