import { careersData } from '../data/careersData';
import { mockResources } from '../data/mockResources';
import { calculateCareerRecommendations } from './recommendationEngine';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Storage keys for resilient local fallback
const STORAGE_KEYS = {
  USER: 'careerai_user',
  TOKEN: 'careerai_jwt',
  ASSESSMENT: 'careerai_assessment',
  ROADMAP_PROGRESS: 'careerai_roadmap_progress',
  SKILLS_COMPLETED: 'careerai_skills_completed'
};

// Default demo student profile
const DEFAULT_DEMO_USER = {
  id: "student-101",
  name: "Alex Johnson",
  email: "alex.johnson@university.edu",
  educationLevel: "Bachelor of Technology (3rd Year)",
  college: "Institute of Technology & Science",
  degree: "Computer Science & Engineering",
  skills: [
    { name: "Python", level: 4 },
    { name: "Java", level: 3 },
    { name: "SQL", level: 3 },
    { name: "Mathematics", level: 4 },
    { name: "Problem Solving", level: 4 },
    { name: "Data Analysis", level: 3 }
  ],
  interests: ["Artificial Intelligence", "Machine Learning", "Software Development", "Data Science"],
  careerGoals: {
    industry: "AI & Data",
    targetRole: "AI/ML Engineer",
    timeline: "Higher Studies & High-Impact Tech Job"
  },
  role: "student"
};

/**
 * Helper to fetch from backend with timeout and fallback
 */
async function fetchWithFallback(endpoint, options = {}, fallbackFn) {
  try {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout for instant fallback

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (response.ok) {
      return await response.json();
    }
    throw new Error(`API returned ${response.status}`);
  } catch (err) {
    // Graceful offline/mock fallback
    // console.info(`Using offline client fallback for ${endpoint}:`, err.message);
    return fallbackFn();
  }
}

export const api = {
  // Authentication
  auth: {
    login: async (email, password) => {
      return fetchWithFallback(
        '/auth/login',
        {
          method: 'POST',
          body: JSON.stringify({ email, password })
        },
        () => {
          // Fallback demo auth
          const user = { ...DEFAULT_DEMO_USER, email: email || DEFAULT_DEMO_USER.email };
          const token = 'mock_jwt_token_' + Date.now();
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
          localStorage.setItem(STORAGE_KEYS.TOKEN, token);
          return { success: true, user, token };
        }
      );
    },

    register: async (userData) => {
      return fetchWithFallback(
        '/auth/register',
        {
          method: 'POST',
          body: JSON.stringify(userData)
        },
        () => {
          const user = {
            id: 'student-' + Math.floor(Math.random() * 9000 + 1000),
            name: userData.fullName || userData.name,
            email: userData.email,
            educationLevel: userData.educationLevel || "Undergraduate",
            college: userData.college || "University College",
            degree: userData.degree || "Computer Science",
            skills: [
              { name: "Python", level: 3 },
              { name: "Problem Solving", level: 4 }
            ],
            interests: ["Artificial Intelligence", "Software Development"],
            careerGoals: { industry: "Technology", targetRole: "Software Engineer" },
            role: "student"
          };
          const token = 'mock_jwt_token_' + Date.now();
          localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
          localStorage.setItem(STORAGE_KEYS.TOKEN, token);
          return { success: true, user, token };
        }
      );
    },

    getCurrentUser: () => {
      const stored = localStorage.getItem(STORAGE_KEYS.USER);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          return DEFAULT_DEMO_USER;
        }
      }
      return DEFAULT_DEMO_USER;
    },

    updateProfile: (updatedData) => {
      const current = api.auth.getCurrentUser();
      const merged = { ...current, ...updatedData };
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(merged));
      return { success: true, user: merged };
    },

    logout: () => {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
      return { success: true };
    }
  },

  // Careers API
  careers: {
    getAll: async () => {
      return fetchWithFallback('/careers', {}, () => careersData);
    },

    getById: async (id) => {
      return fetchWithFallback(`/careers/${id}`, {}, () => {
        return careersData.find(c => c.id === id) || careersData[0];
      });
    },

    search: async (query = '', category = 'All') => {
      return fetchWithFallback(`/careers/search?q=${encodeURIComponent(query)}&category=${encodeURIComponent(category)}`, {}, () => {
        let results = [...careersData];
        if (category && category !== 'All') {
          results = results.filter(c => c.category.toLowerCase() === category.toLowerCase());
        }
        if (query.trim()) {
          const q = query.toLowerCase();
          results = results.filter(c => 
            c.name.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q) ||
            c.requiredSkills.some(s => s.name.toLowerCase().includes(q)) ||
            (c.toolsAndTech || []).some(t => t.toLowerCase().includes(q))
          );
        }
        return results;
      });
    }
  },

  // Assessments
  assessment: {
    submit: async (assessmentData) => {
      return fetchWithFallback(
        '/assessment/submit',
        {
          method: 'POST',
          body: JSON.stringify(assessmentData)
        },
        () => {
          const result = calculateCareerRecommendations(assessmentData);
          localStorage.setItem(STORAGE_KEYS.ASSESSMENT, JSON.stringify(result));
          return { success: true, data: result };
        }
      );
    },

    getLatest: () => {
      const stored = localStorage.getItem(STORAGE_KEYS.ASSESSMENT);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // fallback
        }
      }
      // Return default calculated assessment for initial rich experience
      const defaultAssessment = calculateCareerRecommendations({
        academic: {
          educationLevel: "Bachelor of Technology",
          degree: "Computer Science & Engineering",
          favoriteSubjects: ["Mathematics", "Programming", "Data Structures"],
          performance: "Distinction / 8.8 CGPA"
        },
        skills: [
          { name: "Python", level: 4 },
          { name: "Machine Learning", level: 3 },
          { name: "Data Analysis", level: 4 },
          { name: "Mathematics", level: 4 },
          { name: "Problem Solving", level: 4 }
        ],
        interests: ["Artificial Intelligence", "Machine Learning", "Data Science"],
        preferences: {
          workStyle: "analytical",
          teamStructure: "collaborative",
          workEnvironment: "hybrid",
          researchInterest: true,
          entrepreneurshipInterest: false
        },
        goals: {
          industry: "AI & Data",
          pathType: "Job and Research",
          shortTerm: "Master Machine Learning and Deep Learning frameworks",
          longTerm: "Lead an applied AI research and engineering team"
        }
      });
      localStorage.setItem(STORAGE_KEYS.ASSESSMENT, JSON.stringify(defaultAssessment));
      return defaultAssessment;
    }
  },

  // Learning Resources
  resources: {
    getAll: async () => {
      return fetchWithFallback('/resources', {}, () => mockResources);
    },

    getByCareer: async (careerId) => {
      return fetchWithFallback(`/resources/career/${careerId}`, {}, () => {
        return mockResources.filter(r => !careerId || r.careerId === careerId);
      });
    }
  },

  // Roadmap & Skill Tracking
  progress: {
    getRoadmapProgress: (careerId) => {
      const stored = localStorage.getItem(`${STORAGE_KEYS.ROADMAP_PROGRESS}_${careerId}`);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {}
      }
      return [0]; // Phase 1 completed by default
    },

    saveRoadmapProgress: (careerId, completedPhases) => {
      localStorage.setItem(`${STORAGE_KEYS.ROADMAP_PROGRESS}_${careerId}`, JSON.stringify(completedPhases));
      return { success: true, completedPhases };
    },

    getCompletedSkills: () => {
      const stored = localStorage.getItem(STORAGE_KEYS.SKILLS_COMPLETED);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {}
      }
      return ["Python", "Problem Solving"];
    },

    toggleSkillCompleted: (skillName) => {
      const current = api.progress.getCompletedSkills();
      const updated = current.includes(skillName)
        ? current.filter(s => s !== skillName)
        : [...current, skillName];
      localStorage.setItem(STORAGE_KEYS.SKILLS_COMPLETED, JSON.stringify(updated));
      return updated;
    }
  },

  // AI Chat Assistant
  chat: {
    sendMessage: async (message, history = []) => {
      return fetchWithFallback(
        '/chat',
        {
          method: 'POST',
          body: JSON.stringify({ message, history })
        },
        () => {
          // Realistic intelligent rule-based / contextual NLP counselor responses
          const lower = message.toLowerCase();

          if (lower.includes('data scientist') || lower.includes('data science')) {
            return {
              reply: `To become a **Data Scientist**, here is your optimal sequence:\n\n1. **SQL Mastery:** Window functions, aggregations, and subqueries.\n2. **Python Data Stack:** Pandas, NumPy, Seaborn, and Matplotlib.\n3. **Statistics & Probability:** Hypothesis testing, A/B experimentation, and regression.\n4. **Applied Scikit-Learn:** Decision trees, XGBoost, and clustering.\n5. **Business Storytelling:** Translate statistical metrics into ROI and executive decks.\n\n*Tip:* Check out the **Skill Gap Analysis** tab to see your current preparedness for Data Science!`,
              suggestedActions: ["View Data Scientist Career", "Compare Skill Gap"]
            };
          }

          if (lower.includes('ai/ml') || lower.includes('machine learning') || lower.includes('ai engineer')) {
            return {
              reply: `For **AI/ML Engineering**, prioritize these 4 pillars:\n\n• **Core Foundations:** Python (OOP & Vectorization), Linear Algebra, and Calculus.\n• **Frameworks:** Master PyTorch or TensorFlow for deep neural networks.\n• **Specialization:** Focus on either Computer Vision (CNNs, YOLO) or Generative AI / NLP (Transformers, LLM fine-tuning, RAG).\n• **MLOps:** Docker containerization, FastAPI serving, and ONNX optimization.\n\nWould you like me to open the AI/ML Roadmap for you?`,
              suggestedActions: ["Open AI/ML Roadmap", "View Recommended Courses"]
            };
          }

          if (lower.includes('python or java') || lower.includes('java or python')) {
            return {
              reply: `Great question! The choice depends on your target domain:\n\n• **Choose Python** if your ambition lies in **AI/ML, Data Science, Scripting, or Cloud Automation**. Python has the dominant ecosystem (PyTorch, Pandas, Scikit-learn).\n• **Choose Java** if you aim for **Enterprise Backend Microservices, Large-Scale Distributed Banking Systems, or Android App Development** (Spring Boot ecosystem).\n\nFor college projects and AI careers, **Python offers the highest versatility and fastest prototyping!**`,
              suggestedActions: ["Start Career Assessment", "Explore Python Careers"]
            };
          }

          if (lower.includes('projects') || lower.includes('project to build')) {
            return {
              reply: `Recruiters look for projects with **real-world depth**, not generic tutorials! Recommended projects by track:\n\n• **AI/ML:** Build an End-to-End RAG Knowledge Search with Vector DB and FastAPI.\n• **Full Stack:** Real-time collaborative workspace with WebSockets and JWT security.\n• **Cybersecurity:** Home lab SIEM with automated attack alerts.\n• **Data Analytics:** E-commerce customer churn & cohort LTV retention dashboard.\n\nEach career page has a dedicated **Projects to Build** section!`,
              suggestedActions: ["Explore Projects", "View Skill Gap"]
            };
          }

          if (lower.includes('internship') || lower.includes('internships')) {
            return {
              reply: `To land a high-quality internship:\n\n1. **Portfolio over Resume:** Host 2-3 clean GitHub repos with clear README GIFs and live deployment URLs.\n2. **Targeted Applications:** Don't mass-apply. Find early-stage founders or engineering managers on LinkedIn.\n3. **DSA Fundamentals:** Solve 75-100 core LeetCode problems (Arrays, HashMaps, Two Pointers, Trees).\n4. **Download your CareerAI Report:** You can use our downloadable PDF report to showcase your verified skill alignment during interviews!`,
              suggestedActions: ["Download Career Report", "View Roadmap"]
            };
          }

          if (lower.includes('which career') || lower.includes('suitable for me')) {
            return {
              reply: `I can help determine your ideal career match! Taking our **AI Career Assessment** analyzes your academic background, coding skills, favorite subjects, and working personality across 50+ career paths.\n\nIf you've already completed it, your highest recommended match is currently **AI/ML Engineer (94% Match)**!`,
              suggestedActions: ["Start Career Assessment", "View Top Recommendation"]
            };
          }

          return {
            reply: `I understand! As your **CareerAI Counselor**, I recommend aligning your coursework and portfolio projects with high-growth industries like **AI/ML, Full Stack Engineering, and Cloud Architecture**.\n\nYou can ask me about required skills, salary insights, internship roadmaps, or compare programming languages anytime!`,
            suggestedActions: ["Explore All Careers", "Check Skill Gap"]
          };
        }
      );
    }
  },

  // Admin Statistics
  admin: {
    getStats: async () => {
      return fetchWithFallback('/admin/stats', {}, () => {
        return {
          totalStudents: 15420,
          assessmentsCompleted: 12890,
          averageMatchScore: 86.4,
          topCareers: [
            { name: "AI/ML Engineer", count: 4850, percentage: 38 },
            { name: "Full Stack Developer", count: 3210, percentage: 25 },
            { name: "Data Scientist", count: 2190, percentage: 17 },
            { name: "Cloud & DevOps", count: 1420, percentage: 11 },
            { name: "Cybersecurity Analyst", count: 1220, percentage: 9 }
          ],
          skillsDemand: [
            { skill: "Python", demand: 94 },
            { skill: "SQL", demand: 88 },
            { skill: "React.js", demand: 82 },
            { skill: "Machine Learning", demand: 85 },
            { skill: "Docker & Cloud", demand: 78 }
          ],
          recentActivity: [
            { user: "Sarah K.", action: "Completed AI Assessment", career: "AI/ML Engineer", time: "10 mins ago" },
            { user: "Dev Patel", action: "Downloaded Career Report", career: "Full Stack Developer", time: "25 mins ago" },
            { user: "Michael Chen", action: "Finished Phase 3 Roadmap", career: "Cybersecurity Analyst", time: "1 hour ago" },
            { user: "Priya Sharma", action: "Completed Skill Gap Test", career: "Data Scientist", time: "2 hours ago" }
          ]
        };
      });
    }
  }
};
