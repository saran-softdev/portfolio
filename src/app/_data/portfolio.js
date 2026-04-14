export const PROFILE = {
  name: "Saran Kumar",
  title: "Full Stack Web Developer",
  tagline: "Tech enthusiast & veteran in software programming",
  description:
    "I'm Saran, a Full Stack Developer specializing in React.js, Next.js & Node.js. I help enterprises & start-ups ship scalable, production-ready web applications.",
  email: "saran.softdev@gmail.com",
  linkedin: "https://www.linkedin.com/in/saran-softdev",
  location: "Chennai, Tamil Nadu, India",
  resumeUrl: "#",
};

export const TECH_STACK = [
  { label: "React.js", category: "Web", icon: "react" },
  { label: "Next.js", category: "Web", icon: "next" },
  { label: "Node.js", category: "Backend", icon: "node" },
  { label: "NestJS", category: "Backend", icon: "nest" },
  { label: "MongoDB", category: "Database", icon: "mongo" },
  { label: "Tailwind CSS", category: "Styling", icon: "tailwind" },
  { label: "JavaScript", category: "Language", icon: "js" },
  { label: "TypeScript", category: "Language", icon: "ts" },
];

export const SUPERPOWERS = [
  {
    icon: "leadership",
    title: "Leadership",
    desc: "Managed cross-functional teams across multiple client projects from start to deployment.",
  },
  {
    icon: "efficiency",
    title: "Efficiency",
    desc: "Shipped clean, maintainable code with zero-downtime deliveries and fast turnarounds.",
  },
  {
    icon: "excellence",
    title: "Excellence",
    desc: "Integrated complex third-party APIs (Travelport, Webbeds) with pixel-perfect UIs.",
  },
  {
    icon: "training",
    title: "Full Stack",
    desc: "End-to-end development from UI/UX wireframes to robust back-end architectures.",
  },
];

export const EXPERIENCE = [
  {
    company: "Hala Saudi",
    role: "Full-stack Developer",
    duration: "Sep 2025 – Present",
    location: "Chennai, India · On-site",
    skills: ["React.js", "Node.js", "Next.js", "NestJS"],
  },
  {
    company: "Sanyaa Infotech",
    role: "Junior Full Stack Developer",
    duration: "Nov 2024 – Aug 2025",
    location: "Bengaluru · Remote",
    skills: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "Node.js"],
  },
  {
    company: "Sanyaa Infotech",
    role: "Trainee",
    duration: "Sep 2024 – Oct 2024",
    location: "Bengaluru · Remote",
    skills: ["React.js", "Next.js"],
  },
];

export const PROJECTS = [
  {
    title: "HalaSaudi – B2B Travel Platform",
    desc: "Multi-service B2B travel platform for Saudi agencies — unified booking across flights, hotels, transfers & activities with wallet payments, event-driven notifications, and multi-provider hotel integration.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "GCP"],
    details: {
      overview:
        "A multi-service B2B travel management platform enabling travel agencies in Saudi Arabia to search, book, and manage travel products (flights, hotels, transfers, activities, and packages) through a unified system with wallet-based payments, team management, and real-time notifications.",
      services: [
        {
          name: "Agency Portal",
          desc: "Customer-facing portal for travel agencies to search/book travel products across 5 verticals (flights, hotels, transfers, activities, packages).",
          highlights: [
            "Wallet-based payment system with top-ups, ledger, and approval workflows",
            "Marketplace for purchasing travel products",
            "Team management with role-based permissions and audit logging",
            "Full Arabic (RTL) & English internationalization",
          ],
          tech: ["Next.js", "React", "TypeScript", "TanStack Query", "Tailwind CSS", "Radix UI", "Framer Motion", "Sentry"],
        },
        {
          name: "Admin Portal",
          desc: "Internal operations dashboard for managing agencies, contracts, finances, and catalog.",
          highlights: [
            "Hotel contract management with negotiation workflows",
            "Financial operations: wallet management, reconciliation, refund processing",
            "Agency onboarding and approval workflows",
            "Admin user management with permission-based access control",
          ],
          tech: ["Next.js", "React", "TypeScript", "TanStack Query & Table", "Tiptap", "Recharts", "next-intl"],
        },
        {
          name: "Notification Microservice",
          desc: "Event-driven multi-channel notification engine (email, SMS, push, in-app).",
          highlights: [
            "Processes 25+ domain events via Google Cloud Pub/Sub",
            "Dynamic template system with Handlebars, supporting bilingual content (AR/EN)",
            "Circuit breaker pattern for resilience, idempotency for deduplication",
            "Per-agency notification preference management",
          ],
          tech: ["NestJS", "PostgreSQL", "Prisma", "Google Cloud Pub/Sub", "Nodemailer", "Winston", "Jest"],
        },
        {
          name: "Core Backend API",
          desc: "Multi-tenant B2B travel platform backend serving both the Agency and Hub portals.",
          highlights: [
            "Multi-provider hotel integration with adapter pattern (WebBeds, custom contract CMS)",
            "Wallet & payments — double-entry ledger, Stripe integration, two-phase purchase locking",
            "RBAC + ABAC authorization across 3 realms (Platform, Hub, Agency)",
            "Event-driven architecture using outbox pattern → Google Cloud Pub/Sub",
            "Real-time updates via Server-Sent Events (SSE)",
            "Comprehensive audit logging for all operations",
          ],
          tech: ["NestJS", "PostgreSQL", "Prisma", "Redis", "Stripe", "GCP", "JWT/Passport", "Jest"],
        },
      ],
    },
  },
  {
    title: "Property Management System",
    desc: "End-to-end hospitality platform for hotel operators — covers reservations, guest management, housekeeping, billing, AI-driven pricing, channel distribution, and government compliance integrations.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "AI/ML"],
    details: {
      overview:
        "A multi-tenant, cloud-based Property Management System designed for the hospitality industry. Enables hotel operators to manage properties, rooms, bookings, guest profiles, billing, and housekeeping from a single platform — with AI-powered revenue optimization, OTA channel distribution, and regulatory e-invoicing compliance.",
      services: [
        {
          name: "Reservation & Front Desk",
          desc: "Centralized booking engine handling direct reservations, OTA channel sync, and front-desk check-in/check-out workflows.",
          highlights: [
            "Real-time room availability with dynamic rate management",
            "Walk-in, phone, and online booking with automatic confirmation",
            "Group booking and event management with block allocation",
            "Automated guest communication via email, SMS, and WhatsApp",
          ],
          tech: ["Next.js", "React", "TypeScript", "TanStack Query", "Tailwind CSS", "WebSocket"],
        },
        {
          name: "Revenue & Channel Manager",
          desc: "AI-powered pricing engine and OTA distribution hub syncing availability and rates across booking platforms.",
          highlights: [
            "Machine-learning demand forecasting for dynamic pricing",
            "Two-way sync with major OTAs (Booking.com, Expedia, Agoda)",
            "Rate parity monitoring and competitor benchmarking",
            "Direct booking engine with custom property microsites",
          ],
          tech: ["NestJS", "PostgreSQL", "Redis", "Python", "TensorFlow", "REST APIs"],
        },
        {
          name: "Operations & Housekeeping",
          desc: "Staff management module covering housekeeping task assignment, maintenance tracking, and mobile PWA for on-the-go updates.",
          highlights: [
            "Automated room status transitions on check-in/check-out events",
            "Task assignment with priority queues and real-time notifications",
            "Mobile PWA for housekeeping staff with offline support",
            "Maintenance request tracking with SLA monitoring",
          ],
          tech: ["Next.js", "NestJS", "PWA", "Push API", "Service Workers"],
        },
        {
          name: "Billing & Compliance",
          desc: "Financial management with folio-based billing, payment gateway integration, and government-mandated e-invoicing.",
          highlights: [
            "Guest folio management with split billing and group invoicing",
            "Phase-2 e-invoicing compliance with XML/QR generation",
            "POS integration for restaurant and minibar charges",
            "Automated government guest-identity reporting",
          ],
          tech: ["NestJS", "PostgreSQL", "Prisma", "Stripe", "Node.js", "XML/XSLT"],
        },
      ],
    },
  },
  {
    title: "Dubai Tunnel Flight Organization",
    desc: "Role-based dashboard managing complex approval workflows for flight operations.",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Medical E-commerce Platform",
    desc: "E-commerce platform for a medical organization with custom admin panel.",
    tags: ["Next.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Online Education Platform",
    desc: "LMS platform with integrated secure payment processing and course management.",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
];

export const INTERESTS = {
  lately: [
    { icon: "system", label: "System Design" },
    { icon: "devops", label: "DevOps & CI/CD" },
    { icon: "perf", label: "Web Performance" },
  ],
  fitness: [
    { icon: "code", label: "Daily coding streaks" },
    { icon: "read", label: "Tech blogs & podcasts" },
    { icon: "oss", label: "Open source contributions" },
  ],
  movies: [
    { icon: "sci", label: "Science fiction" },
    { icon: "thriller", label: "Thrillers" },
  ],
};

export const PERSONALITY = {
  type: "Architect (INTJ-A)",
  role: "Analyst",
  strategy: "Confident Individualism",
  traits: [
    { label: "Introverted", value: 72 },
    { label: "Intuitive", value: 80 },
    { label: "Thinking", value: 69 },
    { label: "Judging", value: 63 },
  ],
};
