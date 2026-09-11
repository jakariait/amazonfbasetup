"use client";
import React from "react";
import { FileText, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "1",
    title: "Agreement to These Terms",
    content:
      "These Terms of Service govern use of tesscore.com and services provided by Tess Core LLC. By engaging our services, the client agrees to these Terms and any applicable proposal, service agreement, or statement of work. If a separate signed agreement conflicts with these Terms, the signed agreement controls to the extent of the conflict.",
  },
  {
    id: "2",
    title: "Independent Service Provider",
    content:
      "Tesscore is operated by Tess Core LLC, an independent third-party eCommerce service provider. Tess Core LLC is not Amazon, is not employed by Amazon, and does not represent that Amazon endorses or guarantees our services.",
  },
  {
    id: "3",
    title: "Services",
    content:
      "Services may include Seller Central account management, listing and catalog work, flat-file uploads, inventory and FBA shipment support, pricing, coupons and promotions, Amazon advertising, Account Health monitoring, Seller Support cases, appeals and reinstatement assistance, buyer messaging, order management, returns, refunds, Brand Analytics, A+ Content, and reporting. The exact services are defined in the client\u2019s agreement or statement of work.",
  },
  {
    id: "4",
    title: "Seller Authorization and Access",
    content:
      "The client authorizes Tess Core LLC through Amazon\u2019s official Solution Provider authorization process and grants only the permissions required for the contracted services. The client retains ownership and final control of the Seller Central account and may revoke access through Amazon. Tess Core LLC will not intentionally use access outside the agreed service scope.",
  },
  {
    id: "5",
    title: "Client Responsibilities",
    list: [
      "Provide accurate, complete, and lawful information and documents.",
      "Maintain ownership and security of the primary Seller Central account.",
      "Review and approve material pricing, budget, appeal, refund, account-setting, or sensitive-document actions when required.",
      "Comply with Amazon policies and applicable laws.",
      "Not provide counterfeit, falsified, manipulated, or misleading information.",
      "Confirm rights to all product content, images, trademarks, claims, and other assets supplied to Tess Core LLC.",
    ],
  },
  {
    id: "6",
    title: "Approval and Operational Decisions",
    content:
      "The client remains responsible for final commercial, legal, tax, product, and account decisions. Tess Core LLC may require approval before material pricing changes, advertising budget changes, appeal submissions, refunds, account-setting changes, sensitive-document submissions, or other significant actions.",
  },
  {
    id: "7",
    title: "No Guaranteed Results",
    content:
      "Tess Core LLC does not guarantee sales, revenue, rankings, conversion rate, advertising performance, ROAS, policy acceptance, listing activation, Brand Registry approval, appeal acceptance, account reinstatement, or any particular decision by Amazon. Results vary based on product, price, category, competition, budget, marketplace conditions, seller conduct, and Amazon systems or policies.",
  },
  {
    id: "8",
    title: "Fees, Billing, and Refunds",
    content:
      "Fees, payment schedules, renewal terms, and any refund rights are stated in the applicable proposal or signed service agreement. Unless a separate written refund policy is provided, all fees are non-refundable once services have been performed. If a client disputes an invoice, written notice must be sent within 15 calendar days of the invoice date. Tess Core LLC will review the dispute and respond within 5 business days. Subscription or retainer services may be canceled with 30 days written notice; however, fees already paid for the current billing period are non-refundable. Tess Core LLC does not offer money-back guarantees unless explicitly stated in a signed service agreement.",
  },
  {
    id: "9",
    title: "Confidentiality and Data Protection",
    content:
      "Tess Core LLC will handle client information according to its Privacy Policy, Data Security practices, and applicable contractual obligations. Clients must avoid sending unnecessary sensitive information and should use approved communication methods.",
  },
  {
    id: "10",
    title: "Intellectual Property",
    content:
      "Clients retain ownership of their trademarks, product information, brand assets, and content they lawfully provide. Tess Core LLC retains ownership of its pre-existing methods, templates, processes, and website content. The client authorizes Tess Core LLC to use supplied materials only as necessary to deliver the contracted services.",
  },
  {
    id: "11",
    title: "Suspension and Termination",
    content:
      "Either party may terminate services according to the applicable agreement. Tess Core LLC may suspend work for nonpayment, unlawful activity, security risk, policy abuse, or material breach. At the end of an engagement, applicable access is revoked and downloaded Amazon information is deleted within 30 days, subject to legal or active authorized retention requirements.",
  },
  {
    id: "12",
    title: "Limitation of Liability and Governing Law",
    content:
      "To the maximum extent permitted by applicable law, Tess Core LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to the use of our services, including but not limited to loss of profits, revenue, data, or business opportunities, even if advised of the possibility of such damages. Tess Core LLC's total aggregate liability for any claims arising under these Terms shall not exceed the total fees paid by the client to Tess Core LLC during the twelve (12) months immediately preceding the event giving rise to the claim. These Terms shall be governed by and construed in accordance with the laws of the State of New Mexico, United States, without regard to its conflict-of-law provisions. Any dispute arising under these Terms shall first be submitted to good-faith negotiation between the parties. If the dispute is not resolved within 30 days, either party may pursue resolution in the state or federal courts located in Santa Fe County, New Mexico, and the parties consent to the personal jurisdiction of such courts.",
  },
  {
    id: "13",
    title: "Changes to These Terms",
    content:
      "We may update these Terms when our services, practices, or legal obligations change. Updated Terms will be posted with a revised effective date. Material changes affecting an active signed engagement will be handled according to the applicable agreement.",
  },
];

export default function TermOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <FileText className="w-4 h-4 mr-2" />
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <div className="text-gray-500 text-sm space-y-1">
            <p>Effective date: September 01, 2026</p>
            <p>Last updated: September 01, 2026</p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
                  <span className="text-orange-500 mr-3">{section.id}.</span>
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 pl-8">
                    {section.list.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Section 14: Contact */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
              <span className="text-orange-500 mr-3">14.</span>
              Contact
            </h2>
            <div className="ml-8 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
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
              <Link href="/privacy-policy">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Privacy Policy
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

        </div>
      </section>
    </div>
  );
}
