"use client"

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Clock, DollarSign } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      icon: DollarSign,
      title: 'Pricing & ROI',
      faqs: [
        {
          question: 'How much do your services cost?',
          answer: 'Our pricing is customized based on your specific needs and goals. We offer flexible packages starting from $2,500/month for single-service solutions, with comprehensive multi-channel strategies ranging from $5,000-$15,000/month. We focus on ROI, so our fees are structured to ensure profitability from day one.'
        },
        {
          question: 'What kind of ROI can I expect?',
          answer: 'Our clients typically see a 300% average ROI increase within the first 6 months. For Amazon FBA, we often achieve 4-6x ROAS on PPC campaigns. Shopify clients see 25-40% increases in conversion rates, and Meta Ads campaigns average 4x ROAS. Results vary by industry and starting point.'
        },
        {
          question: 'Do you offer performance-based pricing?',
          answer: 'Yes, we offer hybrid models that combine a base retainer with performance bonuses tied to specific KPIs like revenue growth, ROAS targets, or conversion improvements. This aligns our success directly with yours and ensures we\'re invested in delivering results.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Timeline & Process',
      faqs: [
        {
          question: 'How long does it take to see results?',
          answer: 'Timeline varies by service: Amazon FBA optimization shows initial improvements in 2-4 weeks, with significant results in 60-90 days. Shopify development projects take 4-8 weeks, with conversion improvements visible immediately after launch. Meta Ads campaigns are optimized within 2-3 weeks of launch.'
        },
        {
          question: 'What is your onboarding process?',
          answer: 'Our onboarding includes: (1) Strategy call and goal setting (Week 1), (2) Account audit and competitive analysis (Week 1-2), (3) Custom strategy development (Week 2-3), (4) Implementation and setup (Week 3-4), (5) Launch and initial optimization (Week 4-5). You\'ll have dedicated support throughout.'
        },
        {
          question: 'How often do you provide updates and reports?',
          answer: 'We provide weekly performance summaries, monthly detailed reports with insights and recommendations, and quarterly strategy reviews. You\'ll also have 24/7 access to our client dashboard for real-time performance tracking across all your campaigns and metrics.'
        }
      ]
    },
    {
      icon: HelpCircle,
      title: 'Services & Expertise',
      faqs: [
        {
          question: 'Do you work with businesses in my industry?',
          answer: 'We work across multiple industries including health & wellness, home & garden, electronics, fashion, beauty, and consumer goods. Our strategies are data-driven and adaptable to any industry. During our consultation, we\'ll discuss your specific market and competition.'
        },
        {
          question: 'Can you help with international expansion?',
          answer: 'Absolutely! We specialize in Amazon international marketplaces (UK, EU, Canada, Australia), multi-currency Shopify stores, and geo-targeted Meta Ads campaigns. We\'ve helped clients expand to over 15 international markets with localized strategies.'
        },
        {
          question: 'Do you provide training for our internal team?',
          answer: 'Yes, we offer team training packages including platform tutorials, best practices workshops, and ongoing education sessions. This ensures your team can maintain and build upon our work while staying updated on the latest strategies and platform changes.'
        }
      ]
    },
    {
      icon: MessageCircle,
      title: 'Getting Started',
      faqs: [
        {
          question: 'What information do you need to get started?',
          answer: 'We\'ll need access to your current accounts (Amazon Seller Central, Shopify admin, Meta Business Manager), historical performance data, current product catalogs, and your business goals. We provide a secure onboarding checklist to streamline this process.'
        },
        {
          question: 'Do you require long-term contracts?',
          answer: 'We offer both contract and month-to-month options. Most clients choose 6-12 month agreements for better pricing and sustained results, but we\'re confident in our work and offer flexible terms. No setup fees or cancellation penalties.'
        },
        {
          question: 'Can you work with our existing tools and teams?',
          answer: 'Absolutely! We integrate seamlessly with your existing marketing stack including email platforms, CRM systems, analytics tools, and inventory management. We also collaborate effectively with your internal teams, agencies, and other service providers.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 mr-2" />
            Questions & Answers
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Frequently Asked<br />Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our digital marketing services, pricing, and process. Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-orange-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openFAQ === `${categoryIndex}-${faqIndex}`;
                    return (
                      <div
                        key={faqIndex}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <button
                          className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-orange-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our team is here to help! Schedule a free consultation to discuss your specific needs and get personalized answers to your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg">
                Schedule Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Live Chat</h3>
              <p className="text-gray-600">Available 9 AM - 6 PM EST</p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Response Time</h3>
              <p className="text-gray-600">Under 2 hours during business hours</p>
            </div>
            <div className="group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors">
                <HelpCircle className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Free Consultation</h3>
              <p className="text-gray-600">30-minute strategy session</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}