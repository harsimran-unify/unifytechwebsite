"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, subtleScaleVariant } from "../animations";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Hemsworth",
    role: "Restaurant Owner",
    quote: "I partnered with Unify Technologies to get a mobile app developed for my restaurant. The company delivered exactly what was demonstrated and in fact better than the prototypes. Highly satisfied!",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    name: "Lathen Jones",
    role: "Fitness CEO",
    quote: "Unify Tech built an intuitive application for my fitness venture. They included every technological integration that I demanded. I look forward to getting more services from them.",
    gradient: "from-blue-500/20 to-blue-500/5",
  },
  {
    name: "Grayson Saverio",
    role: "Business Owner",
    quote: "Unify Technologies has shown commendable dedication to my project. As promised, they were available for follow-ups and kept me in the loop throughout my journey with them.",
    gradient: "from-pink-500/20 to-pink-500/5",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="testimonials"
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
            Client <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Client satisfaction is our destination. Here&apos;s what our partners say about us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={subtleScaleVariant}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

              {/* Quote icon */}
              <div className="relative z-10 absolute top-4 right-4 text-zinc-700">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.583c-.293 0-.586-.107-.807-.326C1.654 15.135 2.587 10.47 5.78 7.277c.98-.98 2.61-.98 3.59 0 .98.98.98 2.61 0 3.59-1.47 1.47-2.107 3.255-2.107 5.383 0 .854-.693 1.547-1.547 1.547-.393 0-.747-.147-1.02-.387l-1.113-1.113v1.286zm10.834 0c-.293 0-.586-.107-.807-.326-2.122-2.122-1.19-6.787 2.003-9.98.98-.98 2.61-.98 3.59 0 .98.98.98 2.61 0 3.59-1.47 1.47-2.107 3.255-2.107 5.383 0 .854-.693 1.547-1.547 1.547-.393 0-.747-.147-1.02-.387l-1.113-1.113v1.286z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
