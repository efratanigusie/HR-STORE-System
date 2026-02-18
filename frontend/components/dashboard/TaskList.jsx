import TaskItem from "./TaskItem";

const tasks = [
  { id: 1, title: "Review leave requests", status: "Pending" },
  { id: 2, title: "Approve payroll", status: "Completed" },
  { id: 3, title: "Schedule interviews", status: "In Progress" },
];

export default function TaskList() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h3 className="font-semibold text-lg mb-4">HR Tasks</h3>

      <div className="space-y-3">
        {tasks.map(task => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}
