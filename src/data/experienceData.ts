import type { PortfolioCard } from "../types/portfolio";

export const experienceData = [
  {
    period: "2024 - Present",
    title: "Full Stack Engineer · Levrx Technology Inc.",
    location: "Troy, New York, USA",
    description:
      "Building healthcare products in a backend-focused full stack role, including configurable status-tracking workflows, third-party/webhook integrations, and web/mobile interfaces that support insurance-aware medication journeys.",
    href: "https://levrx.com",
    tags: [
      "Java",
      "Spring Boot",
      "MySQL",
      "AWS",
      "React",
      "React Native",
      "Typescript",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Career Break · Relocation",
    location: "From Canterbury, England to Saratoga Springs, NY, USA",
  },
  {
    period: "2021 - 2023",
    title: "Software Developer Consultant · Netcompany",
    location: "London, England",
    description:
      "Delivered software for European clients in agile, international teams, translating complex requirements into production systems across frontend and backend services with a focus on reliability and maintainability.",
    href: "https://netcompany.com",
    tags: [".NET", "C#", "React", "Node.js", "AWS", "Azure"],
  },
  {
    period: "2018 - 2020",
    title: "UX Designer · Flight Centre Travel Group",
    location: "London, England",
    description:
      "Led mobile UX redesign initiatives using atomic design principles, user research, and experimentation, contributing to stronger engagement and a more consistent, accessible design system.",
    href: "https://www.flightcentre.co.uk",
    tags: ["UX/UI", "Sketch", "A/B Testing", "Design Systems", "WCAG"],
  },
  {
    period: "2017 - 2018",
    title: "Corporate Account Manager · Flight Centre Travel Group",
    location: "London, England",
    description:
      "Managed SME corporate travel accounts with annual spend from £2k to £500k, owning B2B relationships, itinerary strategy, lead generation, and competitive bid wins. This role strengthened my commercial judgment and stakeholder management, and became a key step in my transition into UX and later software engineering.",
    href: "https://www.flightcentre.co.uk/p/business",
    tags: [
      "B2B Sales",
      "Account Management",
      "Lead Generation",
      "Stakeholder Management",
    ],
  },
  {
    period: "2017",
    title: "International Travel Consultant · Flight Centre Travel Group",
    location: "London, England",
    description:
      "Sold tailored flights and package holidays across in-store, phone, and digital channels while consistently exceeding sales KPIs.",
  },
  {
    period: "2016",
    title:
      "Activity Programme Coordinator · Stafford House Study Holidays (UK)",
    location: "Canterbury, England",
    description:
      "Supported head-office operations by coordinating activity programmes and stock management for 10+ nationwide summer camps.",
  },
  {
    period: "2016",
    title: "Despatch Administrator & Progress Tracker · F.W. Mansfield & Son",
    location: "Canterbury, England",
    description:
      "Provided dispatch administration and progress tracking support for camp-related operations and logistics.",
  },
  {
    period: "2015",
    title: "Centre Manager · Xplore (Klub Group Ltd)",
    location: "Suffolk, England",
    description:
      "Oversaw daily centre operations, staff performance, and logistical planning for a residential activity camp.",
  },
  {
    period: "2014 - 2015",
    title: "Health Advisor (Evening and Weekend) · NHS England",
    location: "Ashford, England",
    description:
      "Delivered telephone triage support to the public, following strict healthcare procedures under time pressure.",
  },
  {
    period: "2014",
    title: "Centre Manager · Xplore (Klub Group Ltd)",
    location: "Reading, England",
    description:
      "Managed day-to-day camp delivery, team coordination, and activity operations during a seasonal assignment.",
  },
  {
    period: "2014",
    title: "Voluntary Digital Marketing Intern · MidKent College",
    location: "Maidstone, England",
    description:
      "Contributed to social content, SEO basics, and campaign support within the college's digital marketing function.",
  },
  {
    period: "2014",
    title: "Customer Service Advisor (Weekend) · The Mall",
    location: "Maidstone, England",
    description:
      "Ran information desk support, ticket and gift card services, and day-to-day banking tasks for the shopping centre.",
  },
  {
    period: "2013",
    title: "Chief Instructor (Team Leader) · Xplore (Klub Group Ltd)",
    location: "Suffolk, England",
    description:
      "Led activity instructors, supported safety and first-aid readiness, and acted as first point of contact across operations.",
  },
  {
    period: "2012 - 2013",
    title: "Administrator (Weekend) · DFS",
    location: "Maidstone, England",
    description:
      "Handled sales administration, customer communications, finance application processing, and end-of-day banking.",
  },
  {
    period: "2012",
    title: "Customer Service Advisor & Trainer · Dovetail Services",
    location: "Sittingbourne, England",
    description:
      "Provided call-centre customer support, met quality and volume targets, and trained temporary staff during peak periods.",
  },
  {
    period: "2010",
    title: "Sales Executive · Safestyle UK",
    location: "Maidstone, England",
    description:
      "Delivered door-to-door sales as part of a short-term assignment.",
  },
  {
    period: "2010",
    title:
      "Apprentice Activities Instructor & TEFL Teacher · Kingswood Education and Adventure",
    location: "Suffolk, England",
    description:
      "Delivered English lessons, activities, and excursions for international students aged 7-17.",
  },
] satisfies PortfolioCard[];

export const latestExperienceData = experienceData.slice(0, 5);
