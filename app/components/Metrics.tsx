"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FiCode,
  FiUsers,
  FiCalendar,
  FiAward,
} from "react-icons/fi";
import { subtleScaleVariant, staggerContainer } from "../animations";

interface Metric {
  icon: typeof FiCode;
  value: number;
  label: string;
  suffix?: string;
  color: string;
  bgGradient: string;
}

const metrics: Metric[] = [
  {
    icon: FiCode,
    value: 150,
    label: "Projects Delivered",
    suffix: "+",
    color: "text-purple-400",
    bgGradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: FiUsers,
    value: 100,
    label: "Happy Clients",
    suffix: "+",
    color: "text-pink-400",
    bgGradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    icon: FiCalendar,
    value: 5,
    label: "Years Experience",
    suffix: "+",
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: FiAward,
    value: 50,
    label: "Team Members",
    suffix: "+",
    color: "text-green-400",
    bgGradient: "from-green-500/20 to-green-500/5",
  },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2000;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(startValue + (value - startValue) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 bg-black border-y border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={subtleScaleVariant}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.bgGradient} border border-zinc-800 mb-4 ${metric.color}`}>
                <metric.icon size={28} />
              </div>
              <div className="text-white mb-2">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm md:text-base text-zinc-500">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
