export type IconName =
  | "airVent"
  | "refrigerator"
  | "washingMachine"
  | "cog"
  | "car"
  | "packageCheck"
  | "wrench"
  | "showerHead"
  | "mapPin"
  | "badge"
  | "snowflake"
  | "clipboard"
  | "search"
  | "phone"
  | "message"
  | "mail";

export type Service = {
  slug: string;
  title: string;
  mark: string;
  icon: IconName;
  image: string;
  shortDescription: string;
  description: string;
  details: string[];
  href: string;
};

type ProcessStep = {
  title: string;
  description: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    slug: "ac-installation-service",
    title: "A/C Installation & Service",
    mark: "AC",
    icon: "airVent",
    image: "/images/services/ac-installation-service.webp",
    shortDescription: "Installation, servicing, cleaning, and cooling performance checks.",
    description:
      "Professional air conditioner installation, routine servicing, cleaning, and troubleshooting for homes, shops, offices, and small commercial spaces.",
    details: [
      "A/C installation and re-installation support",
      "Normal service, pumpdown service, and cooling checks",
      "Gas leak inspection and repair guidance",
    ],
    href: "/contact",
  },
  {
    slug: "deep-freezer-repair",
    title: "Deep Freezer Repair",
    mark: "DF",
    icon: "snowflake",
    image: "/images/services/deep-freezer-repair.webp",
    shortDescription: "Cooling loss, compressor issues, gas checks, and inspection visits.",
    description:
      "Repair and inspection support for deep freezers used by homes, retailers, restaurants, and small businesses.",
    details: [
      "Cooling and temperature issue checks",
      "Gas leak inspection and repair guidance",
      "Parts replacement support where available",
    ],
    href: "/contact",
  },
  {
    slug: "refrigerator-repair",
    title: "Refrigerator Repair",
    mark: "RF",
    icon: "refrigerator",
    image: "/images/services/refrigerator-repair.webp",
    shortDescription: "Reliable refrigerator troubleshooting, repair, and maintenance.",
    description:
      "Support for common refrigerator issues including poor cooling, water leaks, noise, thermostat faults, and gas-related problems.",
    details: [
      "Single-door and double-door refrigerator support",
      "Gas leak checks and gas charge guidance",
      "Parts replacement and general repair support",
    ],
    href: "/contact",
  },
  {
    slug: "washing-machine-repair",
    title: "Washing Machine Repair",
    mark: "WM",
    icon: "washingMachine",
    image: "/images/services/washing-machine-repair.webp",
    shortDescription: "Inspection and repair for washing, draining, spinning, and power issues.",
    description:
      "Washing machine service visits for home customers, including inspection of drainage, spinning, electrical, and mechanical faults.",
    details: [
      "Top-load and front-load support",
      "Installation and parts replacement support",
      "Drainage, spinning, noise, and general repair checks",
    ],
    href: "/contact",
  },
  {
    slug: "motor-rewinding",
    title: "Motor Rewinding",
    mark: "MR",
    icon: "cog",
    image: "/images/services/motor-rewinding.webp",
    shortDescription: "Motor rewinding and technical repair support for selected appliances.",
    description:
      "Technical motor rewinding and related repair support for selected appliance and cooling system components.",
    details: [
      "Motor fault inspection",
      "Rewinding and repair guidance",
      "Support for cooling and appliance components",
    ],
    href: "/contact",
  },
  {
    slug: "auto-ac-repair",
    title: "Auto A/C Repair",
    mark: "AA",
    icon: "car",
    image: "/images/services/auto-ac-repair.webp",
    shortDescription: "Vehicle A/C cooling checks, leak checks, and service support.",
    description:
      "Auto A/C inspection and service support for cooling performance, airflow, and common vehicle A/C faults.",
    details: [
      "Cooling performance inspection",
      "Airflow and gas-related checks",
      "Service guidance for vehicle owners",
    ],
    href: "/contact",
  },
  {
    slug: "hot-water-shower-repair",
    title: "Hot Water Shower Repair",
    mark: "HW",
    icon: "showerHead",
    image: "/images/services/hot-water-shower-repair.webp",
    shortDescription: "Installation, re-installation, parts replacement, and repair support.",
    description:
      "Service support for hot water shower installation, dismantling and re-installation, parts replacement, and related repair needs.",
    details: [
      "Hot water shower installation support",
      "Dismantling and re-installation guidance",
      "Parts replacement and general repair support",
    ],
    href: "/contact",
  },
  {
    slug: "spare-parts",
    title: "Spare Parts",
    mark: "SP",
    icon: "packageCheck",
    image: "/images/services/spare-parts.webp",
    shortDescription: "Selected appliance and cooling spare parts with service guidance.",
    description:
      "Spare part guidance and selected replacement support for cooling, refrigeration, and appliance service work.",
    details: [
      "A/C, refrigerator, freezer, and washer parts",
      "Part matching support",
      "Genuine replacement guidance where available",
    ],
    href: "/contact",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Contact Us",
    description: "Call, WhatsApp, or send a service request with your appliance issue.",
    icon: "clipboard",
  },
  {
    title: "Explain the Issue",
    description: "Share the model, symptoms, and location so we can prepare properly.",
    icon: "search",
  },
  {
    title: "Technician Visit",
    description: "A technician inspects the equipment and explains the recommended work.",
    icon: "wrench",
  },
  {
    title: "Service Completion",
    description: "Repair or service is completed with practical care advice.",
    icon: "badge",
  },
];

export const faqs = [
  {
    question: "How do I book a service?",
    answer:
      "You can call TECHNOFROST, send a WhatsApp message, or submit the contact form with your name, phone number, service type, and issue details.",
  },
  {
    question: "Do you repair refrigerators and freezers?",
    answer:
      "Yes. TECHNOFROST supports refrigerator repair, deep freezer inspection, cooling checks, and related spare part guidance.",
  },
  {
    question: "Can I contact through WhatsApp?",
    answer:
      "Yes. WhatsApp is available for quick service requests, issue photos, location sharing, and booking coordination.",
  },
  {
    question: "Do you provide spare parts?",
    answer:
      "Selected spare parts and part guidance are available for supported A/C, refrigeration, washing machine, and appliance services.",
  },
];
