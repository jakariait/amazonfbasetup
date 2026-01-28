import {
  BarChart3,
  DollarSign,
  ShoppingCart,
  Target,
  TrendingUp,
} from "lucide-react";

export const caseStudies = [
  {
    id: 1,
    client: "HealthTech Innovations (Case Study)",
    // industry: "Health & Wellness",
    service: "Amazon FBA",
    icon: ShoppingCart,
    timeline: "6 months",
    challenge:
      "Low visibility on Amazon with poor conversion rates and high ACoS on PPC campaigns",
    solution:
      "Complete Amazon optimization including listing optimization, keyword strategy, and PPC restructuring",
    image: "/api/placeholder/600/400",
    results: {
      "revenue growth observed": "Up to +485%",
      "ROAS Achieved": "Up to 6.2x",
      "Conversion Improvement": "+67%",
      "Category Position Achieved": "Top-Ranking",
    },
    metrics: [
      {
        label: "Revenue Growth (Observed)",
        before: "$12k",
        after: "$73k",
        change: "Up to +485%",
      },
      {
        label: "ROAS Improvement",
        before: "1.8x",
        after: "6.2x",
        change: "Up to +244%",
      },
      {
        label: "Conversion Rate Change",
        before: "8%",
        after: "14%",
        change: "+67%",
      },
      { label: "ACoS Reduction", before: "55%", after: "16%", change: "-71%" },
    ],
    testimonial: {
      quote:
        "The results speak for themselves. We went from struggling to get noticed to becoming the #1 seller in our category. The ROI has been incredible.",
      author: "Sarah Johnson",
      position: "Founder & CEO",
    },
  },
];

export const caseStudyPreviews = [
  {
    title: "E-commerce Scaling",
    industry: "Retail",
    growth: "+540% Revenue",
    service: "Multi-Channel",
  },

  {
    title: "Amazon Dominance",
    industry: "Consumer Goods",
    growth: "+890% Sales",
    service: "Amazon FBA",
  },

  {
    title: "International Expansion",
    industry: "Electronics",
    growth: "+623% Markets",
    service: "Amazon FBA",
  },
];

export const allResults = [
  { metric: "Average Revenue Increase", value: "367%", icon: TrendingUp },
  { metric: "Total Revenue Generated", value: "$2.3M+", icon: DollarSign },
  { metric: "Average ROAS Improvement", value: "450%", icon: Target },
  { metric: "Successful Case Studies", value: "100+", icon: BarChart3 },
];
