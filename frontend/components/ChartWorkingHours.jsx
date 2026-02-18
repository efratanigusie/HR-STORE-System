"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", hours: 6 },
  { day: "Tue", hours: 7 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 5 },
  { day: "Fri", hours: 7 },
];

export default function ChartWorkingHour() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-gray-800 mb-4">Working Hours</h3>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="hours" radius={[8, 8, 0, 0]} fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
