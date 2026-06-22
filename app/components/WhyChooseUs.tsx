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
import { staggerContainer, fadeUpVariant, scaleUpVariant, subtleScaleVariant } from "../animations";
import ScrollReveal from "./ScrollReveal";

interface Benefit {
  icon: typeof FiUsers;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

const benefits: Benefit[] = [
  {
    icon: FiUsers,
    title: "Experienced Team",
    description: "Skilled developers and designers with years of industry experience.",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    icon: FiSettings,
    title: "Customized Solutions",
    description: "Tailored solutions designed to meet your specific business requirements.",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    icon: FiClock,
    title: "On-Time Delivery",
    description: "Strict adherence to deadlines without compromising on quality.",
    color: "text-green-400",
    gradient: "from-green-500/20 to-transparent",
  },
  {
    icon: FiDollarSign,
    title: "Competitive Pricing",
    description: "Quality solutions at prices that deliver excellent ROI.",
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: FiAward,
    title: "Proven Track Record",
    description: "History of successful projects across various industries.",
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-transparent",
  },
  {
    icon: FiZap,
    title: "Latest Technology",
    description: "We stay updated with the latest tech stack and best practices.",
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    icon: FiHeadphones,
    title: "24/7 Support",
    description: "Round-the-clock support to address your concerns anytime.",
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-transparent",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Unify Tech</span>?
            </h2>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Choosing the right tech partner is crucial for your success.
              We combine expertise, innovation, and dedication to deliver
              solutions that exceed expectations.
            </p>

            {/* 5 D's highlight */}
            <motion.div
              variants={scaleUpVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700"
            >
              <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
                Our Services Revolve Around 5 D&apos;s
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Dedication", "Diligence", "Determination", "Development", "Deployment"].map((d, index) => (
                  <motion.span
                    key={d}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-zinc-800 text-white font-medium border border-zinc-700"
                  >
                    {d}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={subtleScaleVariant}
                whileHover={{ y: -5 }}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                    <benefit.icon size={20} className={benefit.color} />
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
