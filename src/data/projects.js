export const projects = [
  {
    slug: "allocatr",
    title: "Allocatr: Hostel Allocation & Clearance System",
    featured: true,
    image: "/projects/allocatr.png",
    description:
      "A full-stack hostel management system for Nigerian universities with three role-based dashboards (Student, Officer, Admin). Students show HMAC-secured QR codes that officers scan in the browser to record departmental clearance, and admins run a First-Come First-Served room allocation with CSV/PDF export.",
    tags: [
      "Next.js 15",
      "React",
      "Tailwind CSS",
      "Axios",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "HMAC",
    ],
    links: [
      { label: "Frontend", href: "https://github.com/MatthewSalam/allocatr_ui" },
      { label: "Backend", href: "https://github.com/MatthewSalam/allocatr_api" },
    ],
  },
  {
    slug: "inventory",
    title: "Inventory Management System",
    featured: true,
    image: "/projects/inventory.png",
    description:
      "A full-stack inventory app with a responsive React frontend for viewing and managing records, and a FastAPI backend handling complete CRUD operations, persistent storage and secure token-based authentication.",
    tags: [
      "React",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "JWT",
      "bcrypt",
      "REST API",
    ],
    links: [
      { label: "Live", href: "https://inventory-ui-gamma.vercel.app" },
      { label: "Frontend", href: "https://github.com/MatthewSalam/inventory_UI" },
      { label: "Backend", href: "https://github.com/MatthewSalam/inventory_API" },
      { label: "API Docs", href: "https://inventory-api-kvwx.onrender.com/docs" },
    ],
  },
  {
    slug: "weather",
    title: "Weather App",
    featured: false,
    image: "/projects/weather.png",
    description:
      "A responsive weather app that pulls real-time data from the OpenWeatherMap API for cities worldwide, with dynamic city search, async requests and error handling.",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "OpenWeatherMap API"],
    links: [
      { label: "Live", href: "https://weather-x-seven.vercel.app/" },
      { label: "GitHub", href: "https://github.com/MatthewSalam/weatherX" },
    ],
  },
  {
    slug: "auth-dashboard",
    title: "Multi-User Authentication Dashboard",
    featured: false,
    image: "/projects/auth-dashboard.png",
    description:
      "A frontend authentication system supporting multiple user accounts with login flows, personalized dashboards, client-side validation and session-based state management.",
    tags: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Session Storage"],
    links: [
      { label: "Live", href: "https://ui-three-bice.vercel.app/" },
      { label: "GitHub", href: "https://github.com/MatthewSalam/UI" },
    ],
  },
  {
    slug: "fellowship-api",
    title: "Fellowship Management API",
    featured: false,
    image: "/projects/fellowship-api.png",
    description:
      "A RESTful backend for managing church fellowship operations: member registration, authentication and administrative data, with hashed passwords, token auth and scalable CRUD operations.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "JWT", "bcrypt", "MySQL", "SQLite"],
    links: [
      { label: "GitHub", href: "https://github.com/MatthewSalam/RCF-OAU-API" },
    ],
  },
];