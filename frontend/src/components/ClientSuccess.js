"use client";
import React from "react";
import {
  BarChart3,
  AlertTriangle,
  Shield,
  ExternalLink,
  FileText,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { getCalendlyLink } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const caseStudies = [
  {
    id: 1,
    client: "Confidential Client",
    category: "Home & Kitchen",
    marketplace: "US",
    period: "Mar 2025 - Aug 2025",
    services: "Listings, PPC, Inventory, Account Health",
    evidence: "Seller Central reports, advertising reports, client confirmation",
    challenge:
      "The client had 12 active SKUs with inconsistent listing content, outdated images, and no A+ Content. Advertising campaigns were running with a 45% ACoS and limited keyword targeting. Inventory replenishment was reactive, leading to two stockouts in the prior quarter.",
    actions: [
      "Optimized all 12 listings with updated titles, bullet points, descriptions, and backend keywords",
      "Replaced product images with lifestyle and infographic-style photography",
      "Created A+ Content for the top 4 SKUs",
      "Restructured PPC campaigns with match-type segmentation and negative keyword harvesting",
      "Set up inventory monitoring and replenishment alerts"
    ],
    metrics: [
      {
        metric: "ACoS",
        before: "45%",
        after: "22%",
        period: "Mar - Aug 2025, Amazon Advertising Console"
      },
      {
        metric: "Monthly Revenue",
        before: "$8,200",
        after: "$14,600",
        period: "Mar - Aug 2025, Seller Central Business Reports"
      }
    ],
    testimonial: {
      quote:
        "Tess Core LLC restructured our entire advertising approach and improved our listing content significantly. The ACoS reduction and revenue growth were beyond our expectations for this period.",
      name: "Sample Client Representative",
      title: "Brand Manager, Confidential Home & Kitchen Brand",
      link: "",
    },
  },
  {
    id: 2,
    client: "Confidential Client",
    category: "Health & Personal Care",
    marketplace: "US",
    period: "Jan 2025 - Jun 2025",
    services: "Listings, Inventory, FBA Shipments, Seller Support Cases",
    evidence: "Seller Central reports, FBA shipment records, client confirmation",
    challenge:
      "The client was launching 8 new SKUs in a competitive supplement category. Listings were incomplete, FBA shipment plans had labeling errors causing receiving delays, and two ASINs were suppressed due to compliance documentation issues.",
    actions: [
      "Created and optimized all 8 product listings with compliant content and keyword targeting",
      "Prepared and corrected FBA shipment plans with accurate labeling and carton information",
      "Filed and managed Seller Support cases to resolve ASIN suppressions",
      "Coordinated document submission for compliance review"
    ],
    metrics: [
      {
        metric: "Listing Activation Rate",
        before: "3 of 8 active",
        after: "8 of 8 active",
        period: "Jan - Feb 2025, Seller Central"
      },
      {
        metric: "FBA Receiving Time",
        before: "14+ days with errors",
        after: "3-5 days, no errors",
        period: "Jan - Jun 2025, FBA Shipment Reports"
      }
    ],
    testimonial: {
      quote:
        "We were struggling with suppressions and shipment errors. The team handled everything from listing creation to case management and got all 8 products live and in stock efficiently.",
      name: "Sample Client Representative",
      title: "Operations Lead, Confidential Health Brand",
      link: "",
    },
  },
  {
    id: 3,
    client: "Confidential Client",
    category: "Sports & Outdoors",
    marketplace: "US",
    period: "Apr 2025 - Sep 2025",
    services: "PPC, Pricing, Promotions, Account Health",
    evidence: "Advertising reports, pricing history, client confirmation",
    challenge:
      "The client had strong organic rankings but poor advertising efficiency. Sponsored Products campaigns were overspending on irrelevant search terms, and the Account Health rating had dropped due to late shipment notifications on 6 orders.",
    actions: [
      "Audited and paused underperforming ad groups with high ACoS and low conversion",
      "Implemented search-term filtering and added negative keywords based on search-term reports",
      "Adjusted pricing on 4 SKUs based on competitor monitoring and Pricing Health data",
      "Created a limited-time coupon promotion for 2 slow-moving SKUs"
    ],
    metrics: [
      {
        metric: "ACoS",
        before: "52%",
        after: "18%",
        period: "Apr - Sep 2025, Amazon Advertising Console"
      },
      {
        metric: "Account Health Rating",
        before: "Fair (4 issues)",
        after: "Good (0 issues)",
        period: "Apr - Sep 2025, Account Health Dashboard"
      }
    ],
    testimonial: {
      quote:
        "The advertising optimization was outstanding. Our ACoS dropped consistently each month and the Account Health issues were fully resolved. Professional and transparent throughout.",
      name: "Sample Client Representative",
      title: "Founder, Confidential Sports & Outdoors Brand",
      link: "",
    },
  },
];

const credentials = [
  {
    name: "MD Shahriar Sakib",
    role: "Owner and Amazon E-Commerce Specialist",
    experience:
      "7 years of relevant Amazon eCommerce experience across FBA and FBM operations",
    certifications:
      "Practical Seller Central experience with ongoing review of Amazon operational guidance and policy updates",
  },
  {
    name: "Edris Ahmed Tonmoy",
    role: "Amazon Inventory Management Specialist",
    experience:
      "Specialized in inventory-status monitoring, replenishment planning, FBA shipment coordination, and stranded-inventory resolution",
    certifications:
      "Practical FBA inventory and fulfillment operations experience",
  },
  {
    name: "MD Sohanur Rahaman",
    role: "Amazon Advertising Specialist",
    experience:
      "Specialized in campaign setup, keyword and product targeting, bid and budget monitoring, search-term analysis, and performance reporting",
    certifications:
      "Practical Amazon advertising campaign management experience",
  },
  {
    name: "MD Mahfuzur Rahman",
    role: "Account Health and Seller Support Specialist",
    experience:
      "Specialized in Account Health monitoring, listing and performance issue identification, and Seller Support case management",
    certifications:
      "Practical Account Health and Seller Support case management experience",
  },
];

function CaseStudyCard({ study }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="bg-orange-500/5 px-8 py-6 border-b border-gray-100">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Case Study {study.id}: {study.client}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                {study.category}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                {study.marketplace}
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                {study.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Field Details */}
        <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Client/Brand
            </span>
            <p className="text-gray-900 text-sm mt-1">{study.client}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Category
            </span>
            <p className="text-gray-900 text-sm mt-1">{study.category}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Marketplace
            </span>
            <p className="text-gray-900 text-sm mt-1">{study.marketplace}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Engagement Period
            </span>
            <p className="text-gray-900 text-sm mt-1">{study.period}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Services
            </span>
            <p className="text-gray-900 text-sm mt-1">{study.services}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Evidence Retained
            </span>
            <p className="text-gray-900 text-sm mt-1">{study.evidence}</p>
          </div>
        </div>

        {/* The Challenge */}
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
            The Challenge
          </h4>
          <p className="text-gray-600 leading-relaxed pl-7">
            {study.challenge}
          </p>
        </div>

        {/* What Tess Core LLC Did */}
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <Shield className="w-5 h-5 text-orange-500 mr-2" />
            What Tess Core LLC Did
          </h4>
          <ul className="space-y-2 pl-7">
            {study.actions.map((action, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-600">{action}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Measured Outcomes */}
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
            <BarChart3 className="w-5 h-5 text-orange-500 mr-2" />
            Measured Outcomes
          </h4>
          <div className="overflow-x-auto pl-7">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-500/5">
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border border-gray-200">
                    Metric
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border border-gray-200">
                    Before
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border border-gray-200">
                    After
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 border border-gray-200">
                    Period/Source
                  </th>
                </tr>
              </thead>
              <tbody>
                {study.metrics.map((m, index) => (
                  <tr key={index} className="hover:bg-orange-50/30">
                    <td className="px-4 py-3 text-sm text-gray-900 border border-gray-200 font-medium">
                      {m.metric}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-200">
                      {m.before}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-200">
                      {m.after}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 border border-gray-200">
                      {m.period}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h4 className="text-lg font-bold text-gray-900 mb-3">
            Client Testimonial
          </h4>
          <blockquote className="text-gray-700 italic leading-relaxed mb-4 border-l-4 border-orange-500 pl-4">
            &ldquo;{study.testimonial.quote}&rdquo;
          </blockquote>
          <div className="text-sm">
            <span className="font-semibold text-gray-900">
              {study.testimonial.name}
            </span>
            <br />
            <span className="text-gray-600">{study.testimonial.title}</span>
            {study.testimonial.link &&
              study.testimonial.link !==
                "[OPTIONAL VERIFICATION LINK]" && (
                <div className="mt-2">
                  <a
                    href={study.testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 text-sm"
                  >
                    Verification Link{" "}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              )}
          </div>
        </div>

        {/* Results Disclaimer */}
        <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
          <p className="text-gray-600 text-xs leading-relaxed">
            <strong>Results disclaimer:</strong> This case study reflects a
            specific historical engagement. Performance varies based on product,
            price, category, competition, budget, marketplace conditions, seller
            decisions, and Amazon systems. No future result is guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ClientSuccess() {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            VERIFIED RESULTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The following case studies describe selected historical client
            engagements. Results are specific to each client, product, category,
            marketplace, budget, and engagement period. No future result is
            guaranteed.
          </p>
        </div>
      </section>

      {/* Publication Rule */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center">
              <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
              Publication Rule
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Do not publish invented brands, testimonials, screenshots, or
              performance figures. Each case study must be supported by client
              authorization and retained evidence such as contracts, invoices,
              Seller Central reports, advertising reports, or approved
              screenshots. If the client is confidential, use the NDA wording
              rather than a fictitious company identity.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>

      {/* NDA/Confidential Client Wording */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 text-orange-500 mr-3" />
              NDA/Confidential Client Wording
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The client&apos;s identity is withheld under a confidentiality
              agreement. Tess Core LLC retains supporting engagement and
              performance records and will not disclose confidential client
              information without authorization.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Credentials
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Only verifiable credentials relevant to the services shown in the
              case studies are listed below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{cred.name}</h4>
                    <p className="text-orange-500 text-sm">{cred.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{cred.experience}</p>
                <p className="text-gray-500 text-xs">{cred.certifications}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact Tess Core LLC to discuss your Amazon account management
            requirements and how we can support your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Schedule a Consultation", getCalendlyLink())
                }
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </a>
            <Link href="/contact-us">
              <button
                onClick={() => handleClick("Contact Us", "/contact-us")}
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
