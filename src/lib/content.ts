/**
 * Single source of truth for landing-page copy, derived from the
 * MJ Adom Cocoa Trading Business Strategy 2026–2030.
 * Keeping content here (not inline in JSX) keeps sections declarative
 * and makes the eventual CMS/ERP migration a straight data swap.
 */

export const brand = {
  name: "MJ Adom",
  full: "MJ Adom Cocoa Trading",
  tagline: "Integrity. Quality. Partnership. Prosperity.",
  slogan: "We don't just buy cocoa, we build futures.",
  location: "Ghana",
  established: 2026,
  email: "hello@mjadom.com",
  phone: "+233 00 000 0000",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Model", href: "#model" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Impact", href: "#impact" },
  { label: "Invest", href: "#invest" },
] as const;

export const about = {
  heading: "A Ghanaian cocoa house, built on integrity",
  body: [
    "MJ Adom Cocoa Trading has been granted a One-Year Temporary Licensed Buying Certificate to purchase cocoa in Ghana — the first step of a deliberate, long-term plan.",
    "Our strategy is to build a strong foundation, operate with integrity, empower farmers, ensure quality, and scale sustainably to become a major player in the cocoa value chain within five years.",
  ],
};

export const vision = {
  vision:
    "To be a leading, trusted and sustainable cocoa trading company in Ghana and beyond.",
  mission:
    "To source, trade and deliver high-quality cocoa while creating value for farmers, customers, employees and shareholders.",
};

export const model = {
  heading: "From farm gate to export market",
  intro:
    "We buy from farmers, ensure quality, aggregate, store and sell to local processors and export markets — profitably and sustainably.",
  steps: [
    {
      title: "Farmer Sourcing",
      desc: "Direct, trusted relationships with farmers across cocoa-growing regions.",
    },
    {
      title: "Collection & Aggregation",
      desc: "Efficient logistics that consolidate volume from farm gate to depot.",
    },
    {
      title: "Quality Control",
      desc: "Grading, testing and strict quality control on every batch.",
    },
    {
      title: "Storage & Management",
      desc: "Well-managed warehousing that protects grade and value.",
    },
    {
      title: "Local Sales & Export",
      desc: "Sales to local processors and international export markets.",
    },
  ],
};

export const roadmap = [
  {
    year: "2026",
    phase: "Build & Stabilize",
    points: [
      "Build strong farmer relationships",
      "Establish procurement systems",
      "Ensure quality & compliance",
      "Achieve volume & financial stability",
    ],
  },
  {
    year: "2027",
    phase: "Strengthen & Optimize",
    points: [
      "Expand sourcing areas",
      "Improve logistics",
      "Implement technology systems",
      "Grow market presence",
    ],
  },
  {
    year: "2028",
    phase: "Scale & Expand",
    points: [
      "Increase cocoa volumes",
      "Expand warehouse capacity",
      "Explore export opportunities",
      "Build strong partnerships",
    ],
  },
  {
    year: "2029",
    phase: "Diversify & Innovate",
    points: [
      "Add value: sorting, aggregation, storage",
      "Explore cocoa processing",
      "Expand into new markets",
      "Invest in farmer communities",
    ],
  },
  {
    year: "2030",
    phase: "Lead & Sustain",
    points: [
      "Become a top-tier cocoa buying company",
      "Strong export presence",
      "Build a legacy of excellence",
    ],
  },
] as const;

export const pillars = [
  {
    title: "Farmer-Centered Sourcing",
    desc: "Build trust, support and long-term relationships at the root of the chain.",
  },
  {
    title: "Quality & Compliance",
    desc: "Ensure high-quality cocoa and full COCOBOD compliance, every season.",
  },
  {
    title: "Operational Excellence",
    desc: "Efficient processes, technology and disciplined cost management.",
  },
  {
    title: "People & Culture",
    desc: "Build a skilled, ethical and high-performance team.",
  },
  {
    title: "Growth & Diversification",
    desc: "Expand markets, products and strategic partnerships.",
  },
];

export const advantages = [
  "Farmer trust and long-term relationships",
  "Strong commitment to quality",
  "Efficient operations and technology",
  "Ethical and transparent practices",
  "Strategic location and network",
  "Passionate and experienced team",
];

export const impact = [
  "Improve farmer income and livelihoods",
  "Promote sustainable cocoa farming",
  "Create jobs and develop communities",
  "Support national cocoa development",
  "Operate with integrity and transparency",
  "Protect the environment",
];

// Order is deliberate: the license — the one claim already true today —
// leads. Growth targets and roadmap length follow as supporting evidence,
// not the headline.
export const financials = [
  { value: "100%", label: "COCOBOD compliance commitment" },
  { value: "25–35%", label: "Targeted annual turnover growth" },
  { value: "5 yr", label: "Roadmap to market leadership" },
  { value: "6", label: "Core values guiding every decision" },
];

export const formula = {
  terms: [
    { small: "Trusted", big: "Farmer Relationships" },
    { small: "Consistent", big: "Quality Cocoa" },
    { small: "Efficient", big: "Operations" },
    { small: "Strong", big: "Partnerships" },
    { small: "Skilled & Ethical", big: "Team" },
  ],
  result: { small: "Sustainable Growth &", big: "Industry Leadership" },
};
