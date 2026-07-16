"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Bot, User, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AIPreview() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello. I am Alex's AI assistant. How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (messages.length === 2 && messages[1].role === "user") {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "ai", text: "I can help you schedule a meeting with Alex, answer questions about his recent projects, or provide his contact information. What would you like to know?" }
        ]);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSimulateChat = () => {
    if (messages.length === 1) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: "What can you do?" }
      ]);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="product">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">Your Personal AI Identity</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Give everyone access to your knowledge, availability, and personality, 24/7.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Browser Window Mockup */}
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="bg-black/40 px-4 py-3 border-b border-white/[0.05] flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-black/50 text-muted-foreground text-xs py-1.5 px-4 md:px-12 rounded-md flex items-center gap-2 border border-white/5 truncate max-w-[200px] md:max-w-xs">
                  <Lock size={12} className="shrink-0" /> <span className="truncate">quana.ai/alex</span>
                </div>
              </div>
              <div className="w-12 hidden md:block" />
            </div>

            {/* Chat Container */}
            <div className="h-[400px] flex flex-col p-4 md:p-6 bg-black/20">
              <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 md:gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 ${msg.role === "ai" ? "bg-blue-600 text-white" : "bg-muted text-muted-foreground"}`}>
                      {msg.role === "ai" ? <Bot size={16} /> : <User size={16} />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm max-w-[85%] md:max-w-[80%] ${msg.role === "ai" ? "bg-white/5 text-foreground rounded-tl-sm border border-white/5" : "bg-blue-600 text-white rounded-tr-sm"}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 md:gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 border border-white/10">
                      <Bot size={16} />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 rounded-tl-sm border border-white/5 flex items-center gap-2">
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                      <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="mt-6 flex gap-2">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border-white/10 focus-visible:ring-blue-600 h-12"
                  disabled={isTyping}
                />
                <Button 
                  onClick={handleSimulateChat}
                  disabled={isTyping || messages.length > 1}
                  size="icon"
                  className="h-12 w-12 bg-blue-600 hover:bg-blue-500 text-white border-0"
                >
                  <Send size={18} className={messages.length <= 1 ? "ml-0.5" : ""} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
