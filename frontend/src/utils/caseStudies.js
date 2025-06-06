import {BarChart3, DollarSign, Share2, ShoppingCart, Store, Target, TrendingUp} from "lucide-react";

export  const caseStudies = [
  {
    id: 1,
    client: "HealthTech Innovations",
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
      revenue: "+485%",
      roas: "6.2x",
      conversion: "+67%",
      ranking: "#1 in category",
    },
    metrics: [
      {
        label: "Monthly Revenue",
        before: "$12,500",
        after: "$73,125",
        change: "+485%",
      },
      { label: "ROAS", before: "1.8x", after: "6.2x", change: "+244%" },
      {
        label: "Conversion Rate",
        before: "8.2%",
        after: "13.7%",
        change: "+67%",
      },
      { label: "ACoS", before: "55%", after: "16%", change: "-71%" },
    ],
    testimonial: {
      quote:
        "The results speak for themselves. We went from struggling to get noticed to becoming the #1 seller in our category. The ROI has been incredible.",
      author: "Sarah Johnson",
      position: "Founder & CEO",
    },
  },
  {
    id: 2,
    client: "Urban Style Co.",
    // industry: "Fashion & Apparel",
    service: "Shopify",
    icon: Store,
    timeline: "4 months",
    challenge:
      "Outdated Shopify store with poor mobile experience and low conversion rates",
    solution:
      "Complete store redesign with mobile-first approach, conversion optimization, and checkout improvements",
    image: "/api/placeholder/600/400",
    results: {
      revenue: "+320%",
      conversion: "+156%",
      mobile: "+89%",
      speed: "3.2s load time",
    },
    metrics: [
      {
        label: "Monthly Revenue",
        before: "$28,400",
        after: "$119,280",
        change: "+320%",
      },
      {
        label: "Conversion Rate",
        before: "1.8%",
        after: "4.6%",
        change: "+156%",
      },
      {
        label: "Mobile Conversion",
        before: "0.9%",
        after: "1.7%",
        change: "+89%",
      },
      {
        label: "Page Load Speed",
        before: "8.4s",
        after: "3.2s",
        change: "-62%",
      },
    ],
    testimonial: {
      quote:
        "Our new Shopify store is a game-changer. The mobile experience is fantastic and our sales have tripled. Best investment we&apos;ve made.",
      author: "Marcus Chen",
      position: "E-commerce Director",
    },
  },
  {
    id: 3,
    client: "GreenHome Solutions",
    // industry: "Home & Garden",
    service: "Meta Ads",
    icon: Share2,
    timeline: "3 months",
    challenge:
      "High cost per acquisition and poor ROAS from Facebook and Instagram advertising",
    solution:
      "Complete Meta Ads restructure with audience segmentation, creative optimization, and funnel improvements",
    image: "/api/placeholder/600/400",
    results: {
      roas: "8.4x",
      cpa: "-73%",
      reach: "+245%",
      leads: "+389%",
    },
    metrics: [
      { label: "ROAS", before: "2.1x", after: "8.4x", change: "+300%" },
      {
        label: "Cost Per Acquisition",
        before: "$127",
        after: "$34",
        change: "-73%",
      },
      { label: "Monthly Leads", before: "89", after: "435", change: "+389%" },
      {
        label: "Ad Spend Efficiency",
        before: "47%",
        after: "84%",
        change: "+79%",
      },
    ],
    testimonial: {
      quote:
        "We were skeptical about Meta Ads, but these results are beyond our expectations. Our lead quality has improved dramatically while costs dropped.",
      author: "Jennifer Rodriguez",
      position: "Marketing Manager",
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
    title: "SaaS Lead Generation",
    industry: "Technology",
    growth: "+325% Leads",
    service: "Meta Ads",
  },
  {
    title: "Amazon Dominance",
    industry: "Consumer Goods",
    growth: "+890% Sales",
    service: "Amazon FBA",
  },
  {
    title: "Shopify Optimization",
    industry: "Beauty",
    growth: "+267% Conversion",
    service: "Shopify",
  },
  {
    title: "Brand Awareness Campaign",
    industry: "Healthcare",
    growth: "+445% Reach",
    service: "Meta Ads",
  },
  {
    title: "International Expansion",
    industry: "Electronics",
    growth: "+623% Markets",
    service: "Amazon FBA",
  },
];

export   const allResults = [
  { metric: "Average Revenue Increase", value: "367%", icon: TrendingUp },
  { metric: "Total Revenue Generated", value: "$2.3M+", icon: DollarSign },
  { metric: "Average ROAS Improvement", value: "450%", icon: Target },
  { metric: "Successful Case Studies", value: "100+", icon: BarChart3 },
];