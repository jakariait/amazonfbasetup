import React from 'react';
import {Award, Target, TrendingUp, Users} from "lucide-react";

const StatsAll = () => {
  const stats = [
    { number: "500+", label: "Clients Served", icon: Users },
    { number: "300%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "50M+", label: "Revenue Generated", icon: Target },
    { number: "5+", label: "Years Experience", icon: Award },
  ];
  return (
    <section className="py-16 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsAll;