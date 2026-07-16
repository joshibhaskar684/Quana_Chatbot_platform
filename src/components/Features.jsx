"use client";

import { motion } from "framer-motion";
import { Brain, Link as LinkIcon, MessageSquareText, Globe2 } from "lucide-react";

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

export default function Features() {
  return (
    <section className="py-24 relative" id="solutions">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
      </div>
    </section>
  );
}
