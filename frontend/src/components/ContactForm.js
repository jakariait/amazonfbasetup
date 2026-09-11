"use client";
import React, { useState } from "react";
import { Send, AlertTriangle } from "lucide-react";
import { gtmPushEvent } from "@/utils/gtm";

const serviceOptions = [
  "Complete Account Management",
  "Listings and Catalog",
  "Inventory and FBA",
  "Order Management",
  "Returns and Refunds",
  "Amazon Advertising",
  "Pricing and Promotions",
  "Account Health",
  "Seller Support Cases",
  "Appeals and Reinstatement Support",
  "Buyer Messaging",
  "Brand Analytics and A+ Content",
  "Other",
];

const marketplaceOptions = [
  "United States",
  "Canada",
  "Mexico",
  "United Kingdom",
  "European Union",
  "United Arab Emirates",
  "Saudi Arabia",
  "Australia",
  "Japan",
  "India",
  "Other",
];

const ContactForm = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    country: "",
    marketplace: "",
    service: "",
    message: "",
    phone: "",
    sellerType: "",
    preferredContact: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.companyName.trim())
      newErrors.companyName = "Company or brand name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.marketplace)
      newErrors.marketplace = "Please select an Amazon marketplace";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent)
      newErrors.consent = "You must agree to the privacy policy";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName,
      emailAddress: formData.email,
      companyName: formData.companyName,
      country: formData.country,
      marketplace: formData.marketplace,
      service: formData.service,
      message: formData.message,
      phoneNumber: formData.phone,
      sellerType: formData.sellerType,
      preferredContact: formData.preferredContact,
    };

    try {
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        gtmPushEvent("form_submission", {
          formType: "ContactForm",
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          marketplace: formData.marketplace,
          message: formData.message,
        });

        setSuccessMsg(
          "Thank you. Your inquiry has been received. A Tess Core LLC representative will review your message and respond using the contact information provided."
        );
        setFormData({
          fullName: "",
          email: "",
          companyName: "",
          country: "",
          marketplace: "",
          service: "",
          message: "",
          phone: "",
          sellerType: "",
          preferredContact: "",
          consent: false,
        });
        setErrors({});

        setTimeout(() => setSuccessMsg(""), 5000);
      } else {
        const errorMsg = data.message || "Failed to send message. Please try again.";
        setErrors({ submit: errorMsg });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "An error occurred. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

      <div className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Business Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your business email"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Company or Brand Name */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Company or Brand Name *
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your company or brand name"
          />
          {errors.companyName && (
            <p className="text-red-400 text-sm mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Country *
          </label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your country"
          />
          {errors.country && (
            <p className="text-red-400 text-sm mt-1">{errors.country}</p>
          )}
        </div>

        {/* Amazon Marketplace */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Amazon Marketplace *
          </label>
          <select
            name="marketplace"
            required
            value={formData.marketplace}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
          >
            <option value="">Select a marketplace</option>
            {marketplaceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.marketplace && (
            <p className="text-red-400 text-sm mt-1">{errors.marketplace}</p>
          )}
        </div>

        {/* Service Required */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Service Required *
          </label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black resize-none"
            placeholder="Tell us about your Amazon Seller Central account management requirements, service scope, and authorization process..."
          ></textarea>
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Phone Number (Optional) */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Seller Type (Optional) */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Seller Type
          </label>
          <input
            type="text"
            name="sellerType"
            value={formData.sellerType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="e.g., Private Label, FBA, Wholesale, etc."
          />
        </div>

        {/* Preferred Contact Method (Optional) */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Preferred Contact Method
          </label>
          <select
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
          >
            <option value="">Select preferred method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>

        {/* Sensitive Data Warning */}
        <div className="bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg p-4 flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
          <p className="text-yellow-200 text-sm">
            <strong>Important:</strong> Do not submit Seller Central passwords,
            MFA codes, buyer information, payment card data, tax records, or
            sensitive account documents through this form. Secure submission
            instructions will be provided separately when necessary.
          </p>
        </div>

        {/* Privacy Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="mt-1 w-4 h-4 text-orange-500 bg-white border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="consent" className="text-gray-300 text-sm">
            I agree that Tess Core LLC may use the information submitted through
            this form to respond to my inquiry in accordance with the{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-400"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>
        {errors.consent && (
          <p className="text-red-400 text-sm">{errors.consent}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 transform hover:scale-105 duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Send className="w-5 h-5" />
          <span>{isSubmitting ? "Submitting..." : "Submit Inquiry"}</span>
        </button>

        {/* Submit Error */}
        {errors.submit && (
          <p className="text-red-400 text-sm text-center">{errors.submit}</p>
        )}
      </div>

      {successMsg && (
        <div className="bg-green-600 text-white p-4 mb-4 rounded-lg mt-6 text-center font-semibold transition-opacity duration-300">
          {successMsg}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
