/**
 * Single source of truth for landing-page copy.
 *
 * Identity is deliberately broad - "commodities and investment company",
 * not "cocoa trader" - so new licences/services slot into `services` below
 * without a redesign. Within `services`, `status` gates how confidently a
 * line of business is presented: only say a service is running if it
 * actually is. Within agricultural commodities, cocoa is the active crop
 * today - cashew, maize, and other cash crops are named as scope, not
 * claimed as active. Gold is licensed but not yet operating; everything
 * past that is roadmap/future direction, not a current offer.
 */

export const brand = {
  name: "MJ Adom",
  full: "MJ Adom Commodities & Investments",
  tagline: "Integrity. Excellence. Innovation. Partnership. Sustainability.",
  slogan: "Trading Commodities. Creating Value. Building Prosperity.",
  location: "Ghana",
  established: 2026,
  email: "hello@mjadom.com",
  phone: "+233 00 000 0000",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Invest", href: "#invest" },
] as const;

export const hero = {
  headlineLine1: "Trading Commodities.",
  headlineLine2: "Creating Value.",
  emphasis: "Value",
  subheadline:
    "A Ghana-based commodities and investment company built on integrity and built for scale - turning trusted sourcing relationships into lasting value across Africa's commodities markets.",
  ctaPrimary: { label: "Partner With Us", href: "#contact" },
};

export const roadmapIntro = {
  heading: "From today's licences to a legacy tomorrow",
  emphasis: "legacy tomorrow",
  body: "A deliberate path from foundation to market leadership - each year building on the last.",
};

export const pillarsIntro = {
  title: "The pillars holding up the plan",
  intro:
    "Every decision maps back to one of these - the structure that turns today's licences into a five-year legacy.",
};

export const footerNote =
  "Licensed commodities trading company, Ghana.";

export const about = {
  heading: "Built on Integrity. Driven by Opportunity.",
  body: [
    "MJ Adom Commodities & Investments is a Ghana-based company building a diversified commodities and investment business across Africa - connecting farmers and resource holders to global markets, and creating long-term value for our partners and communities.",
    "We are currently active in agricultural commodities trading: cocoa buying is underway under our Licensed Buying Company certificate, and gold buying is licensed under the Ghana Gold Board and launching soon. These two licences are the foundation of a broader five-year plan to grow into aggregation, logistics, processing, export, and strategic investment.",
  ],
};

export const vision = {
  vision:
    "To become one of Africa's most trusted commodities and investment companies - creating sustainable prosperity for farmers, businesses, investors, and communities.",
  mission:
    "To source, trade and invest in high-value commodities through integrity, operational excellence, and strategic partnership - building a strong foundation today for a diversified enterprise tomorrow.",
};

export const values = [
  { title: "Integrity", desc: "We do business honestly and transparently, building trust with every partner and community we engage." },
  { title: "Excellence", desc: "We hold ourselves to the highest standards across operations, compliance, and service delivery." },
  { title: "Innovation", desc: "We leverage technology and data to drive smarter decisions across the commodities value chain." },
  { title: "Partnership", desc: "We grow by growing others - farmers, suppliers, investors, and local communities." },
  { title: "Sustainability", desc: "We are committed to responsible sourcing, environmental stewardship, and long-term value creation." },
  { title: "Prosperity", desc: "Our ultimate measure of success is the shared prosperity we create across Africa." },
] as const;

export type ServiceStatus = "active" | "licensed" | "future";

export const services = [
  {
    title: "Agricultural Commodities Trading",
    desc: "Sourcing and buying agricultural commodities across Ghana - cocoa buying is active today under our Licensed Buying Company certificate, with cashew, maize, soybean, coffee, and other cash crops part of our growing scope in this line of business.",
    status: "active" as ServiceStatus,
    statusLabel: "Active",
  },
  {
    title: "Precious Minerals Trading - Gold",
    desc: "Gold buying licensed under the Ghana Gold Board, with operations launching soon as our second active line of business.",
    status: "licensed" as ServiceStatus,
    statusLabel: "Licensed - Launching Soon",
  },
  {
    title: "Commodity Aggregation & Logistics",
    desc: "Consolidating volume and managing the logistics required to move commodities efficiently, from farm gate to final destination.",
    status: "future" as ServiceStatus,
    statusLabel: "Future Direction",
  },
  {
    title: "Commodity Processing & Value Addition",
    desc: "Investing in processing capability that transforms raw commodities into higher-value products.",
    status: "future" as ServiceStatus,
    statusLabel: "Future Direction",
  },
  {
    title: "Export & International Trade",
    desc: "Facilitating the export of Ghanaian and African commodities to global markets, navigating compliance and international trade requirements.",
    status: "future" as ServiceStatus,
    statusLabel: "Future Direction",
  },
  {
    title: "Strategic Investments & Partnerships",
    desc: "Identifying and investing in high-potential opportunities across commodities, processing, and related sectors.",
    status: "future" as ServiceStatus,
    statusLabel: "Future Direction",
  },
];

export const roadmap = [
  {
    year: "2026",
    phase: "Foundation",
    points: [
      "Build farmer and supplier relationships",
      "Establish procurement and governance systems",
      "Ensure licensing and regulatory compliance",
      "Launch gold buying operations",
    ],
  },
  {
    year: "2027",
    phase: "Growth",
    points: [
      "Expand our commodity portfolio",
      "Strengthen aggregation and logistics",
      "Deploy digital trading and traceability systems",
      "Grow market presence",
    ],
  },
  {
    year: "2028",
    phase: "Expansion",
    points: [
      "Enter regional West African markets",
      "Develop warehousing and storage capacity",
      "Launch value-added and processed offerings",
      "Build strong strategic partnerships",
    ],
  },
  {
    year: "2029",
    phase: "Diversification",
    points: [
      "Invest in processing facilities",
      "Expand into new commodity sectors",
      "Grow our investment portfolio",
      "Explore strategic partnerships and M&A",
    ],
  },
  {
    year: "2030",
    phase: "Market Leadership",
    points: [
      "Establish a pan-African presence",
      "Build a diversified investment portfolio",
      "Lead on innovation and sustainability",
    ],
  },
] as const;

export const pillars = [
  {
    title: "Sustainable Sourcing",
    desc: "Ethical sourcing, strong farmer relationships and responsible practices.",
  },
  {
    title: "Investment Growth",
    desc: "Build a diversified investment portfolio and create long-term shareholder value.",
  },
  {
    title: "Operational Excellence",
    desc: "Efficient processes, quality systems and cost leadership across the value chain.",
  },
  {
    title: "Digital Innovation",
    desc: "Leverage technology for market intelligence, traceability and decision making.",
  },
  {
    title: "Farmer & Supplier Development",
    desc: "Empower farmers and suppliers through training, finance and technical support.",
  },
  {
    title: "Market Expansion",
    desc: "Expand locally and internationally to new markets and customer segments.",
  },
  {
    title: "Risk Management",
    desc: "Proactive risk management and strong compliance culture.",
  },
  {
    title: "ESG & Sustainability",
    desc: "Create positive environmental, social and governance impact.",
  },
];

export const advantages = [
  "Supplier and partner trust, built for the long term",
  "Strong commitment to quality",
  "Efficient operations and technology",
  "Ethical and transparent practices",
  "Strategic location and network",
  "Passionate and experienced team",
];

export const impact = [
  "Improve incomes and livelihoods across our supply chains",
  "Promote responsible, sustainable sourcing",
  "Create jobs and develop communities",
  "Support national commodities sector development",
  "Operate with integrity and transparency",
  "Protect the environment",
];

// Order is deliberate: the claims already true today lead. Growth targets
// and roadmap length follow as supporting evidence, not the headline.
export const financials = [
  { value: "2", label: "Active & licensed trading lines" },
  { value: "25–35%", label: "Targeted annual turnover growth" },
  { value: "5 yr", label: "Roadmap to market leadership" },
  { value: "6", label: "Core values guiding every decision" },
];

export const formula = {
  terms: [
    { small: "Trusted", big: "Farmer & Supplier Relationships" },
    { small: "Consistent", big: "Quality & Compliance" },
    { small: "Efficient", big: "Operations" },
    { small: "Strong", big: "Partnerships" },
    { small: "Skilled & Ethical", big: "Team" },
  ],
  result: { small: "Sustainable Growth &", big: "Industry Leadership" },
};
