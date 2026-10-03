export const engineeringStack = [
  {
    number: '01',
    category: 'FRONTEND',
    subtitle: 'Client Interfaces & Reactive State',
    skills: [
      { name: 'React.js', desc: 'Component architecture, custom hooks, reactive state, and virtual DOM optimization.' },
      { name: 'JavaScript', desc: 'ES6+ modern syntax, asynchronous promises, closures, and DOM manipulation.' },
      { name: 'HTML5', desc: 'Semantic HTML5 markup, accessibility primitives, and clean document structure.' },
      { name: 'CSS3', desc: 'Modern CSS Grid, Flexbox, responsive clamp() scales, and vanilla design systems.' },
      { name: 'React Router', desc: 'Dynamic client-side routing, protected routes, and nested view layouts.' },
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
      { name: 'REST APIs', desc: 'Stateless HTTP design, status codes, JSON serialization, and pagination.' },
      { name: 'CRUD Operations', desc: 'Create, Read, Update, Delete workflows across data collections and resources.' }
    ]
  },
  {
    number: '03',
    category: 'DATABASE',
    subtitle: 'Document Modeling & Schemas',
    skills: [
      { name: 'MongoDB', desc: 'NoSQL document database, collection modeling, indexing, and aggregations.' },
      { name: 'Mongoose', desc: 'ODM schema definitions, validation rules, population, and query middleware.' }
    ]
  },
  {
    number: '04',
    category: 'TOOLS',
    subtitle: 'Workflow & Developer Tooling',
    skills: [
      { name: 'Git', desc: 'Branching strategies, atomic commits, merge conflict resolution, and version history.' },
      { name: 'GitHub', desc: 'Remote repositories, pull requests, project tracking, and code reviews.' },
      { name: 'Postman', desc: 'API endpoint testing, header inspection, response mocking, and request collections.' },
      { name: 'VS Code', desc: 'Configured development environment, debugging tools, extensions, and workspace setups.' }
    ]
  }
];

export const techStripItems = [
  { name: 'React', label: 'React.js' },
  { name: 'JavaScript', label: 'JavaScript' },
  { name: 'Node.js', label: 'Node.js' },
  { name: 'Express', label: 'Express.js' },
  { name: 'MongoDB', label: 'MongoDB' },
  { name: 'Git', label: 'Git' },
  { name: 'GitHub', label: 'GitHub' },
  { name: 'Postman', label: 'Postman' },
  { name: 'Vite', label: 'Vite' }
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
