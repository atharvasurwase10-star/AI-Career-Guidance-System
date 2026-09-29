// Comprehensive database of Career Paths for CareerAI
export const careersData = [
  {
    id: "ai-ml-engineer",
    name: "AI/ML Engineer",
    category: "AI & Data",
    shortDescription: "Design, build, and deploy machine learning and deep learning models that enable intelligent automation and predictive analytics.",
    match: 94,
    demand: "Very High",
    demandColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    salaryRange: "$105,000 - $175,000 / ₹12 - 32 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+38% (Next 5 Years)",
    experienceLevel: "Entry to Mid Level",
    education: "B.Tech/B.E in Computer Science, Data Science, AI, or Math/Statistics",
    description: "AI/ML Engineers bridge the gap between data science research and production software engineering. They build scalable machine learning architectures, optimize neural network inference, and deploy intelligent agents in cloud environments.",
    whyMatches: [
      "Strong analytical and mathematical problem-solving aptitude",
      "Proficiency and strong curiosity in Python programming",
      "High interest in Artificial Intelligence and intelligent systems",
      "Excited about predictive modeling and deep neural networks"
    ],
    requiredSkills: [
      { name: "Python", requiredLevel: 90, benchmarkLevel: 85, category: "Programming" },
      { name: "Machine Learning", requiredLevel: 85, benchmarkLevel: 80, category: "AI/ML" },
      { name: "Deep Learning", requiredLevel: 80, benchmarkLevel: 75, category: "AI/ML" },
      { name: "Statistics & Math", requiredLevel: 80, benchmarkLevel: 75, category: "Foundations" },
      { name: "SQL", requiredLevel: 75, benchmarkLevel: 70, category: "Data" },
      { name: "TensorFlow / PyTorch", requiredLevel: 80, benchmarkLevel: 70, category: "Frameworks" },
      { name: "MLOps & Docker", requiredLevel: 65, benchmarkLevel: 60, category: "Deployment" }
    ],
    toolsAndTech: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Hugging Face", "Docker", "MLflow", "FastAPI", "Weights & Biases", "AWS SageMaker"],
    typicalRoles: ["Machine Learning Engineer", "AI Research Assistant", "Deep Learning Practitioner", "MLOps Engineer", "NLP Specialist"],
    recommendedCourses: [
      { title: "Deep Learning Specialization", provider: "DeepLearning.AI (Coursera)", type: "Specialization", link: "https://www.coursera.org/specializations/deep-learning" },
      { title: "Machine Learning with Python", provider: "Stanford / Coursera", type: "Course", link: "https://www.coursera.org/learn/machine-learning" },
      { title: "Full Stack Deep Learning", provider: "FSDL Online", type: "Hands-on", link: "https://fullstackdeeplearning.com" }
    ],
    certifications: [
      "AWS Certified Machine Learning - Specialty",
      "TensorFlow Developer Certificate",
      "Google Professional Machine Learning Engineer"
    ],
    projectsToBuild: [
      { title: "End-to-End Multimodal Semantic Search", description: "Build a vector embedding search engine using CLIP and Qdrant database." },
      { title: "Real-Time Object Detection Pipeline", description: "YOLOv8 deployment using FastAPI, ONNX Runtime, and WebSockets." },
      { title: "Automated LLM Fine-Tuner & Evaluation Hub", description: "LoRA/QLoRA fine-tuning workflow with automated ROUGE/BLEU evaluation." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Foundations", title: "Python Programming & Data Structures", description: "Master OOP, algorithmic problem solving, generators, and clean code principles.", estimatedWeeks: "4-6 Weeks", topics: ["Python 3 OOP", "DSA Basics", "NumPy & Vectorization", "Git & GitHub"] },
      { phase: "Phase 2: Mathematical Rigor", title: "Linear Algebra & Statistics", description: "Understand eigenvalues, gradient descent, probability distributions, and hypothesis testing.", estimatedWeeks: "4 Weeks", topics: ["Matrix Computations", "Multivariate Calculus", "Probability & Bayes", "Statistical Inference"] },
      { phase: "Phase 3: Core Machine Learning", title: "Classical ML Algorithms", description: "Implement regression, decision trees, random forests, SVMs, and clustering from scratch and with Scikit-Learn.", estimatedWeeks: "6 Weeks", topics: ["Feature Engineering", "Ensemble Models", "Cross-Validation", "Metrics Evaluation"] },
      { phase: "Phase 4: Deep Learning", title: "Neural Networks & Architectures", description: "Master CNNs for vision, RNNs/Transformers for sequences, and PyTorch computational graphs.", estimatedWeeks: "8 Weeks", topics: ["Backpropagation", "PyTorch Tensor Operations", "CNNs & ResNet", "Attention & Transformers"] },
      { phase: "Phase 5: MLOps & Production", title: "Model Packaging & Serving", description: "Containerize models with Docker, build high-throughput REST/gRPC APIs, and monitor drift.", estimatedWeeks: "4 Weeks", topics: ["FastAPI Model Serving", "Docker Containerization", "CI/CD for ML", "Model Monitoring"] },
      { phase: "Phase 6: Industry Capstone & Internships", title: "Portfolio Development & Job Prep", description: "Build public open-source projects, write technical blogs, and practice coding/ML system design interviews.", estimatedWeeks: "4-8 Weeks", topics: ["Capstone Presentation", "ML System Design", "Resume & Mock Interviews", "Open Source Contribution"] }
    ]
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    category: "AI & Data",
    shortDescription: "Uncover patterns, extract insights from complex data, and build statistical models that steer strategic product and business decisions.",
    match: 89,
    demand: "High",
    demandColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    salaryRange: "$95,000 - $160,000 / ₹10 - 28 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+28% (Next 5 Years)",
    experienceLevel: "Entry to Mid Level",
    education: "B.Tech/B.S in Computer Science, Statistics, Economics, or Mathematics",
    description: "Data Scientists combine domain expertise, programming skills, and knowledge of mathematics and statistics to extract meaningful insights from data. They build predictive models, run A/B tests, and tell compelling data stories.",
    whyMatches: [
      "Natural inclination towards exploratory data analysis and statistics",
      "Enjoys translating business questions into quantitative hypotheses",
      "Comfortable with data visualization and storytelling",
      "Solid foundation in Python and SQL query optimization"
    ],
    requiredSkills: [
      { name: "Python", requiredLevel: 85, benchmarkLevel: 80, category: "Programming" },
      { name: "SQL", requiredLevel: 90, benchmarkLevel: 85, category: "Data" },
      { name: "Statistics & Math", requiredLevel: 85, benchmarkLevel: 80, category: "Foundations" },
      { name: "Machine Learning", requiredLevel: 75, benchmarkLevel: 70, category: "AI/ML" },
      { name: "Data Visualization", requiredLevel: 80, benchmarkLevel: 75, category: "Analysis" },
      { name: "Pandas & NumPy", requiredLevel: 90, benchmarkLevel: 85, category: "Data" },
      { name: "Business Communication", requiredLevel: 75, benchmarkLevel: 70, category: "Soft Skills" }
    ],
    toolsAndTech: ["Python", "SQL", "Pandas", "Seaborn", "Tableau", "PowerBI", "Scikit-Learn", "Jupyter", "Snowflake", "BigQuery"],
    typicalRoles: ["Data Scientist", "Product Data Analyst", "Quantitative Analyst", "Marketing Data Scientist", "Analytics Consultant"],
    recommendedCourses: [
      { title: "IBM Data Science Professional Certificate", provider: "IBM (Coursera)", type: "Certification", link: "https://www.coursera.org/professional-certificates/ibm-data-science" },
      { title: "Applied Data Science with Python", provider: "University of Michigan", type: "Specialization", link: "https://www.coursera.org/specializations/data-science-python" }
    ],
    certifications: [
      "Google Professional Data Engineer",
      "Microsoft Certified: Azure Data Scientist Associate",
      "DASCA Senior Data Scientist (SDS)"
    ],
    projectsToBuild: [
      { title: "Customer Churn Prediction & Retention Dashboard", description: "Predict user churn likelihood with XGBoost and visualize risk segments in interactive dashboard." },
      { title: "Algorithmic Pricing Optimization", description: "Dynamic pricing model using elasticity estimation and time-series demand forecasting." },
      { title: "Healthcare Patient Outcome Analysis", description: "Statistical survival analysis and multivariate hypothesis testing on public clinical data." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Analytical Foundations", title: "Advanced SQL & Database Design", description: "Window functions, CTEs, indexing, and analytical data schemas.", estimatedWeeks: "4 Weeks", topics: ["Window Functions", "Query Plan Optimization", "Relational Schemas", "ETL Basics"] },
      { phase: "Phase 2: Python Data Manipulation", title: "Pandas & Exploratory Data Analysis", description: "Clean missing data, handle outliers, feature transformations, and EDA.", estimatedWeeks: "4 Weeks", topics: ["Pandas Vectorization", "Data Wrangling", "Interactive Plotting", "Feature Extraction"] },
      { phase: "Phase 3: Statistical Experimentation", title: "Probability & A/B Testing", description: "Hypothesis testing, p-values, bootstrap estimation, and power analysis.", estimatedWeeks: "5 Weeks", topics: ["Z-Tests & T-Tests", "ANOVA", "Experimentation Frameworks", "Causal Inference"] },
      { phase: "Phase 4: Predictive Modeling", title: "Applied Scikit-Learn & Tuning", description: "Supervised and unsupervised learning, hyperparameter tuning, cross-validation.", estimatedWeeks: "6 Weeks", topics: ["Cross Validation", "Ridge & Lasso", "Random Forests & Boosting", "Clustering"] },
      { phase: "Phase 5: BI & Executive Storytelling", title: "Dashboards & Business Metrics", description: "Build automated reporting pipelines with Tableau, Streamlit, and PowerBI.", estimatedWeeks: "4 Weeks", topics: ["Streamlit Apps", "Tableau Workbooks", "Cohort Analysis", "Executive Presentations"] }
    ]
  },
  {
    id: "software-developer",
    name: "Full Stack Software Developer",
    category: "Technology",
    shortDescription: "Architect, develop, and maintain robust client-facing web applications and backend cloud microservices end-to-end.",
    match: 86,
    demand: "Very High",
    demandColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    salaryRange: "$85,000 - $150,000 / ₹8 - 25 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+25% (Next 5 Years)",
    experienceLevel: "Entry to Senior Level",
    education: "B.Tech/B.E, BCA, MCA, or relevant software bootcamp / open-source background",
    description: "Full Stack Developers create modern digital experiences. From building interactive responsive user interfaces in modern frameworks to engineering resilient databases, microservices, and secure APIs.",
    whyMatches: [
      "Enjoys building visible, interactive applications that solve real-life user problems",
      "Interest in modern web technologies, JavaScript/TypeScript ecosystem",
      "Good algorithmic and logical problem-solving abilities",
      "Curious about both frontend visual craft and backend architecture"
    ],
    requiredSkills: [
      { name: "JavaScript / TypeScript", requiredLevel: 90, benchmarkLevel: 85, category: "Programming" },
      { name: "React.js / Next.js", requiredLevel: 85, benchmarkLevel: 80, category: "Frontend" },
      { name: "Node.js / Express", requiredLevel: 80, benchmarkLevel: 75, category: "Backend" },
      { name: "SQL & NoSQL", requiredLevel: 75, benchmarkLevel: 70, category: "Database" },
      { name: "REST & GraphQL APIs", requiredLevel: 80, benchmarkLevel: 75, category: "Architecture" },
      { name: "Git & Version Control", requiredLevel: 85, benchmarkLevel: 80, category: "DevOps" },
      { name: "Problem Solving (DSA)", requiredLevel: 75, benchmarkLevel: 70, category: "Foundations" }
    ],
    toolsAndTech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "Git", "Redis"],
    typicalRoles: ["Full Stack Engineer", "Frontend Specialist", "Backend Software Engineer", "Web Applications Architect", "API Developer"],
    recommendedCourses: [
      { title: "The Complete 2024 Web Development Bootcamp", provider: "Udemy (Dr. Angela Yu)", type: "Hands-on Course", link: "https://www.udemy.com" },
      { title: "Full Stack Open (React, Node, GraphQL)", provider: "University of Helsinki", type: "Free Verified", link: "https://fullstackopen.com" }
    ],
    certifications: [
      "Meta Front-End Developer Professional Certificate",
      "AWS Certified Developer - Associate",
      "OpenJS Node.js Application Developer (JAD)"
    ],
    projectsToBuild: [
      { title: "Real-time Collaborative Workspace", description: "Multiplayer Kanban board with WebSockets, optimistic UI updates, and Redis pub/sub." },
      { title: "High-Throughput SaaS Billing & Auth Engine", description: "Stripe webhook integration, JWT role-based access control, and rate-limiting." },
      { title: "Modern AI Knowledge Base CMS", description: "Markdown editor with live preview, automated vector indexing, and dark mode." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Web Fundamentals", title: "HTML5, Modern CSS & JS (ES6+)", description: "Semantic markup, CSS Grid/Flexbox, asynchronous JavaScript, event loops.", estimatedWeeks: "4 Weeks", topics: ["DOM Manipulation", "CSS Architecture", "Promises & Async/Await", "Web APIs"] },
      { phase: "Phase 2: Frontend Engineering", title: "React, State & TypeScript", description: "Component lifecycles, hooks, global state, typed props, and Tailwind styling.", estimatedWeeks: "6 Weeks", topics: ["React Hooks", "Custom State Hooks", "TypeScript Interfaces", "Component Testing"] },
      { phase: "Phase 3: Backend & Databases", title: "Node.js, Express & Databases", description: "Build RESTful services, database migrations, connection pooling, and JWT auth.", estimatedWeeks: "6 Weeks", topics: ["Express Routing", "PostgreSQL / Prisma", "MongoDB Aggregations", "JWT Auth Security"] },
      { phase: "Phase 4: Full Stack Integration", title: "End-to-End Architecture & Caching", description: "Integrate client and server, caching with Redis, error boundaries, file uploads.", estimatedWeeks: "4 Weeks", topics: ["Redis Caching", "S3 File Storage", "SSR with Next.js", "Input Validation (Zod)"] },
      { phase: "Phase 5: Deployment & CI/CD", title: "Cloud Hosting & Containerization", description: "Dockerize apps, setup automated GitHub Actions, deploy to Vercel/AWS.", estimatedWeeks: "4 Weeks", topics: ["Docker Compose", "GitHub Actions", "Nginx Reverse Proxy", "Security Hardening"] }
    ]
  },
  {
    id: "cybersecurity-analyst",
    name: "Cybersecurity Analyst",
    category: "Cybersecurity",
    shortDescription: "Protect critical digital infrastructure, monitor vulnerabilities, defend systems against cyber threats, and enforce compliance.",
    match: 82,
    demand: "Extremely High",
    demandColor: "text-red-400 bg-red-500/10 border-red-500/20",
    salaryRange: "$90,000 - $155,000 / ₹9 - 26 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+32% (Next 5 Years)",
    experienceLevel: "Entry to Mid Level",
    education: "B.Tech/B.S in Information Security, Computer Science, or Network Engineering",
    description: "Cybersecurity Analysts are the digital guardians of organizations. They detect intrusion attempts, analyze malware, perform penetration testing, configure firewalls, and respond swiftly to security breaches.",
    whyMatches: [
      "Interest in network protocols, system security, and ethical hacking",
      "Detail-oriented mindset with high curiosity about vulnerabilities",
      "Enjoys investigative forensics and problem diagnostics",
      "Thrives in high-responsibility environments requiring rapid incident mitigation"
    ],
    requiredSkills: [
      { name: "Computer Networking", requiredLevel: 90, benchmarkLevel: 85, category: "Networking" },
      { name: "Linux / Unix Administration", requiredLevel: 85, benchmarkLevel: 80, category: "Systems" },
      { name: "Security Tools (Wireshark/Nmap)", requiredLevel: 80, benchmarkLevel: 75, category: "Tools" },
      { name: "Python / Bash Scripting", requiredLevel: 75, benchmarkLevel: 70, category: "Scripting" },
      { name: "Vulnerability Assessment", requiredLevel: 80, benchmarkLevel: 75, category: "Security" },
      { name: "Incident Response", requiredLevel: 75, benchmarkLevel: 70, category: "Operations" },
      { name: "Cryptography Basics", requiredLevel: 70, benchmarkLevel: 65, category: "Theory" }
    ],
    toolsAndTech: ["Wireshark", "Nmap", "Metasploit", "Splunk", "Burp Suite", "Kali Linux", "Snort", "Ghidra", "OpenVAS", "OWASP ZAP"],
    typicalRoles: ["SOC Analyst (Tier 1/2)", "Information Security Specialist", "Junior Penetration Tester", "Cyber Incident Responder", "Vulnerability Analyst"],
    recommendedCourses: [
      { title: "Google Cybersecurity Professional Certificate", provider: "Google (Coursera)", type: "Professional Certificate", link: "https://www.coursera.org/professional-certificates/google-cybersecurity" },
      { title: "Practical Ethical Hacking (PEH)", provider: "TCM Security", type: "Hands-on Lab", link: "https://tcm-sec.com" }
    ],
    certifications: [
      "CompTIA Security+",
      "Certified Information Systems Security Professional (CISSP)",
      "Certified Ethical Hacker (CEH) / eJPT"
    ],
    projectsToBuild: [
      { title: "Home Lab SIEM & Intrusion Detection System", description: "Deploy Splunk or Wazuh on Proxmox/VirtualBox with automated alerts on unauthorized SSH probes." },
      { title: "Vulnerability Scanning & Automated Report Bot", description: "Python script orchestrating Nmap and Nessus APIs to generate PDF vulnerability digests." },
      { title: "Secure Web Application Honeypot", description: "Deploy simulated web server to log, trace, and categorize real-world attacker payloads." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Network & OS Core", title: "TCP/IP, OSI & Linux Mastery", description: "Subnetting, routing protocols, Linux CLI, file permissions, and process inspection.", estimatedWeeks: "5 Weeks", topics: ["TCP/IP Handshake", "DNS & DHCP Analysis", "Linux Bash Scripting", "User Privileges"] },
      { phase: "Phase 2: Security Architecture", title: "Threat Landscapes & Cryptography", description: "Symmetric/Asymmetric encryption, PKI, hashing, and defense-in-depth principles.", estimatedWeeks: "4 Weeks", topics: ["AES & RSA Encryption", "SSL/TLS Inspection", "Threat Modeling", "Zero Trust Architecture"] },
      { phase: "Phase 3: Defensive Security (Blue Team)", title: "SIEM, SOC & Traffic Analysis", description: "Deep packet inspection using Wireshark, log correlation in Splunk/ELK, and IOC analysis.", estimatedWeeks: "6 Weeks", topics: ["Wireshark PCAP Analysis", "Splunk Search Query Language", "Firewall Rules", "Phishing Investigation"] },
      { phase: "Phase 4: Offensive Basics (Red Team)", title: "Penetration Testing & Web Security", description: "OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF), port enumeration, and privilege escalation.", estimatedWeeks: "6 Weeks", topics: ["Burp Suite Proxy", "OWASP Top 10", "Metasploit Framework", "Privilege Escalation"] },
      { phase: "Phase 5: Governance & Incident Response", title: "NIST Framework & Incident Drills", description: "Containment strategies, evidence chain-of-custody, compliance standards (ISO 27001, GDPR).", estimatedWeeks: "4 Weeks", topics: ["NIST Incident Lifecycle", "Forensic Imaging", "Compliance Auditing", "Post-Mortem Reports"] }
    ]
  },
  {
    id: "cloud-engineer",
    name: "Cloud & DevOps Engineer",
    category: "Technology",
    shortDescription: "Build, automate, and scale cloud infrastructure, Kubernetes clusters, and continuous delivery pipelines for resilient web services.",
    match: 84,
    demand: "Very High",
    demandColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    salaryRange: "$100,000 - $165,000 / ₹11 - 30 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+30% (Next 5 Years)",
    experienceLevel: "Entry to Mid Level",
    education: "B.Tech/B.E in Computer Science, IT, or Systems Engineering",
    description: "Cloud and DevOps Engineers design the underlying highways of modern tech. They automate deployments, manage container orchestration with Kubernetes, declare infrastructure as code (Terraform), and ensure 99.99% uptime.",
    whyMatches: [
      "Interest in infrastructure automation, system scalability, and uptime",
      "Enjoys working with Linux command lines, Docker containers, and cloud platforms",
      "Appreciates streamlining developer velocity through CI/CD pipelines",
      "Curious about high availability, load balancers, and distributed systems"
    ],
    requiredSkills: [
      { name: "Linux / Unix", requiredLevel: 90, benchmarkLevel: 85, category: "Systems" },
      { name: "Docker & Containers", requiredLevel: 85, benchmarkLevel: 80, category: "Containers" },
      { name: "Kubernetes", requiredLevel: 80, benchmarkLevel: 70, category: "Orchestration" },
      { name: "AWS / GCP / Azure", requiredLevel: 85, benchmarkLevel: 80, category: "Cloud" },
      { name: "CI/CD (GitHub Actions)", requiredLevel: 80, benchmarkLevel: 75, category: "Automation" },
      { name: "Terraform (IaC)", requiredLevel: 75, benchmarkLevel: 70, category: "IaC" },
      { name: "Python / Go / Bash", requiredLevel: 75, benchmarkLevel: 70, category: "Scripting" }
    ],
    toolsAndTech: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Ansible", "Prometheus", "Grafana", "Linux", "ArgoCD"],
    typicalRoles: ["Cloud Solutions Architect", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Infrastructure Engineer", "Platform Engineer"],
    recommendedCourses: [
      { title: "AWS Certified Solutions Architect Associate", provider: "A Cloud Guru / Udemy", type: "Certification Prep", link: "https://acloudguru.com" },
      { title: "DevOps Bootcamp: Terraform, Docker & K8s", provider: "TechWorld with Nana", type: "Practical Course", link: "https://techworld-with-nana.com" }
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Certified: Terraform Associate"
    ],
    projectsToBuild: [
      { title: "GitOps Kubernetes Cluster on Cloud", description: "Automated ArgoCD sync of microservices repository to multi-node Kubernetes cluster." },
      { title: "Multi-Region Terraform Infrastructure", description: "Reusable Terraform modules provisioning VPCs, RDS replicas, and auto-scaling EC2 groups." },
      { title: "Production Monitoring & Alerting Stack", description: "Prometheus metrics collection with custom Grafana dashboards and Slack incident webhooks." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Systems & Shell", title: "Linux SysAdmin & Scripting", description: "Bash scripting, systemd service units, networking fundamentals, and security permissions.", estimatedWeeks: "4 Weeks", topics: ["Bash Automation", "Systemd & Services", "SSH & Firewall Configuration", "Storage & LVM"] },
      { phase: "Phase 2: Containerization", title: "Docker Deep Dive", description: "Multi-stage Dockerfiles, caching strategies, container networking, and volumes.", estimatedWeeks: "4 Weeks", topics: ["Dockerfile Optimization", "Docker Compose", "Image Vulnerability Scanning", "Container Runtimes"] },
      { phase: "Phase 3: Public Cloud Mastery", title: "AWS Core Services", description: "Compute (EC2, Lambda), Storage (S3, EBS), Networking (VPC, Route53), IAM access controls.", estimatedWeeks: "6 Weeks", topics: ["IAM Best Practices", "VPC Peering & Subnets", "Load Balancing (ALB)", "CloudWatch Metrics"] },
      { phase: "Phase 4: Container Orchestration", title: "Kubernetes in Production", description: "Deployments, Services, Ingress controllers, ConfigMaps, Helm package management.", estimatedWeeks: "6 Weeks", topics: ["Pods & Deployments", "Cluster Networking", "Helm Charts", "StatefulSets & PVCs"] },
      { phase: "Phase 5: Automation & GitOps", title: "Terraform & CI/CD Pipelines", description: "Declarative Infrastructure as Code, state locking, GitHub Actions linting and deployment.", estimatedWeeks: "5 Weeks", topics: ["Terraform HCL", "GitHub Actions Workflows", "ArgoCD / GitOps", "Zero Downtime Deployments"] }
    ]
  },
  {
    id: "data-analyst",
    name: "Data Analyst",
    category: "AI & Data",
    shortDescription: "Transform messy raw datasets into actionable executive dashboards, charts, and quantitative business recommendations.",
    match: 87,
    demand: "High",
    demandColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    salaryRange: "$70,000 - $115,000 / ₹6 - 18 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+23% (Next 5 Years)",
    experienceLevel: "Entry to Mid Level",
    education: "Bachelor's degree in Business, Computer Applications, Economics, or Engineering",
    description: "Data Analysts translate numbers into business impact. They gather data from different sources, clean and query it with SQL, formulate KPI metrics, and build intuitive visual reports using PowerBI and Tableau for stakeholders.",
    whyMatches: [
      "Enjoys discovering stories behind numbers and identifying operational trends",
      "Skilled at visual communication and dashboard presentation",
      "Values rapid feedback and practical business problem-solving",
      "Solid aptitude for spreadsheets, SQL, and data transformation"
    ],
    requiredSkills: [
      { name: "SQL", requiredLevel: 85, benchmarkLevel: 80, category: "Data" },
      { name: "Excel & Advanced Sheets", requiredLevel: 90, benchmarkLevel: 85, category: "Spreadsheets" },
      { name: "PowerBI / Tableau", requiredLevel: 85, benchmarkLevel: 80, category: "Visualization" },
      { name: "Python / R Basics", requiredLevel: 70, benchmarkLevel: 65, category: "Programming" },
      { name: "Data Cleaning", requiredLevel: 85, benchmarkLevel: 80, category: "Analysis" },
      { name: "Business Acumen", requiredLevel: 80, benchmarkLevel: 75, category: "Soft Skills" }
    ],
    toolsAndTech: ["SQL", "Microsoft PowerBI", "Tableau", "Excel (VLOOKUP, Pivot, DAX)", "Python (Pandas)", "Google BigQuery", "Metabase"],
    typicalRoles: ["Business Data Analyst", "Marketing Operations Analyst", "Financial Data Analyst", "Operations Specialist", "BI Developer"],
    recommendedCourses: [
      { title: "Google Data Analytics Professional Certificate", provider: "Google (Coursera)", type: "Certificate", link: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { title: "Power BI for Business Intelligence", provider: "DataCamp", type: "Interactive", link: "https://datacamp.com" }
    ],
    certifications: [
      "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
      "Tableau Desktop Certified Associate",
      "Google Data Analytics Certificate"
    ],
    projectsToBuild: [
      { title: "E-Commerce Revenue & Retention BI Dashboard", description: "Interactive PowerBI report tracking Cohort CLV, churn, and product category margins." },
      { title: "Supply Chain Logistics Optimization SQL Analysis", description: "SQL query suite analyzing shipping bottlenecks, vendor delays, and warehouse costs." },
      { title: "Customer Sentiment & Product Review NLP Analysis", description: "Python exploratory script analyzing 50,000 product reviews with actionable takeaways." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Spreadsheet Mastery", title: "Advanced Microsoft Excel", description: "Pivot tables, dynamic formulas (XLOOKUP, INDEX/MATCH), conditional logic, and charting.", estimatedWeeks: "3 Weeks", topics: ["Pivot Tables & Charts", "XLOOKUP & Nested Logic", "Power Query ETL", "Data Validation"] },
      { phase: "Phase 2: Database Querying", title: "SQL for Data Analysis", description: "Filtering, aggregations, JOINs, subqueries, and window functions on real datasets.", estimatedWeeks: "4 Weeks", topics: ["GROUP BY & Aggregations", "Multi-table JOINs", "Window Functions (RANK, OVER)", "CTEs & Subqueries"] },
      { phase: "Phase 3: Visual Analytics", title: "PowerBI & Tableau Dashboards", description: "Building data models, DAX formulas, interactive slicers, and executive layouts.", estimatedWeeks: "5 Weeks", topics: ["Star Schema Data Modeling", "DAX Measures & Calculated Columns", "Drill-through Dashboards", "UI/UX for Dashboards"] },
      { phase: "Phase 4: Python Data Wrangling", title: "Pandas & Exploratory Analysis", description: "Automating data cleaning, handling missing dates, and statistical summaries.", estimatedWeeks: "4 Weeks", topics: ["Pandas DataFrames", "Data Imputation", "Time Series Filtering", "Automated Excel Exports"] },
      { phase: "Phase 5: Stakeholder Presentation", title: "Business Strategy & Capstone", description: "Formulating business KPIs, executive summary write-ups, and portfolio publishing.", estimatedWeeks: "3 Weeks", topics: ["KPI Definition", "Executive Pitch Decks", "Portfolio Case Studies", "Interview Preparation"] }
    ]
  },
  {
    id: "ui-ux-designer",
    name: "UI/UX Product Designer",
    category: "Design",
    shortDescription: "Craft intuitive, aesthetically captivating, and accessible digital user interfaces and seamless product journeys.",
    match: 78,
    demand: "High",
    demandColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    salaryRange: "$75,000 - $135,000 / ₹7 - 22 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+18% (Next 5 Years)",
    experienceLevel: "Entry to Mid Level",
    education: "Degree in Design, Human-Computer Interaction (HCI), Computer Science, or Arts",
    description: "UI/UX Designers ensure software is not only functional, but a joy to use. They conduct user research, map journey workflows, build interactive Figma prototypes, and establish scalable design systems with tokens and accessibility standards.",
    whyMatches: [
      "Natural eye for visual aesthetics, typography, color harmony, and layout balance",
      "High empathy for user frustration and ergonomics",
      "Enjoys transforming complex functional workflows into simple screens",
      "Interest in modern digital product design and design psychology"
    ],
    requiredSkills: [
      { name: "Figma & Prototyping", requiredLevel: 90, benchmarkLevel: 85, category: "Tools" },
      { name: "User Research & Usability", requiredLevel: 80, benchmarkLevel: 75, category: "UX" },
      { name: "Design Systems & Tokens", requiredLevel: 85, benchmarkLevel: 80, category: "UI" },
      { name: "Wireframing & Journey Mapping", requiredLevel: 85, benchmarkLevel: 80, category: "UX" },
      { name: "Accessibility (WCAG)", requiredLevel: 75, benchmarkLevel: 70, category: "Compliance" },
      { name: "HTML/CSS Basics", requiredLevel: 65, benchmarkLevel: 60, category: "Frontend" }
    ],
    toolsAndTech: ["Figma", "FigJam", "Adobe XD", "Miro", "Framer", "Lottie", "Notion", "Tailwind Design Tokens"],
    typicalRoles: ["Product Designer", "UI Designer", "UX Researcher", "Design System Lead", "Interaction Designer"],
    recommendedCourses: [
      { title: "Google UX Design Professional Certificate", provider: "Google (Coursera)", type: "Certificate", link: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { title: "Figma UI/UX Masterclass", provider: "DesignCode", type: "Interactive Video", link: "https://designcode.io" }
    ],
    certifications: [
      "Google UX Design Certificate",
      "Nielsen Norman Group UX Master Certified (NN/g)",
      "Interaction Design Foundation (IxDF) Specialist"
    ],
    projectsToBuild: [
      { title: "AI-Powered FinTech App Redesign", description: "Complete end-to-end design case study with personas, user journeys, low-fi wireframes, and interactive Figma prototype." },
      { title: "Enterprise Design System & Token Library", description: "Design system in Figma with 50+ components, auto-layout 5.0, dark mode tokens, and WCAG AAA compliance." },
      { title: "Doctor-Patient Telehealth Mobile Experience", description: "Mobile-first booking, video consultation, and prescription management flows validated via usability testing." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Design Principles", title: "Visual Design & Typography", description: "Color theory, typographic scale, 8pt grid systems, visual hierarchy, and contrast.", estimatedWeeks: "3 Weeks", topics: ["Visual Hierarchy", "Typography & Kerning", "Color Harmony", "8pt Grid Layouts"] },
      { phase: "Phase 2: Figma Mastery", title: "Component Systems & Prototyping", description: "Auto-layout, variables, component variants, interactive micro-animations in Figma.", estimatedWeeks: "4 Weeks", topics: ["Auto-layout & Constraints", "Variants & Properties", "Interactive Components", "Figma Variables"] },
      { phase: "Phase 3: UX Research Methods", title: "User Interviews & Testing", description: "Conducting user interviews, synthesizing affinity maps, card sorting, usability audits.", estimatedWeeks: "4 Weeks", topics: ["User Personas", "Empathy Maps", "Usability Testing Protocol", "Information Architecture"] },
      { phase: "Phase 4: Design Systems", title: "Scalable Token Architectures", description: "Creating tokenized style libraries, cross-platform components, and handoff specs.", estimatedWeeks: "4 Weeks", topics: ["Design Tokens", "Accessibility (WCAG)", "Developer Handoff", "Atomic Design"] },
      { phase: "Phase 5: Portfolio & Case Studies", title: "Polished Case Study Presentations", description: "Documenting problem statements, research insights, iterations, and final prototypes.", estimatedWeeks: "3 Weeks", topics: ["Case Study Storytelling", "Notion / Framer Portfolio", "Design Critiques", "App Mockup Renders"] }
    ]
  },
  {
    id: "blockchain-web3-developer",
    name: "Blockchain & Web3 Developer",
    category: "Technology",
    shortDescription: "Develop decentralized protocols, audit smart contracts, and build trustless distributed applications on blockchain networks.",
    match: 74,
    demand: "Medium to High",
    demandColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    salaryRange: "$100,000 - $180,000 / ₹12 - 35 LPA",
    salaryNote: "Indicative industry market range based on experience level and location",
    growth: "+22% (Next 5 Years)",
    experienceLevel: "Mid to Senior Level",
    education: "B.Tech/B.S in Computer Science, Cryptography, or Mathematics",
    description: "Blockchain Developers architect trustless financial networks and decentralized autonomous organizations. They write gas-optimized smart contracts in Solidity and Rust, interact with EVM nodes, and build zero-knowledge cryptographic proofs.",
    whyMatches: [
      "Interest in decentralized computing, cryptography, and game theory",
      "Values mathematically verifiable and trustless software architectures",
      "Curious about peer-to-peer protocols and financial engineering",
      "Strong attention to detail regarding code security and immutability"
    ],
    requiredSkills: [
      { name: "Solidity / Rust", requiredLevel: 85, benchmarkLevel: 80, category: "Smart Contracts" },
      { name: "Ethereum / EVM Internals", requiredLevel: 80, benchmarkLevel: 75, category: "Blockchain" },
      { name: "Ethers.js / Viem", requiredLevel: 80, benchmarkLevel: 75, category: "Web3" },
      { name: "Smart Contract Security", requiredLevel: 85, benchmarkLevel: 80, category: "Security" },
      { name: "Hardhat / Foundry", requiredLevel: 80, benchmarkLevel: 75, category: "Tools" },
      { name: "Cryptography & Hashing", requiredLevel: 75, benchmarkLevel: 70, category: "Theory" }
    ],
    toolsAndTech: ["Solidity", "Foundry", "Hardhat", "Viem", "Wagmi", "Alchemy", "IPFS", "OpenZeppelin", "Slither", "Rust"],
    typicalRoles: ["Smart Contract Engineer", "Web3 Frontend Developer", "Protocol Architect", "Smart Contract Auditor", "DeFi Quantitative Engineer"],
    recommendedCourses: [
      { title: "Cyfrin Updraft Smart Contract Developer Bootcamp", provider: "Cyfrin (Patrick Collins)", type: "Comprehensive Course", link: "https://updraft.cyfrin.io" },
      { title: "Ethereum and Solidity: The Complete Developer's Guide", provider: "Udemy", type: "Hands-on", link: "https://udemy.com" }
    ],
    certifications: [
      "Certified Ethereum Developer (B9lab)",
      "Blockchain Council Certified Solidity Developer",
      "Cyfrin Foundry Smart Contract Security Certification"
    ],
    projectsToBuild: [
      { title: "Decentralized Liquidity Staking & Yield Protocol", description: "Automated staking pool with compound reward distribution and ReentrancyGuard safety." },
      { title: "Decentralized Governance & Voting DAO", description: "On-chain token voting with quadratic weighting, time-lock controllers, and proposal lifecycle." },
      { title: "P2P Escrow & Milestone Payment Engine", description: "Multi-sig buyer-seller escrow with third-party arbitrator and gas-optimized settlement." }
    ],
    roadmapPhases: [
      { phase: "Phase 1: Blockchain Fundamentals", title: "Consensus, Merkle Trees & Hashes", description: "Proof of Work/Stake, cryptographic signatures, nonce, and peer-to-peer gossip.", estimatedWeeks: "3 Weeks", topics: ["SHA-256 & Keccak", "Public Key Cryptography", "EVM State Transition", "Gas Mechanics"] },
      { phase: "Phase 2: Solidity Programming", title: "Smart Contract Syntax & Design", description: "Data types, memory vs storage, modifiers, inheritance, events, and OpenZeppelin standards.", estimatedWeeks: "5 Weeks", topics: ["ERC-20 & ERC-721 Standards", "Storage Slots & Memory", "Custom Modifiers", "Error Handling"] },
      { phase: "Phase 3: Tooling & Testing", title: "Foundry & Automated Tests", description: "Fuzz testing, differential testing, deployment scripts, and gas benchmarking with Foundry.", estimatedWeeks: "4 Weeks", topics: ["Forge Tests & Fuzzing", "Cast CLI Commands", "Anvil Local Forking", "Gas Profiling"] },
      { phase: "Phase 4: Security & Auditing", title: "Vulnerability Prevention", description: "Reentrancy, integer overflow, front-running/MEV, delegatecall bugs, and Slither static analysis.", estimatedWeeks: "5 Weeks", topics: ["Reentrancy Attacks", "Oracle Manipulation", "Access Control Flaws", "Static Analysis (Slither)"] },
      { phase: "Phase 5: Full Stack Web3 App", title: "Frontend Integration with Viem/Wagmi", description: "Connecting MetaMask/WalletConnect, signing transactions, event listeners, and IPFS metadata.", estimatedWeeks: "4 Weeks", topics: ["WalletConnect & Viem", "IPFS Storage", "Subgraphs & The Graph", "Indexing Events"] }
    ]
  }
];

export const careerCategories = [
  "All",
  "Technology",
  "AI & Data",
  "Cybersecurity",
  "Business",
  "Design",
  "Healthcare",
  "Engineering",
  "Finance"
];
