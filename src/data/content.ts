export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Services", to: "/services", mega: true },
  { label: "Industries", to: "/#industries" },
  { label: "Process", to: "/#process" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  {
    slug: "digital-engineering",
    name: "Digital Engineering",
    tagline: "Build software that scales with your ambition.",
    description:
      "From web and mobile platforms to enterprise software, portals, ERP, CRM and HRMS — we engineer digital products that move businesses forward.",
    icon: "code",
    color: ["#0ea5e9", "#6366f1"],
    features: [
      "Website Development",
      "Mobile Applications",
      "Enterprise Software",
      "Business Portals",
      "ERP Systems",
      "CRM & HRMS",
    ],
  },
  {
    slug: "ott-platform",
    name: "OTT Platform",
    tagline: "Netflix-grade streaming, your content, your revenue.",
    description:
      "End-to-end OTT platform engineering — live streaming, video on demand, analytics dashboards, monetization, multi-device distribution and subscription management.",
    icon: "play",
    color: ["#8b5cf6", "#ec4899"],
    features: [
      "Live Streaming",
      "Video on Demand",
      "Analytics Dashboard",
      "Monetization & Paywalls",
      "Multi-device Distribution",
      "Subscription Management",
    ],
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    tagline: "Intelligent systems that work while you sleep.",
    description:
      "Machine learning, neural networks, workflow automation, AI agents and dashboards that turn raw data into decisions and repetitive work into done work.",
    icon: "cpu",
    color: ["#14b8a6", "#22d3ee"],
    features: [
      "Machine Learning Models",
      "Neural Networks",
      "Workflow Automation",
      "AI Agents & Chatbots",
      "Predictive Analytics",
      "Intelligent Dashboards",
    ],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property",
    tagline: "Protect the ideas that power your business.",
    description:
      "Patent search, prior art, invalidity, freedom-to-operate, trademark and infringement analysis — luxury legal-tech services backed by deep technical expertise.",
    icon: "shield",
    color: ["#f59e0b", "#a78bfa"],
    features: [
      "Patent Search",
      "Prior Art Search",
      "Invalidity Search",
      "Freedom to Operate (FTO)",
      "Trademark Search",
      "Infringement Analysis",
    ],
  },
];

export const INDUSTRIES = [
  { name: "Healthcare", icon: "heart" },
  { name: "Finance", icon: "banknote" },
  { name: "Education", icon: "graduation" },
  { name: "Manufacturing", icon: "factory" },
  { name: "Retail", icon: "shopping" },
  { name: "Sports", icon: "trophy" },
  { name: "Media", icon: "film" },
  { name: "Hospitality", icon: "hotel" },
  { name: "Real Estate", icon: "building" },
  { name: "Logistics", icon: "truck" },
];

export const PROCESS_STEPS = [
  { name: "Discover", desc: "We dive deep into your business, users and goals to map the real problem." },
  { name: "Plan", desc: "Architecture, roadmap and resource planning — a clear blueprint before a line of code." },
  { name: "Design", desc: "Premium UI/UX design with interactive prototypes that feel real before they're built." },
  { name: "Develop", desc: "Agile engineering with clean, scalable, well-tested code and weekly demos." },
  { name: "Test", desc: "Automated + manual QA, performance, security and accessibility across every device." },
  { name: "Launch", desc: "Smooth deployment with zero downtime and full handover documentation." },
  { name: "Support", desc: "Ongoing maintenance, monitoring and iteration to keep you ahead." },
];

export const WHY_CHOOSE = [
  { title: "Business-first", desc: "We start from your business outcomes, not from a tech stack." },
  { title: "Transparency", desc: "Weekly demos, shared boards, clear pricing — no black boxes." },
  { title: "Scalable", desc: "Architecture built to grow from MVP to millions of users." },
  { title: "Support", desc: "A dedicated team that stays with you long after launch." },
  { title: "Dedicated Team", desc: "Senior engineers and designers, not rotating juniors." },
  { title: "Timely Delivery", desc: "We hit deadlines. Every milestone, every release." },
];

export const TESTIMONIALS = [
  {
    name: "Rahul Mehta",
    role: "CEO, FinEdge",
    quote:
      "ContriveInsight rebuilt our entire lending platform in 12 weeks. The product looks like a global fintech and scales effortlessly.",
  },
  {
    name: "Sarah Williams",
    role: "CTO, StreamLive",
    quote:
      "Their OTT team delivered a streaming experience our viewers love. Analytics and monetization are best-in-class.",
  },
  {
    name: "Dr. Anjali Rao",
    role: "Founder, MedTrack",
    quote:
      "The AI automation they built saves our clinic 30 hours a week. It just works, and the UI is beautiful.",
  },
  {
    name: "James Carter",
    role: "Head of IP, NovaTech",
    quote:
      "Their patent search and FTO analysis are thorough and fast. A genuinely premium legal-tech service.",
  },
];

export const CASE_STUDIES = [
  {
    title: "FinEdge — Lending Platform",
    metric: "12 weeks to launch",
    before: "Legacy PHP monolith, 8s page loads",
    after: "React + Node, sub-1s loads, 5x users",
    tag: "Digital Engineering",
  },
  {
    title: "StreamLive — OTT Platform",
    metric: "1.2M MAU",
    before: "No streaming infra, zero monetization",
    after: "Live + VOD, 4K, subscriptions, ads",
    tag: "OTT Platform",
  },
  {
    title: "MedTrack — AI Scheduling",
    metric: "30 hrs/week saved",
    before: "Manual booking, constant conflicts",
    after: "AI auto-scheduling, 98% no-show drop",
    tag: "AI & Automation",
  },
];

export const BLOGS = [
  {
    title: "How to architect an OTT platform that scales to millions",
    category: "OTT",
    excerpt: "The technical blueprint behind streaming services that handle live events without a hitch.",
    date: "Jul 2026",
  },
  {
    title: "AI agents vs. traditional automation: what to choose in 2026",
    category: "AI",
    excerpt: "A practical decision framework for where AI agents outperform rule-based automation.",
    date: "Jun 2026",
  },
  {
    title: "Freedom to Operate: why it matters before you ship",
    category: "IP",
    excerpt: "A founder's guide to FTO analysis and how it de-risks your product launch.",
    date: "May 2026",
  },
];

export const FAQS = [
  {
    q: "What services does ContriveInsight offer?",
    a: "We offer four core practices: Digital Engineering, OTT Platform development, AI & Automation, and Intellectual Property services. Each is staffed by senior specialists.",
  },
  {
    q: "How do we start a project?",
    a: "Reach out via our contact form or email. We'll schedule a discovery call, understand your goals, and send a tailored proposal within 3 business days.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We build MVPs for early-stage startups and scale enterprise platforms serving millions of users. Our architecture scales with you.",
  },
  {
    q: "What is your typical timeline?",
    a: "Most products launch in 8–16 weeks depending on scope. We work in agile sprints with weekly demos so you always see progress.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Absolutely. We offer maintenance, monitoring, and iteration retainers to keep your product fast, secure and ahead of the curve.",
  },
];

export const CONTACT_INFO = {
  phone: "+91 70151 89070",
  emails: ["nihal@contriveinsight.com", "info@contriveinsight.com"],
  submit: "himanshu@contriveinsight.com",
  location: "Delhi, India",
};

export const STATS = [
  { value: 12, suffix: "+", label: "Years" },
  { value: 250, suffix: "+", label: "Projects" },
  { value: 80, suffix: "+", label: "Clients" },
  { value: 20, suffix: "+", label: "Countries" },
];

export const WHAT_WE_DO = [
  {
    name: "Build",
    desc: "We engineer digital products — web, mobile, OTT and enterprise software — that scale.",
    icon: "hammer",
    color: ["#0ea5e9", "#6366f1"],
  },
  {
    name: "Manage",
    desc: "We run, monitor and optimize your platforms so they stay fast, secure and reliable.",
    icon: "settings",
    color: ["#14b8a6", "#22d3ee"],
  },
  {
    name: "Innovate",
    desc: "We bring AI, automation and fresh thinking to give you a durable competitive edge.",
    icon: "sparkles",
    color: ["#8b5cf6", "#ec4899"],
  },
  {
    name: "Protect",
    desc: "We secure your ideas with patent, trademark and IP services that stand up in court.",
    icon: "shield",
    color: ["#f59e0b", "#a78bfa"],
  },
];
