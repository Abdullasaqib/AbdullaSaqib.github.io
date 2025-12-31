"use client";

import { useEffect, useRef } from "react";

export function SilentTracker() {
    const hasTracked = useRef(false);

    useEffect(() => {
        if (hasTracked.current) return;

        // Prevent tracking locally if desired, or duplicate tracking
        // For accurate session tracking, we usually do this once per session.
        const sessionKey = "visitor_session_" + new Date().toDateString();
        // if (sessionStorage.getItem(sessionKey)) return; // Commented out to test easier

        const trackVisitor = async () => {
            try {
                // Safely handle navigator properties
                const screenRes = typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : 'unknown';

                const fingerprint = {
                    screen: screenRes,
                    language: navigator.language,
                    referrer: document.referrer || "Direct",
                    timestamp: new Date().toISOString(),
                };

                await fetch("/api/track", {
                    method: "POST",
                    body: JSON.stringify(fingerprint),
                });

                sessionStorage.setItem(sessionKey, "true");
                hasTracked.current = true;
            } catch (err) {
                console.error("Silent tracking failed", err);
            }
        };

        // Delay slightly to ensure hydration
        const timer = setTimeout(trackVisitor, 2000);
        return () => clearTimeout(timer);
    }, []);

    return null; // Invisible component
}
