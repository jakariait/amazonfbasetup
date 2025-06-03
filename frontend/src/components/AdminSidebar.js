"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useAuthAdminStore from "@/store/AuthAdminStore";
import { getBrandName } from "@/utils/brand";

const AdminHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { admin, logout } = useAuthAdminStore();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
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
    setIsDrawerOpen(false); // Close drawer on mobile
  };

  const adminName = admin?.name || "John Doe";
  const adminEmail = admin?.email || "admin@example.com";

  return (
    <>
      {/* Header Bar */}
      <header className="bg-black text-white border-b border-orange-500/20 flex items-center justify-between px-4 py-3">
        {/* Left - Brand */}
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-bold">{getBrandName()}</h1>
        </div>

        <div className="md:flex items-center space-x-2 hidden ">
          <span>{adminName}</span>
          <span>({adminEmail})</span>
        </div>


        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.path)}
                className={`transition-all px-3 py-2 rounded-lg text-sm ${
                  isActive
                    ? "bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg disabled:opacity-50"
          >
            {isLoggingOut ? "Signing Out..." : "Sign Out"}
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isDrawerOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="fixed top-0 left-0 z-50 w-64 h-full bg-black border-r border-orange-500/20 shadow-xl p-6 flex flex-col">
            {/* Profile */}
            <div className="mb-6">
              <h3 className="font-semibold text-white truncate">{adminName}</h3>
              <p className="text-sm text-gray-400 truncate">{adminEmail}</p>
            </div>

            {/* Navigation */}
            <div className="space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleMenuClick(item.path)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm ${
                      isActive
                        ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-700/50">
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="w-full px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-sm rounded-lg"
              >
                {isLoggingOut ? "Signing Out..." : "Sign Out"}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AdminHeader;
