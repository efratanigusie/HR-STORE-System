"use client";

import TaskItem from "./dashboard/TaskItem";

export default function CalendarWidget() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-gray-800 mb-4">Upcoming</h3>

      <TaskItem title="UX/UI Workshop" time="14:00 - 14:45" />
      <TaskItem title="Team Meeting" time="12:00 - 12:35" />
      <TaskItem title="User Interview" time="16:00 - 17:00" />
    </div>
  );
}
