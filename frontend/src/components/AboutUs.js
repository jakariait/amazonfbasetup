"use client";
import React from "react";
import {
  Shield,
  Users,
  Lock,
  CheckCircle,
  ExternalLink,
  FileText,
  Package,
  ShoppingCart,
  RotateCcw,
  CreditCard,
  BarChart3,
  HeartPulse,
  MessageSquare,
  Eye,
  ClipboardList,
} from "lucide-react";
import Link from "next/link";
import { getCalendlyLink } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const team = [
  {
    name: "MD Shahriar Sakib",
    role: "Owner and Authorized Representative",
    subtitle: "Amazon E-Commerce Specialist",
    image: "/sakib.jpeg",
    bio: "MD Shahriar Sakib is the owner and authorized representative of Tess Core LLC. He oversees Seller Central account management, client-service strategy, listing and catalog operations, advertising coordination, account performance reviews, and internal access controls. He has seven years of relevant Amazon eCommerce experience across FBA and FBM operations, listings, inventory, advertising, account setup, and ongoing Seller Central support. He ensures services are performed according to the seller's authorization and agreed scope.",
  },
  {
    name: "Edris Ahmed Tonmoy",
    role: "Amazon Inventory Management Specialist",
    subtitle: "",
    image: "/tonmoy.jpeg",
    bio: "Edris Ahmed Tonmoy supports inventory and fulfillment operations for authorized client accounts. His responsibilities include inventory-status monitoring, replenishment planning, FBA inventory review, shipment coordination, stranded-inventory monitoring, inbound issue tracking, and inventory performance reporting. His access is limited to the inventory and fulfillment functions required for assigned services.",
  },
  {
    name: "MD Sohanur Rahaman",
    role: "Amazon Advertising Specialist",
    subtitle: "",
    image: "/sohan.jpeg",
    bio: "MD Sohanur Rahaman manages authorized Amazon advertising activities, including campaign setup, keyword and product targeting, bid and budget monitoring, search-term analysis, campaign optimization, and performance reporting. Material campaign and budget changes follow the client's approved strategy. Results vary by product, category, competition, pricing, budget, and marketplace conditions.",
  },
  {
    name: "MD Mahfuzur Rahman",
    role: "Account Health and Seller Support Specialist",
    subtitle: "",
    image: "/emon.jpeg",
    bio: "MD Mahfuzur Rahman monitors Account Health notifications, listing and performance issues, and Seller Support case activity. His responsibilities include identifying operational issues, preparing recommended actions, creating and monitoring support cases when authorized, coordinating seller-approved responses, and maintaining case records. Amazon retains sole authority over policy enforcement, account status, appeals, and reinstatement decisions.",
  },
];

const trustFacts = [
  { value: "4", label: "Authorized Employees", icon: Users },
  { value: "2019", label: "Founded", icon: FileText },
  { value: "100%", label: "Seller-Authorized Access", icon: Shield },
  { value: "30-Day", label: "Data Deletion Process", icon: Lock },
];

const services = [
  "Listings and Catalog Management",
  "Inventory and FBA Operations",
  "Orders, Returns and Refunds",
  "Amazon Advertising",
  "Pricing and Promotions",
  "Account Health Monitoring",
  "Seller Support Cases and Appeals",
  "Buyer Messaging",
  "Brand Analytics and A+ Content",
  "Operational Reporting",
];

const securityPoints = [
  "Seller Central reports and operational files are downloaded only when necessary.",
  "Downloaded files are stored on BitLocker-protected or equivalently encrypted computers used by authorized employees.",
  "MFA and encrypted credential management are used for supported accounts.",
  "When a client engagement ends, access is revoked and downloaded Amazon information is securely deleted within 30 days, subject to limited legal or active authorized retention requirements.",
];

export default function AboutUs() {
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
            <Shield className="w-4 h-4 mr-2" />
            ABOUT TESS CORE LLC
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Authorized Amazon Seller Central
            <br />
            Support by a Specialized Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Tess Core LLC is an Amazon-focused eCommerce service provider
            specializing in authorized Seller Central account management. We
            support third-party sellers with listings, inventory and FBA
            operations, orders, advertising, Account Health, Seller Support
            cases, appeals, pricing, promotions, buyer messaging, Brand
            Analytics, and A+ Content.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sellers authorize Tess Core LLC through Amazon&apos;s official
            Solution Provider authorization process. Sellers retain ownership
            and final control of their Seller Central accounts.
          </p>
        </div>
      </section>

      {/* Our Company */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Company
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Tesscore is operated by Tess Core LLC, a New Mexico limited
                liability company founded in 2019. We provide third-party Amazon
                Seller Central account management services under client
                authorization.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Legal entity:
                    </span>{" "}
                    <span className="text-gray-600">Tess Core LLC</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Registered address:
                    </span>{" "}
                    <span className="text-gray-600">
                      1012 Marquez Place Ste 106-B, Santa Fe, NM 87505, USA
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">Email:</span>{" "}
                    <span className="text-gray-600">support@tesscore.com</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Primary phone:
                    </span>{" "}
                    <span className="text-gray-600">+880 1743-214111</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Facts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {fact.value}
                  </div>
                  <div className="text-gray-600 font-medium">{fact.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Team
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our team consists of four Tess Core LLC employees with defined
              responsibilities across Amazon account operations, inventory,
              advertising, Account Health, and Seller Support. Seller Central
              access is assigned according to each employee&apos;s
              responsibilities and the services authorized by each seller.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden mr-6 flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-semibold mb-1">
                      {member.role}
                    </p>
                    {member.subtitle && (
                      <p className="text-orange-500/70 text-sm">
                        {member.subtitle}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized Access Statement */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Authorized Access Statement
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Tess Core LLC has four employees authorized to access Amazon
                information when required for contracted services. All four
                authorized users are employees of Tess Core LLC.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not provide Seller Central access or Amazon information to
                independent contractors or freelancers. Each employee uses an
                individual authorized identity, and access is assigned according
                to job responsibilities and limited to the minimum permissions
                needed for assigned tasks.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Multi-factor authentication, encrypted password management,
                role-based permissions, and BitLocker or equivalent device
                encryption are used to help protect Amazon information.
              </p>

              <div className="pt-4">
                <Link href="/data-security">
                  <span className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors cursor-pointer">
                    Read Our Data Security Practices{" "}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              Tess Core LLC was founded in 2019 to provide structured eCommerce
              support for businesses operating on Amazon. Our work developed from
              focused FBA and listing support into broader Seller Central account
              management covering catalog operations, inventory and fulfillment,
              advertising, Account Health, Seller Support cases, appeals,
              orders, returns, pricing, promotions, and brand content.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Today, Tess Core LLC operates with four employees assigned to
              specialized Amazon service responsibilities. We work under seller
              authorization, use role-based permissions, and document
              operational activities performed for each client.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our goal is to provide accurate, organized, and security-conscious
              Seller Central support while sellers retain ownership and final
              decision-making authority over their accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Experience and Training */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Experience and Ongoing Training
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our team&apos;s relevant training includes practical Seller
                Central experience and ongoing review of Amazon Seller Central
                resources, operational guidance, Account Health requirements,
                listing standards, advertising workflows, inventory processes,
                and policy updates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tess Core LLC does not claim an Amazon-issued certification
                unless a specific credential is identified and verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-md"
              >
                <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/amazon-account-management">
              <button
                onClick={() =>
                  handleClick(
                    "Explore Amazon Account Management",
                    "/amazon-account-management"
                  )
                }
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              >
                Explore Amazon Account Management{" "}
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Protecting Seller Information */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Protecting Seller Information
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="space-y-4">
                {securityPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-100">
                <Link href="/data-security">
                  <span className="inline-flex items-center px-6 py-3 bg-orange-500/10 text-orange-600 font-semibold rounded-lg hover:bg-orange-500/20 transition-colors cursor-pointer">
                    <Shield className="w-4 h-4 mr-2" />
                    Data Security
                  </span>
                </Link>
                <Link href="/privacy-policy">
                  <span className="inline-flex items-center px-6 py-3 bg-orange-500/10 text-orange-600 font-semibold rounded-lg hover:bg-orange-500/20 transition-colors cursor-pointer">
                    <Lock className="w-4 h-4 mr-2" />
                    Privacy Policy
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Discuss Your Amazon Account Management Needs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact Tess Core LLC to discuss your Seller Central service
            requirements, operational workflow, relevant permission needs, and
            seller-authorization process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button
                onClick={() => handleClick("Contact Us", "/contact-us")}
                className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Contact Us
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
                className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
              >
                Schedule a Consultation{" "}
                <ExternalLink className="w-4 h-4 ml-2" />
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
