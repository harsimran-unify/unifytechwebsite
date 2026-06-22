"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { staggerContainer, fadeUpVariant } from "../animations";

const serviceLinks = [
  { name: "Web Development", href: "#services" },
  { name: "Mobile App Solutions", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "Enterprise Software", href: "#services" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Newsletter</span>
          </h2>
          <p className="text-zinc-400 mb-6">
            Get the latest updates on technology trends and company news.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-900">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand column */}
          <motion.div variants={fadeUpVariant}>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">UNIFY</span>
              <span className="text-purple-500">TECH</span>
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Transforming businesses into brands with cutting-edge technology solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500 transition-all"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm">{social.name[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services column */}
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company column */}
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <FiMapPin className="flex-shrink-0 mt-0.5 text-purple-400" size={16} />
                <span>Plot 10, World Tech Tower,<br />Sector 67, Mohali</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <FiPhone size={16} className="text-pink-400" />
                <span>+1 (216) 503 2302</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <FiMail size={16} className="text-blue-400" />
                <span>info@unifytechsolutions.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-zinc-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Unify Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
