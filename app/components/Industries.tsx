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
  FiAperture,
  FiCoffee,
} from "react-icons/fi";
import { gridStagger, gridItemVariant } from "../animations";

interface Industry {
  name: string;
  icon: typeof FiActivity;
  description: string;
  color: string;
  gradient: string;
}

const industries: Industry[] = [
  { name: "Healthcare", icon: FiActivity, description: "Hospital management & telemedicine apps", color: "text-red-400", gradient: "from-red-500/20 to-red-500/5" },
  { name: "E-Commerce", icon: FiShoppingCart, description: "Marketplaces & retail platforms", color: "text-orange-400", gradient: "from-orange-500/20 to-orange-500/5" },
  { name: "FinTech", icon: FiDollarSign, description: "Payment systems & trading platforms", color: "text-green-400", gradient: "from-green-500/20 to-green-500/5" },
  { name: "Education", icon: FiBookOpen, description: "E-learning & educational platforms", color: "text-blue-400", gradient: "from-blue-500/20 to-blue-500/5" },
  { name: "Logistics", icon: FiTruck, description: "Fleet management & delivery tracking", color: "text-yellow-400", gradient: "from-yellow-500/20 to-yellow-500/5" },
  { name: "Social Media", icon: FiShare2, description: "Community & networking platforms", color: "text-purple-400", gradient: "from-purple-500/20 to-purple-500/5" },
  { name: "Fitness", icon: FiAperture, description: "Health tracking & workout apps", color: "text-pink-400", gradient: "from-pink-500/20 to-pink-500/5" },
  { name: "Food & Grocery", icon: FiCoffee, description: "Delivery platforms & restaurant apps", color: "text-amber-400", gradient: "from-amber-500/20 to-amber-500/5" },
];

export default function Industries() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
            Industries We <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            With your vision and our innovation, we cater to the needs of diverse business niches.
          </p>
        </motion.div>

        {/* Industries grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={gridItemVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-zinc-700/50 transition-colors flex items-center justify-center mb-4 ${industry.color}`}>
                  <industry.icon size={24} />
                </div>
                <h3 className="font-semibold text-white mb-1">{industry.name}</h3>
                <p className="text-sm text-zinc-500">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
