"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    { value: '', label: 'Select a Service' },
    { value: 'amazon-fba', label: 'Amazon FBA Management' },
    { value: 'shopify', label: 'Shopify Development & Optimization' },
    { value: 'meta-ads', label: 'Meta Ads Campaign Management' },
    { value: 'ecommerce-strategy', label: 'E-commerce Strategy Consulting' },
    { value: 'performance-analytics', label: 'Performance Analytics & Reporting' },
    { value: 'brand-optimization', label: 'Brand Optimization' },
    { value: 'full-service', label: 'Full-Service Package' },
    { value: 'other', label: 'Other (Please specify in message)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to scale your e-commerce business? Let&apos;s discuss how we can help you achieve
            breakthrough growth with our proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
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

              {/* Service Selection Dropdown */}
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
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 transform hover:scale-105 duration-200"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-orange-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <p className="text-orange-100">hello@youragency.com</p>
                    <p className="text-orange-100">support@youragency.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <p className="text-orange-100">+1 (555) 123-4567</p>
                    <p className="text-orange-100">+1 (555) 987-6543</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Visit Us</h4>
                    <p className="text-orange-100">123 Business Avenue</p>
                    <p className="text-orange-100">New York, NY 10001</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Business Hours</h4>
                    <p className="text-orange-100">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-orange-100">Sat: 10:00 AM - 4:00 PM</p>
                    <p className="text-orange-100">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-black rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">500+ Successful Projects Delivered</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">$50M+ Revenue Generated for Clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">24/7 Dedicated Support Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">Free Strategy Session Included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  <span className="text-white">ROI-Focused Growth Strategies</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-orange-500 bg-opacity-10 rounded-lg border border-orange-500">
                <p className="text-black font-semibold text-center">
                  🚀 Ready to 10x your revenue? Let&apos;s talk!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-orange-100 mb-6">
              Book a free 30-minute strategy call and discover how we can help you achieve breakthrough growth.
            </p>
            <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;