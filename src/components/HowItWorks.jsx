"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Design your AI",
    description: "Start by defining the core knowledge, capabilities, and boundaries of your AI assistant."
  },
  {
    num: "02",
    title: "Customize personality",
    description: "Fine-tune the tone, style, and unique characteristics that make the AI represent your brand."
  },
  {
    num: "03",
    title: "Share your AI",
    description: "Deploy your AI instantly with a custom link and integrate it anywhere you need."
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 relative bg-black" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">How Quana Works</h2>
          <p className="text-muted-foreground text-lg">Three simple steps to build your digital identity.</p>
        </div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          {/* Animated Vertical Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center justify-start md:justify-between ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Empty div for spacing on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                  
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-blue-500 md:-translate-x-1/2 -translate-x-2 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="ml-14 md:ml-0 md:w-5/12">
                    <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
                      <span className="text-blue-500 font-mono text-sm mb-3 block">{step.num}</span>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
