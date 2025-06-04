"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const services = [
    { value: "", label: "Select a Service" },
    { value: "amazon-fba", label: "Amazon FBA Management" },
    { value: "shopify", label: "Shopify Development & Optimization" },
    { value: "meta-ads", label: "Meta Ads Campaign Management" },
    { value: "other", label: "Other (Please specify in message)" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fullName: formData.name,
      phoneNumber: formData.phone,
      emailAddress: formData.email,
      services: formData.service,
      message: formData.message,
    };

    try {
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccessMsg("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        console.error("❌ Failed to send message");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
    }
  };

  return (
    <div className="bg-black rounded-2xl p-8 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone Field */}
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

        {/* Service Dropdown */}
        <div>
          <label className="block text-orange-500 font-semibold mb-2">
            Service Interested In *
          </label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-black"
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
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
            placeholder="Tell us about your project, goals, and how we can help..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 transform hover:scale-105 duration-200 cursor-pointer"
        >
          <Send className="w-5 h-5" />
          <span>Send Message</span>
        </button>
      </div>

      {successMsg && (
        <div className="bg-green-600 text-white p-3 mb-4 rounded-lg mt-15 text-center font-semibold transition-opacity duration-300">
          {successMsg}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
