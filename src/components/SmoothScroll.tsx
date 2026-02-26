"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.4, // Instant feel
            easing: (t) => 1 - Math.pow(1 - t, 2), // Very direct easing
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 3.5,
            wheelMultiplier: 1.6, // Greater distance per scroll
        });

        lenis.on("scroll", () => {
            window.dispatchEvent(new Event("scroll")); // sync with framer-motion if needed
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
