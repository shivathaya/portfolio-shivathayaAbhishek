// ─── EDIT THIS FILE TO CUSTOMIZE YOUR PORTFOLIO ───────────────────────────────

export const meta = {
  name: "Abhishek Shivathaya",
  title: "Java Backend Developer",
  tagline: "Building resilient banking systems at scale.",
  about:
    "3+ years engineering core banking applications at TCS, working on high-throughput microservices for Saudi National Bank. I care about clean APIs, observable systems, and software that survives production.",
  location: "Bengaluru, India",
  available: true, // shows the green "Open to work" badge
};

export const contact = {
  email: "shivathayaabhishek23@gmail.com",
  github: "https://github.com/shivathaya",
  linkedin: "https://www.linkedin.com/in/abhishek-shivathaya/",
  location: "Bengaluru, India",
};

// CV download — place your PDF at /public/cv.pdf
// This will trigger a download when the button is clicked
export const cvPath = "/cv.pdf";

export const skills = [
  {
    group: "Core",
    items: [
      "Java 8 / 17",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate / JPA",
      "REST APIs",
      "SOAP / WSDL",
      "Multithreading"
    ]
  },
  {
    group: "Infra",
    items: [
      "Apache Kafka",
      "RabbitMQ",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS (CLF-01)",
      "Linux",
	  "IBM Liberty"
    ]
  },
  {
    group: "Data",
    items: [
      "Oracle",
      "PostgreSQL",
      "MongoDB",
      "Flyway",
      "PL/SQL",
      "SQL Optimization",
	  "Splunk"
    ]
  },
  {
    group: "Frontend",
    items: [
      "Angular 17+",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Angular Material",
      "React",
      "HTML5",
      "Tailwind CSS",
      "Bootstrap"
    ]
  },
  {
    group: "Practices",
    items: [
      "Microservices",
      "OAuth2 / JWT",
      "CI/CD",
      "JUnit / Mockito",
      "Spring Batch",
      "OpenAPI / Swagger",
      "Design Patterns",
      "System Design",
      "DSA"
    ]
  },
  {
    group: "Tools",
    items: [
      "GitHub Copilot",
      "Maven",
      "Jenkins",
      "Git",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse MAT",
	  "Codex"
    ]
  }
];

export const experience = [
  {
    role: "Senior Application Developer",
    company: "Tata Consultancy Services",
    period: "2023 – Present",
    project: "SNB (Saudi National Bank) — TCS BaNCS",
    bullets: [
      "Delivered 18+ change requests on a live core banking platform serving millions of accounts.",
      "Architected event-driven microservices using Kafka with DLQ patterns for zero-loss transaction processing.",
      "Secured APIs with Spring Security, JWT, and OAuth2; integrated Redis caching to reduce DB load significantly.",
      "Led Oracle → PostgreSQL migration with zero production downtime.",
      "Won TCS Solvesphere Hackathon for internal tooling innovation.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "99 Games",
    period: "2022 – 2023",
    project: "Mobile Gaming Platform",
    bullets: [
      "Built backend services supporting real-time leaderboards and in-app purchase flows.",
      "Improved API response times by profiling and caching hot queries.",
	  "Documented REST APIs, application workflows, and technical specifications, ensuring clear communication between developers and stakeholders. "
    ],
  },
];

export const projects = [
  {
    name: "FollowFLow",
	tech: ["Java 17", "Spring Boot", "Spring Security", "REST APIs", "Hibernate/JPA", "MySQL", "Angular", "TypeScript", "Angular Material", "JUnit", "Mockito", "Maven"],
    desc:
      "FollowFlow is a full-stack social networking application built using Java, Spring Boot, Angular, and PostgreSQL. The platform enables users to create profiles, follow other users, share posts, interact through likes and shares, and view personalized timelines based on their network activity. Secure authentication and authorization were implemented using Spring Security, including email verification and password recovery workflows. The application exposes RESTful APIs for seamless frontend-backend communication and is supported by comprehensive unit and integration testing using JUnit and Mockito to ensure reliability and maintainability.",
    github: "https://github.com/shivathaya/FollowFlow.git",
  },
  {
    name: "URL Creep",
    tech: ["Java 17", "Spring Boot", "REST APIs", "ExecutorService", "Multithreading", "Jsoup", "Observer Pattern", "Hashing", "Maven"],
    desc:
      "urlCreep is a multithreaded web crawler and URL shortener built using Java 17 and Spring Boot. The application crawls websites up to a configurable depth, extracts and processes internal links, performs URL deduplication, and supports hash-based URL shortening. Leveraging ExecutorService for concurrent processing and the Observer design pattern for extensibility, the system exposes RESTful APIs for triggering crawls and retrieving results while ensuring efficient, scalable, and domain-aware crawling.",
    github: "https://github.com/shivathaya/urlCreep.git",
  },
    {
    name: "Real-time SSE / WebSocket Based Chat API",
    tech: ["Spring Boot", "Angular 17", "SSE", "WebSocket", "@Async"],
    desc:
      "Full-stack demo app exploring server-sent events and WebSocket patterns with async Spring services. Built to understand event-driven frontends beyond polling.",
    github: "https://github.com/shivathaya/SSEWebscoketTesting.git",
  },
      {
    name: "DSA Practice Problems",
    tech: ["Java 17", "DSA", "LeetCode", "Dynamic Programming", "Trees & Graphs", "Backtracking", "Greedy Algorithms", "Git"],
    desc:
      "A comprehensive repository of Data Structures and Algorithms solutions, featuring problems solved from LeetCode across topics such as Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, Backtracking, Greedy Algorithms, and Concurrency. The repository focuses on clean, optimized Java implementations with detailed explanations, complexity analysis, and reusable coding patterns to strengthen problem-solving and interview preparation skills.",
    github: "https://github.com/shivathaya/LeetCodeSOls.git",
  }
];
