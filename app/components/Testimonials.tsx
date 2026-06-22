"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Michael Hemsworth",
    role: "Restaurant Owner",
    quote: "I partnered with Unify Technologies to get a mobile app developed for my restaurant. The company delivered exactly what was demonstrated and in fact better than the prototypes. Highly satisfied!",
  },
  {
    name: "Lathen Jones",
    role: "Fitness CEO",
    quote: "Unify Tech built an intuitive application for my fitness venture. They included every technological integration that I demanded. I look forward to getting more services from them.",
  },
  {
    name: "Grayson Saverio",
    role: "Business Owner",
    quote: "Unify Technologies has shown commendable dedication to my project. As promised, they were available for follow-ups and kept me in the loop throughout my journey with them.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Client satisfaction is our destination. Here&apos;s what our partners say about us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-zinc-800">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.583c-.293 0-.586-.107-.807-.326C1.654 15.135 2.587 10.47 5.78 7.277c.98-.98 2.61-.98 3.59 0 .98.98.98 2.61 0 3.59-1.47 1.47-2.107 3.255-2.107 5.383 0 .854-.693 1.547-1.547 1.547-.393 0-.747-.147-1.02-.387l-1.113-1.113v1.286zm10.834 0c-.293 0-.586-.107-.807-.326-2.122-2.122-1.19-6.787 2.003-9.98.98-.98 2.61-.98 3.59 0 .98.98.98 2.61 0 3.59-1.47 1.47-2.107 3.255-2.107 5.383 0 .854-.693 1.547-1.547 1.547-.393 0-.747-.147-1.02-.387l-1.113-1.113v1.286z"/>
                </svg>
              </div>

              {/* Content */}
              <p className="text-zinc-300 mb-6 leading-relaxed relative">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
