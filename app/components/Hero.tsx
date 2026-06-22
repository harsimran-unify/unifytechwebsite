"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { staggerContainer, fadeUpVariant, scaleUpVariant } from "../animations";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax effects for background elements
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);
  const gridOpacity = useTransform(scrollY, [0, 500], [0.3, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background with parallax */}
      <motion.div
        style={{ y: bgY, opacity: gridOpacity }}
        className="absolute inset-0 grid-pattern"
      />

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* Floating orbs for parallax */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, 150]) }}
        className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 1000], [0, -100]) }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32"
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
          <motion.span
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-zinc-400">Now accepting new projects</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Transforming Business into Brands with{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            TECH & INNOVATION
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariant}
          className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          We deliver premium IT solutions with cutting-edge technology.
          From mobile apps to enterprise software, we transform your vision
          into reality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Demo
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-medium border border-purple-500/30 text-purple-300 hover:border-purple-500 hover:text-purple-200 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPlay size={16} />
            View Our Work
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={scaleUpVariant}
          className="mt-16 pt-16 border-t border-zinc-800/50"
        >
          <p className="text-sm text-zinc-500 mb-6">Trusted by startups and enterprises</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50">
            {["Healthcare", "FinTech", "E-Commerce", "Education"].map((industry, index) => (
              <motion.span
                key={industry}
                className="text-zinc-400 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex items-start justify-center p-2"
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-purple-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
