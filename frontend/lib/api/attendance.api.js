import api from "./axios";

// Get all attendance
export const getAttendance = async () => {
  const res = await api.get("/attendance");
  return res.data;
};

// Get attendance by date
export const getAttendanceByDate = async (date) => {
  const res = await api.get(`/attendance/by-date?date=${date}`);
  return res.data;
};

// Mark attendance
export const createAttendance = async (data) => {
  const res = await api.post("/attendance", data);
  return res.data;
};
