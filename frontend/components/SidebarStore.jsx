"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  LogOut,
} from "lucide-react";

export default function SidebarStore() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
     ${
       pathname === path
         ? "bg-blue-600 text-white shadow-lg"
         : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
     }`;

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 p-4">
      <h1 className="text-2xl font-bold mb-8 text-blue-600">
        Waves
      </h1>

      <nav className="space-y-2">
        <Link href="/store/dashboard" className={linkClass("/store/dashboard")}>
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link href="#" className={linkClass("#")}>
          <ShoppingCart size={20} />
          Orders
        </Link>

        <Link href="#" className={linkClass("#")}>
          <Users size={20} />
          Customers
        </Link>

        <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl w-full">
          <LogOut size={20} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
