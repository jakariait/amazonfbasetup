"use client";
import React from "react";
import {
  Shield,
  Lock,
  Users,
  Key,
  Monitor,
  Download,
  Share2,
  Trash2,
  UserMinus,
  Search,
  AlertTriangle,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "1",
    title: "Official Seller Authorization",
    icon: Shield,
    content:
      "Sellers authorize Tess Core LLC through Amazon\u2019s official Solution Provider authorization process. Access is used only for services included in the client\u2019s agreed scope. Sellers retain ownership and final control and may revoke authorization through Amazon. We do not request a seller\u2019s primary Seller Central password.",
  },
  {
    id: "2",
    title: "Authorized Team",
    icon: Users,
    content:
      "Four Tess Core LLC employees may access Amazon information when required for assigned services:",
    employees: [
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
    ],
    note: "Independent contractors and freelancers are not provided access to Amazon information or Seller Central.",
  },
  {
    id: "3",
    title: "Role-Based Access",
    icon: Users,
    list: [
      "Each employee uses an individual Amazon-authorized identity.",
      "Access is assigned by responsibility and limited to the minimum permissions needed.",
      "Access is reviewed when responsibilities change, when a client engagement ends, or when employment ends.",
      "Seller Central access is not shared between employees.",
    ],
  },
  {
    id: "4",
    title: "Authentication and Credentials",
    icon: Key,
    list: [
      "Multi-factor authentication is enabled for Amazon access and supported business accounts.",
      "An encrypted password manager is used for authorized business credentials.",
      "Strong, unique passwords are required.",
      "Passwords and MFA codes may not be shared.",
      "Credentials are not stored in unprotected documents, spreadsheets, emails, or chat messages.",
    ],
  },
  {
    id: "5",
    title: "Device and Network Protection",
    icon: Monitor,
    list: [
      "BitLocker or equivalent full-disk encryption on all four authorized computers.",
      "Individual password-protected user accounts and automatic screen locking.",
      "Current operating-system and security updates.",
      "Antivirus or endpoint security protection.",
      "Access restricted from unauthorized individuals.",
      "No intentional storage on public computers or unauthorized removable storage.",
      "Secure network use for accessing Amazon information.",
    ],
  },
  {
    id: "6",
    title: "Downloaded Information",
    icon: Download,
    content:
      "Seller Central reports and operational files are downloaded only when necessary. Files are stored on encrypted computers used by authorized employees and are not transferred to personal accounts, unauthorized devices, public file-sharing locations, or unrelated third parties.",
  },
  {
    id: "7",
    title: "Information Sharing",
    icon: Share2,
    content:
      "Tess Core LLC does not sell Amazon information, use it for unrelated commercial purposes, share one seller\u2019s information with another seller, or disclose it to contractors, freelancers, or unrelated companies, except when legally required.",
  },
  {
    id: "8",
    title: "Retention and Secure Deletion",
    icon: Trash2,
    content:
      "When a client engagement ends, applicable Seller Central access is revoked and downloaded Amazon information is securely deleted from authorized employee computers within 30 days, unless a longer period is legally required or necessary for an active client-authorized matter. Deletion is documented in an internal record.",
  },
  {
    id: "9",
    title: "Access Changes and Offboarding",
    icon: UserMinus,
    content:
      "When an employee\u2019s role changes or employment ends, Tess Core LLC removes applicable Seller Central, password-manager, device, and business-system access and requires removal of locally stored client information according to the retention policy.",
  },
  {
    id: "10",
    title: "Security Reviews",
    icon: Search,
    content:
      "Tess Core LLC periodically reviews authorized users, permission levels, device-security settings, stored information, and the continued business need for access. Suspected unauthorized access, device loss, malware, credential exposure, or accidental disclosure must be escalated immediately.",
  },
  {
    id: "11",
    title: "Incident Response",
    icon: AlertTriangle,
    content:
      "Our incident-response process covers unauthorized access, credential compromise, device loss, malware, file exposure, and accidental disclosure.",
    list: [
      "Identify and document the suspected incident.",
      "Contain affected accounts, devices, and access.",
      "Revoke or change compromised credentials.",
      "Investigate the information and clients affected.",
      "Preserve records necessary for investigation.",
      "Notify affected clients, Amazon, or authorities when required.",
      "Correct the underlying issue and document preventive actions.",
    ],
  },
  {
    id: "12",
    title: "Client Responsibilities",
    icon: ClipboardCheck,
    list: [
      "Protect their primary account credentials and MFA methods.",
      "Review permissions granted to providers.",
      "Promptly revoke unnecessary access.",
      "Notify Tess Core LLC of suspected unauthorized activity.",
    ],
  },
];

export default function DataSecurity() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <Lock className="w-4 h-4 mr-2" />
            SECURITY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Data Security and Amazon
            <br />
            Information Protection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tess Core LLC uses administrative, technical, and organizational
            safeguards designed to protect Amazon seller information against
            unauthorized access, disclosure, alteration, loss, and misuse.
          </p>
        </div>
      </section>

      {/* Security Content */}
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

                  {section.employees && (
                    <div className="pl-8 mt-4 space-y-3">
                      {section.employees.map((emp, index) => (
                        <div
                          key={index}
                          className="flex items-start bg-gray-50 rounded-lg p-4 border border-gray-100"
                        >
                          <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <Users className="w-4 h-4 text-orange-500" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">
                              {emp.name}
                            </span>
                            <span className="text-gray-500 mx-2">-</span>
                            <span className="text-gray-600">{emp.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.list && (
                    <ul className="space-y-3 pl-8 mt-3">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2.5 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="pl-8 mt-4">
                      <p className="text-gray-700 font-medium bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                        {section.note}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section 13: Security Contact */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-start">
              <span className="text-orange-500 mr-3">13.</span>
              Security Contact
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
                  <Mail className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:support@tesscore.com"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    support@tesscore.com
                  </a>
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
              </div>
            </div>
          </div>

          {/* Independent Provider Notice */}
          <div className="mt-12 bg-orange-500/5 border border-orange-500/20 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">
              Independent-Provider Notice
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Tess Core LLC is an independent third-party service provider and is
              not Amazon. References to Amazon and Seller Central describe the
              platforms for which we provide client-authorized services and do
              not imply endorsement by Amazon.
            </p>
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
              <Link href="/terms-of-service">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Terms of Service
                </span>
              </Link>
              <Link href="/amazon-account-management">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  Amazon Account Management
                </span>
              </Link>
              <Link href="/about-us">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/10 text-orange-600 rounded-lg hover:bg-orange-500/20 transition-colors text-sm font-medium cursor-pointer">
                  About Us
                </span>
              </Link>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center text-gray-500 text-sm">
            Last Updated: [MONTH DAY, 2026]
          </div>
        </div>
      </section>
    </div>
  );
}
