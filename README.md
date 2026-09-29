# CareerAI — AI Career Guidance System
> **“Your Skills. Your Interests. Your Future.”**  
> *A Modern, Professional, Responsive Web Application Engineered for College Mini-Project Demonstration & Real-World Career Counseling.*

---

## 🌟 Executive Summary

**CareerAI** is an AI-powered career counseling platform that helps students discover optimal technical career paths based on their **interests, skills, academic background, personality, and career preferences**.

Rather than basic static surveys, CareerAI incorporates a **multi-factor weighted recommendation engine**, **interactive skill-gap radar benchmarks**, **sequential phase-by-phase learning roadmaps**, **curated resources**, a floating **AI Career Counseling Assistant**, and an **automated downloadable PDF career dossier**.

---

## 🚀 Key Features

1. **AI Career Assessment:**
   - 5-step diagnostic: Academic Background → Interactive Proficiency Rating (1-5★) → Cognitive Interests → Work Preferences → Career Ambitions.
   - High-tech real-time inference animation.

2. **Personalized Recommendations:**
   - Multi-vector algorithmic scoring across 50+ career paths.
   - Percentage match scores, tailored *"Why This Matches You"* rationales, required tools, and indicative market salary bands.

3. **Quantitative Skill Gap Matrix:**
   - Side-by-side comparison of **Current Student Skills vs. Required Industry Benchmarks** (e.g., Python: 80% vs 90%, SQL: 45% vs 75%, ML: 30% vs 85%).
   - Recharts visual radar and bar comparisons.
   - Interactive checkbox state persistence: mark competencies completed to track readiness score improvements in real-time.

4. **Sequential Phase Roadmaps:**
   - Interactive milestone tracking (Phases 1-6+) from college foundations to DSA, frameworks, capstone projects, internships, and interview prep.
   - Real-time percentage progress bar with completion celebration confetti.

5. **Curated Learning Resources Catalog:**
   - Handpicked repository across 6 categories: *Courses, YouTube, Official Documentation, Books, Industry Certifications, and Portfolio Projects*.
   - Filterable by Career, Category, and keyword search with Free/Paid labels.

6. **CareerAI Assistant (AI Chatbot):**
   - Floating widget with expand/collapse, message history, realistic typing indicators, and one-click prompt pills.
   - Handles queries on career selection, DSA, languages (Python vs Java), internships, and portfolio projects.

7. **Downloadable Career Report (PDF):**
   - Comprehensive certified candidate dossier including profile summary, diagnostic results, skill gap matrix, roadmap, and suggested portfolio projects.
   - Automated PDF download using `html2canvas` + `jspdf` and high-res print formatting.

8. **Admin Management Console:**
   - Student telemetry, assessment completion analytics, popular career distributions, and CRUD operations for careers and learning resources.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Framework** | **React.js 19** + **Vite 8** (Fast HMR, optimized bundling) |
| **Styling & UI** | **Tailwind CSS v3.4** (Dark Navy `#060911`, glowing accents, responsive grid) |
| **Data Visualization** | **Recharts** (Radar charts, Bar charts, Area charts, Donut charts) |
| **Icons** | **Lucide React** (Clean, modern iconography) |
| **Report Generation** | **jsPDF** & **html2canvas** (Client-side vector PDF generation) |
| **Micro-Interactions** | **canvas-confetti** (Milestone & assessment celebrations) |
| **Backend Framework** | **Node.js** + **Express.js** (REST API service architecture) |
| **Database & ODM** | **MongoDB** + **Mongoose** (With automatic in-memory fallback) |
| **Authentication** | **JWT (JSON Web Tokens)** + **Bcrypt.js** password hashing |
| **AI Integration Layer** | Clean LLM adapter architecture prepared for **Google Gemini API** |

---

## 📂 Project Structure

```
AI Career guidance system/
├── server/                               # Node.js + Express REST API Backend
│   ├── config/
│   │   └── db.js                         # MongoDB connection with resilient fallback
│   ├── middleware/
│   │   └── auth.js                       # JWT authentication verification
│   ├── models/
│   │   ├── User.js                       # Student & Admin User Mongoose model
│   │   ├── Assessment.js                 # Assessment responses & scores schema
│   │   ├── Career.js                     # Career taxonomies & roadmap schema
│   │   └── Resource.js                   # Learning resources schema
│   ├── routes/
│   │   ├── auth.js                       # Register, Login, Token generation
│   │   ├── careers.js                    # Query & search career taxonomies
│   │   ├── assessment.js                 # Diagnostic evaluation endpoints
│   │   ├── resources.js                  # Filterable learning catalog
│   │   ├── chat.js                       # AI counseling chat endpoints
│   │   └── admin.js                      # Analytics & administration
│   ├── services/
│   │   ├── recommendationEngine.js       # Multi-factor algorithmic scoring
│   │   └── aiChatService.js              # LLM / Gemini API adapter service
│   └── server.js                         # Express entrypoint on port 5000
│
├── src/                                  # React 19 Frontend
│   ├── components/
│   │   ├── Navbar.jsx                    # Modern responsive navbar with drawer
│   │   ├── Footer.jsx                    # Comprehensive footer with disclaimer
│   │   ├── AIChatbot.jsx                 # Floating CareerAI Assistant
│   │   ├── CareerCard.jsx                # Reusable career card with indicative salary
│   │   └── SkillProgressBar.jsx          # Interactive gap comparison bars
│   ├── data/
│   │   ├── careersData.js                # Realistic database of technical careers
│   │   └── mockResources.js              # Catalog of courses, YouTube, books & certs
│   ├── pages/
│   │   ├── LandingPage.jsx               # Hero, AI illustration, features, stats, CTA
│   │   ├── LoginPage.jsx                 # Student login & quick demo switcher
│   │   ├── RegisterPage.jsx              # Registration with college & degree
│   │   ├── DashboardPage.jsx             # Welcome banner, KPI cards & Recharts
│   │   ├── AssessmentPage.jsx            # 5-step questionnaire with proficiency stars
│   │   ├── RecommendationResultPage.jsx  # Top match, rationales & secondary roles
│   │   ├── CareerDetailsPage.jsx         # 12 detailed career sections & projects
│   │   ├── SkillGapPage.jsx              # Gap analysis, readiness score & radar chart
│   │   ├── LearningResourcesPage.jsx     # Filterable courses, docs & videos
│   │   ├── RoadmapPage.jsx               # Interactive phase milestone checklist
│   │   ├── ExploreCareersPage.jsx        # Searchable directory with 8 filters
│   │   ├── ProfilePage.jsx               # Student profile & history manager
│   │   ├── CareerReportPage.jsx          # Printable & downloadable PDF dossier
│   │   ├── AdminDashboardPage.jsx        # Administrative telemetry & CRUD forms
│   │   └── AboutPage.jsx                 # Architecture & counseling ethics
│   ├── services/
│   │   ├── api.js                        # Unified API client with automatic offline fallback
│   │   ├── authContext.jsx               # Auth state & session provider
│   │   └── recommendationEngine.js       # Client-side multi-factor scoring mirror
│   ├── App.jsx                           # Application routing & page view manager
│   ├── index.css                         # Tailwind directives & glassmorphic styling
│   └── main.jsx                          # React application entrypoint
├── index.html                            # Semantic HTML5 template with Inter fonts
├── package.json                          # Dependencies & NPM scripts
└── tailwind.config.js                    # Tailwind configuration & custom theme colors
```

---

## ⚡ Quick Start & Running Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Full Stack Application (Recommended)
Runs both the **Express Backend Server** (Port 5000) and **Vite Frontend** (Port 5173) concurrently:
```bash
npm run full
```

### 3. Or Run Frontend Only:
```bash
npm run dev
```
*Note:* The frontend has a built-in offline mock storage layer. Even if the backend server is stopped or MongoDB is not running locally, **all features (Assessment, Recommendations, Skill Gap, Roadmaps, PDF Export, Chatbot) will work 100% smoothly without crashing!**

### 4. Or Run Backend Server Only:
```bash
npm run server
```

---

## 🔑 Demo Credentials

For quick evaluation during college presentations, use the pre-configured accounts:

| Role | Email | Password | Quick One-Click Action |
| :--- | :--- | :--- | :--- |
| **Demo Student** | `alex.johnson@university.edu` | `student123` | Click **"Demo Student"** button on Login Page |
| **Demo Admin** | `admin@careerai.edu` | `admin123` | Click **"Demo Admin"** button on Login Page |

---

## 🧮 AI Recommendation Engine Architecture

The recommendation engine uses a 5-dimension weighted algorithmic model:

$$\text{Final Score} = (S \times 0.35) + (I \times 0.30) + (A \times 0.15) + (P \times 0.10) + (G \times 0.10)$$

* **$S$ (Skill Alignment - 35%):** Compares user ratings against minimum role thresholds.
* **$I$ (Cognitive Interests - 30%):** Evaluates affinity for AI, Security, Web, Robotics, etc.
* **$A$ (Academic Foundations - 15%):** Maps coursework (Math, DSA, OOP, Systems) to career theory.
* **$P$ (Workplace Preferences - 10%):** Considers analytical vs. creative style, team structures, and research curiosity.
* **$G$ (Long-Term Goals - 10%):** Aligns industry direction (Industry job, Higher studies, Startup).

---

## 📄 Guidance & Disclaimer Notice

*CareerAI provides educational and algorithmic career guidance derived from user-reported inputs and industry benchmark data. Salary figures and hiring growth rates are indicative market survey ranges, not guaranteed predictions of employment or legal warranties.*

---

## 🎓 Academic Mini Project Information
* **Course:** B.Tech / B.E Computer Science & Engineering Mini Project
* **Project Name:** AI Career Guidance System (CareerAI)
* **Status:** Production-Ready Demonstration Build
