import Modal from "@/components/ui/Modal";

export default function ViewEmployee({ employee, isOpen, onClose }) {
  if (!employee) return null;

  return (
    <Modal title="Employee Details" isOpen={isOpen} onClose={onClose}>
      <div className="space-y-3 text-sm">
        <div><b>Name:</b> {employee.name}</div>
        <div><b>Position:</b> {employee.position}</div>
        <div><b>Department:</b> {employee.department}</div>
        <div><b>Salary:</b> ${employee.salary}</div>
        <div>
          <b>Status:</b>{" "}
          <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs">
            {employee.status}
          </span>
        </div>
      </div>
    </Modal>
  );
}
