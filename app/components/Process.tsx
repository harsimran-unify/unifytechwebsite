"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiEdit3, FiCode, FiCheckCircle, FiUpload } from "react-icons/fi";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: typeof FiEdit3;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Wireframing",
    description: "Thorough understanding of requirements through mind mapping, brainstorming, and concept testing.",
    icon: FiEdit3,
  },
  {
    number: "02",
    title: "Development",
    description: "Core development process with admin panel creation, performance testing, and quality assurance.",
    icon: FiCode,
  },
  {
    number: "03",
    title: "Quality Assurance",
    description: "Comprehensive testing to ensure seamless performance and detect potential risks early.",
    icon: FiCheckCircle,
  },
  {
    number: "04",
    title: "Launch & Deployment",
    description: "Final deployment on target platforms with thorough verification of all deliverables.",
    icon: FiUpload,
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            A streamlined, agile approach that ensures quality delivery at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number badge */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex-1 max-w-md p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-300">
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
