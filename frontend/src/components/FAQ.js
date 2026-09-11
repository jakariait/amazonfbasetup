"use client";
import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Shield,
  Users,
  Lock,
  ShoppingCart,
  HeartPulse,
  CreditCard,
  LogOut,
  Building2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { getCalendlyLink } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const faqCategories = [
  {
    category: "Company and Services",
    icon: Building2,
    questions: [
      {
        q: "What is Tess Core LLC?",
        a: "Tess Core LLC is an independent Amazon-focused eCommerce service provider. We support third-party sellers with authorized Seller Central account management services, including listings, inventory and FBA operations, orders, returns, advertising, pricing, promotions, Account Health, Seller Support cases, appeals, buyer messaging, Brand Analytics, and A+ Content.",
      },
      {
        q: "Is Tess Core LLC part of Amazon?",
        a: "No. Tess Core LLC is an independent third-party service provider and is not Amazon. References to Amazon and Seller Central describe the platforms for which we provide client-authorized services and do not imply endorsement by Amazon.",
      },
      {
        q: "What Amazon account management services do you provide?",
        a: "Services may include listing and catalog management, flat-file uploads, inventory monitoring, FBA shipment support, order management, returns and refund coordination, advertising, pricing, coupons and promotions, Account Health monitoring, Seller Support cases, appeals and reinstatement assistance, buyer messaging, Brand Analytics, A+ Content, and reporting. The exact scope is defined in the applicable agreement.",
      },
      {
        q: "Do you guarantee sales, rankings, or account reinstatement?",
        a: "No. Tess Core LLC does not guarantee sales, revenue, rankings, conversion rates, advertising performance, ROAS, policy acceptance, listing activation, appeal acceptance, account reinstatement, Brand Registry approval, or any particular Amazon decision. Results vary based on multiple seller, product, market, and platform factors.",
      },
    ],
  },
  {
    category: "Seller Authorization and Access",
    icon: Shield,
    questions: [
      {
        q: "How does a seller authorize Tess Core LLC?",
        a: "Sellers authorize Tess Core LLC through Amazon's official Solution Provider authorization process. The seller reviews and grants the Seller Central permissions required for the contracted services.",
      },
      {
        q: "Do you need my primary Seller Central password?",
        a: "No. Tess Core LLC does not request a seller's primary Seller Central password. Access is obtained through Amazon's official authorization and permission processes.",
      },
      {
        q: "Which Seller Central permissions do you request?",
        a: "We request only the permissions necessary for services included in the seller's agreed scope. Requirements differ for listings, inventory, FBA shipments, advertising, Account Health, cases, orders, returns, messaging, pricing, promotions, analytics, and brand content.",
      },
      {
        q: "Do all employees receive full Administrator access?",
        a: "No. Access is assigned according to each employee's responsibilities and limited to the minimum permission level needed. Administrator access is requested only when a contracted function cannot be performed with a lower level.",
      },
      {
        q: "Can I revoke Tess Core LLC's access?",
        a: "Yes. Sellers retain ownership and final control and may revoke Tess Core LLC's authorization through Amazon. Sellers may also contact us to coordinate service termination and applicable data deletion.",
      },
    ],
  },
  {
    category: "Authorized Team",
    icon: Users,
    questions: [
      {
        q: "Who can access Amazon information?",
        a: "Four employees may access Amazon information when required: MD Shahriar Sakib - Owner and Amazon E-Commerce Specialist; Edris Ahmed Tonmoy - Amazon Inventory Management Specialist; MD Sohanur Rahaman - Amazon Advertising Specialist; and MD Mahfuzur Rahman - Account Health and Seller Support Specialist.",
      },
      {
        q: "Do contractors or freelancers access Seller Central information?",
        a: "No. Tess Core LLC does not provide Seller Central access or Amazon information to independent contractors or freelancers. Access is restricted to authorized employees.",
      },
      {
        q: "Do employees share the same Seller Central login?",
        a: "No. Each authorized employee uses an individual Amazon-authorized identity where supported. Seller Central access and authentication methods are not shared between employees.",
      },
    ],
  },
  {
    category: "Security and Data Handling",
    icon: Lock,
    questions: [
      {
        q: "How do you protect Amazon seller information?",
        a: "Safeguards include role-based access, individual employee identities, MFA, encrypted password management, BitLocker or equivalent full-disk encryption, password-protected computers, screen locking, security updates, endpoint protection, access reviews, and access-revocation procedures.",
      },
      {
        q: "Do you download Seller Central reports or files?",
        a: "We may download Seller Central reports and operational files when necessary to provide contracted services. Downloads are limited to information required for the assigned task.",
      },
      {
        q: "Where are downloaded files stored?",
        a: "Downloaded Amazon information is stored only on encrypted computers used by authorized employees. Files are not intentionally stored on public computers, public file-sharing locations, personal accounts, or unauthorized devices.",
      },
      {
        q: "Do you share seller information with other clients or companies?",
        a: "Tess Core LLC does not sell Amazon information, share one seller's information with another seller, or use it for unrelated commercial purposes. We do not provide it to contractors, freelancers, or unrelated companies, except when legally required.",
      },
      {
        q: "How long do you retain downloaded Amazon information?",
        a: "When an engagement ends, applicable Seller Central access is revoked and downloaded Amazon information is securely deleted from authorized employee computers within 30 days, unless longer retention is legally required or necessary for an active client-authorized matter.",
      },
      {
        q: "What happens if an employee leaves Tess Core LLC?",
        a: "The employee's applicable Seller Central, password-manager, device, and business-system access is removed. Locally stored client files are reviewed and deleted according to our access and retention procedures.",
      },
    ],
  },
  {
    category: "Orders and Buyer Information",
    icon: ShoppingCart,
    questions: [
      {
        q: "Why might Tess Core LLC access order information?",
        a: "Order information may be accessed when a seller authorizes us to monitor orders, address fulfillment issues, review cancellations, coordinate returns or refunds, prepare reports, or manage order-related Seller Support cases.",
      },
      {
        q: "How do you use buyer information?",
        a: "Buyer information is used only for the client-authorized order, return, refund, or customer-service task for which access is required. It is not used for external advertising, unrelated marketing, or services for another seller.",
      },
      {
        q: "How is buyer messaging handled?",
        a: "Authorized employees may respond to permitted product, order, delivery, return, or customer-service messages. Communications follow the seller's instructions and applicable Amazon communication policies. Sensitive matters are escalated to the seller.",
      },
      {
        q: "Can Tess Core LLC issue refunds?",
        a: "Refunds are processed or coordinated only when included in the engagement and appropriately authorized. Material or unusual refund decisions may be escalated to the seller before action.",
      },
    ],
  },
  {
    category: "Account Health, Cases and Appeals",
    icon: HeartPulse,
    questions: [
      {
        q: "How do you support Account Health?",
        a: "We review applicable Account Health notifications and performance indicators, identify operational issues, prepare recommended actions, and communicate urgent matters. Amazon retains sole authority over Account Health and enforcement decisions.",
      },
      {
        q: "Can you open and manage Seller Support cases?",
        a: "Yes. When authorized, Tess Core LLC may create, monitor, and respond to cases concerning listings, inventory, FBA shipments, orders, account operations, and other contracted matters.",
      },
      {
        q: "Do you submit appeals?",
        a: "We may review notices, collect information, prepare corrective and preventive actions, draft appeals, and submit seller-approved appeals when included in the engagement. We do not guarantee appeal acceptance, listing reactivation, or reinstatement.",
      },
    ],
  },
  {
    category: "Pricing, Advertising and Approval",
    icon: CreditCard,
    questions: [
      {
        q: "Can Tess Core LLC change product prices?",
        a: "We may monitor Pricing Health and change prices only when pricing management is included in the engagement and the seller has provided authorization or approved pricing rules.",
      },
      {
        q: "Can you create coupons and promotions?",
        a: "Yes. When authorized, we may create and monitor coupons, promotions, and price discounts using seller-approved products, budgets, discount levels, and campaign periods.",
      },
      {
        q: "How do you manage Amazon advertising?",
        a: "Services may include campaign setup, keyword and product targeting, bid and budget monitoring, search-term analysis, optimization, and reporting. Material budget changes follow the seller's approved strategy.",
      },
      {
        q: "Which actions require seller approval?",
        a: "Depending on the agreement, approval may be required for material pricing changes, advertising budgets, appeals, sensitive-document submissions, unusual refunds, major account settings, or other significant actions.",
      },
    ],
  },
  {
    category: "Ending the Service",
    icon: LogOut,
    questions: [
      {
        q: "What happens when our engagement ends?",
        a: "Tess Core LLC coordinates the end of assigned services, removes applicable access, stops using the seller's Amazon information, and securely deletes downloaded Amazon information within 30 days, subject to limited legal or active authorized retention requirements.",
      },
    ],
  },
];

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? "border-orange-500/50 shadow-lg" : "hover:border-orange-500/30"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-orange-50/30 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const expandAll = () => {
    const allOpen = {};
    faqCategories.forEach((cat, ci) => {
      cat.questions.forEach((_, qi) => {
        allOpen[`${ci}-${qi}`] = true;
      });
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const totalQuestions = faqCategories.reduce(
    (sum, cat) => sum + cat.questions.length,
    0
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            AMAZON SELLER CENTRAL SUPPORT FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn how Tess Core LLC provides authorized Amazon Seller Central
            account management services, manages employee access, protects
            Amazon information, and works with sellers.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Expand/Collapse Controls */}
          <div className="flex justify-end gap-3 mb-8">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-medium text-orange-500 border border-orange-500/30 rounded-lg hover:bg-orange-500/5 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>

          {/* Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex}>
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-orange-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem
                        key={questionIndex}
                        question={item.q}
                        answer={item.a}
                        isOpen={
                          openItems[`${categoryIndex}-${questionIndex}`] || false
                        }
                        onToggle={() =>
                          toggleItem(categoryIndex, questionIndex)
                        }
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Question Count */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            Showing {totalQuestions} questions across {faqCategories.length}{" "}
            categories
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              General Disclaimer
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Information on this page provides a general overview of Tess Core
              LLC&apos;s services and operating practices. Exact service scope,
              permissions, deliverables, approval requirements, and commercial
              terms are defined in the applicable client agreement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Historical case-study results vary by client, product, category,
              budget, competition, marketplace conditions, and engagement
              period. No specific performance result or Amazon decision is
              guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Have Another Question?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact Tess Core LLC to discuss your Seller Central account
            management requirements, authorization process, security questions,
            and applicable service scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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

            <Link href="/amazon-account-management">
              <button
                onClick={() =>
                  handleClick(
                    "Explore Account Management",
                    "/amazon-account-management"
                  )
                }
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-orange-500 hover:text-orange-500 transition-all transform hover:scale-105 flex items-center justify-center cursor-pointer"
              >
                Explore Account Management
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
