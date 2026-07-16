"use client"
import { Bot } from "lucide-react";
import AiModal from "../Modal/AiModal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AiBot(){
    const [openModal, setOpenModal] = useState(false);

    return(
        <>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenModal(true)} 
          className="cursor-pointer fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-2xl z-40 border border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow"
        >
          <Bot size={28} />
        </motion.button>

        <AiModal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    )
}