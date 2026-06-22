"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiSmartphone,
  FiGlobe,
  FiPenTool,
  FiCpu,
  FiServer,
  FiTrendingUp,
} from "react-icons/fi";

interface Service {
  icon: typeof FiSmartphone;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications tailored to your business needs.",
    features: ["iOS & Android", "React Native", "Flutter", "Hybrid Solutions"],
  },
  {
    icon: FiGlobe,
    title: "Web App Development",
    description: "Modern, responsive web applications built with cutting-edge frameworks.",
    features: ["React.js", "Next.js", "Vue.js", "Progressive Web Apps"],
  },
  {
    icon: FiPenTool,
    title: "UI/UX Designing",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: FiCpu,
    title: "IOT App Development",
    description: "Connected solutions for smart devices and IoT ecosystems.",
    features: ["Smart Home", "Industrial IoT", "Wearables", "Connectivity"],
  },
  {
    icon: FiServer,
    title: "Enterprise Software",
    description: "Scalable enterprise solutions that streamline operations and boost productivity.",
    features: ["ERP Systems", "CRM Solutions", "Custom Software", "Cloud Integration"],
  },
  {
    icon: FiTrendingUp,
    title: "FinTech Development",
    description: "Secure, compliant financial technology solutions for the digital economy.",
    features: ["Payment Gateways", "Trading Platforms", "Blockchain", "Wallet Apps"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="services"
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business
            and drive growth in the digital age.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-800 group-hover:bg-zinc-700 transition-colors mb-4 text-zinc-300">
                <service.icon size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features tags */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
