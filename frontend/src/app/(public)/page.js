import FullServiceMetaAgency from "@/components/FullServiceMetaAgency";
import CaseStudiesSample from "@/components/CaseStudiesSample";
import HeroSection from "@/components/HeroSection";
import BrandsWeWorkWith from "@/components/BrandsWeWorkWith";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroSection/>
			<BrandsWeWorkWith/>
			<CaseStudiesSample/>

		</main>
	);
}
