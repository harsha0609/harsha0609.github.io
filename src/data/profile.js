export const profile = {
  name: 'Harsha Vardhan G',
  role: 'Senior Software Engineer',
  location: 'Dublin, Ireland',
  email: 'hv2595@gmail.com',
  phone: '+353 892126260',
  website: 'harsha0609.github.io',
  github: 'https://github.com/harsha0609',
  linkedin: 'https://linkedin.com/in/harsha-vardhan-946b6515a',
  resume: '/Harsha_Vardhan_G_Senior_Software_Engineer_Resume.pdf',
  summary:
    'Software engineer with 4+ years designing and shipping backend platforms, data pipelines, developer tools, full-stack applications, and privacy/security infrastructure.',
  positioning:
    'I turn complex systems problems into maintainable products across backend architecture, real-time collaboration, secure data handling, production operations, and applied cryptography.',
}

export const metrics = [
  { value: '4+', label: 'Years shipping production systems' },
  { value: '20%', label: 'Issue-resolution improvement on RedFlare' },
  { value: '4+', label: 'Engineers mentored on backend quality' },
  { value: '2', label: 'Accepted blockchain publications' },
]

export const focusAreas = [
  'Production backend platforms',
  'Real-time analytics and collaboration',
  'Privacy and security infrastructure',
  'Research-to-production delivery',
]

export const experience = [
  {
    company: 'ADAPT Centre',
    title: 'Research Software Engineer',
    location: 'Dublin, Ireland',
    period: 'Jan 2025 - Present',
    summary:
      'Designing secure backend systems, full-stack applications, and developer-facing tools for privacy-preserving digital infrastructure.',
    points: [
      'Translate research, legal, privacy, and stakeholder requirements into architecture decisions, implementation plans, and production-grade code.',
      'Architect encryption, anonymization, and cryptographic verification workflows while balancing security guarantees, usability, and latency.',
      'Build and deploy production-facing utilities across React, TypeScript, Python, Firebase, WebSockets, Docker, and cloud hosting workflows.',
      'Collaborate with researchers, engineers, policy stakeholders, and open-source maintainers to deliver trustworthy public-facing systems.',
      'Own systems from prototype to deployment, including debugging, performance optimization, documentation, and operational hardening.',
    ],
  },
  {
    company: 'Stratforge',
    title: 'Software Engineer',
    location: 'Chennai, India',
    period: 'Sept 2020 - Aug 2023',
    summary:
      'Built backend data pipelines, REST APIs, automation tooling, and analytics products for enterprise SaaS systems.',
    points: [
      'Built and maintained Django REST Framework, PostgreSQL, and containerized microservice backends for production SaaS workflows.',
      'Developed deployment, monitoring, and data-processing automation that reduced manual effort and improved operational reliability.',
      'Co-architected RedFlare, a real-time analytics and investigative monitoring platform that improved issue resolution time by 20%.',
      'Optimized PostgreSQL queries and backend service paths to improve API response latency and support higher-throughput data workflows.',
      'Mentored 4+ junior engineers on secure coding practices, backend architecture, debugging, and production-readiness standards.',
    ],
  },
]

export const projects = [
  {
    title: 'RedFlare',
    context: 'Stratforge',
    type: 'Real-time analytics platform',
    description:
      'Investigative monitoring and call-analysis platform with automated data ingestion, live processing, issue analysis, and operational dashboards.',
    impact:
      'Co-architected the platform and backend workflows, improving issue resolution time by 20% while strengthening observability and production support paths.',
    stack: ['Django REST Framework', 'React', 'PostgreSQL', 'Real-time Analytics', 'Data Pipelines', 'Monitoring'],
    featured: true,
  },
  {
    title: 'InvizCrypt',
    context: 'ADAPT Centre',
    type: 'Secure collaboration platform',
    description:
      'Browser-based collaborative LaTeX platform with encrypted project storage, WebAssembly compilation, PDF preview, templates, and project management.',
    impact:
      'Implemented client-side E2EE with RSA-OAEP, AES-GCM, per-user wrapped master keys, passphrase-protected vaults, and idle-session lock behavior.',
    stack: ['React', 'TypeScript', 'Firebase', 'Yjs', 'WebSockets', 'AES-GCM'],
  },
  {
    title: 'ZKP-Based Privacy Framework on Zcash',
    context: 'ADAPT Centre',
    type: 'Privacy-preserving voting',
    description:
      'End-to-end voting framework using Zcash shielded addresses, zk-SNARKs, and strict application-layer data handling controls.',
    impact:
      'Preserved voter anonymity while enabling cryptographic verification, auditability, and secure transaction handling.',
    stack: ['Zcash', 'zk-SNARKs', 'Python', 'Privacy', 'Auditability'],
    link: 'https://zkballot.com',
  },
  {
    title: 'Zcash Developer and Investigative Tools',
    context: 'ADAPT Centre',
    type: 'Open-source developer tooling',
    description:
      'JavaScript RPC wrapper and local block explorer for node interaction, ledger analysis, transaction inspection, and investigative debugging.',
    impact:
      'Made complex blockchain data easier to inspect, validate, audit, and integrate into research and engineering workflows.',
    stack: ['Node.js', 'Flask', 'React', 'Zcash RPC', 'Developer UX'],
  },
  {
    title: 'Blockchain-Native PKI',
    context: 'ADAPT Centre',
    type: 'Secure identity infrastructure',
    description:
      'Decentralized public key infrastructure mapping X.509 certificates to native NFTs on the XRP Ledger.',
    impact:
      'Implemented certificate encoding, identity verification, key-management flows, and an encrypted communication wrapper.',
    stack: ['XRP Ledger', 'PKI', 'NFTs', 'X.509', 'Encryption'],
  },
  {
    title: 'Proof-of-Work++',
    context: 'Trinity College Dublin',
    type: 'Consensus research',
    description:
      'Consensus variant designed to expose cryptographically verifiable block validation progress before final block discovery.',
    impact:
      'Evaluated fairness, transparency, energy efficiency, and security dimensions for academic publication.',
    stack: ['Blockchain', 'Consensus', 'Simulation', 'Security'],
    link: 'https://doi.org/10.1109/BCCA66705.2025.11229519',
    wide: true,
  },
]

export const skills = [
  {
    title: 'Backend and Platforms',
    items: ['Python', 'Django REST Framework', 'Flask', 'Node.js', 'REST APIs', 'Microservices', 'PostgreSQL', 'Data Pipelines', 'API Design'],
  },
  {
    title: 'Frontend and Product',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'CodeMirror', 'PDF.js', 'Responsive Web Applications', 'Developer UX'],
  },
  {
    title: 'Distributed and Real-time Systems',
    items: ['WebSockets', 'Yjs', 'Real-time Collaboration', 'Event-driven Workflows', 'Relay Services', 'Monitoring'],
  },
  {
    title: 'Infrastructure and Cloud',
    items: ['Docker', 'Linux', 'AWS', 'GCP', 'Firebase', 'CI/CD', 'Deployment Automation', 'Cloud Run'],
  },
  {
    title: 'Security and Privacy',
    items: ['Secure Data Handling', 'Access Control', 'End-to-End Encryption', 'AES-GCM', 'RSA-OAEP', 'PKI', 'ZKPs', 'Key Management'],
  },
  {
    title: 'Leadership',
    items: ['Technical Design', 'End-to-End Ownership', 'Mentoring', 'Cross-functional Collaboration', 'Agile/Scrum', 'Production Support'],
  },
]

export const publications = [
  {
    title: 'PoW++: An Energy Efficient Proof-of-Work Variant',
    authors: 'V. Agarwal, H. Vardhan, A. Kumar and H. Tewari',
    venue: '7th International Conference on Blockchain Computing and Applications, Oct 2025. Accepted.',
  },
  {
    title: 'A Blockchain-Native PKI: Secure X.509 Certificate Management on the XRP Ledger',
    authors: 'H. Vardhan, P. Hiranayachatri, A. Lele and H. Tewari',
    venue: 'IEEE International Conference on Distributed Ledger Technologies, Nov 2025. Accepted.',
  },
]

export const education = [
  {
    school: 'Trinity College Dublin',
    degree: 'MSc in Computer Science',
    period: 'Sept 2023 - Sept 2024',
    detail: 'Intelligent Systems, Cryptography, and Blockchain Technology',
  },
  {
    school: 'National Institute of Technology Karnataka, Surathkal',
    degree: 'BTech in Information Technology',
    period: 'July 2016 - June 2020',
    detail: 'GPA: 8.48 / 10.0',
  },
]
