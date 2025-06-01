import Header from "@/components/header";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/footer";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <ContactSection/>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
