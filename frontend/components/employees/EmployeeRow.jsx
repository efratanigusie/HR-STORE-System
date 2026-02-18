import { Eye, Pencil, Trash2 } from "lucide-react";

export default function EmployeeRow({
  employee,
  onView,
  onEdit,
  onDelete,
}) {
  const statusColor =
    employee.status === "Active"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";

  return (
    <tr className="border-t hover:bg-blue-50 transition">
      <td className="p-4 font-medium text-gray-800 w-[20%]">
        {employee.name}
      </td>

      <td className="p-4 text-gray-600 w-[20%]">
        {employee.position}
      </td>

      <td className="p-4 text-gray-800 w-[15%]">
        {employee.department}
      </td>

      <td className="p-4 font-medium text-gray-800 w-[15%]">
        ${employee.salary}
      </td>

      <td className="p-4 w-[15%]">
        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${statusColor}`}
        >
          {employee.status}
        </span>
      </td>

      <td className="p-4 w-[15%]">
        <div className="flex justify-center gap-3 text-gray-500">
          <Eye
            size={18}
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => onView(employee)}
          />
          <Pencil
            size={18}
            className="hover:text-yellow-600 cursor-pointer"
            onClick={() => onEdit(employee)}
          />
          <Trash2
            size={18}
            className="hover:text-red-600 cursor-pointer"
            onClick={() => onDelete(employee)}
          />
        </div>
      </td>
    </tr>
  );
}
