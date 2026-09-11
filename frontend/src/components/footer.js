import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { getBrandLogo, getBrandName } from "@/utils/brand";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Amazon Account Management", href: "/amazon-account-management" },
    { label: "Client Success", href: "/client-success" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Data Security", href: "/data-security" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/tess.agency",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/tess_core_llc",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/tess-agency/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-orange-100 text-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <img
                src={getBrandLogo()}
                alt={getBrandName()}
                className="w-40 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Tesscore is operated by Tess Core LLC, a New Mexico limited
              liability company providing authorized Amazon Seller Central
              account management services.
            </p>
            <div className="flex items-center space-x-3">
              <span className="text-gray-500 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-600 hover:text-orange-500 p-2 rounded-lg transition-all duration-300 hover:bg-orange-50"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-gray-600 hover:text-orange-500 transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Security */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">
              Legal & Security
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-gray-600 hover:text-orange-500 transition-colors text-sm cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="mailto:support@tesscore.com"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  support@tesscore.com
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <a
                  href="tel:+8801743214111"
                  className="text-gray-600 hover:text-orange-500 transition-colors text-sm"
                >
                  +880 1743-214111
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>1012 Marquez Place Ste 106-B</p>
                  <p>Santa Fe, NM 87505</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            <strong className="text-gray-600">Disclaimer:</strong> Tess Core
            LLC is an independent third-party service provider and is not Amazon.
            References to Amazon and Seller Central describe the platforms we
            support and do not imply endorsement by Amazon.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} {getBrandName()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
