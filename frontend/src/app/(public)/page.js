"use client";
import React from "react";
import {
  Shield,
  ShoppingCart,
  Package,
  RotateCcw,
  CreditCard,
  BarChart3,
  HeartPulse,
  MessageSquare,
  Users,
  Lock,
  CheckCircle,
  ExternalLink,
  ClipboardList,
  Target,
  Zap,
  Search,
  AlertTriangle,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { getCalendlyLink } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const trustItems = [
  { value: "4", label: "Authorized Employees", icon: Users },
  { value: "100%", label: "Seller-Authorized Access", icon: Shield },
  { value: "RBAC", label: "Role-Based Permissions", icon: Lock },
  { value: "30-Day", label: "Post-Engagement Deletion", icon: Trash2 },
];

const serviceCards = [
  {
    title: "Listings and Catalog",
    description:
      "Listing creation, catalog updates, variations, flat-file uploads, images, videos, and A+ Content.",
    icon: Package,
  },
  {
    title: "Inventory and FBA",
    description:
      "Inventory monitoring, replenishment planning, FBA shipment support, stranded-inventory review, and reporting.",
    icon: BarChart3,
  },
  {
    title: "Orders, Returns and Refunds",
    description:
      "Authorized order monitoring, returns, refund coordination, fulfillment-issue support, and case management.",
    icon: RotateCcw,
  },
  {
    title: "Amazon Advertising",
    description:
      "Campaign setup, keyword/product targeting, bid and budget monitoring, optimization, and reporting.",
    icon: Target,
  },
  {
    title: "Pricing and Promotions",
    description:
      "Pricing Health monitoring, authorized price changes, coupons, promotions, and discounts.",
    icon: CreditCard,
  },
  {
    title: "Account Health",
    description:
      "Notifications, performance indicators, issue escalation, and corrective-action recommendations.",
    icon: HeartPulse,
  },
  {
    title: "Seller Support and Appeals",
    description:
      "Case management, documentation coordination, appeal preparation, and seller-approved submissions.",
    icon: MessageSquare,
  },
  {
    title: "Brand Analytics and Content",
    description:
      "Brand Analytics, performance insights, A+ Content, approved assets, and brand-content support.",
    icon: ClipboardList,
  },
];

const howWeWork = [
  {
    step: "1",
    title: "Service Assessment",
    description:
      "We identify the seller\u2019s operational needs, marketplaces, service scope, and required Seller Central functions.",
  },
  {
    step: "2",
    title: "Seller Authorization",
    description:
      "The seller authorizes Tess Core LLC through Amazon\u2019s official Solution Provider process and grants the permissions required for the contracted services.",
  },
  {
    step: "3",
    title: "Role-Based Assignment",
    description:
      "Work is assigned to authorized employees according to responsibilities in account operations, inventory, advertising, Account Health, and Seller Support.",
  },
  {
    step: "4",
    title: "Authorized Execution",
    description:
      "Our team performs agreed tasks, documents material actions, and obtains seller approval where required.",
  },
  {
    step: "5",
    title: "Reporting and Review",
    description:
      "The seller receives applicable operational, inventory, advertising, Account Health, case, or performance reports.",
  },
  {
    step: "6",
    title: "Access Revocation",
    description:
      "When services end, access is revoked and downloaded Amazon information is deleted according to our 30-day process.",
  },
];

const team = [
  {
    name: "MD Shahriar Sakib",
    role: "Owner and Amazon E-Commerce Specialist",
  },
  {
    name: "Edris Ahmed Tonmoy",
    role: "Amazon Inventory Management Specialist",
  },
  {
    name: "MD Sohanur Rahaman",
    role: "Amazon Advertising Specialist",
  },
  {
    name: "MD Mahfuzur Rahman",
    role: "Account Health and Seller Support Specialist",
  },
];

const securityPoints = [
  "Seller authorization through Amazon\u2019s official process",
  "Individual employee access",
  "Role-based and least-privilege permissions",
  "Multi-factor authentication",
  "Encrypted password management",
  "BitLocker or equivalent full-disk encryption",
  "Restricted local file storage",
  "No contractor or freelancer access",
  "30-day post-engagement deletion",
  "Documented access-revocation process",
];

const whyChooseUs = [
  {
    title: "Authorized Account Support",
    description:
      "We perform only client-authorized services using the Seller Central permissions required for the engagement.",
  },
  {
    title: "Specialized Responsibilities",
    description:
      "Account operations, inventory, advertising, Account Health, and Seller Support tasks are assigned to employees with defined responsibilities.",
  },
  {
    title: "Documented Communication",
    description:
      "Material activities, cases, campaigns, issues, and recommendations are communicated through agreed reporting processes.",
  },
  {
    title: "Seller Control",
    description:
      "Sellers retain ownership, decision-making authority, and the ability to revoke access.",
  },
  {
    title: "Information Protection",
    description:
      "MFA, encrypted devices, credential management, access controls, and retention procedures help protect seller information.",
  },
];

export default function Home() {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            AMAZON-FOCUSED ECOMMERCE SERVICE PROVIDER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Amazon Seller Central Account
            <br />
            Management Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Tess Core LLC provides authorized Amazon Seller Central account
            management services for third-party sellers. Our team supports
            product listings, inventory and FBA shipments, orders, returns,
            advertising, pricing, promotions, Account Health, Seller Support
            cases, appeals, buyer messaging, Brand Analytics, and A+ Content.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Sellers authorize Tess Core LLC through Amazon&apos;s official
            Solution Provider authorization process. Sellers retain ownership
            and final control of their Seller Central accounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/amazon-account-management">
              <button
                onClick={() =>
                  handleClick(
                    "Explore Our Services",
                    "/amazon-account-management"
                  )
                }
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Explore Our Services
              </button>
            </Link>
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Schedule a Consultation", getCalendlyLink())
                }
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </a>
            <Link href="/data-security">
              <button
                onClick={() =>
                  handleClick("View Security Practices", "/data-security")
                }
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all transform hover:scale-105 cursor-pointer"
              >
                View Security Practices
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 px-4 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-14 h-14 mx-auto mb-3 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-7 h-7 text-orange-500" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                    {item.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal Identity Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              An Independent Amazon-Focused Service Provider
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Tesscore is operated by Tess Core LLC, a New Mexico limited
              liability company. We provide third-party Amazon Seller Central
              support under client authorization. Our four authorized employees
              perform services according to assigned responsibilities and
              approved access levels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Link
                  key={index}
                  href="/amazon-account-management"
                  className="block"
                >
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg h-full">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 bg-orange-500/5 border border-orange-500/20 rounded-xl p-4 text-center">
            <p className="text-gray-600 text-sm">
              Tess Core LLC is an independent service provider and is not Amazon.
              References to Amazon and Seller Central describe the platforms we
              support and do not imply endorsement by Amazon.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              How We Work
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our services are delivered according to each seller&apos;s
              authorized scope and assigned Seller Central permissions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeWork.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white font-bold rounded-full flex items-center justify-center mr-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Summary */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Specialized Amazon Account Management Team
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-center mt-8 max-w-3xl mx-auto">
            Four Tess Core LLC employees are authorized to access Amazon
            information when required for assigned client services. Access is
            limited according to each employee&apos;s responsibilities.
          </p>

          <div className="text-center mt-8">
            <Link href="/about-us">
              <button
                onClick={() => handleClick("Meet Our Team", "/about-us")}
                className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
              >
                Meet Our Team <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Success Preview */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Selected Client Engagements
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our client stories document the client challenge, marketplace,
            engagement period, Seller Central services delivered, verified
            measurement source, and results.
            Results are specific to each engagement and are not guarantees.
          </p>
          <Link href="/success-story">
            <button
              onClick={() =>
                handleClick(
                  "View Client Stories",
                  "/success-story"
                )
              }
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
            >
              View Client Stories{" "}
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Security and Amazon Information Protection
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Tess Core LLC limits Amazon information access to four authorized
              employees. Each employee uses an individual authorized identity
              and receives only the permissions required for assigned
              responsibilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {securityPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-500/50 transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/data-security">
              <button
                onClick={() =>
                  handleClick(
                    "Read Our Data Security Practices",
                    "/data-security"
                  )
                }
                className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
              >
                Read Our Data Security Practices{" "}
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Tess Core LLC
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No Guarantee Statement */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Tess Core LLC does not guarantee sales, rankings, advertising
                performance, policy acceptance, listing activation, appeal
                acceptance, account reinstatement, Brand Registry approval, or
                any particular Amazon decision. Results vary based on product,
                category, price, budget, competition, marketplace conditions,
                seller decisions, and Amazon systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Need Authorized Seller Central Support?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discuss your Amazon account management requirements with Tess Core
            LLC. We will review your service needs, explain the relevant
            workflow, and identify the Seller Central functions required for the
            engagement.
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
            <Link href="/amazon-account-management">
              <button
                onClick={() =>
                  handleClick(
                    "Explore Account Management",
                    "/amazon-account-management"
                  )
                }
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                Explore Account Management
              </button>
            </Link>
            <Link href="/contact-us">
              <button
                onClick={() => handleClick("Contact Us", "/contact-us")}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all transform hover:scale-105 cursor-pointer"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
