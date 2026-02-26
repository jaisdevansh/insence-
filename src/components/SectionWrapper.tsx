"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionWrapper({ children, className = "" }: { children: ReactNode, className?: string }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.section>
    );
}
