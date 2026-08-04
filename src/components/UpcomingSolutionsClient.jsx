"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Cpu,
  Sparkles,
  Zap,
  ShieldCheck,
  Scale,
  Stethoscope,
  Code2,
  TrendingUp,
  Eye,
  Layers,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Database,
  Lock,
  Server,
  Terminal,
  Flame,
  Activity,
  ChevronRight,
  Filter,
  Check,
  Send,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fineTunedModels = [
  {
    id: "quana-legal-70b",
    name: "Quana-Legal-70B",
    tagline: "High-precision legal reasoning & contract risk auditor",
    category: "Legal & Regulatory",
    badge: "Coming Q2 2026",
    baseModel: "Llama-3.3-70B Instruct",
    params: "70B Parameters",
    fineTuningTech: "Full Parameter SFT + LegalBench DPO",
    contextWindow: "128k Tokens",
    latency: "<45ms token response",
    accuracyGain: "+42% Legal Accuracy",
    icon: Scale,
    accentColor: "from-amber-500 to-yellow-600",
    glowColor: "rgba(245, 158, 11, 0.15)",
    description:
      "Trained on 400M+ tokens of multi-jurisdictional case law, statutory regulatory filings, and complex commercial agreements. Delivers clause-level liability scoring and instant redline drafting.",
    keyCapabilities: [
      "Automated contract risk scoring & redlining",
      "Statutory compliance checking (GDPR, HIPAA, SEC)",
      "Multi-jurisdictional precedent retrieval & synthesis",
      "Zero-hallucination citations to exact statutory clauses"
    ],
    samplePrompt: "Analyze this indemnity clause for hidden enterprise liabilities under California jurisdiction:",
    baseOutput: "The clause states that Party A indemnifies Party B against losses. It appears standard without specific limitations.",
    tunedOutput: "🚨 CRITICAL RISK DETECTED: Section 4.2 contains an uncapped indemnity obligation for indirect/consequential damages with no liability floor. Recommended Revision: Insert a $1M aggregate liability cap and exclude force majeure events per CA Civ. Code § 1668."
  },
  {
    id: "quana-med-13b",
    name: "Quana-Med-13B",
    tagline: "Clinical diagnostic assistant & medical literature synthesizer",
    category: "Healthcare & Life Sciences",
    badge: "Closed Beta Q2 2026",
    baseModel: "Qwen-2.5-14B",
    params: "14B Parameters",
    fineTuningTech: "Medical Instruction QLoRA + Clinical RLHF",
    contextWindow: "64k Tokens",
    latency: "<28ms token response",
    accuracyGain: "+48% USMLE Accuracy",
    icon: Stethoscope,
    accentColor: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.15)",
    description:
      "Fine-tuned on peer-reviewed PubMed articles, clinical notes, and diagnostic clinical guidelines. Features strict HIPAA-compliant privacy guardrails and differential diagnosis trees.",
    keyCapabilities: [
      "Differential diagnosis generation with likelihood ranks",
      "Pharmacological interaction & contraindication alerts",
      "Clinical SOAP note synthesis from patient voice logs",
      "Medline PubMed article summarization with Evidence Levels"
    ],
    samplePrompt: "Patient presents with progressive dyspnea, dry cough, and bilateral basilar crackles. High-resolution CT shows honeycomb pattern.",
    baseOutput: "The patient could have pneumonia, asthma, or lung inflammation. Recommend further blood work.",
    tunedOutput: "Primary Diagnostic Hypothesis: Idiopathic Pulmonary Fibrosis (IPF) [Confidence: 91%]. Supporting Features: Honeycomb fibrosis on HRCT + subpleural reticulation. Recommended Next Steps: PFTs (FVC & DLCO evaluation) and multidisciplinary ILD panel referral."
  },
  {
    id: "quana-code-34b",
    name: "Quana-Code-Instruct-34B",
    tagline: "Multi-language architectural coder & security auditor",
    category: "Software Engineering",
    badge: "Beta Q1 2026",
    baseModel: "DeepSeek-Coder-V2",
    params: "33B Active Params",
    fineTuningTech: "Synthetic Execution Guided DPO + AST SFT",
    contextWindow: "128k Tokens",
    latency: "<18ms token response",
    accuracyGain: "88.6% HumanEval Pass@1",
    icon: Code2,
    accentColor: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.15)",
    description:
      "Trained on over 2 Million audited production pull requests, security patches, and unit test suites. Specialized in zero-shot refactoring, memory leaks fix, and cloud-native architecture.",
    keyCapabilities: [
      "End-to-end repository refactoring & type-safety migration",
      "OWASP Top 10 vulnerability detection & automatic patches",
      "High-throughput test suite generation with 95%+ branch coverage",
      "Sub-20ms code completion engine integration"
    ],
    samplePrompt: "Identify memory leaks in this Rust async tokio worker queue channel loop:",
    baseOutput: "Make sure you close the channel when done so memory is released.",
    tunedOutput: "Fix: `tokio::sync::mpsc::UnboundedChannel` leaks memory under backpressure. Replace with bounded `channel(100)` and implement `try_send` backpressure buffering at line 42 to prevent unbounded heap allocations."
  },
  {
    id: "quana-finance-quant",
    name: "Quana-Finance-Quant-70B",
    tagline: "SEC filing analysis, earnings sentiment & algorithmic risk engine",
    category: "Finance & Quantitative",
    badge: "Coming Q3 2026",
    baseModel: "Llama-3.3-70B",
    params: "70B Parameters",
    fineTuningTech: "Financial Statement SFT + Market Sentiment DPO",
    contextWindow: "128k Tokens",
    latency: "<35ms token response",
    accuracyGain: "94.2% Financial QA",
    icon: TrendingUp,
    accentColor: "from-purple-500 to-violet-600",
    glowColor: "rgba(168, 85, 247, 0.15)",
    description:
      "Fine-tuned on 20+ years of 10-K, 10-Q SEC filings, quarterly earnings calls transcripts, and macroeconomic indicators. Extracts non-obvious operational risks and financial anomalies.",
    keyCapabilities: [
      "10-K Footnote extraction & off-balance-sheet liability identification",
      "Real-time audio/text earnings call tone & evasion metric scoring",
      "Automated financial ratio decomposition & stress testing",
      "Portfolio exposure analysis under macro rate shock scenarios"
    ],
    samplePrompt: "Compare debt covenants and maturity walls between Company A and B from 10-K Item 7:",
    baseOutput: "Both companies have long term debt listed in their balance sheets.",
    tunedOutput: "Company A faces a steep $450M maturity wall in Q4 2026 with a restrictive Net Debt/EBITDA covenant of 3.5x (current: 3.2x). Company B's maturities are laddered smoothly through 2031 at fixed 4.2% coupons."
  },
  {
    id: "quana-vision-v2",
    name: "Quana-Vision-Multimodal-14B",
    tagline: "Enterprise document OCR, blueprint parsing & visual chart reasoning",
    category: "Multimodal & Vision",
    badge: "Coming Q3 2026",
    baseModel: "Qwen-2-VL-72B / 14B",
    params: "14B Vision-LLM",
    fineTuningTech: "High-Res Spatial Document VQA + SFT",
    contextWindow: "32k Spatial Tokens",
    latency: "<40ms frame vision",
    accuracyGain: "92.4% DocVQA Score",
    icon: Eye,
    accentColor: "from-pink-500 to-rose-600",
    glowColor: "rgba(244, 63, 94, 0.15)",
    description:
      "Purpose-built for visual document understanding, complex schematics, medical imaging annotations, and financial chart reasoning without quality degradation.",
    keyCapabilities: [
      "Complex table & unstructured invoice spatial JSON extraction",
      "CAD schematic component tag parsing & bill-of-materials generation",
      "Handwritten historical document & signature verification",
      "Multi-page visual document cross-referencing"
    ],
    samplePrompt: "Extract table line items from this low-resolution scanned logistics invoice PDF image:",
    baseOutput: "Invoice contains item description and price list.",
    tunedOutput: "Extracted 14 Items [JSON format]: Item 001 (Part #A-9921) Qty: 500 @ $12.50 = $6,250.00. Tax: 8.5%. Subtotal validated. Discrepancy flag: Line 8 unit price deviates by +12% from purchase order #4401."
  },
  {
    id: "quana-omni-voice",
    name: "Quana-Omni-Voice-7B",
    tagline: "Ultra-low latency speech-to-speech empathy conversational model",
    category: "Customer Support & Voice",
    badge: "Closed Beta Q2 2026",
    baseModel: "Custom Native Audio-LLM",
    params: "7B Audio-Language",
    fineTuningTech: "End-to-End Native Speech SFT + Sentiment DPO",
    contextWindow: "32k Audio Tokens",
    latency: "<120ms total roundtrip",
    accuracyGain: "4.9/5 CSAT Score",
    icon: Bot,
    accentColor: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.15)",
    description:
      "Native speech-in, speech-out LLM eliminating latency from traditional STT -> LLM -> TTS pipelines. Handles interruptions, tone modulation, and empathetic customer resolutions.",
    keyCapabilities: [
      "Native end-to-end audio processing (no intermediate transcription loss)",
      "Real-time voice tone & acoustic sentiment adaptation",
      "Instant turn-taking with dynamic interruption handling",
      "Multi-lingual accent compensation in 40+ languages"
    ],
    samplePrompt: "Customer is frustrated about delayed shipping on order #9981.",
    baseOutput: "Hello. Your order is delayed. Please check tracking link.",
    tunedOutput: "[Calm & Empathetic Tone]: 'I completely understand how frustrating that delay is, Sarah. I've personally prioritized order #9981 with express carrier status, and credited $25 to your account right now. You'll receive live SMS updates.'"
  }
];

const categories = [
  "All",
  "Legal & Regulatory",
  "Healthcare & Life Sciences",
  "Software Engineering",
  "Finance & Quantitative",
  "Multimodal & Vision",
  "Customer Support & Voice"
];

const pipelineSteps = [
  {
    step: "01",
    title: "Domain Dataset Curation",
    description:
      "We aggregate millions of verified, domain-specific records—from legal case law and medical literature to production code repos—filtering out noise with automated deduplication & synthetic enhancement.",
    icon: Database
  },
  {
    step: "02",
    title: "Precision SFT & LoRA Fusion",
    description:
      "Using rank-stabilized QLoRA and full-parameter Supervised Fine-Tuning, we inject deep domain knowledge directly into attention projection matrices without degrading general reasoning abilities.",
    icon: Sliders
  },
  {
    step: "03",
    title: "DPO & Safety Alignment",
    description:
      "Direct Preference Optimization (DPO) aligns model responses with domain expert judgments, enforcing zero-hallucination constraints and strict enterprise compliance guardrails.",
    icon: ShieldCheck
  },
  {
    step: "04",
    title: "TensorRT-LLM 4-bit Quantization",
    description:
      "Models are compiled using AWQ / FP8 quantization with TensorRT-LLM and vLLM engines, delivering sub-50ms response latencies and 90% GPU memory efficiency for private deployment.",
    icon: Server
  }
];

const benchmarkComparison = [
  { metric: "Legal Clause Risk Precision", baseScore: "54%", quanaScore: "96.4%", gain: "+42.4%" },
  { metric: "Medical USMLE Clinical Board Score", baseScore: "68%", quanaScore: "94.8%", gain: "+26.8%" },
  { metric: "Code Generation Pass@1 (HumanEval)", baseScore: "67%", quanaScore: "88.6%", gain: "+21.6%" },
  { metric: "Financial 10-K Footnote Extraction", baseScore: "49%", quanaScore: "95.2%", gain: "+46.2%" },
  { metric: "DocVQA Visual Document Parsing", baseScore: "71%", quanaScore: "92.4%", gain: "+21.4%" },
  { metric: "Voice Customer Resolution CSAT", baseScore: "3.2/5", quanaScore: "4.9/5", gain: "+53.1%" }
];

export default function UpcomingSolutionsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModel, setActiveModel] = useState(fineTunedModels[0]);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedWaitlistModel, setSelectedWaitlistModel] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredModels =
    selectedCategory === "All"
      ? fineTunedModels
      : fineTunedModels.filter((m) => m.category === selectedCategory);

  const handleOpenWaitlist = (modelName = "") => {
    setSelectedWaitlistModel(modelName);
    setIsWaitlistOpen(true);
    setFormSubmitted(false);
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsWaitlistOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#030303] text-foreground pt-28 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 md:px-6 max-w-7xl mx-auto w-full pt-12 pb-16 text-center">
        {/* Glowing Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-pink-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Upcoming Solutions • Domain Fine-Tuned LLMs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          Bespoke Intelligence Fine-Tuned for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Enterprise Mastery
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          General LLMs know everything superficially. Our fine-tuned neural models are hyper-specialized for legal, clinical, quantitative, coding, and multimodal workflows—delivering sub-50ms latencies and zero-hallucination accuracy.
        </motion.p>

        {/* Hero Quick Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
        >
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">45%+</div>
            <div className="text-xs text-muted-foreground mt-1">Accuracy Boost vs Base LLMs</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">&lt;35ms</div>
            <div className="text-xs text-muted-foreground mt-1">Sub-50ms Inference Latency</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">100%</div>
            <div className="text-xs text-muted-foreground mt-1">Private VPC / On-Prem Deployment</div>
          </div>
          <div className="glass-card p-4 rounded-2xl border border-white/10 text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">90%</div>
            <div className="text-xs text-muted-foreground mt-1">Token Cost Reduction</div>
          </div>
        </motion.div>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 font-semibold shadow-lg shadow-white/10"
            onClick={() => handleOpenWaitlist("All Fine-Tuned Models")}
          >
            <Zap className="w-4 h-4 mr-2 text-black fill-black" />
            Request Early Beta Access
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-12 px-8 rounded-full border-white/20 hover:bg-white/5"
            asChild
          >
            <a href="#interactive-sandbox">
              <Terminal className="w-4 h-4 mr-2 text-blue-400" />
              Try Live Model Sandbox
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Model Showcase & Category Filter */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Upcoming Fine-Tuned Model Portfolio
            </h2>
            <p className="text-muted-foreground max-w-xl text-base">
              Filter through our custom neural models engineered for specialized enterprise performance.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Model Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model, idx) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="h-full"
              >
                <div
                  className="glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full border border-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 40px ${model.glowColor}`
                  }}
                >
                  {/* Subtle Top Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${model.accentColor}`}
                  />

                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-muted-foreground block">
                            {model.category}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {model.name}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-400 mb-4">
                      {model.badge}
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {model.description}
                    </p>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs bg-white/[0.02] p-3 rounded-xl border border-white/5">
                      <div>
                        <span className="text-muted-foreground block">Base Architecture</span>
                        <span className="font-semibold text-white">{model.baseModel}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Fine-Tuning Tech</span>
                        <span className="font-semibold text-white">{model.fineTuningTech}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Latency</span>
                        <span className="font-semibold text-emerald-400">{model.latency}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block">Accuracy Boost</span>
                        <span className="font-semibold text-blue-400">{model.accuracyGain}</span>
                      </div>
                    </div>

                    {/* Key Capabilities */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider block">
                        Capabilities
                      </span>
                      {model.keyCapabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setActiveModel(model);
                        const el = document.getElementById("interactive-sandbox");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                    >
                      Compare Output <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="rounded-full text-xs h-9 border-white/15 hover:bg-white/10"
                      onClick={() => handleOpenWaitlist(model.name)}
                    >
                      Join Waitlist
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Model Comparison Sandbox */}
      <section
        id="interactive-sandbox"
        className="py-20 px-4 md:px-6 max-w-7xl mx-auto w-full relative"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
            <Flame className="w-3.5 h-3.5" /> Interactive Sandbox Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Base LLM vs. Quana Fine-Tuned LLM
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Select a specialized model below to test how fine-tuning eliminates vagueness, inserts domain precision, and prevents dangerous hallucinations.
          </p>
        </div>

        {/* Model Selector Bar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {fineTunedModels.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveModel(m)}
              className={`px-4 py-2.5 rounded-2xl text-xs md:text-sm font-semibold transition-all border shrink-0 ${
                activeModel.id === m.id
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Comparison Console Window */}
        <div className="glass-card rounded-3xl p-6 md:p-10 border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-muted-foreground font-mono ml-2">
                sandbox://{activeModel.id}.quana.ai/eval
              </span>
            </div>
            <span className="text-xs text-blue-400 font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              {activeModel.category}
            </span>
          </div>

          {/* Sample Prompt Box */}
          <div className="mb-8 bg-white/5 p-4 rounded-2xl border border-white/10">
            <div className="text-xs font-mono text-muted-foreground mb-1 uppercase tracking-wider">
              Input Domain Prompt:
            </div>
            <div className="text-sm font-medium text-white italic">
              "{activeModel.samplePrompt}"
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard Base Model */}
            <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Generic Base Model Output ({activeModel.baseModel})
                </span>
                <span className="text-[10px] text-red-400/70 border border-red-500/20 px-2 py-0.5 rounded">
                  High Hallucination Risk
                </span>
              </div>
              <p className="text-sm text-red-200/90 leading-relaxed font-sans">
                {activeModel.baseOutput}
              </p>
            </div>

            {/* Quana Fine-Tuned Model */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 relative shadow-lg shadow-emerald-950/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Quana Fine-Tuned Output ({activeModel.name})
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                  {activeModel.latency}
                </span>
              </div>
              <p className="text-sm text-emerald-100 leading-relaxed font-sans font-medium">
                {activeModel.tunedOutput}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Matrix */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Empirical Benchmark Performance
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Verified evaluations against industry standard datasets showing accuracy improvements over off-the-shelf base models.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benchmarkComparison.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">{item.metric}</h4>
                <div className="flex items-end justify-between mb-2">
                  <div>
                    <span className="text-xs text-muted-foreground block">Base Model</span>
                    <span className="text-lg font-bold text-zinc-400">{item.baseScore}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-emerald-400 font-semibold block">Quana Tuned</span>
                    <span className="text-2xl font-extrabold text-white">{item.quanaScore}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Relative Gain</span>
                <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {item.gain}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fine-Tuning Pipeline Architecture */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" /> Technical Pipeline
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            How We Fine-Tune Enterprise LLMs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            From raw domain data ingestion to compiled TensorRT inference execution, our end-to-end training methodology guarantees zero leakage and maximum precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between group hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-white/20 font-mono">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Enterprise Deployment Options */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/15 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/20 relative overflow-hidden">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Flexible Enterprise Deployment Models
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Deploy fine-tuned weights on your private VPC, dedicated hardware, or fully managed cloud endpoint with SOC2 and HIPAA compliance built-in.
              </p>
              <Button
                className="w-fit rounded-full bg-white text-black hover:bg-white/90 font-semibold text-xs h-10 px-6"
                onClick={() => handleOpenWaitlist("Custom Enterprise Deployment")}
              >
                Schedule Architecture Review
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Server className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">On-Premises / Air-Gapped</h4>
                  <p className="text-xs text-muted-foreground">
                    Deploy GGUF / AWQ quantized weights directly on your local GPU clusters with zero external internet access required.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Lock className="w-6 h-6 text-purple-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Dedicated Private VPC</h4>
                  <p className="text-xs text-muted-foreground">
                    Isolated AWS / GCP / Azure instances with dedicated vLLM endpoints and encrypted parameter weights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <Sliders className="w-6 h-6 text-pink-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Bespoke Fine-Tuning Service</h4>
                  <p className="text-xs text-muted-foreground">
                    Provide your proprietary enterprise datasets; our AI engineers will build, benchmark, and deploy a custom model for your team.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">HIPAA & SOC2 Guardrails</h4>
                  <p className="text-xs text-muted-foreground">
                    Zero data retention guarantees, role-based access control, and complete audit logging on all inference requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Waitlist Section */}
      <section className="py-20 px-4 md:px-6 max-w-4xl mx-auto text-center w-full">
        <div className="glass-card p-10 md:p-16 rounded-3xl border border-white/15 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Be First to Deploy Fine-Tuned Intelligence
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8">
            Gain early beta access to our fine-tuned LLMs or request custom fine-tuning on your proprietary datasets.
          </p>

          <Button
            size="lg"
            className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-10 h-12 text-sm shadow-xl shadow-white/10"
            onClick={() => handleOpenWaitlist("Early Access Request")}
          >
            Join Early Beta Program <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Modal / Waitlist Form Drawer */}
      <AnimatePresence>
        {isWaitlistOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card w-full max-w-lg p-6 md:p-8 rounded-3xl border border-white/20 relative shadow-2xl bg-[#09090b]"
            >
              <button
                onClick={() => setIsWaitlistOpen(false)}
                className="absolute top-6 right-6 text-muted-foreground hover:text-white p-1 rounded-full bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Request Submitted!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                    Thank you! Our AI team will contact you shortly with early beta access details.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      Early Access Waitlist
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Access Quana Fine-Tuned Models
                    </h3>
                    {selectedWaitlistModel && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Selected Preference:{" "}
                        <span className="text-white font-semibold">
                          {selectedWaitlistModel}
                        </span>
                      </p>
                    )}
                  </div>

                  <form onSubmit={handleWaitlistSubmit} className="space-y-4 text-left">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Target Fine-Tuned Solution
                      </label>
                      <select
                        defaultValue={selectedWaitlistModel || "Quana-Legal-70B"}
                        className="w-full bg-[#141417] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Quana-Legal-70B">Quana-Legal-70B (Legal Risk)</option>
                        <option value="Quana-Med-13B">Quana-Med-13B (Clinical Assistant)</option>
                        <option value="Quana-Code-Instruct-34B">Quana-Code-Instruct-34B (Software Coder)</option>
                        <option value="Quana-Finance-Quant-70B">Quana-Finance-Quant-70B (Financial Analysis)</option>
                        <option value="Quana-Vision-Multimodal-14B">Quana-Vision-Multimodal-14B (Document OCR)</option>
                        <option value="Quana-Omni-Voice-7B">Quana-Omni-Voice-7B (Voice Conversational)</option>
                        <option value="Custom Enterprise Dataset">Bespoke Custom Dataset Fine-Tuning</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Preferred Deployment Setup
                      </label>
                      <select className="w-full bg-[#141417] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500">
                        <option>Managed Cloud API Endpoint</option>
                        <option>Dedicated Private VPC (AWS/Azure/GCP)</option>
                        <option>On-Premises / Local GPU Air-Gapped Weights</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-11 rounded-xl bg-white text-black hover:bg-white/90 font-bold text-sm mt-4 shadow-lg shadow-white/10"
                    >
                      Submit Waitlist Request <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
