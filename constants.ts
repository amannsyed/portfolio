
import { Experience, Education, SkillCategory, Project, Publication } from './types';

export const PERSONAL_INFO = {
  name: "Aman Syed",
  role: "AI/ML Engineer & Data Scientist",
  email: "amansyed3342@gmail.com",
  phone: "+44 7774704102",
  location: "London, UK",
  linkedin: "https://linkedin.com/in/amannsyed",
  github: "https://github.com/amannsyed",
  resumeUrl: "./aman_syed_resume.pdf",
  profileImageUrl: "./aman_profile.jpg",
  tagline: "Building production-grade AI platforms and ML pipelines on AWS. Specialising in hybrid search, RAG architectures, multi-agent orchestration, and GPU-accelerated inference.",
  subTagline: "Shipped 15+ production AI endpoints. Processing millions of articles daily. Deployed across OpenAI, Gemini, Claude, and Vertex AI.",
  about: "**AI/ML Engineer and Data Scientist** with **2+ years** delivering production-grade LLM systems, ML data pipelines, and analyst tooling on AWS. I work across the full ML lifecycle — system design, context engineering, prompt engineering, model evaluation, inference optimisation, and production serving.\n\nAt Penta Group I've built **Penta Brain** — a hybrid AI search and conversational intelligence platform combining pgvector semantic retrieval, PostgreSQL full-text search, NER entity search, and SSE-streamed chat with citation grounding. I've also shipped a **Synthetic Stakeholders** simulation platform, a **15-endpoint AI Insights Narrative** API, GPU-accelerated NLP pipelines processing **2–3 million daily articles**, and analyst tooling deployed across OpenAI, Gemini, Claude, and Vertex AI.",
  coreStack: ["Python", "PyTorch", "FastAPI", "PostgreSQL/pgvector", "Docker", "SageMaker", "Vertex AI"],
  footerText: "Specialising in hybrid search, RAG architectures, and production AI platforms — building intelligence tools for enterprise data challenges."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "AI/ML Engineer & Data Scientist",
    company: "Penta Group",
    location: "London",
    period: "Oct 2024 – Present",
    achievements: [
      "Built Penta Brain — a hybrid AI search and conversational intelligence service combining pgvector semantic search (Vertex AI EmbeddingGemma-300m, 768-dim HNSW), PostgreSQL full-text search, and GLiNER NER entity retrieval with Reciprocal Rank Fusion; added SSE-streamed chat with citation grounding, adaptive LLM routing, two-tier semantic cache (0.95 threshold, 1-hour TTL), and JWT/rate-limited FastAPI serving 15 routes.",
      "Built MCP server exposing 5 AI-client tools (hybrid search, vector search, full-text search, entity search, RAG Q&A) over SSE with JWT authentication, enabling external AI agents to query the article knowledge base with cited answers.",
      "Scaled GPU-accelerated NLP pipeline to process 2–3 million daily articles via SQS-driven workers running GLiNER NER (urchade/gliner_multi-v2.1) and EmbeddingGemma-300m on NVIDIA GPUs; 30-day SHA256 content deduplication, HNSW-indexed pgvector tables with daily partitions on AWS ECS.",
      "Built a Synthetic Stakeholders AI platform for persona simulation, artifact-grounded conversations, multi-persona debates, semantic search, and belief-state learning; 18 FastAPI routes, OpenAI Responses API streaming, 1,536-dim pgvector memory, and ECS task orchestration.",
      "Built a 15-endpoint Insights AI Narrative FastAPI platform generating source-linked, clustered LLM narratives for media intelligence cards; async embeddings with 500 in-flight tasks, KMeans/DBSCAN/MMR evidence selection, provider fallback, and 1,245 pytest integration tests.",
      "Deployed RAG-powered AI Narrative engine generating sentiment-driven narratives for automated PowerPoint presentations across 16 client-facing modules; engineered async retrieval using K-Means/HDBSCAN clustering with MMR diversity and Parquet-based embedding caching.",
      "Reduced manual transcript analysis time by 95% (20 hrs → under 5 min) by orchestrating a multi-agent NLP platform processing text, audio, and video via Rev AI speech-to-text and 3-LLM consensus speaker extraction (Gemini/OpenAI/Claude); 3-stage quote pipeline achieving 92% precision.",
      "Built a Dockerized storyline identification API using GPT-4o extraction, OpenAI text-embedding-3-large, UMAP, and HDBSCAN to cluster and refine narratives from up to 10,000 articles; deployed with Flask/Gunicorn on SageMaker-compatible endpoints.",
      "Built Voila-based analyst tooling including CI Whats Next V2 (NMF/LDA topic modelling, Gemini labelling, Plotly network/trend charts, Excel export) and Cross-Channel Influencer Identification (spaCy NER, alias normalisation, LDA/NMF, Gemini 2.5 stakeholder segmentation).",
      "Improved sentiment model accuracy to 71% weighted F1 on 1,000 human-labeled articles by evaluating 33+ prompt configurations across 6 LLMs; built AI monitoring pipeline with F1/drift alerting (SES), persisting 24 metrics to PostgreSQL and S3.",
      "Automated client newsletter curation via summarisation pipeline processing 2,000+ articles per portfolio using multi-provider LLM architecture (GPT-4/5, Gemini 2.5, Claude) with prompt optimisation framework and multi-model A/B testing.",
      "Achieved 3x throughput and subsecond latency by deploying BERT-based models as serverless SageMaker inference endpoints with dynamic batching; delivered 5x faster file ingestion via chunked-transfer uploads over parallel WebSockets."
    ]
  },
  {
    role: "Financial Research Assistant",
    company: "University of Edinburgh Business School",
    location: "Edinburgh",
    period: "Sep – Oct 2024",
    achievements: [
      "Built Python data pipeline using Refinitiv API to collect financial data across 500+ U.S. companies spanning 3 fiscal years, automating extraction previously done manually.",
      "Compiled earnings call transcripts and built a structured dataset for sentiment analysis of corporate environmental disclosures."
    ]
  },
  {
    role: "Data Engineer Intern",
    company: "C.H. Robinson",
    location: "Mumbai",
    period: "Dec 2022 – Aug 2023",
    achievements: [
      "Designed serverless AWS data pipeline (Lambda, S3, API Gateway) processing 100K daily API records.",
      "Automated workflows using Selenium and Python, saving 90+ monthly engineering hours and doubling data capture capacity.",
      "Optimised 200+ AWS Lambda functions through SQL query tuning, improving processing efficiency by 40%.",
      "Automated daily client report generation, increasing output to 20+ reports daily."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Finance Flow",
    description: "Full-stack personal finance suite with a React 19 dashboard featuring analytics, budgets, dark mode, and Google Sheets sync. Backend auto-detects 6 UK bank CSV formats and provides live exchange rate conversion.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Vite"],
    period: "2024 – Present",
    github: "https://github.com/amannsyed/finance-flow",
    liveUrl: "https://amannsyed.github.io/finance-flow/"
  },
  {
    title: "Bank CSV Conversion API",
    description: "FastAPI microservice using the Strategy Pattern to auto-detect and normalise bank statements from Amex, Revolut, Monzo, Starling, and Bank of Scotland into a unified schema. Proxies Google Sheets CRUD and Frankfurter exchange rates.",
    tech: ["Python", "FastAPI", "Google Sheets API", "Render"],
    period: "2024 – Present",
    github: "https://github.com/amannsyed/convert_transaction"
  },
  {
    title: "Knock Knock Physio",
    description: "Production business website for a mobile physiotherapy practice — featuring online appointment booking, WhatsApp integration, transparent pricing plans, patient testimonials, and a protected admin dashboard.",
    tech: ["React", "TypeScript", "Vite", "GitHub Pages"],
    period: "2024",
    github: "https://github.com/amannsyed/knock-knock-physio",
    liveUrl: "https://knockknockphysio.co.uk/"
  },
  {
    title: "AI Job Application Assistant",
    description: "Intelligent job application assistant using Gemini AI for resume enhancement, interview preparation, and application optimisation — with PDF and DOCX document processing.",
    tech: ["React", "TypeScript", "Google Gemini API", "pdfjs-dist", "mammoth"],
    period: "2024",
    github: "https://github.com/amannsyed/ai-job-application-assistant",
    liveUrl: "https://amannsyed.github.io/ai-job-application-assistant/"
  },
  {
    title: "AI Code Reviewer",
    description: "AI-powered code review tool leveraging Google Gemini to detect bugs, assess code quality, and suggest optimisations with real-time feedback and syntax highlighting.",
    tech: ["React", "TypeScript", "Google Gemini API", "Vite"],
    period: "2024",
    github: "https://github.com/amannsyed/ai-code-reviewer",
    liveUrl: "https://amannsyed.github.io/ai-code-reviewer/"
  },
  {
    title: "GCP Drive Manager",
    description: "Zero-backend Google Drive manager using the browser's Web Crypto API to sign JWTs client-side for OAuth authentication. Browse, search, and manage Drive file permissions entirely in-browser.",
    tech: ["React", "TypeScript", "Web Crypto API", "Google Drive API"],
    period: "2024",
    github: "https://github.com/amannsyed/gcp-drive",
    liveUrl: "https://amannsyed.github.io/gcp-drive/"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Text Recognition from Image",
    authors: "Aman S, Aditi V, Khushi T, Safa U",
    journal: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
    date: "Nov 2022"
  },
  {
    title: "Effective Construction Site Monitoring using AI",
    authors: "Aman S, Yash S, Khushi B",
    journal: "Global Research Institute of Technology and Engineering",
    date: "Dec 2022"
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "MSc Statistics with Data Science",
    institution: "The University of Edinburgh",
    location: "Edinburgh",
    grade: "",
    courses: ["Applied Machine Learning", "Cloud Programming", "Advanced Database Systems", "Bayesian Data Analysis", "Statistical Programming in R"]
  },
  {
    degree: "BEng Computer Engineering",
    institution: "University of Mumbai",
    location: "Mumbai",
    grade: "9.83/10 CGPA",
    courses: ["Machine Learning", "NLP", "Data Structures & Algorithms", "Intelligent Systems", "Software Process Automation"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LLMs & Generative AI",
    skills: ["OpenAI GPT-4/4.1", "Google Gemini 2.5", "Anthropic Claude", "Vertex AI", "RAG", "LLM Fine-tuning", "Prompt Engineering", "HuggingFace Transformers", "Multi-agent Orchestration", "MCP Server"]
  },
  {
    title: "ML / NLP",
    skills: ["PyTorch", "SentenceTransformers", "GLiNER", "SpaCy", "BERT", "Gensim", "LDA/NMF", "UMAP", "HDBSCAN", "Scikit-learn", "Sentence Embeddings", "Model Evaluation", "Pandas", "NumPy"]
  },
  {
    title: "Search & Databases",
    skills: ["PostgreSQL (pgvector)", "HNSW Indexes", "Reciprocal Rank Fusion", "Full-text Search (tsvector)", "NER Entity Search", "MySQL", "MongoDB", "SQLAlchemy", "Parquet/pyarrow"]
  },
  {
    title: "Cloud (AWS) & Deployment",
    skills: ["SageMaker", "ECS", "Lambda", "S3", "SQS", "API Gateway", "CloudWatch", "SSM Parameter Store", "ECR", "CodeBuild", "CodePipeline", "Vertex AI Agent Engine"]
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Flask", "Pydantic", "SSE Streaming", "NDJSON Streaming", "REST APIs", "Docker", "Docker Compose", "Poetry", "pytest", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Frontend & Web",
    skills: ["React 19", "TypeScript", "Vite", "TailwindCSS", "Recharts", "Framer Motion", "Voila", "ipywidgets", "Plotly"]
  },
  {
    title: "Languages",
    skills: ["Python", "SQL", "TypeScript", "JavaScript", "R", "Java"]
  }
];

export const CERTIFICATIONS = [
  "Architecting with Google Compute Engine Specialization — Google Cloud",
  "Machine Learning Foundations: A Case Study Approach — University of Washington"
];

export const VOLUNTEERING = [
  "Technical Advisor, Student Council (TSDW) - TCET Mumbai",
  "Treasurer & Technical Head, CSI-TCET Student Chapter",
  "Extended Core Member (Graphic Design), GDSC TCET",
  "Volunteer Member, Rotaract Club",
  "Volunteer, We Can We Will Foundation"
];
