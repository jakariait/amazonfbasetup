"use client";
import React from "react";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  Trash2,
  Globe,
  Cookie,
  UserCheck,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "1",
    title: "Introduction",
    icon: Eye,
    content:
      'This Privacy Policy explains how Tess Core LLC ("Tesscore," "we," "us," or "our") collects, uses, stores, shares, and protects information when individuals visit tesscore.com, contact us, schedule a consultation, or engage our Amazon Seller Central account management services.',
  },
  {
    id: "2",
    title: "Information We Collect",
    icon: Eye,
    subsections: [
      {
        heading: "Website and inquiry information",
        content:
          "We may collect a person\u2019s name, business name, email address, phone number, consultation details, message content, IP address, browser information, and website usage information.",
      },
      {
        heading: "Amazon seller information",
        content:
        "When authorized to provide services, we may access seller account identifiers, listings, catalog data, inventory and FBA information, pricing and promotion information, advertising data, Account Health notifications, Seller Support cases, business reports, orders, returns, refunds, and buyer messages.",
      },
      {
        heading: "Client-provided information",
        content:
          "We may receive product information, brand assets, business records, instructions, and supporting documents provided by a client.",
      },
    ],
  },
  {
    id: "3",
    title: "How We Use Information",
    icon: Eye,
    list: [
      "Provide contracted account management services.",
      "Create or update listings and catalog content.",
      "Support inventory, FBA shipments, orders, returns, refunds, pricing, promotions, and advertising.",
      "Monitor Account Health and manage Seller Support cases or seller-approved appeals.",
      "Respond to inquiries and prepare reports or recommendations.",
      "Maintain security, investigate incidents, and meet legal or contractual obligations.",
    ],
  },
  {
    id: "4",
    title: "Seller Authorization",
    icon: UserCheck,
    content:
      "Sellers authorize Tess Core LLC through Amazon\u2019s official Solution Provider authorization process. We use access only for services included in the client\u2019s agreed scope of work. Sellers retain ownership and final control of their accounts and may revoke authorization through Amazon.",
    note: "Tess Core LLC does not request a seller\u2019s primary Seller Central password.",
  },
  {
    id: "5",
    title: "Authorized Users",
    icon: UserCheck,
    content:
      "Amazon information may be accessed by four authorized Tess Core LLC employees when required for assigned services. Access is based on job responsibilities and limited to the minimum permissions necessary.",
    note: "We do not provide Amazon information or Seller Central access to independent contractors or freelancers.",
  },
  {
    id: "6",
    title: "Information Sharing",
    icon: Eye,
    content:
      "Tess Core LLC does not sell Amazon information, use it for unrelated commercial purposes, or share one seller\u2019s information with another seller. We do not disclose Amazon information to unrelated companies, independent contractors, or freelancers, except when required by applicable law or a valid legal request.",
  },
  {
    id: "7",
    title: "Local Storage and Security",
    icon: Lock,
    content:
      "Seller Central reports and operational files may be downloaded when necessary to provide contracted services. Downloaded files are stored on encrypted computers used by authorized employees. Safeguards include role-based access, individual user identities, multi-factor authentication, encrypted password management, BitLocker or equivalent device encryption, screen locking, security updates, and endpoint protection.",
    link: { text: "See our Data Security page", href: "/data-security" },
  },
  {
    id: "8",
    title: "Data Retention and Deletion",
    icon: Trash2,
    content:
      "We retain downloaded Amazon information only for as long as necessary to provide the contracted service. When an engagement ends, applicable access is revoked and downloaded Amazon information is securely deleted from employee computers within 30 days, unless a longer period is required by law or necessary to resolve an active client-authorized matter.",
  },
  {
    id: "9",
    title: "International Processing",
    icon: Globe,
    content:
      "Tess Core LLC is registered in New Mexico, United States, and its authorized operations team may access information from Bangladesh. Where information is processed across jurisdictions, we apply the access and security measures described in this policy.",
  },
  {
    id: "10",
    title: "Cookies and Analytics",
    icon: Cookie,
    content:
      "Our website uses cookies and analytics technologies to understand website use and improve performance. The following third-party services may collect information through cookies or similar tracking technologies:",
    list: [
      "Google Tag Manager \u2014 Used for tag management and analytics tracking (GTM-KK3QPLML).",
      "Calendly \u2014 Used for consultation scheduling. Calendly may collect name, email, and scheduling details when you book a meeting.",
      "WhatsApp \u2014 The WhatsApp button opens a direct link to wa.me. WhatsApp may collect usage data per its own privacy policy.",
    ],
    note: "You may control cookies through your browser settings. Disabling certain cookies may affect website functionality.",
  },
  {
    id: "11",
    title: "Privacy Choices and Rights",
    icon: UserCheck,
    content:
      "Depending on applicable law, individuals may request access to, correction of, or deletion of their personal information. A person may also ask questions about how information is used. We may need to verify the requester\u2019s identity before completing a request.",
  },
  {
    id: "12",
    title: "Policy Updates",
    icon: RefreshCw,
    content:
      "We may update this Privacy Policy when our services, practices, or legal obligations change. The revised version will be posted on this page with an updated date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="text-gray-500 text-sm space-y-1">
            <p>Effective date: [September 01, 2026]</p>
            <p>Last updated: [September 01, 2026]</p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                    <span className="text-orange-500 mr-3">{section.id}.</span>
                    <span className="flex items-center">
                      {section.title}
                    </span>
                  </h2>

                  {section.content && (
                    <p className="text-gray-600 leading-relaxed pl-8">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="pl-8 space-y-4 mt-2">
                      {section.subsections.map((sub, index) => (
                        <div key={index}>
                          <h3 className="font-semibold text-gray-900 mb-1">
                            {sub.heading}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {sub.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.list && (
                    <ul className="space-y-3 pl-8 mt-2">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="pl-8 mt-3">
                      <p className="text-gray-700 font-medium">
                        {section.note}
                      </p>
                    </div>
                  )}

                  {section.link && (
                    <div className="pl-8 mt-3">
                      <Link href={section.link.href}>
                        <span className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors cursor-pointer">
                          {section.link.text}{" "}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </span>
                      </Link>
                    </div>
                  )}

                  {section.placeholder && (
                    <div className="pl-8 mt-4 bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                      <p className="text-orange-600 text-sm font-medium">
                        {section.placeholder}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section 13: Contact */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
              <span className="text-orange-500 mr-3">13.</span>
              Contact Us
            </h2>
            <div className="ml-8 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Tess Core LLC
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-gray-700">
                      1012 Marquez Place Ste 106-B
                      <br />
                      Santa Fe, NM 87505, USA
                    </span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:support@tesscore.com"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    support@tesscore.com
                  </a>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="tel:+8801743214111"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    +880 1743-214111
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Related Policies
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms-of-service">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/data-security">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Data Security
                </span>
              </Link>
              <Link href="/amazon-account-management">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Amazon Account Management
                </span>
              </Link>
              <Link href="/contact-us">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Contact Us
                </span>
              </Link>
            </div>
          </div>

          {/* Legal Review Notice */}
          <div className="mt-12 bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Legal Review Notice:</strong> This page contains
              placeholder fields that must be completed before publication.
              Obtain qualified legal review before publishing this Privacy
              Policy. Ensure all statements match Tess Core LLC&apos;s actual
              business practices and comply with applicable jurisdictions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
