"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Check, X, Sparkles, HelpCircle, ArrowRight, Zap, Shield, Cpu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTA from "@/components/CTA";

export default function PricingClient() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const plans = [
    {
      name: "Starter",
      id: "starter",
      tagline: "Ideal for personal projects & early exploration",
      priceMonthly: 0,
      priceAnnual: 0,
      badge: null,
      isPopular: false,
      features: [
        "1 Custom AI Bot",
        "1,000 Messages / month",
        "Standard Response Time",
        "Web Widget Embedding",
        "Basic Analytics Dashboard",
        "Community Support",
      ],
      notIncluded: [
        "Custom Knowledge Base Uploads",
        "Slack & Discord Integration",
        "Remove Quana Branding",
        "API & Webhook Access",
      ],
      ctaText: "Get Started Free",
      ctaHref: "/get-started",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      id: "pro",
      tagline: "For creators, startups & growing businesses",
      priceMonthly: 1499,
      priceAnnual: 1199,
      badge: "Most Popular",
      isPopular: true,
      features: [
        "5 Custom AI Bots",
        "50,000 Messages / month",
        "Priority Response Latency",
        "Custom Knowledge Base (PDF, Docs, URLs)",
        "Multi-Platform (Slack, Discord, Web)",
        "Advanced CRM & Analytics",
        "Remove Quana Branding",
        "Priority Email Support",
      ],
      notIncluded: [
        "Dedicated API & Custom Webhooks",
        "Custom LLM Fine-Tuning",
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaHref: "/get-started?plan=pro",
      buttonVariant: "default",
    },
    {
      name: "Enterprise",
      id: "enterprise",
      tagline: "For organizations requiring maximum performance & control",
      priceMonthly: 3999,
      priceAnnual: 3199,
      badge: "Maximum Power",
      isPopular: false,
      features: [
        "Unlimited AI Bots",
        "250,000 Messages / month",
        "Sub-Second Response Latency",
        "Unlimited Custom Knowledge Base",
        "All Integrations (Slack, Discord, WhatsApp)",
        "Dedicated API & Custom Webhooks",
        "Custom Model Fine-Tuning",
        "SSO & Team Workspaces",
        "24/7 Dedicated Manager & SLA",
      ],
      notIncluded: [],
      ctaText: "Get Started Enterprise",
      ctaHref: "/contact?plan=enterprise",
      buttonVariant: "outline",
    },
  ];

  const comparisonCategories = [
    {
      category: "Usage & Limits",
      features: [
        { name: "Active AI Chatbots", starter: "1 Bot", pro: "5 Bots", enterprise: "Unlimited" },
        { name: "Monthly Included Messages", starter: "1,000", pro: "50,000", enterprise: "250,000+" },
        { name: "Knowledge Base Documents", starter: "5 MB", pro: "500 MB", enterprise: "Unlimited" },
        { name: "Team Seats", starter: "1 Seat", pro: "3 Seats", enterprise: "Unlimited" },
      ],
    },
    {
      category: "Channels & Integrations",
      features: [
        { name: "Web Chat Widget", starter: true, pro: true, enterprise: true },
        { name: "Slack & Discord Bots", starter: false, pro: true, enterprise: true },
        { name: "WhatsApp & Telegram", starter: false, pro: false, enterprise: true },
        { name: "Custom Domain Support", starter: false, pro: true, enterprise: true },
        { name: "REST API & Webhooks", starter: false, pro: false, enterprise: true },
      ],
    },
    {
      category: "Customization & AI",
      features: [
        { name: "Custom System Prompts", starter: true, pro: true, enterprise: true },
        { name: "Remove Quana Watermark", starter: false, pro: true, enterprise: true },
        { name: "Custom LLM Fine-Tuning", starter: false, pro: false, enterprise: true },
        { name: "Custom Brand Styling", starter: "Basic", pro: "Advanced", enterprise: "Full White-Label" },
      ],
    },
    {
      category: "Security & Support",
      features: [
        { name: "Data Encryption at Rest", starter: true, pro: true, enterprise: true },
        { name: "Analytics & Insights", starter: "Basic", pro: "Advanced", enterprise: "Custom Reports" },
        { name: "Support Channel", starter: "Community", pro: "Priority Email", enterprise: "24/7 Dedicated SLA" },
        { name: "SSO & SAML Authentication", starter: false, pro: false, enterprise: true },
      ],
    },
  ];

  const faqs = [
    {
      question: "Can I change or cancel my plan at any time?",
      answer: "Yes, absolutely! You can upgrade, downgrade, or cancel your subscription at any time directly from your account billing settings. If you upgrade, changes apply immediately, and unused time will be prorated.",
    },
    {
      question: "How does the 14-day free trial work for the Pro plan?",
      answer: "When you start a Pro trial, you get full access to all Pro features for 14 days without any upfront charge. You can cancel anytime during the trial if Quana isn't the right fit.",
    },
    {
      question: "What happens if I exceed my monthly message limit?",
      answer: "We will send you an email alert when you reach 80% and 100% of your plan's message allowance. Your AI will stay active, and you can either upgrade to a higher tier or purchase add-on message packs without service interruption.",
    },
    {
      question: "Can I connect my own OpenAI or Anthropic API key?",
      answer: "Yes! Both Pro and Enterprise plan subscribers can opt to bring their own API keys (BYOK), giving you direct control over your API usage costs and model selection.",
    },
    {
      question: "Do you offer custom pricing for non-profits or enterprise teams?",
      answer: "Yes, we offer special discounts for verified educational institutions, non-profits, and custom enterprise deployments. Please reach out through our contact page to discuss tailored options.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Background Spotlight Gradient */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[450px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 md:px-6 max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs md:text-sm font-medium text-blue-400 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Flexible & Transparent Pricing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-gradient"
        >
          Simple pricing for <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            every stage of growth.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Build and deploy powerful AI chatbots with total predictability. No hidden fees or surprise charges.
        </motion.p>

        {/* Monthly / Annual Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-inner"
        >
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              !isAnnual
                ? "bg-white text-black shadow-lg scale-100"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            Monthly Billing
          </button>
          
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              isAnnual
                ? "bg-white text-black shadow-lg scale-100"
                : "text-muted-foreground hover:text-white"
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-sm">
              SAVE 20%
            </span>
          </button>
        </motion.div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -6 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? "glass-card border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.2)] bg-gradient-to-b from-blue-950/20 via-white/[0.03] to-white/[0.01]"
                    : "glass-card hover:border-white/20"
                }`}
              >
                {/* Popular / Featured Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold tracking-wide shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">{plan.name}</h2>
                    <p className="text-xs md:text-sm text-muted-foreground leading-snug min-h-[40px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mb-8 flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-muted-foreground text-sm font-medium">
                      / month {isAnnual && price > 0 && <span className="text-xs text-blue-400 block">(billed annually)</span>}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      What&apos;s Included:
                    </p>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-white/90">
                        <div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400 mt-0.5 flex-shrink-0">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground/50 line-through">
                        <div className="p-0.5 rounded-full bg-white/5 text-muted-foreground/40 mt-0.5 flex-shrink-0">
                          <X className="w-4 h-4 stroke-[2]" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Link href={plan.ctaHref} className="w-full block">
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full py-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        plan.isPopular
                          ? "bg-white text-black hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                          : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Compare Plan Features
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Deep dive into the specs to find the exact configuration for your deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th className="py-6 px-6 text-lg font-semibold text-white w-2/5">Features</th>
                  <th className="py-6 px-4 text-base font-semibold text-white text-center w-1/5">Starter</th>
                  <th className="py-6 px-4 text-base font-semibold text-blue-400 text-center w-1/5 bg-blue-500/5">
                    Pro
                  </th>
                  <th className="py-6 px-4 text-base font-semibold text-white text-center w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {comparisonCategories.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-white/[0.03]">
                      <td colSpan={4} className="py-3 px-6 text-xs font-bold uppercase tracking-wider text-blue-400">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, featIdx) => (
                      <tr key={featIdx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 px-6 text-sm font-medium text-white/90">{feat.name}</td>
                        
                        {/* Starter Value */}
                        <td className="py-4 px-4 text-sm text-center">
                          {typeof feat.starter === "boolean" ? (
                            feat.starter ? (
                              <Check className="w-5 h-5 text-blue-400 mx-auto" />
                            ) : (
                              <span className="text-white/20">—</span>
                            )
                          ) : (
                            <span className="text-muted-foreground font-medium">{feat.starter}</span>
                          )}
                        </td>

                        {/* Pro Value */}
                        <td className="py-4 px-4 text-sm text-center bg-blue-500/[0.03]">
                          {typeof feat.pro === "boolean" ? (
                            feat.pro ? (
                              <Check className="w-5 h-5 text-blue-400 mx-auto stroke-[2.5]" />
                            ) : (
                              <span className="text-white/20">—</span>
                            )
                          ) : (
                            <span className="text-blue-300 font-semibold">{feat.pro}</span>
                          )}
                        </td>

                        {/* Enterprise Value */}
                        <td className="py-4 px-4 text-sm text-center">
                          {typeof feat.enterprise === "boolean" ? (
                            feat.enterprise ? (
                              <Check className="w-5 h-5 text-blue-400 mx-auto" />
                            ) : (
                              <span className="text-white/20">—</span>
                            )
                          ) : (
                            <span className="text-white font-medium">{feat.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-muted-foreground mb-4">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Everything you need to know about billing, subscription models, and limits.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base md:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? "rotate-180 bg-blue-500/20 text-blue-400" : "text-muted-foreground"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <div className="w-full">
        <CTA />
      </div>
    </div>
  );
}
