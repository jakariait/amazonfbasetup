import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleTagManager from "@/components/GoogleTagManager"; // client component

import {
  getHomePageTitle,
  getHomePageDescription,
} from "@/utils/brand";

export const metadata = {
  title: getHomePageTitle(),
  description: getHomePageDescription(),
};

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GoogleTagManager />
      <Header />
      <main className="flex-1">{children}</main>
      <ScrollToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
