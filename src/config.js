// ============================================================
//  PORTFOLIO CONFIGURATION — SINGLE SOURCE OF TRUTH
// ============================================================
//  Updated with confirmed details from Ashutosh's resumes.
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  //  PERSONAL INFORMATION
  // ----------------------------------------------------------
  personal: {
    name: "Ashutosh Kumar",
    headline: "B.Tech in Electronics & Communication Engineering",
    tagline:
      "Building Generative AI applications, stateful agentic workflows, and full-custom VLSI/embedded systems",
    location: "Chennai, Tamil Nadu",
    email: "ashukr0410@gmail.com",
    collegeEmail: "Ashutosh.kumar2024@vitstudent.ac.in",
    phone: "+91 6201721260",
    github: "https://github.com/Ashutoshkumar17",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-473208370",
    // Resume link - can be hosted on Google Drive, GitHub releases, or placed in public/
    resumeUrl: "",
  },

  // ----------------------------------------------------------
  //  ABOUT SECTION
  // ----------------------------------------------------------
  about: {
    paragraphs: [
      "I'm an Electronics and Communication Engineering undergraduate at Vellore Institute of Technology (VIT), Chennai (Aug 2024 – May 2028).",
      "My profile spans two complementary worlds: developing robust Generative AI applications in Python (LLM agents, LangGraph workflows, RAG pipelines, FastAPI microservices) and deep engineering fundamentals in ECE (full-custom CMOS VLSI design in Cadence Virtuoso, embedded systems, and microcontroller programming).",
      "Whether designing an agentic restaurant ordering graph with retry logic, building a facial recognition attendance system with AWS Lambda and MongoDB, or performing transistor-level 2:1 MUX layout verification, I focus on structured, reliable, and high-impact engineering.",
    ],
  },

  // ----------------------------------------------------------
  //  ROLE CATEGORIES (Used for live filtering)
  // ----------------------------------------------------------
  roles: [
    { id: "all", label: "All Projects" },
    { id: "software-ai", label: "Software & GenAI" },
    { id: "ece", label: "ECE & Hardware" },
  ],

  // ----------------------------------------------------------
  //  SKILLS
  // ----------------------------------------------------------
  skills: {
    "Programming & Core": {
      category: "software-ai",
      items: [
        { name: "Python" },
        { name: "C++" },
        { name: "SQL" },
        { name: "Embedded C" },
        { name: "Data Structures & Algorithms" },
        { name: "OOP" },
        { name: "Git & GitHub" },
      ],
    },
    "Generative AI & LLM Systems": {
      category: "software-ai",
      items: [
        { name: "LLM Agents" },
        { name: "Agentic Workflows" },
        { name: "LangGraph" },
        { name: "RAG" },
        { name: "FastAPI" },
        { name: "Pydantic" },
        { name: "Sentence Transformers" },
        { name: "Tool / Function Calling" },
        { name: "Semantic Search" },
        { name: "Prompt Engineering" },
        { name: "Groq API" },
        { name: "Tavily Search API" },
      ],
    },
    "Cloud, Web & Databases": {
      category: "software-ai",
      items: [
        { name: "AWS Lambda" },
        { name: "API Gateway" },
        { name: "Docker / ECR" },
        { name: "MongoDB Atlas" },
        { name: "REST APIs" },
        { name: "Streamlit" },
        { name: "PyTorch" },
        { name: "NumPy" },
      ],
    },
    "ECE / EDA Tools & Hardware": {
      category: "ece",
      items: [
        { name: "Cadence Virtuoso (GPDK 90nm)" },
        { name: "Verilog HDL" },
        { name: "Keil" },
        { name: "LTspice" },
        { name: "CMOS VLSI Design" },
        { name: "Analog & Digital Circuits" },
        { name: "Microcontroller (ATmega328P)" },
        { name: "Arduino" },
      ],
    },
  },

  // ----------------------------------------------------------
  //  PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
      title: "Restaurant Order Management AI Agent",
      category: "software-ai",
      description:
        "Built a stateful LangGraph agentic workflow utilizing a Groq-hosted LLM to parse natural-language orders with conditional routing across order validation, inventory checks, customer confirmation, cooking, and serving with retry logic for failures.",
      technologies: ["Python", "LangGraph", "Groq API", "LLM Agents"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Designed stateful graph with conditional routing and retry logic",
        "Handled partial-availability and cooking/serving fallback flows",
      ],
    },
    {
      title: "Hireme – AI Resume Assistant",
      category: "software-ai",
      description:
        "FastAPI REST service parsing PDF resumes via pypdf and using an LLM for structured schema-validated data extraction into Pydantic models with grounded question-answering for recruiters.",
      technologies: ["FastAPI", "Python", "Groq API", "Pydantic", "pypdf"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Structured data extraction into Pydantic schema-validated JSON",
        "Interactive testing via auto-generated Swagger/OpenAPI docs",
      ],
    },
    {
      title: "RAG-based Q&A System",
      category: "software-ai",
      description:
        "Retrieval-Augmented Generation pipeline embedding knowledge bases with all-MiniLM-L6-v2 and performing cosine similarity ranking; passes top-matching context to Groq's GPT-OSS-120B with NumPy in-memory vector storage.",
      technologies: ["Python", "Sentence Transformers", "Groq API", "NumPy", "RAG"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "all-MiniLM-L6-v2 vector embeddings with cosine similarity search",
        "Context-grounded answer generation with fast inference",
      ],
    },
    {
      title: "Tool-Calling AI Agent",
      category: "software-ai",
      description:
        "Dynamic LLM agent on Groq utilizing function calling to select and execute tools for live web search (Tavily), weather data, and complex mathematical calculations in an automated loop.",
      technologies: ["Python", "Groq API", "Tavily Search API", "Tool Calling"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Autonomous agent loop: tool call parsing, execution, and synthesis",
        "Secure environment variable API key management",
      ],
    },
    {
      title: "Cloud-Based Smart Attendance System",
      category: "software-ai",
      description:
        "Facial-recognition attendance system using MTCNN and FaceNet 512-d embeddings matched against stored profiles in MongoDB Atlas. Features a 16-endpoint FastAPI backend packaged as an AWS Lambda container with live faculty dashboard.",
      technologies: ["FastAPI", "PyTorch", "MongoDB Atlas", "AWS Lambda", "Docker"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Compound indexing on (student_id, session_id) prevents duplicate check-ins",
        "Packaged backend as AWS Lambda container image via ECR & API Gateway",
      ],
    },
    {
      title: "2:1 CMOS Transmission Gate Multiplexer",
      category: "ece",
      description:
        "Full-custom VLSI design in Cadence Virtuoso (GPDK 90nm). Optimized propagation delay via Wp/Wn ratio tuning, measured tPLH/tPHL transient delays, and verified DRC clean and LVS matched layout with parasitic extraction.",
      technologies: ["Cadence Virtuoso", "GPDK 90nm", "CMOS VLSI", "DRC/LVS"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Transistor-level CMOS transmission gate architecture",
        "DRC clean & LVS matched layout verification and post-layout parasitics",
      ],
    },
    {
      title: "Metal Detection System using ZVS Oscillator",
      category: "ece",
      description:
        "Designed a Zero Voltage Switching (ZVS) LC oscillator circuit interfaced with Arduino to detect frequency shifts via timer interrupts and classify ferromagnetic vs. paramagnetic metals by inductance variations.",
      technologies: ["LTspice", "Arduino", "Analog Circuit Design", "ZVS Oscillator"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Frequency variation measurement using Arduino timer interrupts",
        "Inductance analysis to differentiate material types",
      ],
    },
    {
      title: "Embedded Password-Based Access Control",
      category: "ece",
      description:
        "Microcontroller-based authentication system using Arduino, 4x4 keypad, and LCD display. Generated precise 50 Hz PWM via ATmega328P timer registers to actuate a servo lock with retry-limit security logic.",
      technologies: ["Keil", "ATmega328P", "Embedded C", "Arduino", "PWM"],
      repoUrl: "https://github.com/Ashutoshkumar17",
      demoUrl: "",
      bullets: [
        "Direct ATmega328P register programming for 50 Hz PWM servo control",
        "Tamper-resistant security logic with failed attempt lockouts",
      ],
    },
  ],

  // ----------------------------------------------------------
  //  EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      institution: "Vellore Institute of Technology (VIT), Chennai",
      degree: "Bachelor of Technology — Electronics and Communication Engineering",
      period: "Aug 2024 – May 2028 (Expected)",
      gpa: "8.32 / 10",
      details: [
        "Core Coursework: Analog & Digital Circuits, CMOS VLSI Design, Microcontrollers, Data Structures & Algorithms, OOP",
        "Active student researcher and developer exploring Python AI agent architectures alongside hardware design",
      ],
    },
  ],

  // ----------------------------------------------------------
  //  CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    {
      title: "Embedded Systems Certification",
      issuer: "GeeksforGeeks",
    },
  ],

  // ----------------------------------------------------------
  //  EXPERIENCE (Ready for future internships/roles)
  // ----------------------------------------------------------
  experience: {
    enabled: false,
    items: [],
  },
};

export default CONFIG;
