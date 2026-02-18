"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import FloatingInput from "@/components/ui/FloatingInput";
import { useToast } from "@/components/ui/useToast";

const defaultForm = {
  name: "",
  position: "",
  department: "",
  salary: "",
  status: "Active",
};

export default function EmployeeForm({
  title,
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const { showToast } = useToast();

  const [form, setForm] = useState(defaultForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Handle Edit Mode Properly
  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        position: initialData.position || "",
        department: initialData.department || "",
        salary: initialData.salary || "",
        status: initialData.status || "Active",
      });
    } else {
      setForm(defaultForm);
    }
  }, [initialData, isOpen]);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.position.trim()) newErrors.position = "Position is required";
    if (!form.department.trim())
      newErrors.department = "Department is required";
    if (!form.salary) newErrors.salary = "Salary is required";
    if (form.salary && form.salary <= 0)
      newErrors.salary = "Salary must be greater than 0";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "salary" ? value : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast("Please fix the errors", "error");
      return;
    }

    try {
      setLoading(true);

      await onSubmit({
        ...form,
        salary: Number(form.salary),
      });

      showToast(
        initialData ? "Employee updated successfully" : "Employee added successfully"
      );

      onClose();
      setForm(defaultForm);
    } catch (error) {
      console.error(error);
      showToast("Something went wrong", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FloatingInput
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FloatingInput
          label="Position"
          name="position"
          value={form.position}
          onChange={handleChange}
          error={errors.position}
        />

        <FloatingInput
          label="Department"
          name="department"
          value={form.department}
          onChange={handleChange}
          error={errors.department}
        />

        <FloatingInput
          label="Salary"
          name="salary"
          type="number"
          value={form.salary}
          onChange={handleChange}
          error={errors.salary}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={loading}
            className={`px-5 py-2 rounded-lg text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
