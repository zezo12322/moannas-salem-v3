"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress({ color = "#F5A623" }: { color?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "right", backgroundColor: color }}
      className="fixed top-0 inset-x-0 h-[3px] z-[100]"
    />
  );
}
