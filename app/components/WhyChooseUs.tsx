"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiUsers,
  FiSettings,
  FiClock,
  FiDollarSign,
  FiAward,
  FiZap,
  FiHeadphones,
} from "react-icons/fi";

interface Benefit {
  icon: typeof FiUsers;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: FiUsers,
    title: "Experienced Team",
    description: "Skilled developers and designers with years of industry experience.",
  },
  {
    icon: FiSettings,
    title: "Customized Solutions",
    description: "Tailored solutions designed to meet your specific business requirements.",
  },
  {
    icon: FiClock,
    title: "On-Time Delivery",
    description: "Strict adherence to deadlines without compromising on quality.",
  },
  {
    icon: FiDollarSign,
    title: "Competitive Pricing",
    description: "Quality solutions at prices that deliver excellent ROI.",
  },
  {
    icon: FiAward,
    title: "Proven Track Record",
    description: "History of successful projects across various industries.",
  },
  {
    icon: FiZap,
    title: "Latest Technology",
    description: "We stay updated with the latest tech stack and best practices.",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Round-the-clock support to address your concerns anytime.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Unify Tech</span>?
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Choosing the right tech partner is crucial for your success.
              We combine expertise, innovation, and dedication to deliver
              solutions that exceed expectations.
            </p>

            {/* 5 D's highlight */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                Our Services Revolve Around 5 D&apos;s
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Dedication", "Diligence", "Determination", "Development", "Deployment"].map((d) => (
                  <span
                    key={d}
                    className="px-4 py-2 rounded-full bg-zinc-800 text-white font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300">
                    <benefit.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-zinc-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
