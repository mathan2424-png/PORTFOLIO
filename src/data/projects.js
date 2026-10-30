import serviqImg from '../assets/images/serviq.jpg';
import networthImg from '../assets/images/networth.jpg';
import pricoutureImg from '../assets/images/pricouture.jpg';
import propertyGuardianImg from '../assets/images/propertyguardian.jpg';
import tinyTheatreImg from '../assets/images/tiny_theatre.jpg';
import hrPortalImg from '../assets/images/hr_portal.jpg';

export const projectCategories = [
  'All',
  'React',
  'Admin Platforms',
  'Business Websites',
  'Ecommerce',
  'MERN'
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
    categoryTag: 'High-Trust Property Concierge Experience',
    categories: ['Business Websites', 'React'],
    subtitle: 'High-Trust Property Concierge & Remote Asset Verification Platform',
    summary: 'A premium responsive web experience designed for property owners who need reliable property monitoring and care while away. Features an editorial layout with strong typography, component-driven sections, and mobile-optimized interactions.',
    image: propertyGuardianImg,
    imageAlt: 'The Property Guardian High-Value Real Estate Care and Remote Inspection Interface',
    layoutStyle: 'architectural-editorial',
    theme: 'architectural',
    features: [
      'Responsive UI Development',
      'Editorial Layout Architecture',
      'High-Trust Typography',
      'Mobile Responsiveness',
      'Service Tiers Component',
      'Client Inquiry Pathway'
    ],
    technologies: ['React.js', 'Modern CSS', 'JavaScript', 'Responsive UI'],
    details: {
      clientNeed: 'Non-resident Indian (NRI) property owners need trustworthy, real-time visibility into the security, upkeep, and physical status of their overseas residential investments.',
      engineeringSolution: 'Engineered the complete responsive frontend experience in React.js, implementing custom editorial layout grids, high-fidelity responsive typography, interactive service tiers, and optimized cross-device performance.'
    },
    liveUrl: 'https://the-property-guardian.netlify.app/',
    codeUrl: 'https://github.com/mathan2424-png',
    isPrimary: false
  },
  {
    id: 'networth-admin',
    number: '03',
    title: 'Network Qube Admin',
    categoryTag: 'Enterprise Admin Interface / Frontend',
    categories: ['Admin Platforms', 'React'],
    subtitle: 'Business Administration Console & Responsive Governance Dashboard',
    summary: 'A comprehensive administration dashboard frontend engineered with modular React components, structured role-matrix tables, intuitive member navigation, and cross-device responsiveness.',
    image: networthImg,
    imageAlt: 'Network Qube Admin Control Panel with Role Management and Responsive Directory Layout',
    layoutStyle: 'admin-console',
    theme: 'dark-accent',
    features: [
      'Responsive UI Development',
      'Member Directory Layout',
      'Admin Hierarchy View',
      'Role-Matrix Interface (RBAC)',
      'Plans & Subscriptions UI',
      'Events Dashboard View',
      'Mobile Responsive Layout'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI', 'Component Architecture'],
    details: {
      clientNeed: 'Organizations managing multi-tier member networks required a centralized, clean web interface for managing user directories, membership tiers, and administrative controls.',
      engineeringSolution: 'Engineered the complete frontend interface in React.js, developing reusable component hierarchies, accessible data tables, clean state workflows, and fluid mobile responsiveness.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/MathanKumarMP/Networth-Admin',
    isPrimary: false
  },
  {
    id: 'tiny-theatre',
    number: '04',
    title: 'The Tiny Theatre',
    categoryTag: 'Entertainment & Ticketing Admin / Frontend',
    categories: ['Admin Platforms', 'React'],
    subtitle: 'Interactive Showtime Management & Seat Reservation Console',
    summary: 'A custom administrative frontend interface engineered for boutique cinema operations, featuring an interactive seat reservation matrix, dynamic showtime management layouts, and responsive ticket verification workflows.',
    image: tinyTheatreImg,
    imageAlt: 'The Tiny Theatre Admin Console with Showtime Management and Interactive Seat Matrix',
    layoutStyle: 'admin-console',
    theme: 'dark-accent',
    features: [
      'Responsive UI Development',
      'Interactive Seat Matrix',
      'Showtime Schedule Layout',
      'Ticket Verification UI',
      'Daily Revenue Metrics View',
      'Mobile-Friendly Interactions'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI', 'Interactive UI State'],
    details: {
      clientNeed: 'Independent boutique theatres needed an intuitive, visual administrative console to configure seat matrices, update movie showtimes, and verify admissions across mobile and desktop devices.',
      engineeringSolution: 'Developed the complete frontend application with React.js, creating interactive SVG/grid seat selection components, dynamic schedule displays, and a fluid responsive layout tailored for box office managers.'
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
    categoryTag: 'Premium Boutique Ecommerce / Frontend',
    categories: ['Ecommerce', 'React'],
    subtitle: 'Editorial Luxury Boutique Storefront & Catalog Lookbook',
    summary: 'A product-focused ecommerce storefront delivering an editorial luxury aesthetic. Combines responsive React components with fluid lookbook galleries, interactive cart drawer state, and mobile-friendly shopping flows.',
    image: pricoutureImg,
    imageAlt: 'PRI COUTURE Luxury Fashion Boutique Editorial Storefront and Lookbook',
    layoutStyle: 'luxury-ecommerce',
    theme: 'editorial-warm',
    features: [
      'React & Vite Tooling',
      'Responsive Lookbook UI',
      'Product Grid Layouts',
      'Interactive Cart Drawer State',
      'Mobile Shopping UX',
      'Component Architecture'
    ],
    technologies: ['React.js', 'Vite', 'JavaScript', 'CSS3', 'Responsive UI'],
    details: {
      clientNeed: 'High-end fashion boutiques demand an editorial lookbook storefront with smooth responsive interactions that elevate brand distinction beyond standard ecommerce templates.',
      engineeringSolution: 'Built a modular React frontend leveraging Vite for lightning-fast loads, fluid image grids, interactive cart drawer state, and responsive catalog layouts.'
    },
    liveUrl: '#',
    codeUrl: 'https://github.com/mathan2424-png',
    isPrimary: false
  }
];

export const additionalProjects = [
  {
    id: 'cni-business-forum',
    number: '07',
    title: 'CNI Business Forum',
    type: 'Business Networking & Membership Platform',
    category: 'Business Websites',
    role: 'Frontend Development',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI'],
    description: 'Frontend development for an enterprise business networking forum. Engineered responsive website layouts, interactive event schedules, member directories, and mobile-first navigation.',
    link: '#'
  },
  {
    id: 'you-leggings',
    number: '08',
    title: 'You Leggings',
    type: 'Commercial Apparel Ecommerce Storefront',
    category: 'Ecommerce',
    role: 'Frontend Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    description: 'Frontend website development for a commercial apparel brand. Designed and developed product showcase grids, promotional banners, fluid mobile layouts, and frictionless user interactions.',
    link: '#'
  },
  {
    id: 'antb',
    number: '09',
    title: 'ANTB',
    type: 'Corporate Business Web Platform',
    category: 'Business Websites',
    role: 'Frontend Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    description: 'Frontend development of a corporate website engineered for brand credibility, clean multi-column layouts, responsive typography, and cross-platform mobile fidelity.',
    link: '#'
  },
  {
    id: 'india-dairy-show',
    number: '10',
    title: 'India Dairy Show',
    type: 'Exhibition & Event Portal',
    category: 'Business Websites',
    role: 'Frontend Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    description: 'Frontend implementation for an industry exhibition portal, delivering responsive multi-day event schedules, speaker profile components, and mobile-optimized exhibitor directories.',
    link: '#'
  },
  {
    id: 'proultima',
    number: '11',
    title: 'Proultima Engineering',
    type: 'Industrial & Engineering Solutions',
    category: 'Business Websites',
    role: 'Frontend Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layouts'],
    description: 'Frontend website development communicating engineering solutions, technical specification tables, and responsive inquiry forms with high-precision layout styling.',
    link: '#'
  },
  {
    id: 'shrikrish-housing',
    number: '12',
    title: 'Shrikrish Housing',
    type: 'Real Estate & Property Platform',
    category: 'Business Websites',
    role: 'Frontend Development',
    technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive UI'],
    description: 'Frontend property showcase featuring interactive floor plan layouts, photo galleries, responsive property cards, and seamless mobile inquiry routing.',
    link: '#'
  },
  {
    id: 'zirve-krishna',
    number: '13',
    title: 'Zirve / Krishna Group',
    type: 'Enterprise Corporate Presence',
    category: 'Business Websites',
    role: 'Frontend Development',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Grid'],
    description: 'Frontend website development uniting diverse corporate divisions with unified brand navigation, responsive grid layouts, and smooth cross-browser compatibility.',
    link: '#'
  }
];
