/**
 * Engineering Stack & Technical Capabilities Data
 * Strictly constrained to verified production technologies:
 * HTML, CSS, JavaScript, React.js, Vite, Node.js, Express.js, REST APIs, MongoDB, Python, C, Git, GitHub, VS Code, Postman, Vercel.
 */

export const engineeringCategories = {
  frontend: {
    number: '01',
    category: 'Frontend',
    title: 'FRONTEND ARCHITECTURE',
    subtitle: 'Reactive Interfaces & Build Tooling',
    tag: 'Core Domain',
    primary: {
      name: 'React.js',
      role: 'Flagship UI Engine',
      desc: 'Component architecture, custom hooks, reactive state workflows, and virtual DOM optimization.',
      highlights: ['Custom Hooks', 'Virtual DOM', 'Modular Components']
    },
    technologies: [
      {
        name: 'JavaScript',
        role: 'Modern ES6+ Runtime',
        desc: 'Asynchronous promises, event loop execution, closures, and DOM manipulation.',
        badge: 'ES6+ Syntax'
      },
      {
        name: 'Vite',
        role: 'Next-Gen Build Engine',
        desc: 'Instant Hot Module Replacement (HMR) and optimized Rollup production bundling.',
        badge: 'Fast Bundling'
      },
      {
        name: 'HTML',
        role: 'Semantic Document Structure',
        desc: 'Semantic HTML5 markup, accessibility primitives (WCAG), and clean document standards.',
        badge: 'Web Standards'
      },
      {
        name: 'CSS',
        role: 'Responsive Layouts & Styling',
        desc: 'Modern CSS Grid, Flexbox, responsive clamp() scales, and vanilla design systems.',
        badge: 'Modern Layout'
      }
    ]
  },

  backend: {
    number: '02',
    category: 'Backend',
    title: 'BACKEND SERVICES',
    subtitle: 'Server Runtimes & API Protocols',
    tag: 'Server & APIs',
    technologies: [
      {
        name: 'Node.js',
        role: 'Event-Driven Runtime',
        desc: 'Non-blocking I/O event loop execution, module architecture, and scalable microservices.',
        badge: 'Asynchronous I/O'
      },
      {
        name: 'Express.js',
        role: 'REST Controller Framework',
        desc: 'Middleware pipelines, REST route controllers, error handling, and JSON serialization.',
        badge: 'Middleware Engine'
      },
      {
        name: 'REST APIs',
        role: 'Stateless Service Contracts',
        desc: 'Stateless HTTP protocol design, status codes, query pagination, and secure payloads.',
        badge: 'HTTP Architecture'
      }
    ],
    status: 'CORS-Secured • Authenticated Routes • JSON Serialized'
  },

  database: {
    number: '03',
    category: 'Database',
    title: 'DATABASE',
    subtitle: 'Document Modeling & Schemas',
    tag: 'Persistence',
    technologies: [
      {
        name: 'MongoDB',
        role: 'Document NoSQL Database',
        desc: 'Schema definitions, aggregation pipelines, document indexing, and cloud Atlas database clusters.',
        facets: ['BSON Document Collections', 'Aggregation Pipelines', 'Compound Indexing'],
        badge: 'Document Store'
      }
    ],
    status: 'Atlas Cloud Ready • Schema Validations'
  },

  programming: {
    number: '04',
    category: 'Programming',
    title: 'PROGRAMMING',
    subtitle: 'Algorithmic & Procedural Core',
    tag: 'Computation',
    technologies: [
      {
        name: 'Python',
        role: 'Scripting & Algorithmic Logic',
        desc: 'Algorithmic problem solving, automated workflow scripts, and structured backend utilities.',
        badge: 'Data Structures'
      },
      {
        name: 'C',
        role: 'Procedural Systems Core',
        desc: 'Procedural systems programming, memory pointer manipulation, and computational efficiency.',
        badge: 'Low-Level Rigor'
      }
    ],
    status: 'Algorithmic Rigor • Memory & Complexity Analysis'
  },

  tools: {
    number: '05',
    category: 'Tools',
    title: 'TOOLS & WORKFLOW',
    subtitle: 'Toolchain, Testing & Cloud Edge',
    tag: 'DevOps & Tooling',
    technologies: [
      {
        name: 'Git',
        role: 'Distributed VCS',
        desc: 'Branching strategies, atomic commits, and merge conflict resolution.',
        badge: 'Version Control'
      },
      {
        name: 'GitHub',
        role: 'Code Collaboration',
        desc: 'Remote repositories, pull request reviews, and project collaboration.',
        badge: 'Code Review'
      },
      {
        name: 'VS Code',
        role: 'Developer IDE',
        desc: 'Configured development environment, debugging tools, and workspace extensions.',
        badge: 'Primary Editor'
      },
      {
        name: 'Postman',
        role: 'API Integration Testing',
        desc: 'Endpoint debugging, header inspection, and response assertions.',
        badge: 'API Testing'
      },
      {
        name: 'Vercel',
        role: 'Cloud Edge Hosting',
        desc: 'Continuous deployment (CD), global edge routing, and instant preview builds.',
        badge: 'Edge Hosting'
      }
    ],
    pipeline: 'Git Commit → GitHub PR → Postman Verified → Vercel Deployed'
  }
};

/**
 * Backwards compatibility exports
 */
export const engineeringStack = [
  {
    number: '01',
    category: 'FRONTEND',
    subtitle: 'Client Interfaces & Reactive State',
    skills: [
      { name: 'React.js', desc: 'Component architecture, custom hooks, reactive state, and virtual DOM optimization.' },
      { name: 'JavaScript', desc: 'ES6+ modern syntax, asynchronous promises, closures, and DOM manipulation.' },
      { name: 'HTML', desc: 'Semantic HTML markup, accessibility primitives, and clean document structure.' },
      { name: 'CSS', desc: 'Modern CSS Grid, Flexbox, responsive clamp() scales, and vanilla design systems.' },
      { name: 'Vite', desc: 'Next-generation frontend tooling, instant HMR, and optimized production bundling.' }
    ]
  },
  {
    number: '02',
    category: 'BACKEND',
    subtitle: 'Server Logic & API Integration',
    skills: [
      { name: 'Node.js', desc: 'Non-blocking event loop execution, module architecture, and runtime services.' },
      { name: 'Express.js', desc: 'RESTful endpoint routing, custom middleware pipelines, and error handling.' },
      { name: 'REST APIs', desc: 'Stateless HTTP design, status codes, JSON serialization, and pagination.' }
    ]
  },
  {
    number: '03',
    category: 'DATABASE',
    subtitle: 'Document Modeling & Schemas',
    skills: [
      { name: 'MongoDB', desc: 'NoSQL document database, collection modeling, indexing, and aggregations.' }
    ]
  },
  {
    number: '04',
    category: 'PROGRAMMING',
    subtitle: 'Algorithmic & Procedural Foundations',
    skills: [
      { name: 'Python', desc: 'Algorithmic problem solving, automated workflow scripts, and structured backend logic.' },
      { name: 'C', desc: 'Procedural systems programming, memory pointers, and computational algorithm optimization.' }
    ]
  },
  {
    number: '05',
    category: 'TOOLS',
    subtitle: 'Workflow & Developer Tooling',
    skills: [
      { name: 'Git', desc: 'Branching strategies, atomic commits, merge conflict resolution, and version history.' },
      { name: 'GitHub', desc: 'Remote repositories, pull requests, project tracking, and code reviews.' },
      { name: 'VS Code', desc: 'Configured development environment, debugging tools, extensions, and workspace setups.' },
      { name: 'Postman', desc: 'API endpoint testing, header inspection, response mocking, and request collections.' },
      { name: 'Vercel', desc: 'Continuous deployment (CD), global edge hosting, and instant production builds.' }
    ]
  }
];

export const techStripItems = [
  { name: 'React.js', label: 'React.js' },
  { name: 'JavaScript', label: 'JavaScript' },
  { name: 'Node.js', label: 'Node.js' },
  { name: 'Express.js', label: 'Express.js' },
  { name: 'MongoDB', label: 'MongoDB' },
  { name: 'Python', label: 'Python' },
  { name: 'C', label: 'C' },
  { name: 'Git', label: 'Git' },
  { name: 'GitHub', label: 'GitHub' },
  { name: 'VS Code', label: 'VS Code' },
  { name: 'Postman', label: 'Postman' },
  { name: 'Vercel', label: 'Vercel' },
  { name: 'Vite', label: 'Vite' },
  { name: 'HTML', label: 'HTML' },
  { name: 'CSS', label: 'CSS' },
  { name: 'REST APIs', label: 'REST APIs' }
];

export const architectureFlow = [
  {
    step: '01',
    label: 'USER INTERACTION',
    tech: 'Client Browser / Mobile',
    role: 'User Trigger',
    description: 'User interacts with responsive UI triggers, submits forms, or scans QR codes on any device.',
    badge: 'Origin'
  },
  {
    step: '02',
    label: 'FRONTEND INTERFACE',
    tech: 'React',
    role: 'Frontend UI',
    description: 'Validates input state, updates component views, and dispatches asynchronous HTTP payloads.',
    badge: 'Client Tier'
  },
  {
    step: '03',
    label: 'REST API GATEWAY',
    tech: 'REST API',
    role: 'Data communication',
    description: 'Enforces CORS policies, rate limiting, and transmits secure JSON requests with auth headers.',
    badge: 'API Layer'
  },
  {
    step: '04',
    label: 'APPLICATION SERVER',
    tech: 'Node + Express',
    role: 'Backend logic',
    description: 'Executes controller middleware, verifies JWT roles, sanitizes payloads, and runs business rules.',
    badge: 'Server Tier'
  },
  {
    step: '05',
    label: 'DATABASE ENGINE',
    tech: 'MongoDB',
    role: 'Data storage',
    description: 'Executes schema queries, performs atomic document updates, and indexes multi-tenant records.',
    badge: 'Data Tier'
  }
];
