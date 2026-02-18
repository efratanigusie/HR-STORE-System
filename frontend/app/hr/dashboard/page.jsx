"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SidebarHR from "@/components/SidebarHR";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import ChartWorkingHour from "@/components/ChartWorkingHours";
import CalendarWidget from "@/components/CalendarWidget";
import ProtectedRoute from "@/components/ProtectedRoute";

import {
  getEmployees,
  getAttendanceByDate,
} from "@/lib/api";

export default function HRDashboard() {
  const [employeeCount, setEmployeeCount] = useState(0);
  const [onLeaveCount, setOnLeaveCount] = useState(0);

  // Today date in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Fetch employees
      const employees = await getEmployees();
      setEmployeeCount(employees.length);

      // Fetch today attendance
      const attendance = await getAttendanceByDate(today);

      // Count leave
      const onLeave = attendance.filter(
        (a) => a.status === "Leave"
      ).length;

      setOnLeaveCount(onLeave);
    } catch (error) {
      console.error("Dashboard load error:", error);
    }
  };

  return (
    <ProtectedRoute role="hr">
      <div className="flex min-h-screen bg-gray-100">
        <SidebarHR />

        <div className="flex-1">
          <Topbar title="HR Dashboard" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Employees"
                value={employeeCount}
              />
              <StatCard
                title="On Leave"
                value={onLeaveCount}
              />
              <StatCard
                title="New Hires"
                value="—"
              />
              <StatCard
                title="Pending Tasks"
                value="—"
              />
            </div>

            {/* Chart + Calendar */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ChartWorkingHour />
              </div>
              <CalendarWidget />
            </div>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
