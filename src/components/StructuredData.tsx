import { profile, experience, projects } from '@/data/profile'

/**
 * Structured Data Component
 * Adds Schema.org JSON-LD markup for better SEO and LLM/AI agent accessibility
 */
export function StructuredData() {
  // Person Schema
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.bio,
    url: 'https://gillella.github.io',
    sameAs: [
      profile.linkedin,
      profile.github,
      'https://www.anguliyam.com'
    ],
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      addressCountry: 'US'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Large Language Models',
      'Machine Learning',
      'Cloud Architecture',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'Amazon Bedrock',
      'Google Vertex AI',
      'RAG (Retrieval Augmented Generation)',
      'Agentic Solutions',
      'MLOps',
      'LLMOps'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Anguliyam AI',
      url: 'https://www.anguliyam.com',
      description: 'AI-Native Transformation Platform'
    }
  }

  // Organization Schema for Anguliyam AI
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Anguliyam AI',
    url: 'https://www.anguliyam.com',
    founder: {
      '@type': 'Person',
      name: profile.name
    },
    description: 'Leading AI consulting firm specializing in LLM applications, RAG solutions, and agentic systems.',
    knowsAbout: [
      'AI-native transformations',
      'LLM Applications',
      'Advanced RAG',
      'Agentic Solutions',
      'Cognitive Automation'
    ]
  }

  // Profile Page Schema
  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@id': '#person'
    },
    name: `${profile.name} - ${profile.title}`,
    description: profile.bio,
    url: 'https://gillella.github.io'
  }

  // Work Experience as ItemList
  const workExperienceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Professional Experience',
    numberOfItems: experience.length,
    itemListElement: experience.map((exp, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'EmployeeRole',
        roleName: exp.role,
        worksFor: {
          '@type': 'Organization',
          name: exp.company
        },
        description: exp.description,
        startDate: exp.period.split('-')[0].trim(),
        location: exp.location
      }
    }))
  }

  // Projects as CreativeWork
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Featured Projects',
    numberOfItems: projects.filter(p => p.featured).length,
    itemListElement: projects.filter(p => p.featured).map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.title,
        description: project.description,
        codeRepository: project.github,
        url: project.link || project.github,
        programmingLanguage: project.tech,
        author: {
          '@type': 'Person',
          name: profile.name
        },
        keywords: project.tech.join(', ')
      }
    }))
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Who is ${profile.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: profile.bio
        }
      },
      {
        '@type': 'Question',
        name: 'What does Arvinda specialize in?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Arvinda specializes in AI-native transformations, Large Language Models (LLMs), agentic solutions, and cloud architecture with 27+ years of experience in AI/ML, RAG, cloud platforms (AWS, GCP), distributed systems, and real-time data streaming.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is Anguliyam AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Anguliyam AI is an AI consulting firm focused on AI-native transformations, specializing in LLM applications, RAG solutions, and agentic systems using frameworks like LangChain, LangGraph, and CrewAI on platforms like Amazon Bedrock and Google Vertex AI.'
        }
      },
      {
        '@type': 'Question',
        name: 'How can I contact Arvinda Gillella?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Email: ${profile.email}, LinkedIn: ${profile.linkedin}, GitHub: ${profile.github}, Website: https://gillella.github.io`
        }
      }
    ]
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://gillella.github.io'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://gillella.github.io#about'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Experience',
        item: 'https://gillella.github.io#experience'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Projects',
        item: 'https://gillella.github.io#projects'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Contact',
        item: 'https://gillella.github.io#contact'
      }
    ]
  }

  // Combine all schemas
  const allSchemas = [
    personSchema,
    organizationSchema,
    profilePageSchema,
    workExperienceSchema,
    projectsSchema,
    faqSchema,
    breadcrumbSchema
  ]

  return (
    <>
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  )
}

