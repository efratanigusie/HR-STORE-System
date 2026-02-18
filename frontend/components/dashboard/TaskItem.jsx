"use client";

import { motion } from "framer-motion";

export default function TaskItem({ title, time }) {
  return (
    <motion.div
      whileHover={{ x: 6 }}
      className="flex justify-between items-center p-3 rounded-lg
                 hover:bg-gray-100 transition cursor-pointer"
    >
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </motion.div>
  );
}
