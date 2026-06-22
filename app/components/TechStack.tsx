"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUpVariant, gridStagger, gridItemVariant } from "../animations";

interface TechCategory {
  title: string;
  technologies: string[];
  accent: string;
  gradient: string;
}

const techStack: TechCategory[] = [
  {
    title: "Mobile Development",
    technologies: [
      "Swift",
      "Kotlin",
      "Objective-C",
      "Flutter",
      "React Native",
    ],
    accent: "text-purple-400",
    gradient: "border-purple-500/30",
  },
  {
    title: "Frontend",
    technologies: [
      "React.js",
      "Vue.js",
      "Angular",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    accent: "text-blue-400",
    gradient: "border-blue-500/30",
  },
  {
    title: "Backend",
    technologies: [
      "Node.js",
      "Python",
      "PHP",
      "Java",
      ".NET",
      "Go",
    ],
    accent: "text-green-400",
    gradient: "border-green-500/30",
  },
  {
    title: "Database & Cloud",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Google Cloud",
      "Azure",
      "Firebase",
    ],
    accent: "text-pink-400",
    gradient: "border-pink-500/30",
  },
];

export default function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We leverage the latest technologies to build scalable, secure, and
            high-performance solutions.
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techStack.map((category) => (
            <motion.div
              key={category.title}
              variants={gridItemVariant}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <h3 className={`text-lg font-semibold text-white mb-4 pb-3 border-b border-zinc-800 ${category.accent}`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-zinc-400 hover:text-zinc-300 transition-colors flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-${category.accent.split('-')[1]}-500`} />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
