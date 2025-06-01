"use client"
import React, { useState } from 'react';
import { TrendingUp, ShoppingCart, Store, Share2, ArrowRight, Calendar, DollarSign, Target, BarChart3, ExternalLink } from 'lucide-react';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "HealthTech Innovations",
      industry: "Health & Wellness",
      service: "Amazon FBA",
      icon: ShoppingCart,
      timeline: "6 months",
      challenge: "Low visibility on Amazon with poor conversion rates and high ACoS on PPC campaigns",
      solution: "Complete Amazon optimization including listing optimization, keyword strategy, and PPC restructuring",
      image: "/api/placeholder/600/400",
      results: {
        revenue: "+485%",
        roas: "6.2x",
        conversion: "+67%",
        ranking: "#1 in category"
      },
      metrics: [
        { label: "Monthly Revenue", before: "$12,500", after: "$73,125", change: "+485%" },
        { label: "ROAS", before: "1.8x", after: "6.2x", change: "+244%" },
        { label: "Conversion Rate", before: "8.2%", after: "13.7%", change: "+67%" },
        { label: "ACoS", before: "55%", after: "16%", change: "-71%" }
      ],
      testimonial: {
        quote: "The results speak for themselves. We went from struggling to get noticed to becoming the #1 seller in our category. The ROI has been incredible.",
        author: "Sarah Johnson",
        position: "Founder & CEO"
      }
    },
    {
      id: 2,
      client: "Urban Style Co.",
      industry: "Fashion & Apparel",
      service: "Shopify",
      icon: Store,
      timeline: "4 months",
      challenge: "Outdated Shopify store with poor mobile experience and low conversion rates",
      solution: "Complete store redesign with mobile-first approach, conversion optimization, and checkout improvements",
      image: "/api/placeholder/600/400",
      results: {
        revenue: "+320%",
        conversion: "+156%",
        mobile: "+89%",
        speed: "3.2s load time"
      },
      metrics: [
        { label: "Monthly Revenue", before: "$28,400", after: "$119,280", change: "+320%" },
        { label: "Conversion Rate", before: "1.8%", after: "4.6%", change: "+156%" },
        { label: "Mobile Conversion", before: "0.9%", after: "1.7%", change: "+89%" },
        { label: "Page Load Speed", before: "8.4s", after: "3.2s", change: "-62%" }
      ],
      testimonial: {
        quote: "Our new Shopify store is a game-changer. The mobile experience is fantastic and our sales have tripled. Best investment we&apos;ve made.",
        author: "Marcus Chen",
        position: "E-commerce Director"
      }
    },
    {
      id: 3,
      client: "GreenHome Solutions",
      industry: "Home & Garden",
      service: "Meta Ads",
      icon: Share2,
      timeline: "3 months",
      challenge: "High cost per acquisition and poor ROAS from Facebook and Instagram advertising",
      solution: "Complete Meta Ads restructure with audience segmentation, creative optimization, and funnel improvements",
      image: "/api/placeholder/600/400",
      results: {
        roas: "8.4x",
        cpa: "-73%",
        reach: "+245%",
        leads: "+389%"
      },
      metrics: [
        { label: "ROAS", before: "2.1x", after: "8.4x", change: "+300%" },
        { label: "Cost Per Acquisition", before: "$127", after: "$34", change: "-73%" },
        { label: "Monthly Leads", before: "89", after: "435", change: "+389%" },
        { label: "Ad Spend Efficiency", before: "47%", after: "84%", change: "+79%" }
      ],
      testimonial: {
        quote: "We were skeptical about Meta Ads, but these results are beyond our expectations. Our lead quality has improved dramatically while costs dropped.",
        author: "Jennifer Rodriguez",
        position: "Marketing Manager"
      }
    }
  ];

  const allResults = [
    { metric: "Average Revenue Increase", value: "367%", icon: TrendingUp },
    { metric: "Total Revenue Generated", value: "$2.3M+", icon: DollarSign },
    { metric: "Average ROAS Improvement", value: "450%", icon: Target },
    { metric: "Successful Case Studies", value: "47", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 rounded-full text-orange-500 text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4 mr-2" />
            Proven Results & Success Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-orange-500 bg-clip-text text-transparent">
            Case Studies That<br />Prove Our Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real businesses, real results. See how we&apos;ve helped companies across different industries achieve remarkable growth through strategic digital marketing.
          </p>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {allResults.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">{result.value}</div>
                  <div className="text-gray-600 font-medium text-sm">{result.metric}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Navigation */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`flex items-center px-6 py-4 rounded-lg font-medium transition-all ${
                    activeCase === index
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-bold">{study.service}</div>
                    <div className="text-sm opacity-75">{study.industry}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Case Study */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            if (index !== activeCase) return null;
            const IconComponent = study.icon;

            return (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{study.client}</h2>
                      <p className="text-orange-500 font-medium">{study.industry} • {study.service}</p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-500 mb-8">
                    <Calendar className="w-4 h-4 mr-2" />
                    Project Timeline: {study.timeline}
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Key Results Grid */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-gray-900">Key Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.results).map(([key, value], idx) => (
                          <div key={idx} className="bg-orange-500/5 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-orange-500 mb-1">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual/Image */}
                <div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-2xl p-8 border border-gray-200">
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-8">
                      <BarChart3 className="w-16 h-16 text-gray-400" />
                    </div>

                    {/* Detailed Metrics */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 mb-4">Performance Metrics</h4>
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                          <span className="text-gray-600 text-sm">{metric.label}</span>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">{metric.before} → {metric.after}</div>
                            <div className="text-orange-500 font-bold text-sm">{metric.change}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {caseStudies.map((study, index) => {
            if (index !== activeCase) return null;

            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center">
                <div className="text-2xl text-orange-500 font-bold mb-4">"</div>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                  {study.testimonial.quote}
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div className="text-left">
                    <div className="font-bold text-gray-900">{study.testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{study.testimonial.position}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">More Success Stories</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our complete portfolio of successful campaigns and transformations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "E-commerce Scaling", industry: "Retail", growth: "+540% Revenue", service: "Multi-Channel" },
              { title: "SaaS Lead Generation", industry: "Technology", growth: "+325% Leads", service: "Meta Ads" },
              { title: "Amazon Dominance", industry: "Consumer Goods", growth: "+890% Sales", service: "Amazon FBA" },
              { title: "Shopify Optimization", industry: "Beauty", growth: "+267% Conversion", service: "Shopify" },
              { title: "Brand Awareness Campaign", industry: "Healthcare", growth: "+445% Reach", service: "Meta Ads" },
              { title: "International Expansion", industry: "Electronics", growth: "+623% Markets", service: "Amazon FBA" }
            ].map((preview, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{preview.title}</h3>
                    <p className="text-gray-500 text-sm">{preview.industry}</p>
                  </div>
                  <div className="text-orange-500 text-sm font-medium">{preview.service}</div>
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-4">{preview.growth}</div>
                <button className="flex items-center text-orange-500 hover:text-orange-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500/5 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            These results aren&apos;t accidents – they&apos;re the outcome of proven strategies and dedicated expertise. Let&apos;s discuss how we can achieve similar growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg">
              Get Your Free Strategy Session
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center">
              Download Full Case Studies <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}