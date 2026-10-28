import serviqImg from '../assets/images/serviq.jpg';
import networthImg from '../assets/images/networth.jpg';
import pricoutureImg from '../assets/images/pricouture.jpg';
import propertyGuardianImg from '../assets/images/propertyguardian.jpg';
import tinyTheatreImg from '../assets/images/tiny_theatre.jpg';
import hrPortalImg from '../assets/images/hr_portal.jpg';

export const projectCategories = [
  'All',
  'MERN',
  'React',
  'Admin Platforms',
  'Business Websites',
  'Ecommerce'
];

export const featuredProjects = [
  {
    id: 'serviq',
    number: '01',
    title: 'Serviq',
    categoryTag: 'SaaS / MERN / Admin Platform',
    categories: ['MERN', 'React', 'Admin Platforms'],
    subtitle: 'Multi-Restaurant SaaS QR Ordering & Centralized Operations Platform',
    summary: 'A multi-restaurant SaaS platform designed around QR ordering, live order queuing, and centralized corporate restaurant administration.',
    image: serviqImg,
    imageAlt: 'Serviq Multi-Restaurant SaaS Operations and Order Management Platform',
    layoutStyle: 'flagship-split',
    theme: 'light',
    features: [
      'Super Admin',
      'Restaurants',
      'Plans & Subscriptions',
      'Billing Management',
      'Leads / CRM',
      'Support Tickets',
      'Live Order Queue',
      'Role & Permission (RBAC)'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    details: {
      clientNeed: 'Independent and multi-branch restaurants require instant contact-free QR ordering coupled with central corporate oversight for tenant accounts, billing cycles, and live branch orders.',
      engineeringSolution: 'Architected a multi-tenant administrative system in React and Node/Express with MongoDB schema design, JWT authentication, and structured role-based access for Super Admins and Branch Managers.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/mathan2424-png/PORTFOLIO',
    isPrimary: true
  },
  {
    id: 'the-property-guardian',
    number: '02',
    title: 'The Property Guardian',
    categoryTag: 'Premium Property Care Experience',
    categories: ['Business Websites', 'React'],
    subtitle: 'High-Trust Property Concierge & Remote Asset Verification Platform',
    summary: 'A premium web experience designed for property owners who need reliable property monitoring and care while away. Features an editorial UI with strong typography and business-oriented layout.',
    image: propertyGuardianImg,
    imageAlt: 'The Property Guardian High-Value Real Estate Care and Remote Inspection Interface',
    layoutStyle: 'architectural-editorial',
    theme: 'architectural',
    features: [
      'Premium Frontend',
      'Responsive Architecture',
      'Editorial Typography',
      'Business-Focused UX',
      'NRI Property-Care Pathway',
      'Audit Verification Tiers'
    ],
    technologies: ['React', 'Modern CSS', 'JavaScript', 'Responsive Architecture'],
    details: {
      clientNeed: 'Non-resident Indian (NRI) property owners need trustworthy, real-time visibility into the security, upkeep, and physical status of their overseas residential investments.',
      engineeringSolution: 'Developed an authoritative, conversion-driven editorial experience featuring service tiers, scheduled audit breakdowns, and an intuitive client contact pathway.'
    },
    liveUrl: 'https://the-property-guardian.netlify.app/',
    codeUrl: 'https://github.com/mathan2424-png',
    isPrimary: false
  },
  {
    id: 'networth-admin',
    number: '03',
    title: 'Networth Admin',
    categoryTag: 'Business Administration Platform',
    categories: ['Admin Platforms', 'MERN', 'React'],
    subtitle: 'Enterprise Membership, Access Governance & Content Management Platform',
    summary: 'A robust business administration console engineered to oversee member databases, delegated roles, membership tiers, publications, and enterprise events.',
    image: networthImg,
    imageAlt: 'Networth Admin Control Panel with Role Management and Security Audit Logs',
    layoutStyle: 'admin-console',
    theme: 'dark-accent',
    features: [
      'Authentication',
      'Member Directory',
      'Admin Hierarchy',
      'Role Matrix (RBAC)',
      'Plans & Subscriptions',
      'Events & Announcements',
      'Security Audit Logs'
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    details: {
      clientNeed: 'Organizations managing multi-tier communities require consolidated control over permission policies, event announcements, and dynamic member roster directories without data fragmentation.',
      engineeringSolution: 'Engineered an administrative dashboard with fine-grained RBAC matrix, protected API endpoints, responsive CRUD panels, and audit log interfaces.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/MathanKumarMP/Networth-Admin',
    isPrimary: false
  },
  {
    id: 'tiny-theatre',
    number: '04',
    title: 'The Tiny Theatre',
    categoryTag: 'Entertainment & Ticketing Admin',
    categories: ['Admin Platforms', 'React', 'MERN'],
    subtitle: 'Interactive Entertainment & Showtime Booking Administration Console',
    summary: 'A dedicated administrative management portal engineered for movie schedules, real-time seat reservation matrices, ticket verification, and daily revenue tracking.',
    image: tinyTheatreImg,
    imageAlt: 'The Tiny Theatre Admin Console with Showtime Management and Seat Matrix',
    layoutStyle: 'admin-console',
    theme: 'dark-accent',
    features: [
      'Showtime Curation',
      'Seat Selection Matrix',
      'Ticket Booking Queue',
      'Daily Revenue Metrics',
      'Role-Based Admin Access',
      'Report Generation'
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    details: {
      clientNeed: 'Independent theatres require a streamlined console to configure auditorium seating maps, track ticket allocations, and audit showtime box office earnings in real-time.',
      engineeringSolution: 'Built a responsive admin interface with seat grid state rendering, booking status pipelines, and secure API endpoints for showtime curation.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/MathanKumarMP/TINY-Admin',
    isPrimary: false
  },
  {
    id: 'hr-portal',
    number: '05',
    title: 'HR Portal (HRMS)',
    categoryTag: 'Enterprise Operations Platform',
    categories: ['Admin Platforms', 'MERN', 'React'],
    subtitle: 'Enterprise Human Resource & Department Administration Platform',
    summary: 'An enterprise-grade HRMS dashboard built to manage multi-department employee directories, attendance records, role allocations, and organizational policy workflows.',
    image: hrPortalImg,
    imageAlt: 'Enterprise HRMS Admin Portal Dashboard with Employee Directory and Department Overview',
    layoutStyle: 'flagship-split',
    theme: 'light',
    features: [
      'Department Management',
      'Employee Directory',
      'Role & Permissions (RBAC)',
      'Staff Attendance Analytics',
      'Payroll Overview',
      'Profile Form Verification'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    details: {
      clientNeed: 'Growing businesses require centralized employee records, verified input workflows, and departmental hierarchy oversight without siloed spreadsheets.',
      engineeringSolution: 'Designed a modular admin dashboard in React with Node/Express REST controllers, strict schema validations, and role-based access control.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/mathan2424-png',
    isPrimary: false
  },
  {
    id: 'pricouture',
    number: '06',
    title: 'PRI COUTURE',
    categoryTag: 'Premium Boutique Ecommerce',
    categories: ['Ecommerce', 'React'],
    subtitle: 'Editorial Luxury Boutique Storefront & Catalog Management Flow',
    summary: 'A product-focused ecommerce interface delivering an editorial luxury aesthetic. Combines responsive React UI with an API-ready architecture and dynamic catalog administration.',
    image: pricoutureImg,
    imageAlt: 'PRI COUTURE Luxury Fashion Boutique Editorial Storefront and Lookbook',
    layoutStyle: 'luxury-ecommerce',
    theme: 'editorial-warm',
    features: [
      'React & Vite Tooling',
      'Responsive Lookbook UI',
      'Product-Focused Grid',
      'Cart Drawer State',
      'Catalog Schema Design',
      'Admin + Store Architecture'
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'CSS3', 'REST API Architecture'],
    details: {
      clientNeed: 'High-end fashion boutiques demand an editorial lookbook storefront with smooth responsive interactions that elevate brand distinction beyond cookie-cutter ecommerce templates.',
      engineeringSolution: 'Built a modular React frontend leveraging Vite for lightning-fast loads, fluid image grids, interactive cart drawer state, and an intuitive product catalog schema.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/mathan2424-png',
    isPrimary: false
  }
];

export const additionalProjects = [
  {
    id: 'antb',
    number: '07',
    title: 'ANTB',
    type: 'Corporate Business Web Platform',
    category: 'Business Websites',
    technologies: ['React', 'CSS3', 'JavaScript'],
    description: 'Clean corporate web presence engineered for brand credibility, service clarity, and cross-platform responsiveness.',
    link: '#'
  },
  {
    id: 'india-dairy-show',
    number: '08',
    title: 'India Dairy Show',
    type: 'Exhibition & Event Portal',
    category: 'Business Websites',
    technologies: ['React', 'JavaScript', 'Responsive Design'],
    description: 'Dynamic industry exhibition portal highlighting schedules, exhibitor registrations, and multi-day conference agendas.',
    link: '#'
  },
  {
    id: 'proultima',
    number: '09',
    title: 'Proultima Engineering',
    type: 'Industrial & Engineering Solutions',
    category: 'Business Websites',
    technologies: ['React', 'CSS3', 'Modular Architecture'],
    description: 'High-precision engineering website communicating industrial services, technical specifications, and quote request workflows.',
    link: '#'
  },
  {
    id: 'shrikrish-housing',
    number: '10',
    title: 'Shrikrish Housing',
    type: 'Real Estate & Property Platform',
    category: 'Business Websites',
    technologies: ['React', 'JavaScript', 'Property UI'],
    description: 'Modern residential showcase featuring layout previews, floor configurations, and direct buyer inquiry routing.',
    link: '#'
  },
  {
    id: 'zirve-krishna',
    number: '11',
    title: 'Zirve / Krishna Group',
    type: 'Enterprise Corporate Presence',
    category: 'Business Websites',
    technologies: ['React', 'CSS Grid', 'REST Integration'],
    description: 'Scalable corporate web identity uniting multi-sector business divisions with consistent navigation and executive messaging.',
    link: '#'
  }
];
