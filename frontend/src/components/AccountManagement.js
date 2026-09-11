"use client";
import React from "react";
import {
  Shield,
  ShoppingCart,
  Package,
  RotateCcw,
  CreditCard,
  BarChart3,
  Users,
  Lock,
  FileText,
  CheckCircle,
  AlertTriangle,
  Settings2,
  Eye,
  EyeOff,
  ClipboardList,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
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

  const coreServices = [
    {
      service: "Listings and Catalog",
      scope: "Create/edit listings, attributes, variations, images, videos, and catalog corrections.",
      access: "Product/Inventory Edit",
      icon: Package,
    },
    {
      service: "Flat-File Uploads",
      scope: "Prepare and upload bulk listing or inventory files; review processing errors.",
      access: "Add Products via Upload - Edit",
      icon: FileText,
    },
    {
      service: "Inventory Management",
      scope: "Monitor stock, stranded inventory, replenishment needs, and performance.",
      access: "Inventory View; Edit only when authorized",
      icon: BarChart3,
    },
    {
      service: "FBA Shipments",
      scope: "Prepare shipment plans, monitor receiving, and address inbound issues.",
      access: "FBA Inventory/Shipments - Edit if performed",
      icon: Package,
    },
    {
      service: "Advertising",
      scope: "Create and optimize campaigns, targets, bids, budgets, and reports.",
      access: "Advertising Edit/Admin only as needed",
      icon: BarChart3,
    },
    {
      service: "Pricing",
      scope: "Monitor Pricing Health and make seller-authorized changes.",
      access: "Pricing View/Edit",
      icon: CreditCard,
    },
    {
      service: "Coupons/Promotions",
      scope: "Create and monitor seller-approved promotional campaigns.",
      access: "Promotion tools - Edit",
      icon: ClipboardList,
    },
    {
      service: "Account Health",
      scope: "Review notifications and prepare recommended actions.",
      access: "Account Health - View",
      icon: ShieldCheck,
    },
    {
      service: "Seller Support Cases",
      scope: "Create, respond to, and track operational cases.",
      access: "Manage Your Cases - Edit",
      icon: MessageSquare,
    },
    {
      service: "Appeals",
      scope: "Prepare and submit seller-approved appeals without outcome guarantees.",
      access: "Appeals - Edit only if contracted",
      icon: FileText,
    },
    {
      service: "Brand Analytics/A+",
      scope: "Review insights and publish seller-approved brand content.",
      access: "Brand Analytics View; A+ Edit",
      icon: BarChart3,
    },
  ];

  const serviceControls = [
    "Each service is defined in the client agreement or statement of work.",
    "Employees receive access according to assigned responsibilities.",
    "Material pricing, budget, appeal, refund, document, or account-setting actions follow seller authorization.",
    "Actions and deliverables are documented in operational reports.",
    "Access is revoked when no longer required.",
  ];

  const employees = [
    {
      name: "MD Shahriar Sakib",
      role: "Owner and account-management oversight",
      access: "Only where oversight or authorized action requires it.",
    },
    {
      name: "Edris Ahmed Tonmoy",
      role: "Inventory and FBA operations",
      access: "Do not grant customer PII access unless a documented fulfillment task requires it.",
    },
    {
      name: "MD Sohanur Rahaman",
      role: "Amazon advertising",
      access: "Normally no Orders/Returns/Refunds access.",
    },
    {
      name: "MD Mahfuzur Rahman",
      role: "Account Health and Seller Support cases",
      access: "Grant minimum necessary access if assigned order/return/refund cases.",
    },
  ];

  const buyerLimitations = [
    "Use buyer information only for the relevant order, return, refund, or permitted customer-service task.",
    "Do not use buyer information for external advertising or unrelated marketing.",
    "Do not combine one seller's information with another seller's information.",
    "Do not disclose information to contractors, freelancers, or unrelated companies.",
    "Do not copy restricted information into personal email, chat, personal cloud accounts, or unsecured devices.",
  ];

  const permissionLevels = [
    {
      permission: "Manage Orders (Restricted)",
      level: "View or Edit",
      condition: "View for monitoring; Edit only for authorized actions.",
    },
    {
      permission: "Order Reports",
      level: "View",
      condition: "Only when reports are needed for contracted operations.",
    },
    {
      permission: "Manage Seller Fulfilled Returns (Restricted)",
      level: "Edit",
      condition: "Only when actively managing returns.",
    },
    {
      permission: "Refunds",
      level: "Edit",
      condition: "Only for seller-authorized refund processing.",
    },
    {
      permission: "Orders (Restricted)",
      level: "Minimum available",
      condition: "Only when customer/order details are required.",
    },
    {
      permission: "Manage SAFE-T Claims",
      level: "Edit only if performed",
      condition: "Do not request unless SAFE-T claim work is a real service.",
    },
    {
      permission: "Messaging Access",
      level: "Edit only if performed",
      condition: "Only when responding to permitted buyer messages.",
    },
  ];

  const securityControls = [
    "Approved/company-managed encrypted computers; no personal devices for Amazon information.",
    "BitLocker or equivalent full-disk encryption.",
    "Unique employee identities and no shared credentials.",
    "MFA using approved factors.",
    "Encrypted credential storage and secure key management.",
    "PII tagging/classification and approved storage locations.",
    "Quarterly personnel/service access reviews.",
    "Remove employee access within 24 hours of termination or role change.",
    "Maintain an inventory of devices and systems handling PII.",
    "Update antivirus/anti-malware at least monthly.",
    "Conduct security-awareness training for approved users at least annually.",
    "Maintain PII access, download, deletion, and incident records.",
  ];

  const authorizationSteps = [
    "Agree on the exact service scope.",
    "Identify the minimum Seller Central permissions needed.",
    "Seller authorizes Tess Core LLC through Amazon's official Solution Provider process.",
    "Assign access only to employees whose duties require it.",
    "Perform authorized tasks and obtain seller approval for material actions.",
    "Document order, return, refund, case, and reporting activity.",
    "Review and remove unnecessary access.",
    "Apply PII retention/deletion deadlines and record completion.",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Tess Core LLC provides authorized Seller Central account management
            services for third-party sellers. Our team supports listings,
            inventory and FBA shipments, orders, returns and refunds,
            advertising, pricing and promotions, Account Health, Seller Support
            cases, appeals, buyer messaging, Brand Analytics, and A+ Content.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Sellers authorize Tess Core LLC through Amazon&apos;s official
            Solution Provider authorization process. We access only the functions
            and information required for the agreed service scope. Sellers retain
            account ownership and final control.
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
          </div>
        </div>
      </section>

      {/* Core Service and Permission Matrix */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Core Service and Permission Matrix
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each service is granted with the minimum access level required to
              perform the agreed operational scope.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="px-6 py-4 text-left font-bold">Service</th>
                  <th className="px-6 py-4 text-left font-bold">
                    Operational Scope
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    Minimum Access Principle
                  </th>
                </tr>
              </thead>
              <tbody>
                {coreServices.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-orange-50/50 transition-colors`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-orange-500" />
                          </div>
                          <span className="font-semibold text-gray-900">
                            {item.service}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {item.scope}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium">
                          {item.access}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How Services Are Controlled */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              How Services Are Controlled
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="space-y-4">
                {serviceControls.map((control, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{control}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manage Orders Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Manage Orders
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <ShoppingCart className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What We Do
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tess Core LLC reviews order status, monitors pending and unshipped
                orders, addresses fulfillment issues, coordinates permitted
                cancellations, confirms shipment-related information when
                authorized, reviews operational order reports, and escalates order
                issues to the seller or Seller Support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Access Is Required
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Manage Orders access is required to perform client-authorized
                order operations. View access is used when the service is limited
                to monitoring and reporting. Edit access is requested only when
                authorized operational actions must be completed.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Use</h3>
              <p className="text-gray-600 leading-relaxed">
                Order and customer information is accessed only for the seller
                account and task for which access was granted. Access is
                restricted to employees with an assigned business need.
              </p>
            </div>
          </div>

          {/* SPP Justification */}
          <div className="mt-12 bg-orange-500/5 rounded-xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 text-orange-500 mr-3" />
              Manage Orders - SPP Justification
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tess Core LLC requires access to Manage Orders to provide
              client-authorized order management services. Authorized employees
              review order status, monitor pending and unshipped orders, address
              fulfillment issues, coordinate cancellations where permitted,
              confirm shipment-related information when authorized, and escalate
              order-related issues to the seller or Amazon Seller Support. Order
              information is accessed only for the seller account and operational
              task for which access was granted.
            </p>
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              Order Reports - SPP Justification
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Tess Core LLC requires View access to Order Reports to monitor
              order operations, identify fulfillment issues, prepare client
              reports, and support authorized order, return, and refund
              activities. Reports are downloaded only when necessary and stored
              on approved encrypted computers accessible to authorized employees
              with a documented business need.
            </p>
          </div>
        </div>
      </section>

      {/* Returns Management */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Returns Management
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <RotateCcw className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What We Do
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We review seller-fulfilled and applicable FBA return requests and
                status, coordinate actions according to the seller&apos;s return
                policies, monitor return issues, prepare return reports, and
                create or manage relevant Seller Support cases.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <EyeOff className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Restricted Access Is Required
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Returns access may expose order and customer information. Access
                is used only when return management is included in the engagement
                and only for the relevant client-authorized task.
              </p>
            </div>
          </div>

          {/* SPP Justification */}
          <div className="mt-12 bg-orange-500/5 rounded-xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 text-orange-500 mr-3" />
              Returns - SPP Justification
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tess Core LLC requires access to applicable return functions to
              provide client-authorized return management services. Authorized
              employees review return requests and status, coordinate responses
              according to the seller&apos;s return policies, monitor
              return-related issues, and create or manage Seller Support cases
              when necessary. Return and customer information is used only for
              the applicable task and is not used for advertising, external
              marketing, or services provided to another seller.
            </p>
          </div>
        </div>
      </section>

      {/* Refunds Management */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Refunds Management
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What We Do
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We process or coordinate refunds relating to orders, returns,
                delivery issues, and approved customer-service resolutions when
                this service is included in the client agreement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Seller Control
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Refunds are completed only within the seller&apos;s
                authorization. Material, unusual, or high-value refund decisions
                are escalated to the seller before action.
              </p>
            </div>
          </div>

          {/* SPP Justification */}
          <div className="mt-12 bg-orange-500/5 rounded-xl p-8 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <ShieldCheck className="w-6 h-6 text-orange-500 mr-3" />
              Refunds - SPP Justification
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tess Core LLC requires access to refund functions to process or
              coordinate seller-authorized refunds relating to orders, returns,
              delivery issues, and approved customer-service resolutions. Refunds
              are performed only within the client&apos;s agreed service scope
              and authorization. Material, unusual, or high-value refund
              decisions are escalated to the seller before action is taken.
            </p>
          </div>
        </div>
      </section>

      {/* Restricted-Data Use and Employee Mapping */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Restricted-Data Use and Employee Mapping
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Although Tess Core LLC has four authorized employees, restricted
              customer/order access should be provided only to employees whose
              assigned duties require it.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="px-6 py-4 text-left font-bold">Employee</th>
                  <th className="px-6 py-4 text-left font-bold">
                    Primary Responsibility
                  </th>
                  <th className="px-6 py-4 text-left font-bold">
                    Restricted Orders/Returns/Refunds Access
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-orange-50/50 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {emp.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {emp.role}
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {emp.access}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-orange-500/5 rounded-xl p-6 border border-orange-500/20">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                Do not state or configure that all four employees automatically
                receive all restricted roles. Access is granted on a need-to-know
                basis only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Information Limitations */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Buyer Information Limitations
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="space-y-4">
                {buyerLimitations.map((limitation, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700">{limitation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Permission Levels */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Recommended Permission Levels
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Minimum access levels recommended for each permission based on
              service requirements.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="px-6 py-4 text-left font-bold">Permission</th>
                  <th className="px-6 py-4 text-left font-bold">
                    Suggested Level
                  </th>
                  <th className="px-6 py-4 text-left font-bold">Condition</th>
                </tr>
              </thead>
              <tbody>
                {permissionLevels.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-orange-50/50 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {item.permission}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 bg-orange-500/10 text-orange-600 rounded-full text-sm font-medium">
                        {item.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 text-sm">
                      {item.condition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PII Retention and Deletion */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              PII Retention and Deletion
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                PII Retention Policy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Amazon customer PII is retained for no longer than{" "}
                <strong>30 days after order delivery</strong> unless retention is
                required by applicable law. When a seller revokes authorization,
                terminates the engagement, or Tess Core LLC is no longer
                authorized to process the information, applicable Amazon
                information is securely deleted within{" "}
                <strong>30 days</strong> unless legally required otherwise.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Non-PII Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Non-PII Amazon information is retained only for as long as
                strictly necessary for the documented business purpose.
              </p>
              <div className="bg-orange-500/5 rounded-lg p-4 border border-orange-500/20">
                <p className="text-gray-700 text-sm">
                  <strong>Important:</strong> &quot;Delete within 30 days after
                  the contract ends&quot; is not sufficient by itself for
                  order/customer PII. The 30-day period after order delivery must
                  also be implemented and documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Controls for Restricted Access */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Security Controls for Restricted Access
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityControls.map((control, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg flex items-start"
              >
                <div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-orange-500" />
                </div>
                <p className="text-gray-700 text-sm">{control}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Incident Response Requirements
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Tess Core LLC maintains procedures to identify, contain,
                investigate, remediate, and document incidents involving Amazon
                information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Amazon must be notified within{" "}
                <strong>24 hours</strong> after detecting a security incident
                involving Amazon information.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The incident-response plan should identify the responsible point
                of contact and be reviewed regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Authorization Workflow */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Seller Authorization Workflow
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {authorizationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg flex items-center"
                >
                  <div className="w-12 h-12 bg-orange-500 text-white font-bold text-lg rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Guarantee Statement */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-orange-500/5 rounded-xl p-8 border border-orange-500/20">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No-Guarantee and Independence Statement
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tess Core LLC does not guarantee sales, rankings, advertising
                    performance, policy acceptance, appeal acceptance, account
                    reinstatement, or any particular Amazon decision. Amazon
                    retains sole authority over its systems, policies, programs,
                    approvals, enforcement actions, and platform decisions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Tess Core LLC is an independent third-party service provider
                    and is not Amazon. References to Amazon and Seller Central do
                    not imply endorsement by Amazon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your Amazon account management needs. We&apos;ll
            create a customized service scope and permission plan tailored to
            your business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us">
              <button
                onClick={() =>
                  handleClick("Contact Us", "/contact-us")
                }
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
