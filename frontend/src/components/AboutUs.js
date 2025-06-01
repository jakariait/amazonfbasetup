import React from "react";
import {
  TrendingUp,
  Users,
  Award,
  Target,
  ShoppingCart,
  Store,
  Share2,
} from "lucide-react";

export default function AboutUs() {
  const stats = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "300%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "50M+", label: "Revenue Generated", icon: Target },
    { number: "5+", label: "Years Experience", icon: Award },
  ];

  const services = [
    {
      icon: ShoppingCart,
      title: "Amazon FBA",
      description:
        "Complete Amazon optimization from product research to PPC campaigns that drive profitable sales.",
    },
    {
      icon: Store,
      title: "Shopify Development",
      description:
        "Custom Shopify stores designed for conversion with seamless user experiences and mobile optimization.",
    },
    {
      icon: Share2,
      title: "Meta Ads",
      description:
        "Data-driven Facebook and Instagram advertising campaigns that maximize your ad spend ROI.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Amazon FBA Specialist",
      image: "/api/placeholder/300/300",
      expertise: "7+ years scaling Amazon businesses from $0 to 7-figures",
    },
    {
      name: "Marcus Rodriguez",
      role: "Shopify Development Lead",
      image: "/api/placeholder/300/300",
      expertise:
        "Expert in conversion optimization and custom e-commerce solutions",
    },
    {
      name: "Emma Thompson",
      role: "Meta Ads Strategist",
      image: "/api/placeholder/300/300",
      expertise: "Managed $2M+ in ad spend with average 4x ROAS",
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
            Your success is our obsession. We're a team of data-driven digital
            marketing specialists who focus exclusively on one thing: maximizing
            your return on investment through proven strategies in Amazon FBA,
            Shopify, and Meta Ads.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
              into a comprehensive digital marketing powerhouse. We've helped
              over 500 businesses transform their online presence, generating
              more than $50 million in additional revenue through our strategic
              approach to Amazon optimization, Shopify development, and Meta
              advertising.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, we're proud to be the agency that business owners trust
              when they're serious about growth. We don't just run campaigns –
              we become your growth partners, invested in your success because
              your wins are our wins.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We specialize in the three most profitable digital marketing
              channels for e-commerce businesses
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500/50 transition-all duration-300 group shadow-sm hover:shadow-lg"
                >
                  <div className="w-16 h-16 mb-6 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The experts behind your success – each with proven track records
              in driving measurable growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-orange-500/50 transition-all duration-300">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful businesses who trust us to maximize
            their digital marketing ROI. Let's discuss how we can accelerate
            your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg">
              Schedule Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
