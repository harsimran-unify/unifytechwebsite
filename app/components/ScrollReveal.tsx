"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import {
  fadeUpVariant,
  fadeDownVariant,
  fadeLeftVariant,
  fadeRightVariant,
  scaleUpVariant,
  subtleScaleVariant,
  scaleRotateVariant,
} from "../animations";

type Direction = "up" | "down" | "left" | "right" | "scale" | "subtle" | "rotate";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  viewportMargin?: string;
}

// Direction to variant mapping
const getVariant = (direction: Direction) => {
  switch (direction) {
    case "up": return fadeUpVariant;
    case "down": return fadeDownVariant;
    case "left": return fadeLeftVariant;
    case "right": return fadeRightVariant;
    case "scale": return scaleUpVariant;
    case "subtle": return subtleScaleVariant;
    case "rotate": return scaleRotateVariant;
  }
};

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = false,
  viewportMargin = "-100px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: viewportMargin as "-100px" | "-50px" | "-200px" | "0px" | undefined,
  });

  const baseVariant = getVariant(direction);

  // Create custom variant with delay/duration overrides
  const customVariant = {
    hidden: baseVariant.hidden,
    visible: {
      ...(baseVariant.visible as object),
      transition: {
        ...(baseVariant.visible as { transition: { duration: number } }).transition,
        duration,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariant}
    >
      {children}
    </motion.div>
  );
}

// Staggered children wrapper
interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  once?: boolean;
  viewportMargin?: string;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  childDelay = 0.2,
  once = false,
  viewportMargin = "-100px",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: viewportMargin as "-100px" | "-50px" | "-200px" | "0px" | undefined,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
