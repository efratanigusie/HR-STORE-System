"use client";

import { motion } from "framer-motion";

export default function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="
        relative overflow-hidden
        rounded-2xl p-6
        bg-gradient-to-br from-[#020617] to-[#0f172a]
        border border-white/10
        shadow-lg hover:shadow-blue-500/20
        cursor-pointer
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 hover:opacity-100 transition" />

      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <h2 className="text-3xl font-bold text-white">{value}</h2>
    </motion.div>
  );
}
