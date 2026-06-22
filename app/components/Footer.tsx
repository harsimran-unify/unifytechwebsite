"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { staggerContainer, fadeUpVariant } from "../animations";

const serviceLinks = [
  { name: "Web Development", href: "#services" },
  { name: "Mobile App Development", href: "#services" },
  { name: "UI/UX Design", href: "#services" },
  { name: "Enterprise Software", href: "#services" },
  { name: "FinTech Development", href: "#services" },
  { name: "IoT Development", href: "#services" },
];

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Our Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact Us", href: "#contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: FiLinkedin, href: "#" },
  { name: "Twitter", icon: FiTwitter, href: "#" },
  { name: "Facebook", icon: FiFacebook, href: "#" },
  { name: "Instagram", icon: FiInstagram, href: "#" },
  { name: "YouTube", icon: FiYoutube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          {/* Brand column - 2 spans */}
          <motion.div variants={fadeUpVariant} className="lg:col-span-2">
            {/* Logo */}
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">UNIFY</span>
              <span className="text-purple-500">TECH</span>
            </h3>

            {/* Tagline */}
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Transforming businesses into brands with cutting-edge technology solutions. We deliver excellence through innovation and expertise.
            </p>

            {/* Contact Info */}
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 text-zinc-400">
                <FiMapPin className="flex-shrink-0 mt-1 text-purple-400" size={18} />
                <span className="text-sm">Plot 10, World Tech Tower, Sector 67, Mohali, Punjab</span>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <FiPhone size={18} className="text-pink-400" />
                <a href="tel:+12165032302" className="text-sm hover:text-purple-400 transition-colors">
                  +1 (216) 503 2302
                </a>
              </li>
              <li className="flex items-center gap-3 text-zinc-400">
                <FiMail size={18} className="text-blue-400" />
                <a href="mailto:info@unifytechsolutions.com" className="text-sm hover:text-purple-400 transition-colors">
                  info@unifytechsolutions.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                  aria-label={social.name}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services column */}
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company column */}
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal column */}
          <motion.div variants={fadeUpVariant}>
            <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Unify Tech Solutions. All rights reserved.
            </p>
            <p className="text-sm text-zinc-600">
              Made with ❤️ for innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
