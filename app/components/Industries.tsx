"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiActivity,
  FiShoppingCart,
  FiDollarSign,
  FiBookOpen,
  FiTruck,
  FiShare2,
  FiCoffee,
  FiAperture,
} from "react-icons/fi";

interface Industry {
  name: string;
  icon: typeof FiHeartbeat;
  description: string;
}

const industries: Industry[] = [
  { name: "Healthcare", icon: FiActivity, description: "Hospital management & telemedicine apps" },
  { name: "E-Commerce", icon: FiShoppingCart, description: "Marketplaces & retail platforms" },
  { name: "FinTech", icon: FiDollarSign, description: "Payment systems & trading platforms" },
  { name: "Education", icon: FiBookOpen, description: "E-learning & educational platforms" },
  { name: "Logistics", icon: FiTruck, description: "Fleet management & delivery tracking" },
  { name: "Social Media", icon: FiShare2, description: "Community & networking platforms" },
  { name: "Fitness", icon: FiAperture, description: "Health tracking & workout apps" },
  { name: "Food & Grocery", icon: FiCoffee, description: "Delivery platforms & restaurant apps" },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            With your vision and our innovation, we cater to the needs of diverse business niches.
          </p>
        </motion.div>

        {/* Industries grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -5, borderColor: "rgba(63, 63, 70, 0.5)" }}
              className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors flex items-center justify-center text-zinc-300 mb-4">
                <industry.icon size={24} />
              </div>
              <h3 className="font-semibold text-white mb-1">{industry.name}</h3>
              <p className="text-sm text-zinc-500">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
