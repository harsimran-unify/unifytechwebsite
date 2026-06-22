"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

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
  { name: "LinkedIn", icon: FiLinkedin, href: "#" },
  { name: "Twitter", icon: FiTwitter, href: "#" },
  { name: "Facebook", icon: FiFacebook, href: "#" },
  { name: "Instagram", icon: FiInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-zinc-400 mb-6">
            Get the latest updates on technology trends and company news.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-zinc-900">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">UNIFY</span>
              <span className="text-zinc-500">TECH</span>
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              Transforming businesses into brands with cutting-edge technology solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <FiMapPin className="flex-shrink-0 mt-0.5" size={16} />
                <span>Plot 10, World Tech Tower,<br />Sector 67, Mohali</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <FiPhone size={16} />
                <span>+1 (216) 503 2302</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-zinc-400">
                <FiMail size={16} />
                <span>info@unifytechsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-zinc-900">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Unify Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-zinc-500 hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
