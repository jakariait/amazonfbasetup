import FullServiceMetaAgency from "@/components/FullServiceMetaAgency";
import CaseStudiesSample from "@/components/CaseStudiesSample";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection/>
			<CaseStudiesSample/>
		</main>
	);
}
