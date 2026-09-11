"use client";
import React from "react";
import {
  Mail,
  Phone,
  CheckCircle,
  MapPin,
  Shield,
  AlertTriangle,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getCalendlyLink, getWhatsApp } from "@/utils/brand";
import { gtmPushEvent } from "@/utils/gtm";

const ContactSection = () => {
  const handleClick = (buttonName, destination) => {
    gtmPushEvent("button_click", {
      buttonName,
      category: "Navigation",
      destination,
    });
  };

  const phone = getWhatsApp();
  const link = `https://wa.me/${phone}`;

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold tracking-wider uppercase mb-2">
            Contact Tess Core LLC
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Discuss Your Amazon Seller Central Support Needs
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
            Contact Tess Core LLC to discuss your Amazon Seller Central account
            management requirements, service scope, seller-authorization
            process, and relevant permission needs.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 max-w-2xl mx-auto rounded-r-lg">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <p className="text-yellow-800 text-sm">
                <strong>Security Notice:</strong> Please do not submit Seller
                Central passwords, MFA codes, payment information, buyer
                personal information, tax records, or sensitive identity
                documents through this form.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Legal Entity */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Legal Entity</h4>
                    <p className="text-orange-100">Tess Core LLC</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Business Email</h4>
                    <p className="text-orange-100">
                      <a href="mailto:support@tesscore.com">
                        support@tesscore.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Primary Business Phone */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Primary Operations Contact
                    </h4>
                    <p className="text-orange-100">
                      <a href="tel:+8801743214111">+880 1743-214111</a>
                    </p>
                  </div>
                </div>

                {/* Registered Business Address */}
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Registered Business Address
                    </h4>
                    <p className="text-orange-100">
                      1012 Marquez Place Ste 106-B
                      <br />
                      Santa Fe, NM 87505
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Contact Tess Core LLC */}
            <div className="bg-black rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Contact Tess Core LLC?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">
                      Authorized Seller Central Support
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Services are performed under seller authorization and
                      according to an agreed scope.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">
                      Specialized Employee Responsibilities
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Four authorized employees have defined roles across
                      account operations, inventory, advertising, Account
                      Health, and Seller Support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">
                      Role-Based Access
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Permissions are assigned according to employee
                      responsibilities and service requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">
                      Security-Conscious Operations
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      MFA, encrypted password management, encrypted computers,
                      controlled access, and 30-day post-engagement deletion
                      are used.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">
                      Seller Control
                    </span>
                    <p className="text-gray-400 text-sm mt-1">
                      Sellers retain ownership, final decision-making authority,
                      and the ability to revoke access.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-8 p-4 bg-orange-500 bg-opacity-10 rounded-lg border border-orange-500">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <p className="text-black font-semibold text-center cursor-pointer">
                    Contact Tess Core LLC on WhatsApp
                  </p>
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                Business Hours
              </h3>
              <p className="text-gray-600">
                Business inquiries are reviewed during our regular operating
                hours. Response times may vary based on inquiry type and service
                requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy and Security Notice */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <Shield className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Protecting Information Submitted Through This Page
              </h3>
              <p className="text-gray-600 mb-4">
                Information submitted through this form is used to review and
                respond to business inquiries. Please do not submit Amazon
                account passwords, MFA codes, buyer personal information, payment
                information, tax records, or sensitive identity documents.
              </p>
              <p className="text-gray-600">
                For more information about how Tess Core LLC handles
                information, review our{" "}
                <a
                  href="/privacy-policy"
                  className="text-orange-500 underline hover:text-orange-400"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="/data-security"
                  className="text-orange-500 underline hover:text-orange-400"
                >
                  Data Security
                </a>{" "}
                practices.
              </p>
            </div>
          </div>
        </div>

        {/* Independent Provider Disclaimer */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-gray-500 text-sm italic">
            Tess Core LLC is an independent third-party service provider and is
            not Amazon. References to Amazon and Seller Central describe the
            platforms for which we provide client-authorized services and do not
            imply endorsement by Amazon.
          </p>
        </div>

        {/* Bottom CTA - Schedule Consultation */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Schedule an Initial Consultation
            </h3>
            <p className="text-orange-100 mb-4">
              Schedule an initial consultation to discuss your Amazon
              marketplace, current Seller Central operational needs, requested
              services, authorization process, and potential scope of work.
            </p>
            <p className="text-orange-200 text-sm mb-6 italic">
              A consultation does not guarantee Amazon approval, account
              reinstatement, sales performance, or acceptance of any service
              request.
            </p>
            <a
              href={getCalendlyLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  handleClick("Schedule a Consultation", getCalendlyLink())
                }
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ContactSection;
