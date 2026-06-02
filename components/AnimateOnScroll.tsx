"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variants?: Variants;
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  variants = defaultVariants,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={variants}
      transition={{ delay, duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
