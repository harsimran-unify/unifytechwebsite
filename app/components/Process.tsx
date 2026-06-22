"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiEdit3, FiCode, FiCheckCircle, FiUpload } from "react-icons/fi";
import { fadeUpVariant, scaleRotateVariant, subtleScaleVariant } from "../animations";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: typeof FiEdit3;
  color: string;
  gradient: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Wireframing",
    description: "Thorough understanding of requirements through mind mapping, brainstorming, and concept testing.",
    icon: FiEdit3,
    color: "text-purple-400",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    number: "02",
    title: "Development",
    description: "Core development process with admin panel creation, performance testing, and quality assurance.",
    icon: FiCode,
    color: "text-blue-400",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure seamless performance and detect potential risks early.",
    icon: FiCheckCircle,
    color: "text-green-400",
    gradient: "from-green-500 to-green-600",
  },
  {
    number: "04",
    title: "Launch & Deployment",
    description: "Final deployment on target platforms with thorough verification of all deliverables.",
    icon: FiUpload,
    color: "text-pink-400",
    gradient: "from-pink-500 to-pink-600",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="py-20 md:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Development Process</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A streamlined, agile approach that ensures quality delivery at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 -translate-x-1/2 origin-top"
          />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number badge */}
                <motion.div
                  variants={scaleRotateVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-white font-bold text-lg"
                >
                  {step.number}
                </motion.div>

                {/* Content card */}
                <motion.div
                  variants={subtleScaleVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  whileHover={{ y: -5 }}
                  className="flex-1 max-w-md p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10 flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center ${step.color}`}>
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-zinc-400">{step.description}</p>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1 max-w-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
