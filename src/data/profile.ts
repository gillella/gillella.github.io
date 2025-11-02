export const profile = {
  name: 'Arvinda Gillella',
  title: 'AI Engineer & Entrepreneur',
  tagline: 'Building the future of Agentic AI systems with real-time voice interfaces',
  location: 'Atlanta Metropolitan Area',
  bio: 'Founder at Anguliyam AI, specializing in agentic AI consulting, voice agents, and cloud modernization. Google Cloud Architect certified with a passion for building AI systems that solve real-world problems.',
  email: 'arvinda@anguliyam.ai',
  linkedin: 'https://www.linkedin.com/in/arvinda-gillella/',
  github: 'https://github.com/gillella',
  birthday: 'January 20',
}

export const experience = [
  {
    company: 'Anguliyam AI',
    role: 'Founder & CEO',
    period: '2024 - Present',
    location: 'Atlanta, GA',
    description: 'Leading the development of agentic AI systems with real-time voice interfaces, orchestration, and enterprise safeguards. Building AI solutions for regulated industries.',
    highlights: [
      'Launched 42+ agent programs across finance, healthcare, and supply chain',
      'Achieved 180ms median voice agent latency with Athena Voice Core',
      'Mapped 12 compliance frameworks for regulated deployments',
      'Designed three-layer Agent Stack (Strategy, Build, Operate)',
    ],
  },
  {
    company: 'Hyniva',
    role: 'AI Developer',
    period: '2024',
    location: 'Remote',
    description: 'Developed AI applications using cutting-edge technologies including Model Context Protocol (MCP) servers and advanced LLM integrations.',
    highlights: [
      'Built MCP-based AI applications during Vibe Coding sessions',
      'Implemented advanced RAG (Retrieval Augmented Generation) systems',
      'Worked with Google Cloud Platform for AI deployments',
    ],
  },
]

export const education = [
  {
    institution: 'Jawaharlal Nehru Technological University',
    degree: "Bachelor's Degree",
    field: 'Computer Science & Engineering',
    period: '1992 - 1996',
    location: 'India',
  },
]

export const certifications = [
  {
    name: 'Google Professional Cloud Architect',
    issuer: 'Google Cloud',
    year: '2024',
    icon: '🎓',
  },
  {
    name: 'Microsoft Fabric Data Warehouse',
    issuer: 'Microsoft',
    year: '2024',
    icon: '📊',
  },
]

export const skills = {
  'AI & Machine Learning': [
    'LLMs & Generative AI',
    'Agentic AI Systems',
    'Voice Agents (Real-time)',
    'RAG (Retrieval Augmented Generation)',
    'Model Context Protocol (MCP)',
    'Fine-tuning (LLaMA, GPT)',
    'AI Safety & Governance',
  ],
  'Cloud & Infrastructure': [
    'Google Cloud Platform',
    'AWS',
    'Microsoft Azure',
    'Kubernetes',
    'Docker',
    'MLOps',
  ],
  'Development': [
    'Next.js & React',
    'TypeScript',
    'Python',
    'Node.js',
    'SwiftUI (iOS)',
    'WebSocket & Real-time',
  ],
  'Specialized': [
    'Telugu Language Processing',
    'Speech-to-Text',
    'Text-to-Speech',
    'Natural Language Processing',
    'Enterprise AI Governance',
  ],
}

export const projects = [
  {
    id: 'anguliyam',
    title: 'Anguliyam AI',
    tagline: 'Agentic AI Consulting & Voice Agents',
    description: 'Enterprise AI consulting firm specializing in agentic AI systems with real-time voice interfaces, orchestration, and governance frameworks for regulated industries.',
    tech: ['Next.js', 'Google Cloud', 'WebSocket', 'OpenAI', 'Voice AI'],
    highlights: [
      '42+ agent programs deployed',
      '180ms voice latency achieved',
      '12 compliance frameworks mapped',
    ],
    link: 'https://anguliyam.ai',
    github: 'https://github.com/gillella/anguliyam-website',
    category: 'Enterprise',
    featured: true,
  },
  {
    id: 'agentaru',
    title: 'agentAru',
    tagline: 'Local AI Agent with Ollama & MCP',
    description: 'Privacy-first, fully offline AI assistant powered by Ollama LLM with Model Context Protocol integration and semantic memory. Built for developers who value privacy.',
    tech: ['Python', 'Ollama', 'MCP', 'Semantic Memory', 'ChromaDB'],
    highlights: [
      '100% offline & privacy-focused',
      'MCP tool integration',
      'Semantic memory system',
    ],
    link: null,
    github: 'https://github.com/gillella/agentAru',
    category: 'AI Agent',
    featured: true,
  },
  {
    id: 'arutraderbuddy',
    title: 'AruTraderBuddy',
    tagline: 'AI-Powered Trading Assistant',
    description: 'Intelligent trading assistant focusing on swing trading with multi-week timeframes. Combines automated signals with educational components for informed trading decisions.',
    tech: ['Python', 'AI/ML', 'Trading APIs', 'Data Analysis'],
    highlights: [
      'Multi-week swing trading focus',
      'Automated signal generation',
      'Educational trading insights',
    ],
    link: null,
    github: 'https://github.com/gillella/AruTraderBuddy',
    category: 'FinTech',
    featured: true,
  },
  {
    id: 'telugu-llm',
    title: 'Telugu-learning-LLM',
    tagline: 'LLaMA 3 Fine-tuned for Telugu',
    description: 'Fine-tuned LLaMA 3 (8B) model for Telugu language understanding and poetry generation. Preserving cultural heritage through AI.',
    tech: ['Python', 'LLaMA 3', 'PyTorch', 'Transformers', 'Telugu NLP'],
    highlights: [
      'LLaMA 3 8B fine-tuning',
      'Telugu poetry generation',
      'Cultural preservation',
    ],
    link: null,
    github: 'https://github.com/gillella/Telugu-learning-LLM',
    category: 'Cultural AI',
    featured: true,
  },
  {
    id: 'lahiri-fitness',
    title: 'LahiriFitnessApp',
    tagline: 'AI-Powered Fitness Coaching',
    description: 'Next-generation AI-powered fitness coaching app built with SwiftUI. Features workout programs, meal planning, messaging, scheduling, and comprehensive analytics.',
    tech: ['SwiftUI', 'iOS', 'AI/ML', 'HealthKit', 'Core Data'],
    highlights: [
      'AI-powered coaching',
      'Personalized meal plans',
      'Progress tracking & analytics',
    ],
    link: null,
    github: 'https://github.com/gillella/LahiriFitnessApp',
    category: 'Health Tech',
    featured: false,
  },
  {
    id: 'arulifts',
    title: 'AruLifts',
    tagline: 'Personal Workout Tracker',
    description: 'iOS workout tracking app with custom workout builder, 50+ exercise library, and comprehensive progress tracking. Built with SwiftUI.',
    tech: ['SwiftUI', 'iOS', 'Core Data', 'HealthKit'],
    highlights: [
      '50+ exercise library',
      'Custom workout builder',
      'Progress visualization',
    ],
    link: null,
    github: 'https://github.com/gillella/AruLifts',
    category: 'Health Tech',
    featured: false,
  },
]

export const articles = [
  {
    title: 'The Future of AI Application Development (Model Context Protocol)',
    excerpt: 'While working with MCP servers during Vibe Coding sessions, I discovered how Model Context Protocol is revolutionizing AI application development...',
    date: '2024',
    readTime: '5 min read',
    tags: ['AI', 'MCP', 'Development'],
  },
  {
    title: 'AGI: Always Six Months Away?',
    excerpt: 'AGI has long been the holy grail of AI, yet it remains perpetually "six months away?" Despite rapid advancements, AI still faces fundamental challenges...',
    date: '2024',
    readTime: '4 min read',
    tags: ['AI', 'AGI', 'Future'],
  },
]

export const social = {
  github: 'https://github.com/gillella',
  linkedin: 'https://www.linkedin.com/in/arvinda-gillella/',
  email: 'arvinda@anguliyam.ai',
  twitter: null,
}

