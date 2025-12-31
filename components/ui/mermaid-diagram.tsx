"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { GlassCard } from "./glass-card";

mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
        darkMode: true,
        background: "transparent",
        primaryColor: "#000000", // Black nodes
        primaryTextColor: "#fff",
        primaryBorderColor: "#3b82f6", // Blue border
        lineColor: "#60a5fa", // Blue lines
        secondaryColor: "#1e1e1e",
        tertiaryColor: "#1e1e1e",
        fontFamily: "var(--font-space)",
        fontSize: "14px",
    },
});

interface MermaidDiagramProps {
    code: string;
    className?: string;
    title?: string;
}

export function MermaidDiagram({ code, className, title }: MermaidDiagramProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const renderDiagram = async () => {
            if (!code) return;
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                const { svg } = await mermaid.render(id, code);
                setSvg(svg);
                setError(false);
            } catch (err) {
                console.error("Mermaid failed to render", err);
                setError(true);
            }
        };

        renderDiagram();
    }, [code]);

    if (error) return null;

    return (
        <div className={`overflow-x-auto ${className}`}>
            {title && (
                <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500">
                    {title}
                </h4>
            )}
            <div
                ref={ref}
                dangerouslySetInnerHTML={{ __html: svg }}
                className="mermaid-svg-container min-w-[500px] flex justify-center"
            />
            {/* Custom CSS to inject into the SVG for neon glow */}
            <style jsx global>{`
                .mermaid-svg-container svg {
                    max-width: none !important;
                    height: auto;
                }
                .node rect, .node circle, .node polygon, .node path {
                    fill: rgba(0,0,0,0.8) !important;
                    stroke: #3b82f6 !important;
                    stroke-width: 2px !important;
                    filter: drop-shadow(0 0 5px rgba(59,130,246,0.5));
                }
                .edgePath .path {
                    stroke: #60a5fa !important;
                    stroke-width: 2px !important;
                    filter: drop-shadow(0 0 2px rgba(96,165,250,0.5));
                }
                .marker {
                    fill: #60a5fa !important;
                    stroke: #60a5fa !important;
                }
            `}</style>
        </div>
    );
}
