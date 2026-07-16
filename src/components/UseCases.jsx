"use client";

import { motion } from "framer-motion";
import { UserCircle, Briefcase, Wand2, GraduationCap } from "lucide-react";

const useCases = [
  {
    title: "Personal Assistant",
    description: "Your AI that knows your style, schedule, and preferences. Perfect for handling emails, scheduling, and personal tasks.",
    icon: <UserCircle className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Business AI",
    description: "Automate customer conversations, support queries, and lead generation with an AI that perfectly understands your product.",
    icon: <Briefcase className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Creator AI",
    description: "Build your digital identity. Let your fans interact with a version of you that knows all your content and ideas.",
    icon: <Wand2 className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "Learning AI",
    description: "Your personal tutor that adapts to your learning style, tracks progress, and helps you master any subject faster.",
    icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
  }
];

export default function UseCases() {
  return (
    <section className="py-24 relative" id="use-cases">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">One platform, endless identities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Design AI for any purpose. Whether you're an individual, a creator, or a growing business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <div className="glass-card h-full p-6 md:p-10 rounded-3xl flex flex-col group hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                {/* Subtle gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
