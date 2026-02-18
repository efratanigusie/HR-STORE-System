"use client";

import { useEffect, useState } from "react";
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "@/lib/api/employee.api";

import EmployeeRow from "./EmployeeRow";
import EmployeeForm from "./EmployeeForm";
import ViewEmployee from "./ViewEmployee";
import DeleteEmployee from "./DeleteEmployee";
import { useToast } from "@/components/ui/useToast";

export default function EmployeeTable() {
  const { showToast } = useToast();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const [viewEmployee, setViewEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const [deleteEmployeeState, setDeleteEmployeeState] = useState(null);
  const [addOpen, setAddOpen] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      showToast("Failed to fetch employees", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">Employees</h2>
        <button
          onClick={() => setAddOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Employee
        </button>
      </div>

      {loading ? (
        <div className="p-6">Loading...</div>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Position</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Salary</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <EmployeeRow
                key={emp._id}
                employee={emp}
                onView={setViewEmployee}
                onEdit={setEditEmployee}
                onDelete={setDeleteEmployeeState}
              />
            ))}
          </tbody>
        </table>
      )}

      {/* View */}
      <ViewEmployee
        employee={viewEmployee}
        isOpen={!!viewEmployee}
        onClose={() => setViewEmployee(null)}
      />

      {/* Add */}
      <EmployeeForm
        title="Add Employee"
        isOpen={addOpen}
        onClose={() => setAddOpen(false)}
        onSubmit={async (data) => {
          await createEmployee(data);
          showToast("Employee added");
          setAddOpen(false);
          fetchEmployees();
        }}
      />

      {/* Edit */}
      <EmployeeForm
        title="Edit Employee"
        isOpen={!!editEmployee}
        initialData={editEmployee}
        onClose={() => setEditEmployee(null)}
        onSubmit={async (data) => {
          await updateEmployee(editEmployee._id, data);
          showToast("Employee updated");
          setEditEmployee(null);
          fetchEmployees();
        }}
      />

      {/* Delete */}
      <DeleteEmployee
        isOpen={!!deleteEmployeeState}
        onClose={() => setDeleteEmployeeState(null)}
        onConfirm={async () => {
          await deleteEmployee(deleteEmployeeState._id);
          showToast("Employee deleted", "error");
          setDeleteEmployeeState(null);
          fetchEmployees();
        }}
      />
    </div>
  );
}
