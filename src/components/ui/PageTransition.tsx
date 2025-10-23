'use client';

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.5,
    ease: shouldReduceMotion ? "linear" : "easeOut",
  };

  const variants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition,
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
      transition,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
