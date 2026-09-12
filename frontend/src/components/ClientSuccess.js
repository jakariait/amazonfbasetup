"use client";
import React from "react";
import {
  BarChart3,
  Shield,
  ExternalLink,
  Users,
  Target,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { getCalendlyLink } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const clientStories = [
  {
    id: "revive7",
    name: "Revive7",
    marketplace: "Amazon Canada",
    status: "Ongoing",
    description:
      "Ongoing Amazon store management and advertising support.",
    services: "Full Amazon Store Management",
    engagementStart: "Ongoing",
  },
  {
    id: "drink-botanicals-ireland",
    name: "Drink Botanicals Ireland",
    marketplace: "Amazon UK",
    status: "Ongoing",
    description:
      "Amazon store and advertising management, with a client engagement dating from 2022.",
    services: "Store and Advertising Management",
    engagementStart: "2022",
  },
];

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
            SELECTED CLIENT ENGAGEMENTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Client Stories &amp; Amazon Store Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Explore ongoing Amazon store-management engagements across Canada
            and the United Kingdom. These stories describe the work performed
            and, where available, performance reported for specific periods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#client-stories">
              <button
                onClick={() =>
                  handleClick("Explore Client Stories", "#client-stories")
                }
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Explore Client Stories{" "}
                <ExternalLink className="w-4 h-4 inline-block ml-2" />
              </button>
            </a>
            <Link href="/contact-us">
              <button
                onClick={() =>
                  handleClick("Discuss Your Store", "/contact-us")
                }
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                Discuss Your Store
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Summary Cards */}
      <section id="client-stories" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {clientStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:border-orange-500/50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <ShoppingBag className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-orange-500 text-sm font-medium">
                      {story.marketplace}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                    Status: {story.status}
                  </span>
                  <a
                    href={`#${story.id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm"
                  >
                    Read {story.name} Story{" "}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revive7 Story */}
      <section id="revive7" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-orange-500/5 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Revive7: Amazon Canada Store Management
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                  Amazon Canada
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                  Full Amazon Store Management
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                  Ongoing
                </span>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* The Engagement */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-orange-500 mr-2" />
                  The Engagement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  MD Shahriar Sakib provides ongoing management of Revive7&apos;s
                  Amazon Canada store. The engagement includes store operations
                  and advertising support, with continued monitoring of
                  performance and coordination with the client.
                </p>
              </div>

              {/* Scope of Support */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-2" />
                  Scope of Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The service covers overall Amazon store management. The
                  advertising snapshot below, when displayed, illustrates one
                  part of the engagement; it does not quantify every operational
                  activity performed for the store.
                </p>
              </div>

              {/* Ongoing Support */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-orange-500 mr-2" />
                  Ongoing Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The management engagement remains active, with continued
                  operational support and performance monitoring.
                </p>
              </div>

              {/* Results Disclaimer */}
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                <p className="text-gray-600 text-xs leading-relaxed">
                  <strong>Results disclaimer:</strong> Reported advertising
                  sales reflect the attribution used by the source dashboard.
                  They are not profit and should not be added to total store
                  sales. Each performance snapshot relates to its stated period;
                  ongoing management does not mean displayed totals update
                  automatically. Historical results do not guarantee future
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drink Botanicals Ireland Story */}
      <section id="drink-botanicals-ireland" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-orange-500/5 px-8 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Drink Botanicals Ireland: Amazon UK Store &amp; Advertising
                Management
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                  Amazon UK
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-xs font-medium">
                  Store and Advertising Management
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                  Ongoing
                </span>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Client */}
              <div className="grid sm:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Client
                  </span>
                  <p className="text-gray-900 text-sm mt-1">
                    Laura Maccarthy
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Engagement Period
                  </span>
                  <p className="text-gray-900 text-sm mt-1">
                    2022 - Ongoing
                  </p>
                </div>
              </div>

              {/* The Engagement */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Users className="w-5 h-5 text-orange-500 mr-2" />
                  The Engagement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  MD Shahriar Sakib has worked with Drink Botanicals Ireland
                  since 2022, providing Amazon UK store management and
                  advertising management. The engagement remains active, with
                  ongoing store support and advertising performance monitoring.
                </p>
              </div>

              {/* Scope of Work */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Target className="w-5 h-5 text-orange-500 mr-2" />
                  Scope of Work
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The engagement combines management of the Amazon store with
                  management of its advertising activity. The performance
                  snapshot, when displayed, highlights reported advertising
                  results rather than the full range of store-management work.
                </p>
              </div>

              {/* Ongoing Support */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-orange-500 mr-2" />
                  Ongoing Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Store and advertising management continue as part of the
                  active client engagement.
                </p>
              </div>

              {/* Results Disclaimer */}
              <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                <p className="text-gray-600 text-xs leading-relaxed">
                  <strong>Results disclaimer:</strong> Reported advertising
                  sales reflect the attribution used by the source dashboard.
                  They are not profit and should not be added to total store
                  sales. Each performance snapshot relates to its stated period;
                  ongoing management does not mean displayed totals update
                  automatically. Historical results do not guarantee future
                  outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding the Results */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Understanding the Results
          </h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Reported advertising sales reflect the attribution used by the
              source dashboard. They are not profit and should not be added to
              total store sales.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each performance snapshot relates to its stated period; ongoing
              management does not mean displayed totals update automatically.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Historical results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Service Links */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/amazon-account-management">
              <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-500/20 transition-colors cursor-pointer">
                Learn about our Amazon account management services{" "}
                <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </Link>
            <Link href="/about-us">
              <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-500/20 transition-colors cursor-pointer">
                Meet our team <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </Link>
            <Link href="/data-security">
              <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg text-sm font-medium hover:bg-orange-500/20 transition-colors cursor-pointer">
                Review our data security practices{" "}
                <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Discuss Your Amazon Store Management Needs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us about your marketplace, current operations and the support
            you need. We will review the service scope and the access required
            for the engagement.
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

      {/* Disclaimer */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <p className="text-gray-600 text-sm leading-relaxed">
              Tess Core LLC does not guarantee sales, rankings, advertising
              performance, policy acceptance, listing activation, appeal
              acceptance, account reinstatement, Brand Registry approval, or any
              particular Amazon decision. Results vary based on product,
              category, price, budget, competition, marketplace conditions,
              seller decisions, and Amazon systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
