"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Target, Zap, Star, Play } from 'lucide-react';

export default function MarketingHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: '500+', label: 'Brands Scaled', icon: TrendingUp },
    { number: '2.5M+', label: 'Revenue Generated', icon: Target },
    { number: '98%', label: 'Client Success Rate', icon: Star }
  ];

  const services = ['Amazon Brand Building', 'Shopify Optimization', 'Meta Ads Management'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className={`lg:w-1/2 space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-700 text-sm font-medium backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            #1 Digital Growth Partner
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
              Scale Your
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Digital Empire
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Transform your brand with our expertise in Amazon optimization, Shopify development, and Meta advertising that drives real results.
            </p>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-3">
            {services.map((service, index) => (
              <span
                key={service}
                className={`px-4 py-2 bg-white/80 border border-gray-200 rounded-lg text-gray-700 text-sm backdrop-blur-sm transform transition-all duration-500 hover:border-orange-500/50 hover:text-orange-600 hover:bg-orange-50 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25">
              <span className="flex items-center justify-center">
                Start Growing Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </button>

            <button className="group flex items-center px-8 py-4 border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 font-semibold rounded-lg transition-all duration-300 hover:bg-orange-50">
              <Play className="mr-2 w-5 h-5" />
              Watch Success Stories
            </button>
          </div>

          {/* Stats */}
          <div className="pt-8 grid grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`text-center transform transition-all duration-700 ${currentStat === index ? 'scale-110 text-orange-500' : 'text-gray-600'}`}
                >
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Content - Visual Element */}
        <div className={`lg:w-1/2 lg:pl-12 mt-12 lg:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <div className="relative">
            {/* Main visual container */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-2xl">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-2xl shadow-lg transform rotate-12 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg transform -rotate-12 animate-pulse"></div>

              {/* Content inside visual */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-gray-900 mb-2">Growth Dashboard</div>
                  <div className="text-gray-600">Real-time performance metrics</div>
                </div>

                {/* Mock dashboard elements */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50/80 rounded-xl border border-gray-200">
                    <span className="text-gray-700">Amazon Sales</span>
                    <span className="text-green-500 font-semibold">+247%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50/80 rounded-xl border border-gray-200">
                    <span className="text-gray-700">Shopify Conversion</span>
                    <span className="text-orange-500 font-semibold">+189%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50/80 rounded-xl border border-gray-200">
                    <span className="text-gray-700">Meta ROAS</span>
                    <span className="text-blue-500 font-semibold">4.8x</span>
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Revenue Growth</span>
                      <span>87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full w-[87%] animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}