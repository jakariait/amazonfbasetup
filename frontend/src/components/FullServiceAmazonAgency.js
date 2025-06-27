"use client";
import React, {useEffect} from "react";
import {
  ShoppingCart,
  Package,
  TrendingUp,
  Target,
  Star,
  Shield,
  Users,
  Zap,
  BarChart3,
  Settings2,
  Award,
  CheckCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { getCalendlyLink } from "@/utils/brand";
import Link from "next/link";
import { gtmPushEvent } from "@/utils/gtm";

export default function FullServiceAmazonAgency() {



  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const agencyStats = [
    {
      metric: "Clients Served",
      value: "500+",
      icon: Users,
      description: "Successful partnerships",
    },
    {
      metric: "Revenue Generated",
      value: "$50M+",
      icon: TrendingUp,
      description: "Total client revenue",
    },
    {
      metric: "Years Experience",
      value: "8+",
      icon: Award,
      description: "Amazon expertise",
    },
    {
      metric: "Success Rate",
      value: "96%",
      icon: Target,
      description: "Client satisfaction",
    },
  ];

  const fullServices = [
    {
      category: "Account Management",
      icon: Settings2,
      services: [
        {
          name: "Amazon Account Setup & Registration",
          description: "Complete account creation and brand registry",
        },
        {
          name: "Account Health Monitoring",
          description: "Proactive monitoring and issue resolution",
        },
        {
          name: "Policy Compliance Management",
          description: "Ensure adherence to Amazon's terms and policies",
        },
        {
          name: "Account Reinstatement",
          description: "Expert assistance with suspended accounts",
        },
      ],
    },
    {
      category: "Product Optimization",
      icon: Package,
      services: [
        {
          name: "Listing Creation & Optimization",
          description: "High-converting product listings with SEO",
        },
        {
          name: "Keyword Research & Strategy",
          description: "Comprehensive keyword analysis and targeting",
        },
        {
          name: "A+ Content Creation",
          description: "Enhanced brand content and storytelling",
        },
        {
          name: "Product Photography",
          description: "Professional images that drive conversions",
        },
      ],
    },
    {
      category: "Advertising & PPC",
      icon: Target,
      services: [
        {
          name: "Sponsored Products Management",
          description: "Optimized campaigns for maximum ROAS",
        },
        {
          name: "Sponsored Brands Campaigns",
          description: "Brand awareness and traffic generation",
        },
        {
          name: "Display & Video Advertising",
          description: "Advanced targeting and retargeting strategies",
        },
        {
          name: "PPC Audit & Optimization",
          description: "Complete account restructuring for better performance",
        },
      ],
    },
    {
      category: "Brand Protection",
      icon: Shield,
      services: [
        {
          name: "Brand Registry & IP Protection",
          description: "Secure your brand assets on Amazon",
        },
        {
          name: "Counterfeit Monitoring",
          description: "Proactive protection against unauthorized sellers",
        },
        {
          name: "MAP Policy Enforcement",
          description: "Maintain pricing integrity across channels",
        },
        {
          name: "Trademark & Patent Support",
          description: "Legal protection and enforcement assistance",
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      icon: BarChart3,
      services: [
        {
          name: "Performance Analytics",
          description: "Detailed insights and actionable recommendations",
        },
        {
          name: "Competitive Analysis",
          description: "Market intelligence and competitor monitoring",
        },
        {
          name: "Custom Dashboard Creation",
          description: "Real-time performance tracking and KPIs",
        },
        {
          name: "Monthly Strategy Reviews",
          description: "Regular optimization and planning sessions",
        },
      ],
    },
    {
      category: "Growth & Expansion",
      icon: Zap,
      services: [
        {
          name: "International Marketplace Expansion",
          description: "Scale to global Amazon marketplaces",
        },
        {
          name: "Product Launch Strategies",
          description: "Successful new product introductions",
        },
        {
          name: "Inventory Management",
          description: "Optimize stock levels and prevent stockouts",
        },
        {
          name: "Seasonal Campaign Planning",
          description: "Maximize holiday and peak season sales",
        },
      ],
    },
  ];

  const successProcess = [
    {
      phase: "Discovery & Audit",
      duration: "Week 1-2",
      description:
        "Comprehensive analysis of your current Amazon presence, competitor landscape, and growth opportunities",
      deliverables: [
        "Account audit report",
        "Competitive analysis",
        "Growth roadmap",
        "Strategy recommendations",
      ],
    },
    {
      phase: "Strategy Development",
      duration: "Week 3",
      description:
        "Custom strategy creation based on your goals, budget, and market positioning",
      deliverables: [
        "Marketing strategy",
        "Product optimization plan",
        "PPC campaign structure",
        "Timeline & milestones",
      ],
    },
    {
      phase: "Implementation",
      duration: "Week 4-8",
      description:
        "Execute optimizations across all touchpoints with continuous monitoring and adjustments",
      deliverables: [
        "Optimized listings",
        "Active campaigns",
        "Enhanced content",
        "Performance tracking",
      ],
    },
    {
      phase: "Scale & Optimize",
      duration: "Ongoing",
      description:
        "Continuous optimization and scaling based on performance data and market changes",
      deliverables: [
        "Monthly reports",
        "Strategy updates",
        "New opportunities",
        "Growth initiatives",
      ],
    },
  ];

  const clientTypes = [
    {
      type: "New Amazon Sellers",
      icon: Star,
      description:
        "Complete setup and launch support for businesses new to Amazon",
      services: [
        "Account setup",
        "Product research",
        "Listing creation",
        "Launch strategy",
      ],
      results: "Average 6-month revenue: $25K+",
    },
    {
      type: "Existing Sellers",
      icon: TrendingUp,
      description:
        "Optimization and growth strategies for established Amazon businesses",
      services: [
        "Performance audit",
        "Campaign optimization",
        "Listing enhancement",
        "Scale strategies",
      ],
      results: "Average growth: +300% revenue",
    },
    {
      type: "Enterprise Brands",
      icon: Award,
      description:
        "Comprehensive Amazon management for large brands and manufacturers",
      services: [
        "Multi-marketplace management",
        "Brand protection",
        "Advanced analytics",
        "Team integration",
      ],
      results: "Average portfolio: $1M+ revenue",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Full-Service Amazon Agency
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Your Complete Amazon
            <br />
            Success Partner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From account setup to million-dollar sales, we&apos;re the only
            Amazon agency you&apos;ll ever need. Our comprehensive services
            handle every aspect of your Amazon business so you can focus on what
            you do best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Get Your Free Amazon Audit", getCalendlyLink())
                }
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Your Free Amazon Audit
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Agency Stats */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Trusted by Amazon Sellers Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. We&apos;ve helped hundreds of
              businesses succeed on Amazon.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {agencyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-medium mb-1">
                    {stat.metric}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Complete Amazon Solutions
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to succeed on Amazon, all under one roof. No
              need to manage multiple vendors or agencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullServices.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="border-l-2 border-orange-500/20 pl-4"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              We Serve Every Type of Amazon Business
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you&apos;re just starting or managing a multi-million
              dollar Amazon business, we have the expertise to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {client.type}
                  </h3>
                  <p className="text-gray-600 mb-6">{client.description}</p>

                  <div className="space-y-2 mb-6">
                    {client.services.map((service, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>

                  <div className="bg-orange-500/10 px-4 py-2 rounded-full text-orange-500 font-semibold text-sm">
                    {client.results}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Proven Success Process
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach that&apos;s helped hundreds of businesses
              achieve Amazon success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successProcess.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {phase.phase}
                  </h3>
                  <div className="inline-flex items-center text-orange-500 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {phase.duration}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  {phase.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Deliverables:
                  </h4>
                  {phase.deliverables.map((deliverable, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-600 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us as Your Amazon Partner?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Complete Amazon Expertise",
                    description:
                      "Deep knowledge of all Amazon systems, policies, and best practices gained from years of hands-on experience.",
                  },
                  {
                    title: "Dedicated Account Management",
                    description:
                      "Your own dedicated team of Amazon specialists who understand your business and goals.",
                  },
                  {
                    title: "Transparent Reporting",
                    description:
                      "Clear, detailed reports showing exactly what we're doing and the results we're achieving.",
                  },
                  {
                    title: "Proven Track Record",
                    description:
                      "Hundreds of successful clients and millions in revenue generated across all industries.",
                  },
                  {
                    title: "Future-Proof Strategies",
                    description:
                      "We stay ahead of Amazon's changes and algorithm updates to keep your business competitive.",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-2xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to Dominate Amazon?
                </h3>
                <p className="text-gray-600">
                  Get a comprehensive analysis of your Amazon potential
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Complete Amazon account audit",
                  "Competitor analysis report",
                  "Custom growth strategy",
                  "Revenue projection model",
                ].map((item, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={getCalendlyLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  onClick={() =>
                    handleClick("Get Your Free Amazon Audit", getCalendlyLink())
                  }
                  className="w-full px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  Get Your Free Amazon Audit
                </button>
              </a>

              <div className="text-center text-gray-500 text-sm mt-4">
                No commitment required • 100% confidential
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Transform Your Amazon Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful Amazon sellers who trust us to handle
            their complete Amazon operations. Let&apos;s discuss how we can
            accelerate your Amazon success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <button
                onClick={() =>
                  handleClick("Start Your Amazon Journey", "/contact-us")
                }
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Start Your Amazon Journey
              </button>
            </Link>

            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Get Your Free Amazon Audit", getCalendlyLink())
                }
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
              >
                Schedule Strategy Call <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </a>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            Free consultation includes: Amazon audit • Growth strategy • Success
            roadmap • Team introduction
          </div>
        </div>
      </section>
    </div>
  );
}
