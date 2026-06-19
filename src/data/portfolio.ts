export const site = {
  name: "Bhakti Vyas",
  firstName: "Bhakti",
  title: "Aspiring Data Analyst",
  tagline:
    "Data Analyst skilled in SQL, Python, and Power BI \u2014 turning raw data into actionable insights.",
  email: "vbhakti7@gmail.com",
  phone: "+1 (803) 597-0835",
  location: "Brooklyn, NY",
  availability: "Open to opportunities",
  social: {
    linkedin: "https://linkedin.com/in/bhakti-vyas-a64aa3348",
    github: "https://github.com",
  },
  // Resume: copy your PDF into the public/ folder (e.g. public/bhaktiresume.pdf)
  resumeUrl: "/bhaktiresume.pdf",
  // Photo: copy your image into public/ (e.g. public/photo.jpg). Leave "" to show initials fallback.
  photoUrl: "/photo.jpg" as string,
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "I'm a data enthusiast currently pursuing my MS in Computer Science at Long Island University, Brooklyn. With a foundation in Computer Engineering from KJ Institute of Engineering, Gujarat, I bring a blend of analytical thinking and technical depth to every project.",
    "I specialize in uncovering patterns in complex datasets using SQL, Python (Pandas, NumPy), and Power BI \u2014 transforming raw numbers into clear, actionable insights that drive smarter decisions.",
    "I believe data tells a story. My passion lies in reading that story and presenting it in a way that empowers organizations to act with confidence.",
  ],
  highlights: [
    { label: "Projects completed", value: "4+" },
    { label: "Tools mastered", value: "10+" },
    { label: "Accuracy achieved", value: "97%" },
  ],
} as const;

export const experience = [
  {
    role: "Computer Operator",
    company: "Agri Business Center",
    period: "Sep 2022 \u2014 May 2024",
    bullets: [
      "Managed and analyzed business data using Excel, tracking key metrics to support day-to-day operations.",
      "Built reports summarizing sales and performance data to identify trends and support business growth strategies.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Webmyne Systems Private Limited",
    period: "Jul 2020 \u2014 May 2021",
    bullets: [
      "Built the frontend of an insurance application enabling paperless workflows for a banking client.",
      "Improved process efficiency and reduced manual paperwork through streamlined digital interfaces.",
    ],
  },
] as const;

export const skills = [
  {
    category: "Data Analysis",
    icon: "\u{1F4CA}",
    items: [
      { name: "Excel",  level: 92 },
      { name: "SQL",    level: 88 },
      { name: "Python", level: 83 },
      { name: "Pandas", level: 85 },
      { name: "NumPy",  level: 79 },
    ],
  },
  {
    category: "Visualization",
    icon: "\u{1F4C8}",
    items: [
      { name: "Power BI", level: 88 },
      { name: "Tableau",  level: 72 },
    ],
  },
  {
    category: "Tools",
    icon: "\u{1F6E0}",
    items: [
      { name: "Jupyter Notebook", level: 86 },
      { name: "Git",              level: 78 },
      { name: "VS Code",          level: 90 },
    ],
  },
  {
    category: "Databases",
    icon: "\u{1F5C4}",
    items: [
      { name: "MySQL",      level: 83 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB",    level: 68 },
    ],
  },
  {
    category: "Analytical Skills",
    icon: "\u{1F50D}",
    items: [
      { name: "Data Cleaning",    level: 91 },
      { name: "EDA",              level: 89 },
      { name: "Statistics",       level: 78 },
      { name: "Data Storytelling",level: 83 },
    ],
  },
] as const;

export const projects = [
  {
    title: "Bookstore Management System with Admin Dashboard",
    description:
      "A full-stack MERN web application for bookstore inventory and order management, featuring a real-time React admin dashboard with MongoDB aggregation for sales insights.",
    bullets: [
      "Built a full-stack MERN web application (MongoDB, Express.js, React, Node.js) for bookstore inventory and order management.",
      "Designed and implemented RESTful APIs for CRUD operations on book inventory, customer records, and order data.",
      "Developed an interactive admin dashboard using React to visualize sales performance, inventory levels, and order status in real time.",
      "Implemented MongoDB aggregation queries to extract insights on top-selling books, revenue trends, and customer activity.",
    ],
    tags: ["MongoDB", "Express.js", "React", "Node.js", "REST API"],
    highlight: "Full-stack MERN + Admin Dashboard",
    repoUrl: "https://github.com/vyasbhakti35-web/BOOK-STORE-APP",
    // TODO: Replace "#" with your real demo/live URL (or remove if not applicable)
    liveUrl: "#",
  },
  {
    title: "Fire Detection System using IoT & ML",
    description:
      "Built a real-time fire detection pipeline using IoT sensors and machine learning models. Achieved 97% detection accuracy through feature engineering and model optimization, with automated alerts sent to users and emergency services.",
    tags: ["Python", "TensorFlow", "OpenCV", "IoT"],
    highlight: "97% detection accuracy",
    // TODO: Replace "#" with your real GitHub repo URL
    repoUrl: "#",
    // TODO: Replace "#" with your real demo/live URL (or remove if not applicable)
    liveUrl: "#",
  },
  {
    title: "ReWear Donation Management & Analysis",
    description:
      "Designed a platform to streamline clothing donations between individuals and NGOs. Analyzed donation data to identify peak periods and demand patterns, then visualized insights in a Power BI dashboard tracking fulfillment rates.",
    tags: ["SQL", "Python", "Pandas", "Power BI"],
    highlight: "NGO donation flow optimization",
    // TODO: Replace "#" with your real GitHub repo URL
    repoUrl: "#",
    // TODO: Replace "#" with your real demo/live URL (or remove if not applicable)
    liveUrl: "#",
  },
  {
    title: "E-Commerce Sales Data Analysis",
    description:
      "Analyzed large-scale e-commerce datasets to uncover purchasing behavior and revenue trends. Performed comprehensive EDA with Python and built interactive Power BI dashboards tracking KPIs like revenue, category performance, and customer retention.",
    tags: ["SQL", "Python", "Pandas", "NumPy", "Power BI"],
    highlight: "Large-scale EDA & KPI dashboards",
    repoUrl: "https://github.com/vyasbhakti35-web/E-commerce-analysis",
    // TODO: Replace "#" with your real demo/live URL (or remove if not applicable)
    liveUrl: "#",
  },
] as const;

export const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Long Island University",
    location: "Brooklyn, NY",
    period: "2024 \u2014 2026",
    description:
      "Focusing on data science, machine learning, and advanced analytics. Coursework includes database systems, statistical analysis, and data visualization.",
    current: true,
    secondary: false,
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "KJ Institute of Engineering and Technology",
    location: "Gujarat, India",
    period: "2017 \u2014 2021",
    description:
      "Core foundation in software engineering, algorithms, and data structures. Developed full-stack and data-driven projects including the Fire Detection System and ReWear platform.",
    current: false,
    secondary: false,
  },
  {
    degree: "Diploma in Airport Management",
    institution: "Aerostar Jet Training Academy",
    location: "India",
    period: "2021 \u2014 2022",
    description:
      "Professional diploma covering airport operations, ground handling, and aviation management fundamentals.",
    current: false,
    secondary: true,
  },
] as const;

export const certifications = [
  {
    title: "Python",
    issuer: "Cisco",
    icon: "\u{1F40D}",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Cisco",
    icon: "\u{1F9E9}",
  },
  {
    title: "Data Science",
    issuer: "Cisco",
    icon: "\u{1F52C}",
  },
] as const;
