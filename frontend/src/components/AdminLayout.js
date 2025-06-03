"use client"

import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className=" min-h-screen xl:container xl:mx-auto overflow-hidden">
      <AdminSidebar />

      {children}
    </div>
  );
}
