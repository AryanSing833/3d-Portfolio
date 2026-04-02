const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Data", imgPath: "/images/ideas.svg" },
  { text: "Models", imgPath: "/images/concepts.svg" },
  { text: "ML Pipelines", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Data", imgPath: "/images/ideas.svg" },
  { text: "Models", imgPath: "/images/concepts.svg" },
  { text: "ML Pipelines", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1600, suffix: "", label: "LeetCode rating" },
  { value: 450, suffix: "+", label: "DSA & ML problems solved" },
  { value: 1, suffix: "", label: "Patent application filed" },
  { value: 91, suffix: "%", label: "Top ML project accuracy (CipherSchools)" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem-Solving & Critical Thinking",
    desc: "Structured approach to ML challenges — from data prep to model evaluation and deployment.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "Explaining technical choices and trade-offs whether collaborating on teams or in reviews.",
  },
  {
    imgPath: "/images/time.png",
    title: "Adaptable & Hands-On",
    desc: "Comfortable across languages (C/C++, Python), frameworks, and tools from Colab to local GPU stacks.",
  },
];

const techStackImgs = [
  {
    name: "ML frameworks & pipelines",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python & Data Science",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "RAG & LLMs",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git & Collaboration",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python & ML stacks",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python & Data Science",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "RAG & LLM integration",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Collaboration",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Achieved ~80% compliance detection accuracy by combining multimodal extraction (Whisper + EasyOCR) with RAG-based policy reasoning and local LLM verdicts.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Video Validation MicroService",
    date: "February 2026",
    responsibilities: [
      "Integrated yt-dlp, Whisper, EasyOCR, MiniLM embeddings, FAISS retrieval, and Mistral (Ollama) into an end-to-end compliance auditing pipeline.",
      "Processed video audits in ~60–80 seconds per video (GPU-based), including download, transcription, semantic retrieval, and structured LLM output.",
    ],
  },
  {
    review:
      "Bio-inspired settlement simulation where slime-mold-style agents dynamically build cities and routes in real time with Pygame visualization.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "NPC — Bio-Inspired Settlement Simulation",
    date: "October 2025 – November 2025",
    responsibilities: [
      "Implemented multi-agent systems with distinct NPC roles (explorers, traders, settlers) that adapt and interact autonomously.",
      "Used GPU-accelerated algorithms and Physarum-inspired intelligence to optimize path formation and world evolution efficiently.",
    ],
  },
  {
    review:
      "Built a machine learning system to recommend optimal job role alternatives using integrated structured HR datasets, reaching 91% accuracy.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Hybrid ML — CipherSchools",
    date: "June 2025 – July 2025",
    responsibilities: [
      "Performed extensive data preprocessing and feature engineering for skill similarity, experience alignment, and role compatibility.",
      "Evaluated multiple ML models and tuning strategies to improve matching accuracy and recommendation relevance.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Competitive programming",
    mentions: "LeetCode · DeepML · CodeChef",
    review:
      "1600 rating on LeetCode. Solved 450+ DSA and ML questions across multiple platforms.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Patent — India",
    mentions: "Application 202511047694",
    review:
      "Time Monitoring of Railway Infrastructure and Train Health — co-inventor on filed patent application.",
    imgPath: "/images/client2.png",
  },
  {
    name: "NPTEL",
    mentions: "Apr 2025",
    review:
      "Privacy and security in online social media — certification completed.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Education",
    mentions: "LPU · Punjab",
    review:
      "B.Tech in Computer Science and Engineering — CGPA 7.98 (since Aug 2023). Higher secondary: 66% (Mar 2022); Matriculation: 72% (Mar 2020).",
    imgPath: "/images/client4.png",
  },
  {
    name: "Languages & tools",
    mentions: "From my CV",
    review:
      "Languages: C++, C, Python. Frameworks: Scikit-Learn, Transformers, ML pipelines. Tools: NumPy, FAISS, Google Colab, VS Code.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Soft skills",
    mentions: "How I work",
    review:
      "Problem-solving, critical thinking, and flexibility — applied across coursework, projects, and competitive programming.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/AryanSing833",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/singh-aryan-as09",
  },
  {
    name: "email",
    imgPath: "/images/chat.png",
    link: "mailto:aryan.singh02903@gmail.com",
  },
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    link: "https://www.instagram.com/aryan._.singh.0/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
