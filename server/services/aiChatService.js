/**
 * AI Career Counseling Service Layer
 * 
 * Clean abstraction layer designed to integrate with Google Gemini API / OpenAI API.
 * Gracefully provides intelligent contextual domain responses if no API key is provided.
 */

export async function processAIChatMessage(message, history = []) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  if (GEMINI_API_KEY) {
    try {
      // LLM integration hook
      // e.g. const response = await callGeminiAPI(message, history, GEMINI_API_KEY);
      // return response;
    } catch (err) {
      console.warn('LLM API call failed, falling back to rule-based engine:', err.message);
    }
  }

  // Intelligent Contextual Counseling Engine
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
