import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors">
            Go Home
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
