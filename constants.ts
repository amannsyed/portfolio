
import { Experience, Education, SkillCategory, Project, Publication } from './types';

export const PERSONAL_INFO = {
  name: "Aman Syed",
  role: "Associate Data Scientist & AI/ML Engineer",
  email: "amansyed3342@gmail.com",
  phone: "+44 7774704102",
  location: "London, UK",
  linkedin: "https://linkedin.com/in/amannsyed",
  github: "https://github.com/amannsyed",
  resumeUrl: "./aman_syed_resume.pdf",
  profileImageUrl: "./aman_profile.jpg", // Update this to your image path
  tagline: "Building production-grade LLM systems and ML pipelines on AWS. Specialising in RAG architectures, multi-agent orchestration, and GPU-accelerated inference.",
  subTagline: "Cut manual analysis time by 95%. Processing millions of articles daily. Deployed across OpenAI, Gemini, and Claude.",
  about: "Associate Data Scientist and AI/ML Engineer with 1.5+ years delivering production-grade LLM systems and ML data pipelines on AWS. I work across the full ML lifecycle — from prompt engineering and model evaluation through to inference optimisation and production serving.\n\nAt Penta Group I've built GPU-accelerated NLP pipelines processing 2–3 million daily articles, deployed RAG architectures with vector database search at sub-500ms latency, and reduced manual transcript analysis time by 95% through multi-agent orchestration. I work across OpenAI, Gemini, and Anthropic Claude.\n\nCore stack: Python · PyTorch · FastAPI · Docker · PostgreSQL · SageMaker",
  footerText: "Specialising in RAG architectures and multi-agent AI systems — building data intelligence tools for complex enterprise challenges."
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Associate Data Scientist",
    company: "Penta Group",
    location: "London",
    period: "Oct 2024 – Present",
    achievements: [
      "Scaled GPU-accelerated NLP pipeline to process 2–3 million daily articles via SQS-driven workers running GLiNER NER and EmbeddingGemma-300m on NVIDIA GPUs; deployed pgvector HNSW-indexed vector database search with daily-partitioned PostgreSQL tables on AWS ECS.",
      "Deployed RAG-powered AI Narrative engine generating sentiment-driven narratives for automated PowerPoint presentations across 16 client-facing modules used in daily briefings; engineered async retrieval using K-Means/HDBSCAN clustering with MMR diversity and Parquet-based embedding caching.",
      "Reduced manual transcript analysis time by 95% (20 hrs → under 5 min) by orchestrating a multi-agent NLP platform processing text, audio, and video inputs via Rev AI speech-to-text and 3-LLM consensus speaker extraction (Gemini/OpenAI/Claude).",
      "Achieved 92% precision in quote extraction via a 3-stage LLM pipeline with composite quality scoring across context, specificity, and clarity.",
      "Improved sentiment model accuracy to 71% weighted F1 on 1,000 human-labeled articles by evaluating 33+ prompt configurations across 6 LLMs and benchmarking Llama 3.1/3.2 fine-tuning vs zero-shot approaches.",
      "Achieved 3x throughput improvement and subsecond latency by deploying BERT-based models as serverless SageMaker inference endpoints with dynamic batching.",
      "Delivered 5x faster file ingestion across all internal tools via chunked-transfer upload system over parallel WebSockets."
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
    title: "Spotify Hit Prediction Model",
    description: "Built an ML model predicting song popularity with 83% accuracy using the Top 200 Spotify Songs dataset. Evaluated multiple classification approaches and formulated recommendations to inform licensing cost strategy.",
    tech: ["Python", "Scikit-learn", "Keras", "NumPy"],
    period: "Sep – Dec 2023"
  },
  {
    title: "Real-Time Sign Language Recognition",
    description: "Built a CNN-based computer vision model interpreting sign language gestures in real-time, enabling instant communication for users without specialist hardware.",
    tech: ["Python", "OpenCV", "Keras", "TensorFlow"],
    period: "Jun – Aug 2021"
  },
  {
    title: "Text Analysis & OCR Web App",
    description: "Full-stack web application for image text extraction using an integrated Tesseract OCR engine — users upload images and receive recognised, structured text output.",
    tech: ["Node.js", "MongoDB", "Express", "Tesseract"],
    period: "Oct 2021 – May 2023"
  },
  {
    title: "Image Segmentation",
    description: "Neural network project segmenting images into semantic classes using cv2 for preprocessing and augmentation.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    period: "Jan – Apr 2022"
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
    skills: ["OpenAI GPT", "Google Gemini", "Anthropic Claude", "RAG", "LLM Fine-tuning", "Prompt Engineering", "HuggingFace Transformers", "Multi-agent Orchestration"]
  },
  {
    title: "ML / NLP",
    skills: ["PyTorch", "SpaCy", "BERT", "GLiNER", "Gensim", "LDA/NMF", "Scikit-learn", "Sentence Embeddings", "Model Evaluation", "Pandas", "NumPy"]
  },
  {
    title: "Cloud (AWS)",
    skills: ["SageMaker", "ECS", "Lambda", "S3", "SQS", "API Gateway", "CloudWatch", "SSM Parameter Store", "ECR"]
  },
  {
    title: "MLOps & DevOps",
    skills: ["Docker", "CI/CD Pipelines", "Inference Optimisation", "Production ML Serving", "Git", "Agile/Scrum"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL (pgvector)", "MySQL", "MongoDB"]
  },
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "R", "Java"]
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
