// ============================================================
//  PORTFOLIO CONFIGURATION — SINGLE SOURCE OF TRUTH
// ============================================================
//  Synchronized with verified GitHub profile:
//  https://github.com/Ashutoshumar17
// ============================================================

const CONFIG = {
  // ----------------------------------------------------------
  //  PERSONAL INFORMATION
  // ----------------------------------------------------------
  personal: {
    name: "Ashutosh Kumar",
    headline: "B.Tech in Electronics & Communication Engineering — VIT Chennai",
    tagline:
      "Building practical systems at the intersection of Generative AI, software engineering, and core electronics",
    location: "Chennai, Tamil Nadu",
    email: "ashukr0410@gmail.com",
    collegeEmail: "ashutosh.kumar2024a@vitstudent.ac.in",
    phone: "+91 6201721260",
    github: "https://github.com/Ashutoshumar17",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-473208370",
    resumeUrl: "",
  },

  // ----------------------------------------------------------
  //  ABOUT SECTION
  // ----------------------------------------------------------
  about: {
    paragraphs: [
      "I'm an Electronics and Communication Engineering undergraduate at Vellore Institute of Technology (VIT), Chennai (Aug 2024 – May 2028).",
      "My work spans two closely connected domains: developing intelligent software and Generative AI applications in Python (LLM agents, LangGraph workflows, RAG pipelines, FastAPI backends) and core hardware engineering (full-custom CMOS VLSI design in Cadence Virtuoso, digital signal processing, embedded systems, and microcontroller firmware).",
      "Whether designing an agentic restaurant order automation graph, packaging a facial-recognition attendance backend as an AWS container, developing digital hearing aid DSP algorithms, or designing transistor-level CMOS transmission-gate multiplexers, I focus on building robust, well-architected solutions.",
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
  //  SKILLS (Synchronized with GitHub & Resumes)
  // ----------------------------------------------------------
  skills: {
    "Programming & Core": {
      category: "software-ai",
      items: [
        { name: "Python" },
        { name: "C++" },
        { name: "C" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "SQL" },
        { name: "HTML5 / CSS3" },
        { name: "Data Structures & Algorithms" },
        { name: "OOP" },
        { name: "Git & GitHub" },
      ],
    },
    "Generative AI & LLM Systems": {
      category: "software-ai",
      items: [
        { name: "LLM Agents" },
        { name: "LangGraph Workflows" },
        { name: "RAG Pipelines" },
        { name: "FastAPI" },
        { name: "Pydantic" },
        { name: "Sentence Transformers" },
        { name: "Tool / Function Calling" },
        { name: "Qdrant Vector DB" },
        { name: "Semantic Search" },
        { name: "Groq API" },
        { name: "Tavily Search API" },
        { name: "Prompt Engineering" },
      ],
    },
    "Cloud, Web & Databases": {
      category: "software-ai",
      items: [
        { name: "AWS EC2 / Lambda" },
        { name: "Docker / ECR" },
        { name: "MongoDB Atlas" },
        { name: "MySQL" },
        { name: "REST APIs" },
        { name: "Streamlit" },
        { name: "PyTorch" },
        { name: "NumPy & Matplotlib" },
        { name: "Vite" },
      ],
    },
    "ECE / EDA Tools & Hardware": {
      category: "ece",
      items: [
        { name: "Cadence Virtuoso (GPDK 90nm)" },
        { name: "Verilog HDL" },
        { name: "Ansys HFSS" },
        { name: "LTspice" },
        { name: "MATLAB" },
        { name: "Keil" },
        { name: "Digital Signal Processing (DSP)" },
        { name: "CMOS VLSI Design" },
        { name: "Embedded C (8051 / ATmega328P)" },
        { name: "Antenna & Circuit Design" },
      ],
    },
  },

  // ----------------------------------------------------------
  //  PROJECTS (All verified repository links directly to GitHub)
  // ----------------------------------------------------------
  projects: [
    {
      title: "Restaurant Order Automation Agent",
      category: "software-ai",
      description:
        "Stateful LangGraph agentic workflow that uses Groq-hosted LLMs to interpret natural-language orders and drive a multi-step ordering flow across inventory validation, customer confirmation, cooking, and serving with retry logic.",
      technologies: ["Python", "LangGraph", "Groq API", "LLM Agents"],
      repoUrl: "https://github.com/Ashutoshumar17/Restaurant-Order-Automation-Agent",
      demoUrl: "",
      bullets: [
        "Stateful graph with conditional routing across order validation and kitchen flows",
        "Partial-availability handling and automated retry logic for cooking/serving exceptions",
      ],
    },
    {
      title: "Cloud-Based Smart Attendance System",
      category: "software-ai",
      description:
        "Facial-recognition attendance tracking system utilizing MTCNN face detection and FaceNet (InceptionResnetV1) 512-d embeddings. Backed by a 16-endpoint FastAPI backend on AWS with MongoDB Atlas compound indexing and faculty dashboard.",
      technologies: ["FastAPI", "PyTorch", "MongoDB Atlas", "AWS EC2", "JavaScript"],
      repoUrl: "https://github.com/Ashutoshumar17/cloud-biometric-attendance",
      demoUrl: "",
      bullets: [
        "512-d FaceNet cosine similarity matching against stored student embeddings",
        "Unique compound index on (student_id, session_id) prevents duplicate check-ins",
      ],
    },
    {
      title: "RAG Question Answering System",
      category: "software-ai",
      description:
        "Retrieval-Augmented Generation pipeline embedding a knowledge base using all-MiniLM-L6-v2 / Qdrant vector search. Ranks documents by cosine similarity and provides contextual grounding to Groq's GPT-OSS-120B.",
      technologies: ["Python", "Sentence Transformers", "Qdrant", "Groq API", "RAG"],
      repoUrl: "https://github.com/Ashutoshumar17/RAG_QnA",
      demoUrl: "",
      bullets: [
        "Vector search semantic retrieval ranking documents for context grounding",
        "In-memory embedding management and low-latency answer generation",
      ],
    },
    {
      title: "AI Agent with Tool Calling",
      category: "software-ai",
      description:
        "Autonomous Python AI agent leveraging Groq function calling to dynamically select and invoke external tools for web search (Tavily), real-time weather forecasts, and mathematical calculations with robust error handling.",
      technologies: ["Python", "Groq API", "Tavily API", "Weather API", "Tool Calling"],
      repoUrl: "https://github.com/Ashutoshumar17/Ai_Agent",
      demoUrl: "",
      bullets: [
        "Autonomous loop: parse tool calls, execute API functions, return synthesized response",
        "Interactive CLI interface with secure environment variable API authentication",
      ],
    },
    {
      title: "AI Resume Assistant (Hireme)",
      category: "software-ai",
      description:
        "FastAPI REST service parsing PDF resumes via pypdf and extracting structured candidate intelligence into Pydantic schema-validated JSON with grounded Q&A support for recruiter queries.",
      technologies: ["FastAPI", "Python", "Groq API", "Pydantic", "pypdf"],
      repoUrl: "https://github.com/Ashutoshumar17/AI-Resume-Assistant",
      demoUrl: "",
      bullets: [
        "Structured schema-validated JSON extraction from multipart PDF uploads",
        "Interactive testing suite using FastAPI's auto-generated Swagger documentation",
      ],
    },
    {
      title: "AI Resume Shortlister",
      category: "software-ai",
      description:
        "AI-powered candidate screening tool comparing resumes against job descriptions to generate compatibility scores, keyword extraction, and detailed skill-gap analysis with recruiter-friendly feedback.",
      technologies: ["Python", "Streamlit", "Groq API", "Pydantic", "NLP"],
      repoUrl: "https://github.com/Ashutoshumar17/Resume-Shortlister",
      demoUrl: "",
      bullets: [
        "PDF/DOCX resume parsing and LLM-driven candidate capability assessment",
        "Interactive Streamlit interface with automated score generation",
      ],
    },
    {
      title: "AudioDSP — Digital Hearing Aid",
      category: "ece",
      description:
        "Digital audio-processing project exploring signal processing algorithms, frequency-shaping filters, and dynamic range compression techniques tailored for digital hearing aid applications.",
      technologies: ["Python", "DSP", "Audio Processing", "NumPy", "Matplotlib"],
      repoUrl: "https://github.com/Ashutoshumar17/AudioDSP-HearingAid",
      demoUrl: "",
      bullets: [
        "Discrete-time signal analysis, digital filtering, and Fourier transforms",
        "Audio enhancement and noise reduction pipelines for hearing devices",
      ],
    },
    {
      title: "Embedded Keypad Security System",
      category: "ece",
      description:
        "Microcontroller-based security access control system interfacing a 4x4 matrix keypad and LCD. Utilizes register-level timer interrupts and PWM to actuate a servo locking mechanism with failed-attempt lockout logic.",
      technologies: ["Embedded C", "Microcontroller", "Keypad Interface", "LCD", "PWM"],
      repoUrl: "https://github.com/Ashutoshumar17/Embedded-Keypad-Security-System",
      demoUrl: "",
      bullets: [
        "Register-level timer programming and PWM output for physical locking",
        "Password verification logic with retry-limit security safeguards",
      ],
    },
    {
      title: "2:1 CMOS Transmission Gate Multiplexer",
      category: "ece",
      description:
        "Full-custom VLSI design in Cadence Virtuoso (GPDK 90nm). Optimized propagation delay via Wp/Wn ratio tuning, measured tPLH/tPHL transient delays, and verified DRC clean and LVS matched layout.",
      technologies: ["Cadence Virtuoso", "GPDK 90nm", "CMOS VLSI", "DRC/LVS"],
      repoUrl: "https://github.com/Ashutoshumar17",
      demoUrl: "",
      bullets: [
        "Transistor-level transmission-gate architecture minimizing parasitic delays",
        "Completed layout verification: DRC clean, LVS matched, post-layout simulation",
      ],
    },
    {
      title: "Five-Stage CMOS Ring Oscillator",
      category: "ece",
      description:
        "VLSI design and full-custom layout of a five-stage CMOS ring oscillator in Cadence Virtuoso (GPDK 90nm) to measure stage delay, oscillation frequency, and transient behavior.",
      technologies: ["Cadence Virtuoso", "GPDK 90nm", "CMOS Layout", "VLSI"],
      repoUrl: "https://github.com/Ashutoshumar17",
      demoUrl: "",
      bullets: [
        "Five-stage inverter loop design analyzing propagation delay and frequency",
        "Full DRC/LVS layout verification and transient simulation",
      ],
    },
    {
      title: "FIFO Inventory Management System",
      category: "software-ai",
      description:
        "Object-oriented Python inventory management system implementing the First-In First-Out (FIFO) algorithm with CSV-based persistent storage, automated stock tracking, and profit valuation.",
      technologies: ["Python", "OOP", "CSV Persistence", "Algorithms"],
      repoUrl: "https://github.com/Ashutoshumar17/FIFO-Inventory-Management-System",
      demoUrl: "",
      bullets: [
        "Clean object-oriented architecture for inventory ops and sales processing",
        "Automated inventory valuation and transaction history logging",
      ],
    },
    {
      title: "Metal Detection System using ZVS Oscillator",
      category: "ece",
      description:
        "Zero Voltage Switching (ZVS) LC oscillator circuit interfaced with an Arduino microcontroller to detect frequency shifts via timer interrupts and classify material types through inductance variations.",
      technologies: ["LTspice", "Arduino", "Analog Circuit Design", "ZVS Oscillator"],
      repoUrl: "https://github.com/Ashutoshumar17",
      demoUrl: "",
      bullets: [
        "Frequency shift detection using microcontroller hardware timer interrupts",
        "Inductive impedance profiling to differentiate metallic materials",
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
        "Coursework: Digital Signal Processing, Analog & Digital Circuits, CMOS VLSI Design, Microcontrollers, Antenna & RF, Data Structures & Algorithms, OOP",
        "Actively building open-source projects bridging software engineering and physical electronics",
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
  //  EXPERIENCE (Ready for future roles)
  // ----------------------------------------------------------
  experience: {
    enabled: false,
    items: [],
  },
};

export default CONFIG;
