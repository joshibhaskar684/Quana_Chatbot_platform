"use client";

import { motion } from "framer-motion";

export default function Technology() {
  return (
    <section className="py-32 relative overflow-hidden bg-black" id="technology">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-gradient"
          >
            Powered by next-generation <br className="hidden md:block" />
            AI technology
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Built on a custom neural architecture optimized for personal knowledge retrieval, 
            natural language understanding, and rapid deployment.
          </motion.p>
        </div>

        {/* Abstract Neural Network Visual */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full max-w-5xl mx-auto rounded-3xl border border-white/[0.05] bg-white/[0.01] overflow-hidden backdrop-blur-3xl shadow-2xl">
          <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0">
            {/* Grid Pattern */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            <g strokeWidth="1" fill="none">
              {/* Connecting Lines */}
              <motion.path 
                d="M100 250 C 250 100, 350 400, 500 250" 
                stroke="rgba(59,130,246,0.3)" 
                strokeWidth="2"
              />
              <motion.path 
                d="M100 250 C 250 100, 350 400, 500 250" 
                stroke="#3B82F6" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0px 0px 8px rgba(59,130,246,0.8))' }}
              />

              <motion.path 
                d="M500 250 C 600 150, 650 350, 700 250" 
                stroke="rgba(168,85,247,0.3)" 
                strokeWidth="2"
              />
              <motion.path 
                d="M500 250 C 600 150, 650 350, 700 250" 
                stroke="#A855F7" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0px 0px 8px rgba(168,85,247,0.8))' }}
              />

              <motion.path 
                d="M100 250 C 200 350, 400 100, 500 250" 
                stroke="rgba(34,211,238,0.3)" 
                strokeWidth="2"
              />
               <motion.path 
                d="M100 250 C 200 350, 400 100, 500 250" 
                stroke="#22D3EE" 
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                style={{ filter: 'drop-shadow(0px 0px 8px rgba(34,211,238,0.8))' }}
              />
            </g>

            {/* Glowing Nodes */}
            <g>
              <circle cx="100" cy="250" r="8" fill="#3B82F6" className="animate-pulse" />
              <circle cx="500" cy="250" r="12" fill="#8B5CF6" className="animate-pulse" style={{ animationDelay: "1s" }} />
              <circle cx="700" cy="250" r="8" fill="#22D3EE" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
              
              <circle cx="280" cy="180" r="4" fill="#60A5FA" />
              <circle cx="320" cy="320" r="5" fill="#C084FC" />
              <circle cx="620" cy="280" r="4" fill="#67E8F9" />
            </g>
          </svg>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
