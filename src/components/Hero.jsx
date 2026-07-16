"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 overflow-hidden px-4 md:px-6">
      {/* Background Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-6 md:gap-8 text-center lg:text-left pt-10 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80 backdrop-blur-md mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-50"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Quana AI 2.0 is live
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mx-auto lg:mx-0 max-w-2xl">
            The future of <br className="hidden md:block lg:block" />
            <span className="text-gradient">personal AI.</span>
          </h1>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
            Create, customize, and share your own AI experience. Built for scale, designed for ultimate precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2 md:mt-4 mx-auto lg:mx-0">
            <Link
              href="/create"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              Create Your AI
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/learn-more"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all text-center backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Right Column - Animated AI Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center w-full max-w-[500px] mx-auto"
        >
          {/* Subtle Glowing Orb backdrop */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 m-auto w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl -z-10"
          />
          
          {/* Neural Network SVG */}
          <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]" preserveAspectRatio="xMidYMid meet">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              style={{ originX: "50%", originY: "50%" }}
            >
              <circle cx="200" cy="200" r="160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 12" className="text-white/10" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
              
              <path d="M 200 80 L 140 160 L 260 160 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <path d="M 140 160 L 200 240 L 260 160" fill="none" stroke="rgba(59,130,246,0.5)" strokeWidth="1.5" />
              <path d="M 200 80 L 200 240" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <path d="M 100 200 L 300 200" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
              
              <circle cx="200" cy="80" r="5" fill="#60A5FA" />
              <circle cx="140" cy="160" r="6" fill="#3B82F6" className="animate-pulse" />
              <circle cx="260" cy="160" r="6" fill="#8B5CF6" className="animate-pulse" />
              <circle cx="200" cy="240" r="8" fill="#2563EB" />
              <circle cx="100" cy="200" r="4" fill="#A78BFA" />
              <circle cx="300" cy="200" r="4" fill="#60A5FA" />
              
              <motion.circle
                cx="140" cy="160" r="2.5" fill="#FFF"
                animate={{ cx: 200, cy: 80, opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="260" cy="160" r="2.5" fill="#FFF"
                animate={{ cx: 200, cy: 240, opacity: [1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.g>
            
            <circle cx="200" cy="200" r="24" fill="#2563EB" className="animate-pulse" />
            <circle cx="200" cy="200" r="32" fill="none" stroke="#3B82F6" strokeWidth="2" className="animate-ping" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
