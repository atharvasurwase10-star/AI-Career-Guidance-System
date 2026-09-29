import express from 'express';

const router = express.Router();

// GET /api/admin/stats
router.get('/stats', (req, res) => {
  res.json({
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
  });
});

export default router;
