import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import {getBrandName, getHomePageDescription, getHomePageTitle} from "@/utils/brand";
export const metadata = {
	title:  getHomePageTitle(),
	description: getHomePageDescription(),
};
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
