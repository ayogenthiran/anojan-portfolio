import {
  type LucideIcon,
  Linkedin,
  Github,
  Twitter,
  Code,
  Brain,
  Database,
  Wrench,
  FileText,
  BookText,
  Lightbulb,
  Rocket,
} from "lucide-react" // Added BookText, Lightbulb, Rocket for blog icons

export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
}

export interface Experience {
  title: string
  company: string
  location: string
  dates: string
  description: string[]
  logo?: string
  // tag?: string // Removed tag property
}

export interface Education {
  degree: string
  specialization?: string // Re-added specialization property
  institution: string
  location: string
  dates: string
  gpa?: string // Added gpa
  thesis?: string // Added thesis
  // awards?: string[] // Removed awards
  logo?: string
}

export interface Project {
  title: string
  description: string
  techStack: string[]
  image: string
  githubLink: string
  demoLink?: string
  date?: string // Added date property for list format
}

export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  icon: LucideIcon
}

export interface SkillCategory {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/anojan-yogenthiran/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/ayogenthiran", icon: Github },
  { name: "X", url: "https://x.com/ayogenth", icon: Twitter },
  { name: "Resume", url: "/Anojan_Yogenthiran_Resume.pdf", icon: FileText }, // Added Resume link
]

export const educationData: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    specialization: "Artificial Intelligence", // Added specialization
    institution: "Western University",
    location: "London, Ontario",
    dates: "Sep 2023 – Dec 2024",
    gpa: "3.8/4.0", // Added GPA
    thesis: "Generative AI-Driven Aptamer Discovery for Accelerated Drug Development", // Added thesis
    // awards: ["Dean's List", "Graduate Research Scholarship"], // Removed awards
    logo: "/uwo.png",
  },
  {
    degree: "Bachelor of Science (Honours) in Electrical and Electronic Engineering",
    // specialization: "Signal Processing & Control Systems", // Removed specialization
    institution: "Sri Lanka Institute of Information Technology",
    location: "Colombo, Sri Lanka",
    dates: "Jan 2018 – Dec 2021",
    // gpa: "3.8/4.0", // Removed GPA
    logo: "/sliit.png",
  },
]

export const experienceData: Experience[] = [
  {
    title: "Data Science and Engineering Intern",
    company: "Kaidu.ai",
    location: "Toronto, Ontario",
    dates: "Jan 2025 – Apr 2025",
    logo: "/kaidu.png",
    description: [
      "Used DBSCAN clustering and dynamic time warping on RSSI signals to classify device mobility with 89% accuracy, analyzing thousands of time-series samples.",
      "Reduced false positives by 600% by integrating a dynamic Fourier smoothing filter into RSSI preprocessing.",
      "Delivered an end-to-end ML pipeline by containerizing FastAPI services with Docker, enabling real-time motion classification and boosting IoT system responsiveness by 40%; monitored model outputs using Grafana dashboards.",
    ],
  },
  {
    title: "Research Associate",
    company: "Intelligence Data Science Lab, Western University",
    location: "London, Ontario",
    dates: "Apr 2024 – Dec 2024",
    logo: "/uwo.png",
    description: [
      "Fine-tuned a DeepSELEX-inspired CNN using PyTorch on large-scale SELEX datasets, improving DNA-binding sequence classification accuracy by 20% over lab benchmarks.",
      "Enhanced miRNA-target gene prediction by fine-tuning LLaMA 3.1 and Mistral-7B models for biological sequence representation, expanding generative AI applications in bioinformatics research.",
      "Designed a modular bioinformatics pipeline with Apache Airflow and Kafka to automate HT-SELEX DNA sequence processing; designed plugin-based architecture to support scalable and extensible data science workflows.",
      "Researched generative models using Variational Autoencoders (VAEs) and LLMs to model sequence distributions and generate novel DNA candidates from early-stage SELEX rounds.",
    ],
  },
  {
    title: "Associate AI/ML Engineer",
    company: "HeHealth",
    location: "Singapore", // Updated location
    dates: "Oct 2022 – Oct 2023",
    logo: "/hehealth.png",
    description: [
      "Optimized ResNet and VGG16 CNN models on a proprietary medical imaging dataset, achieving 96% classification accuracy for STD detection; deployed models using AWS SageMaker.",
      "Built CI/CD-enabled MLOps pipelines using GitHub Actions and SageMaker Pipelines to support online batch retraining, mitigating model drift and enabling continuous learning from live diagnostic feedback.",
      "Augmented dataset by 40% using SinGAN and ConSinGAN to synthetically generate minority-class STD images, improving model robustness and generalization on underrepresented conditions.",
      "Applied Grad-CAM to visualize and localize diagnostic features in patient images; integrated interpretability outputs into clinical dashboard to enhance transparency and patient trust.",
    ],
  },
  {
    title: "Associate ML Engineer",
    company: "SenzMate AIoT Intelligence",
    location: "Colombo, Sri Lanka",
    dates: "Dec 2021 – Sep 2022",
    logo: "/senzmate.png",
    description: [
      "Developed and deployed an LSTM-based anomaly detector using TensorFlow and Flask API for edge IoT devices, achieving 90% detection accuracy and reducing false alerts by 10% in real-time monitoring.",
      "Built scalable ETL pipelines with PySpark and Dask to clean and unify 15M+ insurance claims records, improving data consistency and supporting accurate cost predictions.",
      "Preprocessed unstructured insurance text using NLTK (tokenization, stemming, regex), increasing data quality and boosting performance of car repair cost prediction models.",
    ],
  },
]

export const projectData: Project[] = [
  {
    title: "Neural Network from Scratch",
    description:
      "Built a complete neural network library in Python without using any ML frameworks, implementing backpropagation, various optimizers, and regularization techniques.",
    techStack: ["Python", "NumPy", "Matplotlib"],
    image: "/placeholder.svg?height=120&width=120",
    githubLink: "https://github.com/ayogenthiran/neural-network-from-scratch",
    demoLink: "https://ayogenthiran.github.io/nn-scratch-demo", // Placeholder
    date: "August 2024",
  },
  {
    title: "Transformer for Language Translation",
    description:
      "Implemented the Transformer architecture for English-French translation, achieving competitive BLEU scores on standard benchmarks.",
    techStack: ["PyTorch", "Transformers", "CUDA"],
    image: "/placeholder.svg?height=120&width=120",
    githubLink: "https://github.com/ayogenthiran/transformer-translation",
    demoLink: "https://ayogenthiran.github.io/transformer-demo", // Placeholder
    date: "July 2024",
  },
  {
    title: "End-to-End MLOps Pipeline",
    description:
      "Designed and implemented a complete MLOps pipeline with automated training, testing, and deployment using cloud-native technologies.",
    techStack: ["AWS", "Docker", "Kubernetes", "MLflow"],
    image: "/placeholder.svg?height=120&width=120",
    githubLink: "https://github.com/ayogenthiran/mlops-pipeline",
    demoLink: "https://ayogenthiran.github.io/mlops-demo", // Placeholder
    date: "June 2024",
  },
  {
    title: "CiteRight – Literature Review Assistant",
    description:
      "Built a GPT-4-powered RAG pipeline integrating arXiv API to auto-generate literature reviews from user-defined inputs, reducing research time by 70%. Applied prompt engineering and integrated semantic keyword extraction, document retrieval, and summarization modules.",
    techStack: ["GPT-4", "RAG", "arXiv API", "Python", "Prompt Engineering"],
    image: "/placeholder.svg?height=120&width=120",
    githubLink: "https://github.com/ayogenthiran/citeright",
    demoLink: "https://ayogenthiran.github.io/citeright-demo", // Placeholder
    date: "May 2024",
  },
  {
    title: "Calculator Agent",
    description:
      "Developed an LLM-powered calculator using an orchestrator to route between Stepwise and Reducing agents, leveraging GPT-4/O4-mini with custom prompts for step-by-step problem solving. Built a resilient Python backend with YAML-based tool configuration and multi-agent error handling for robust problem-solving.",
    techStack: ["LLM", "GPT-4/O4-mini", "Python", "Multi-agent systems"],
    image: "/placeholder.svg?height=120&width=120",
    githubLink: "https://github.com/ayogenthiran/calculator-agent",
    date: "April 2024",
  },
  // Add more projects as needed
]

export const blogData: BlogPost[] = [
  {
    title: "Demystifying the Transformer Architecture",
    date: "July 8, 2025",
    excerpt:
      "A deep dive into the revolutionary Transformer architecture, explaining its core components like self-attention and positional encoding, and its impact on modern NLP.",
    link: "#", // Placeholder link
    readingTime: "7 min read",
    icon: BookText, // Example icon
  },
  {
    title: "MLOps Best Practices for Scalable AI Systems",
    date: "June 20, 2025",
    excerpt:
      "Exploring key MLOps principles including CI/CD for ML, model monitoring, and data versioning to build robust and scalable AI solutions.",
    link: "#", // Placeholder link
    readingTime: "10 min read",
    icon: Lightbulb, // Example icon
  },
  {
    title: "Reinforcement Learning: From Basics to Advanced Concepts",
    date: "May 15, 2025",
    excerpt:
      "An introductory guide to reinforcement learning, covering fundamental concepts like agents, environments, rewards, and popular algorithms like Q-learning and policy gradients.",
    link: "#", // Placeholder link
    readingTime: "12 min read",
    icon: Rocket, // Example icon
  },
  {
    title: "Every Interview Ever in Chronological Order",
    date: "March 31, 2025",
    excerpt: "A chronological account of every interview experience, detailing lessons learned and insights gained.",
    link: "#",
    readingTime: "5 min read",
    icon: FileText, // Example icon
  },
]

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "SQL", "C++", "Java", "MATLAB"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      "LLM Fine-tuning (LoRA, QLoRA)",
      "RAG",
      "Prompt Engineering",
      "CNNs",
      "LSTMs",
      "GANs",
      "NLP",
      "XAI",
      "Statistical Modeling",
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: Database,
    skills: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "OpenAI API",
      "NLTK",
      "Dask",
      "PySpark",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Docker",
      "Kubernetes",
      "FastAPI",
      "Flask",
      "Streamlit",
      "Apache Airflow",
      "Kafka",
      "Git",
      "CI/CD (GitHub Actions)",
      "DVC",
      "MLflow",
      "Databricks",
      "AWS",
      "Azure",
      "SageMaker",
      "Vector Databases",
      "Grafana",
      "PowerBI",
      "Tableau",
      "React",
      "Next.js",
      "Node.js",
    ],
  },
]
