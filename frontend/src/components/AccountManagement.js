"use client";
import React from "react";
import {
  Shield,
  Package,
  RotateCcw,
  CreditCard,
  BarChart3,
  Users,
  Lock,
  FileText,
  CheckCircle,
  AlertTriangle,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
  ClipboardList,
  Eye,
  Search,
  ShoppingCart,
  Target,
} from "lucide-react";
import { getCalendlyLink } from "@/utils/brand";
import Link from "next/link";
import { gtmPushEvent } from "@/utils/gtm";

export default function AccountManagement() {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const serviceCards = [
    {
      title: "Listings and Catalog",
      description:
        "Listing creation/editing, catalog updates, variations, flat-file uploads, images, videos, and content coordination.",
      icon: Package,
    },
    {
      title: "Inventory and FBA",
      description:
        "Inventory monitoring, replenishment support, FBA shipment preparation/coordination, stranded-inventory review, and fulfillment issue follow-up.",
      icon: BarChart3,
    },
    {
      title: "Orders, Returns and Refunds",
      description:
        "Authorized order monitoring, return request review, refund coordination, fulfillment-issue support, and case management.",
      icon: ShoppingCart,
    },
    {
      title: "Amazon Advertising",
      description:
        "Campaign setup, keyword/product targeting, bid and budget monitoring, optimization, and reporting within seller-approved scope.",
      icon: Target,
    },
    {
      title: "Pricing and Promotions",
      description:
        "Seller-approved pricing changes, coupons, promotions, and discounts within the agreed limits.",
      icon: CreditCard,
    },
    {
      title: "Account Health and Support",
      description:
        "Notification monitoring, performance indicators, Seller Support cases, evidence collection, and appeal preparation.",
      icon: ShieldCheck,
    },
    {
      title: "Buyer Messaging",
      description:
        "Permitted order-related communication through authorized Amazon tools.",
      icon: MessageSquare,
    },
    {
      title: "Brand Analytics and A+ Content",
      description:
        "Brand Analytics analysis, performance insights, and A+ Content support where the seller's account and permissions allow.",
      icon: ClipboardList,
    },
  ];

  const howWeWork = [
    {
      step: "1",
      title: "Service Assessment",
      description:
        "Identify the seller's operational needs, marketplaces, deliverables, and required Seller Central functions.",
    },
    {
      step: "2",
      title: "Seller Authorization",
      description:
        "The seller authorizes Tess Core LLC through Amazon's official Solution Provider process and grants the permissions required for the contracted services.",
    },
    {
      step: "3",
      title: "Employee Assignment",
      description:
        "Assign individual access and only the permissions required for each employee's responsibilities.",
    },
    {
      step: "4",
      title: "Authorized Execution",
      description:
        "Perform agreed tasks, record material actions, and seek seller approval where required.",
    },
    {
      step: "5",
      title: "Reporting and Review",
      description:
        "Report activity, exceptions, and performance at the agreed frequency.",
    },
    {
      step: "6",
      title: "Offboarding",
      description:
        "Coordinate removal of service and employee access and delete retained files according to the applicable retention policy.",
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

  const securitySummary = [
    "Individual employee access with authorized identities",
    "Role-based and least-privilege permissions",
    "Multi-factor authentication for Amazon access",
    "Encrypted password management for business credentials",
    "BitLocker or equivalent full-disk encryption",
    "Restricted local file storage on encrypted computers",
    "No contractor or freelancer access to Amazon information",
    "30-day post-engagement data deletion",
    "Documented access-revocation process",
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Amazon Account Management
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Amazon Seller Central Account
            <br />
            Management Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Tess Core LLC supports third-party Amazon sellers with listings,
            inventory and FBA shipments, orders, returns and refunds,
            advertising, pricing and promotions, Account Health, Seller Support
            cases, appeals, buyer messaging, Brand Analytics and A+ Content.
            Direct account work is performed only after seller authorization and
            within the permissions available to our service and granted for the
            engagement. Sellers retain account ownership and final
            decision-making authority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button
                onClick={() =>
                  handleClick(
                    "Discuss Your Account Management Needs",
                    "/contact-us"
                  )
                }
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Discuss Your Account Management Needs
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
                  handleClick("Read Data Security Practices", "/data-security")
                }
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all transform hover:scale-105 cursor-pointer"
              >
                Read Data Security Practices
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seller Central Services We Support */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Seller Central Services We Support
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our services are delivered according to each seller&apos;s
              authorized scope and assigned Seller Central permissions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg h-full"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Orders, Returns & Refunds */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Orders, Returns & Refunds Support
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Tess Core LLC helps sellers monitor orders, review return requests
              and coordinate or process authorized refunds. Work follows the
              agreed service scope, seller instructions, applicable marketplace
              workflows and the permissions actually granted.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Orders */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Order Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We review order status, identify fulfillment-related issues,
                coordinate seller-approved follow-up and manage related Seller
                Support cases. We use the order records necessary to investigate
                and complete the assigned task.
              </p>
            </div>

            {/* Returns */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <RotateCcw className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Returns</h3>
              <p className="text-gray-600 leading-relaxed">
                We review return requests and their status, coordinate next
                steps under the seller&apos;s return instructions, and take
                permitted actions when authorized. Buyer communication is handled
                through the appropriate Amazon workflow where access is available.
              </p>
            </div>

            {/* Refunds */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Refunds</h3>
              <p className="text-gray-600 leading-relaxed">
                We review refund-related requests and order details, obtain
                seller approval where required, and process refunds only when our
                granted permissions allow it. Refund actions remain within the
                seller&apos;s documented instructions and approval limits;
                exceptions are escalated to the seller.
              </p>
            </div>
          </div>

          {/* Why Direct Access Is Needed */}
          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-5 h-5 text-orange-500 mr-3" />
              Why Direct Access Is Needed
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Access to relevant order, return and refund functions is needed to
              inspect the affected transaction, check its current status and
              carry out the seller-authorized action inside Seller Central. We
              use only the information needed for that task. Buyer personal
              information is accessed only when necessary and permitted.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4">
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

      {/* Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Four Tess Core LLC employees are authorized to access Amazon
              information when required for assigned client services. Access is
              limited according to each employee&apos;s responsibilities.
            </p>
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

      {/* Client Evidence */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Client Evidence
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
                handleClick("View Client Stories", "/success-story")
              }
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
            >
              View Client Stories{" "}
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </section>

      {/* Security Summary */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Security Summary
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
            {securitySummary.map((point, index) => (
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

      {/* Why Choose Tess Core LLC */}
      <section className="py-20 px-4">
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
      <section className="py-16 px-4 bg-gray-50">
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

      {/* Consultation CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Discuss Your Seller Central Support Needs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us your marketplaces, operational requirements and service
            scope. We will identify the work involved and the account
            permissions required.
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
    </div>
  );
}
