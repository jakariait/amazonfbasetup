"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuthAdminStore from "@/store/AuthAdminStore";
import { getBrandName } from "@/utils/brand";

const AdminSidebar = ({ isOpen, toggleSidebar }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { admin, logout } = useAuthAdminStore();
  const router = useRouter();
  const pathname = usePathname();

  // Navigation menu items
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Users",
      path: "/admin/users",
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
    },
    {
      name: "Products",
      path: "/admin/products",
    },
    {
      name: "Orders",
      path: "/admin/orders",
    },
    {
      name: "Reports",
      path: "/admin/reports",
    },
    {
      name: "Settings",
      path: "/admin/settings",
    },
  ];

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      router.push("/admin");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleMenuClick = (path) => {
    router.push(path);
    if (toggleSidebar) {
      toggleSidebar(); // Close sidebar on mobile after navigation
    }
  };

  // Admin data with fallbacks
  const adminName = admin?.name || "John Doe";
  const adminEmail = admin?.email || "admin@example.com";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`min-h-screen  transform bg-gradient-to-b from-black via-gray-900 to-black border-r border-orange-500/20 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-orange-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">
                  {getBrandName()}
                </h1>
                <p className="text-xs text-orange-400">Admin Panel</p>
              </div>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Admin Profile Section */}
          <div className="p-6 border-b border-gray-700/50">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate">
                  {adminName}
                </h3>
                <p className="text-sm text-gray-400 truncate">{adminEmail}</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Navigation
            </p>

            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.path)}
                  className={`w-full cursor-pointer flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow-lg"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                  }`}
                >
                  <span
                    className={isActive ? "text-orange-400" : "text-gray-400"}
                  >
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-orange-500 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Logout Section */}
          <div className="p-4 border-t border-gray-700/50">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoggingOut ? (
                <>
                  <div className="w-5 h-5 border-2 border-red-400/20 border-t-red-400 rounded-full animate-spin"></div>
                  <span className="font-medium">Signing Out...</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="font-medium">Sign Out</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
