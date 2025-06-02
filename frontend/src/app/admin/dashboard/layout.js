import AdminLayout from "@/components/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata = {
  title: "Admin Dashboard",
  description: "Manage site content and data",
};

export default function AdminLayoutWrapper({ children }) {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className={"p-10"}> {children}</div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
