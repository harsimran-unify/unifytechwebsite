"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ text, className, delay }: TextRevealProps) {
  return (
    <motion.span
      className={"inline-block " + (className || "")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {text}
    </motion.span>
  );
}

export function CharReveal({ text, className, delay }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      className={"inline-block " + (className || "")}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {text}
    </motion.span>
  );
}
