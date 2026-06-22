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
import { gridStagger, gridItemVariant, fadeUpVariant } from "../animations";
import ScrollReveal from "./ScrollReveal";

interface Service {
  icon: typeof FiSmartphone;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  iconColor: string;
}

const services: Service[] = [
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications tailored to your business needs.",
    features: ["iOS & Android", "React Native", "Flutter", "Hybrid Solutions"],
    gradient: "from-purple-500/10 to-purple-500/5",
    iconColor: "text-purple-400",
  },
  {
    icon: FiGlobe,
    title: "Web App Development",
    description: "Modern, responsive web applications built with cutting-edge frameworks.",
    features: ["React.js", "Next.js", "Vue.js", "Progressive Web Apps"],
    gradient: "from-blue-500/10 to-blue-500/5",
    iconColor: "text-blue-400",
  },
  {
    icon: FiPenTool,
    title: "UI/UX Designing",
    description: "Beautiful, intuitive interfaces that delight users and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-pink-500/10 to-pink-500/5",
    iconColor: "text-pink-400",
  },
  {
    icon: FiCpu,
    title: "IOT App Development",
    description: "Connected solutions for smart devices and IoT ecosystems.",
    features: ["Smart Home", "Industrial IoT", "Wearables", "Connectivity"],
    gradient: "from-green-500/10 to-green-500/5",
    iconColor: "text-green-400",
  },
  {
    icon: FiServer,
    title: "Enterprise Software",
    description: "Scalable enterprise solutions that streamline operations and boost productivity.",
    features: ["ERP Systems", "CRM Solutions", "Custom Software", "Cloud Integration"],
    gradient: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-400",
  },
  {
    icon: FiTrendingUp,
    title: "FinTech Development",
    description: "Secure, compliant financial technology solutions for the digital economy.",
    features: ["Payment Gateways", "Trading Platforms", "Blockchain", "Wallet Apps"],
    gradient: "from-cyan-500/10 to-cyan-500/5",
    iconColor: "text-cyan-400",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to transform your business
              and drive growth in the digital age.
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <motion.div
          variants={gridStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={gridItemVariant}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-800 group-hover:bg-zinc-700/50 transition-colors mb-4 ${service.iconColor}`}>
                  <service.icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700/50 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
