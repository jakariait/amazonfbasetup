import React from "react";
import { TrendingUp } from "lucide-react";
import OurExpertise from "@/components/OurExpertise";
import BrandsWeWorkWith from "@/components/BrandsWeWorkWith";
import ReadyToScaleCta from "@/components/ReadyToScaleCTA";
import StatsAll from "@/components/StatsAll";

export default function AboutUs() {





  const team = [
    {
      name: "Tonmoy",
      role: "CEO & E-commerce Specialist",
      image: "/tonmoy.jpeg",
      expertise:
        "Hi, I'm Tonmoy, leading a team in amazon and digital marketing for bigger scale. We focus on boosting online sales and brand visibility. With smart strategies and a dedicated team, we're all about delivering results and staying ahead in the digital game.",
    },
    {
      name: "Sohan",
      role: "Researcher & Advertisement Specialist",
      image: "/sohan.jpeg",
      expertise:
        "I help brands grow on Amazon with data-driven product research, SEO-optimized listings, and high-converting PPC campaigns. From finding winning products to scaling sales with targeted ads, I provide end-to-end solutions that drive real results.",
    },
    {
      name: "Sakib",
      role: "Amazon Specialist",
      image: "/sakib.jpeg",
      expertise:
        "This is Sakib, an Amazon Specialist with 7 years of experience in FBA/FBM, product listing optimization, PPC advertising, store management, and Amazon business setup. I helps brands launch, manage, and expand their businesses on Amazon through tailored strategies that drive growth and long-term success.",
    },
    {
      name: "Emon",
      role: "Meta Ads Specialist",
      image: "/emon.jpeg",
      expertise:
        "I’m Emon, a results-driven Facebook Ads and digital marketing expert with a passion for building powerful strategies that deliver real impact. I specialize in driving highly targeted traffic, boosting conversions, and scaling brands through data-backed, high-performing Facebook campaigns. Whether it’s growing a new brand or optimizing an existing one, I focus on what matters most — results.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative  overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            ROI-Focused Digital Marketing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            We Drive Results,
            <br />
            Not Just Traffic
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your success is our obsession. We&apos;re a team of data-driven
            digital marketing specialists who focus exclusively on one thing:
            maximizing your return on investment through proven strategies in
            Amazon FBA, Shopify, and Meta Ads.
          </p>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet TESS Team
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The experts behind your success – each with proven track records
              in driving measurable growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain "
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <div className="text-orange-500 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <StatsAll />
      <BrandsWeWorkWith />

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2019, our agency was born from a simple frustration:
              too many businesses were burning money on digital marketing with
              little to show for it. We set out to change that by creating a
              results-first approach that treats every dollar of your marketing
              budget as an investment that must generate measurable returns.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              What started as a small team of Amazon FBA specialists has grown
              into a comprehensive digital marketing powerhouse. We&apos;ve
              helped over 500 businesses transform their online presence,
              generating more than $50 million in additional revenue through our
              strategic approach to Amazon optimization, Shopify development,
              and Meta advertising.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we&apos;re proud to be the agency that business owners
              trust when they&apos;re serious about growth. We don&apos;t just
              run campaigns – we become your growth partners, invested in your
              success because your wins are our wins.
            </p>
          </div>
        </div>
      </section>

      <OurExpertise />

      {/* CTA Section */}
      <ReadyToScaleCta />
    </div>
  );
}
