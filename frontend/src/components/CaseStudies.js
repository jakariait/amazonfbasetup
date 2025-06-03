import React from "react";
import { ArrowRight, BarChart3, ExternalLink } from "lucide-react";
import CaseStudiesSample from "@/components/CaseStudiesSample";
import { caseStudyPreviews, allResults } from "@/utils/caseStudies";

export default function CaseStudies() {
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
            Case Studies That
            <br />
            Prove Our Impact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real businesses, real results. See how we&apos;ve helped companies
            across different industries achieve remarkable growth through
            strategic digital marketing.
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
                  <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {result.metric}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CaseStudiesSample />

      {/* All Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              More Success Stories
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our complete portfolio of successful campaigns and
              transformations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudyPreviews.map((preview, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {preview.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{preview.industry}</p>
                  </div>
                  <div className="text-orange-500 text-sm font-medium">
                    {preview.service}
                  </div>
                </div>
                <div className="text-2xl font-bold text-orange-500 mb-4">
                  {preview.growth}
                </div>
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
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            These results aren&apos;t accidents – they&apos;re the outcome of
            proven strategies and dedicated expertise. Let&apos;s discuss how we
            can achieve similar growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg">
              Get Your Free Strategy Session
            </button>
            <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 flex items-center justify-center">
              Download Full Case Studies{" "}
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
