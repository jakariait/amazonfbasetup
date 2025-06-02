import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PublicLayout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<ScrollToTop />
			<WhatsAppButton />
		</>
	);
}
