"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users } from "lucide-react";

export default function SidebarHR() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <aside className="w-64 min-h-screen p-4
                     bg-white dark:bg-gray-900
                     border-r border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold mb-6 text-gray-500 dark:text-gray-400">
        HR Panel
      </h1>

      <nav className="space-y-2">
        <Link href="/hr/dashboard" className={linkClass("/hr/dashboard")}>
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link href="/hr/Employees" className={linkClass("/hr/Employees")}>
          <Users size={20} />
          Employees
        </Link>
      </nav>
    </aside>
  );
}
