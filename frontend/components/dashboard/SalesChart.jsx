"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 650 },
  { name: "Wed", sales: 800 },
  { name: "Thu", sales: 500 },
  { name: "Fri", sales: 720 },
];

export default function SalesChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        Weekly Sales
      </h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Bar dataKey="sales" fill="#2563eb" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
