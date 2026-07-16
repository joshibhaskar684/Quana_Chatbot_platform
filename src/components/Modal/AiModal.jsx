"use client";

import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AiModal({ openModal, setOpenModal }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi, I am Vincular AI Assistant. Ask me anything about certifications & compliance.",
    },
  ]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleClose = () => setOpenModal(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    
    const currentInput = input;
    setInput("");

    try {
      setLoading(true);
      const res = await axios.post("/api/chat", { message: currentInput });
      setMessages((prev) => [...prev, { role: "assistant", content: res.data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ Failed to fetch response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {openModal && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content - Mobile First: Bottom Sheet transitioning to Centered Dialog on md */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full h-[90vh] md:h-[85vh] md:max-w-3xl bg-background rounded-t-3xl md:rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Mobile Drag Handle */}
            <div className="w-full flex justify-center py-3 md:hidden">
              <div className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-4 md:px-6 md:py-5 md:pb-5 border-b border-border bg-background">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                  <Bot size={24} />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                    Vincular AI
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Compliance Assistant
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose} className="rounded-full h-8 w-8 md:h-10 md:w-10 text-muted-foreground hover:text-foreground">
                <X size={20} />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto px-4 py-6 md:px-6 md:py-8 space-y-6 bg-muted/10">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] md:max-w-[85%] rounded-2xl px-4 py-3 md:px-5 md:py-4 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm shadow-md"
                        : "bg-background text-foreground rounded-bl-sm border border-border shadow-sm"
                    }`}
                  >
                    <div className={`prose max-w-none prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border-border text-sm ${msg.role === "assistant" ? "prose-invert" : ""}`}>
                      <ReactMarkdown>
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-background border border-border px-5 py-4 rounded-2xl rounded-bl-sm shadow-sm">
                    <div className="flex gap-1.5 items-center h-5">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border-t border-border p-4 md:p-6 bg-background pb-6 md:pb-6">
              <div className="flex items-center gap-2 max-w-4xl mx-auto">
                <Input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage();
                  }}
                  placeholder="Ask about BIS, WPC, TEC..."
                  className="flex-1 rounded-xl h-12 md:h-14 bg-muted/50 border-border focus-visible:ring-primary focus-visible:ring-1"
                  disabled={loading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  size="icon"
                  className="h-12 w-12 md:h-14 md:w-14 rounded-xl shrink-0 bg-primary text-primary-foreground shadow-md hover:scale-105 transition-transform"
                >
                  <Send size={18} className={input.trim() ? "ml-0.5" : ""} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}