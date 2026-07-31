"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  ExternalLink, 
  Github, 
  Mail, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Server,
  Cloud
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = {
  frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "Material UI", "HTML5/CSS3"],
  backend: ["Java", "Spring Boot", "Microservices Architecture", "RESTful APIs", "Spring AI", "Kafka", "Node.js"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"],
  devops: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD Pipelines", "Nginx", "Terraform", "Git & GitHub"]
};

const projects = [
  {
    title: "Quick – Cloud-Native E-Commerce Platform",
    category: "Full Stack & Microservices",
    description: "Scalable e-commerce platform featuring Next.js, Redux, Spring Boot microservices, Kafka event streaming, and Elasticsearch. Containerized with Docker, orchestrated via Kubernetes on AWS.",
    image: "https://www.quicksin.in/QuickLogo.png",
    link: "https://www.quicksin.in/",
    tags: ["Next.js", "Spring Boot", "Kafka", "AWS", "Kubernetes"]
  },
  {
    title: "Tasker – Event-Driven Task System",
    category: "Distributed Architecture",
    description: "Scalable task management platform built with Next.js, Redux, and Spring Boot microservices. Uses Kafka for event streaming and SMTP for real-time notifications.",
    image: "https://task.vhbuyio.in/Tasker.png",
    link: "#",
    tags: ["Spring Boot", "Kafka", "SQL", "Next.js", "SMTP"]
  },
  {
    title: "AI Chat Backend (Spring AI + Ollama)",
    category: "Local LLM Integration",
    description: "Privacy-first AI chat backend using Spring Boot, Spring AI, and Ollama to interact with locally hosted LLMs (Llama 3) with zero external API latency.",
    image: "https://ai.vhbuyio.in/AyiraAi.png",
    link: "https://github.com/joshibhaskar684/Spring-AI-Project-1",
    tags: ["Spring AI", "Ollama", "Llama 3", "Next.js", "Java"]
  }
];

export default function DeveloperPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-foreground flex flex-col selection:bg-blue-600/30">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Background Spotlight Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-900/15 blur-[160px] rounded-full pointer-events-none -z-10" />
        
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col items-start gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-400 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                Lead Developer & Architect
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-none text-gradient">
                Bhaskar Joshi
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-white/90">
                Software Engineer | Scalable Backend & Cloud Systems
              </p>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                I design and build scalable microservices using Java, Spring Boot, React, Next.js, and AWS, focusing on high performance, fault-tolerant reliability, and cloud-native architecture.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://bhaskarjoshi.quicksin.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
                >
                  <Globe className="w-4 h-4" />
                  Visit Portfolio
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href="https://github.com/joshibhaskar684"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Right Card - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl group">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 border border-white/10 bg-white/5">
                  <img 
                    src="https://joshibhaskar684.github.io/bhaskar_joshi/tcsprofile1.png" 
                    alt="Bhaskar Joshi"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bhaskar Joshi</h3>
                    <p className="text-sm text-blue-400 font-medium">Software Engineer & Architect</p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Technical Skills Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              Technical Stack & Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A breakdown of technologies powering high-concurrency microservices, AI systems, and modern web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Frontend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <ul className="space-y-2.5">
                {skills.frontend.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Backend & AI</h3>
              <ul className="space-y-2.5">
                {skills.backend.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Databases */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Databases</h3>
              <ul className="space-y-2.5">
                {skills.databases.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* DevOps */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2.5">
                {skills.devops.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </section>

        {/* Featured Projects */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
              Featured Architectures & Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world systems engineered for scalability, concurrency, and intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col group hover:border-white/20 transition-all"
              >
                <div className="relative w-full h-48 bg-white/5 overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white font-medium">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {proj.link !== "#" && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Live Portfolio Callout */}
        <section className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="glass-card p-10 md:p-16 rounded-3xl text-center relative overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 pointer-events-none" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Full Portfolio & Codebases
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
              Check out live deployments, architecture docs, and technical articles on Bhaskar Joshi's official site.
            </p>

            <a
              href="https://bhaskarjoshi.quicksin.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              Go to bhaskarjoshi.quicksin.in
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
