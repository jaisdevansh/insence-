"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8, // Faster scroll duration (was 1.5)
            easing: (t) => 1 - Math.pow(1 - t, 4), // Slightly more direct easing
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 2.5, // Faster touch response
            wheelMultiplier: 1.1, // Increase distance per wheel scroll (was 0.85)
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
