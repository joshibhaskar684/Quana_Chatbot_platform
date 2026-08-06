"use client";

import { motion } from "framer-motion";
import { Brain, Link as LinkIcon, MessageSquareText, Globe2, Mic, Sparkles, AudioWaveform, Radio, Zap } from "lucide-react";

const features = [
  {
    title: "Personal AI",
    description: "Create an AI that perfectly represents you, your knowledge, and your unique personality.",
    icon: <Brain className="w-5 h-5 text-blue-400" />,
  },
  {
    title: "Custom AI Links",
    description: "Every AI gets a unique identity and customizable URL (e.g., quana.ai/yourname).",
    icon: <LinkIcon className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Intelligent Conversations",
    description: "Engage your audience with natural, context-aware AI interactions that feel human.",
    icon: <MessageSquareText className="w-5 h-5 text-purple-400" />,
  },
  {
    title: "Built For Everyone",
    description: "Whether for personal branding, business automation, or creative projects.",
    icon: <Globe2 className="w-5 h-5 text-emerald-400" />,
  }
];

const upcomingSolutions = [
  {
    title: "Fine-Tuned AI Voice Model",
    badge: "UPCOMING SOLUTION",
    icon: <Mic className="w-6 h-6 text-amber-400" />,
    description: "Ultra-realistic, low-latency AI voice models fine-tuned to your unique vocal cadence, tone, and multi-lingual pronunciations for seamless real-time voice conversations.",
    highlights: [
      "Sub-200ms Latency Real-Time Voice Streaming",
      "Vocal Cadence & Emotion Fine-Tuning",
      "Multi-lingual Accent & Pronunciation Matching",
      "Hands-Free Voice Interaction SDK"
    ],
    featured: true,
  },
  {
    title: "Autonomous Workflow Agents",
    badge: "IN DEVELOPMENT",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    description: "Goal-driven AI agents capable of executing multi-step complex workflows across external apps and databases autonomously.",
    highlights: [
      "Multi-Step API Execution",
      "Self-Correcting Reasoning Engine"
    ],
    featured: false,
  }
];

export default function Features() {
  return (
    <section className="py-24 relative" id="solutions">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Current Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="glass-card h-full p-6 md:p-8 rounded-2xl flex flex-col group hover:bg-white/[0.04] transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Solutions Showcase Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            NEXT-GEN ROADMAP
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
            Upcoming Solutions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover the next frontier of personal AI experiences currently in active development.
          </p>
        </div>

        {/* Upcoming Solutions Cards */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Featured Upcoming Solution: Fine-Tuned AI Voice Model */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-card p-8 md:p-10 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.05] via-transparent to-purple-500/[0.05] relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity">
              <AudioWaveform className="w-48 h-48 text-amber-400" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide">
                  {upcomingSolutions[0].badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  Voice AI Engine v3
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  {upcomingSolutions[0].icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {upcomingSolutions[0].title}
                </h3>
              </div>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {upcomingSolutions[0].description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-6 border-t border-white/10">
              {upcomingSolutions[0].highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-white/90">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Secondary Upcoming Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:border-white/20 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide">
                  {upcomingSolutions[1].badge}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  {upcomingSolutions[1].icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {upcomingSolutions[1].title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {upcomingSolutions[1].description}
              </p>
            </div>

            <div className="space-y-2 pt-6 border-t border-white/10">
              {upcomingSolutions[1].highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
