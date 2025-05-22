"use client";

import { FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WorkProcessSection() {
  return (
    <section className="my-24 px-4 lg:px-10 text-center" >
      <motion.h2
        className="text-4xl font-bold mb-6 text-white " id="workprocess"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Work Process
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        From initial discussion to final handover, my process ensures transparency, quality, and secure delivery.
      </motion.p>
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <a
          href="https://www.notion.so/Build-with-Paradox-1e54649f0294801bb02fd6e78a98f117"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent border border-blue-400 hover:shadow-blue-400/10 shadow-md hover:scale-105 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 backdrop-blur-lg"
        >
          <FaClipboardList className="text-blue-400 text-xl" />
          View My Process
        </a>
      </motion.div>
    </section>
  );
}
