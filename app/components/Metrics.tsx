"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  FiCode,
  FiUsers,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

interface Metric {
  icon: typeof FiCode;
  value: number;
  label: string;
  suffix?: string;
}

const metrics: Metric[] = [
  { icon: FiCode, value: 150, label: "Projects Delivered", suffix: "+" },
  { icon: FiUsers, value: 100, label: "Happy Clients", suffix: "+" },
  { icon: FiCalendar, value: 5, label: "Years Experience", suffix: "+" },
  { icon: FiAward, value: 50, label: "Team Members", suffix: "+" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 mb-4 text-zinc-400">
                <metric.icon size={24} />
              </div>
              <div className="text-white mb-2">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-sm md:text-base text-zinc-500">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
