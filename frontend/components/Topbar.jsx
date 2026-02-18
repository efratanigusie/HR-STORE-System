"use client";

import { motion } from "framer-motion";

export default function Topbar({ title }) {
  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-30
      bg-gradient-to-r from-[#0f172a] to-[#020617]
      border-b border-white/10
      px-6 py-4"
    >
      <h1 className="text-xl font-semibold text-white tracking-wide">
        {title}
      </h1>
    </motion.header>
  );
}
