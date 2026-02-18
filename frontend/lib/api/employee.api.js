import api from "./axios";

// ==========================
// Employees API
// ==========================

// Get all employees
export const getEmployees = async () => {
  const res = await api.get("/employees");
  return res.data;
};

// Get single employee
export const getEmployeeById = async (id) => {
  const res = await api.get(`/employees/${id}`);
  return res.data;
};

// Create employee (HR only)
export const createEmployee = async (data) => {
  const res = await api.post("/employees", data);
  return res.data;
};

// Update employee (HR only)
export const updateEmployee = async (id, data) => {
  const res = await api.put(`/employees/${id}`, data);
  return res.data;
};

// Delete employee (HR only)
export const deleteEmployee = async (id) => {
  const res = await api.delete(`/employees/${id}`);
  return res.data;
};
