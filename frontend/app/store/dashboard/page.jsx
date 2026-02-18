"use client";

import { motion } from "framer-motion";
import SidebarStore from "@/components/SidebarStore";
import Topbar from "@/components/Topbar";
import StatCard from "@/components/dashboard/StatCard";
import SalesChart from "@/components/dashboard/SalesChart";
import RecentOrders from "@/components/dashboard/RecentOrders";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function StoreDashboard() {
  return (
    <ProtectedRoute role="store">
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">
        <SidebarStore />

        <div className="flex-1">
          <Topbar title="Store Dashboard" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
              <StatCard title="Customers" value="1,240" />
              <StatCard title="Orders" value="320" />
              <StatCard title="Revenue" value="$12,480" />
              <StatCard title="Capacity" value="78%" />
            </div>

            {/* Chart + Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <RecentOrders />
            </div>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
