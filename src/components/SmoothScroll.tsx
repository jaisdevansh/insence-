"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => 1 - Math.pow(1 - t, 5),
            smoothWheel: true,
            syncTouch: false,
            touchMultiplier: 2,
            wheelMultiplier: 0.85,
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
