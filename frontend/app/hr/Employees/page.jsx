"use client";

import SidebarHR from "@/components/SidebarHR";
import Topbar from "@/components/Topbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import EmployeeTable from "@/components/employees/EmployeeTable";

export default function EmployeesPage() {
  return (
    <ProtectedRoute role="hr">
      <div className="flex min-h-screen bg-gray-100">
        <SidebarHR />

        <div className="flex-1">
          <Topbar title="Employees" />

          <div className="p-6">
            <EmployeeTable />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
