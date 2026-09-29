import express from 'express';
import { calculateCareerRecommendations } from '../services/recommendationEngine.js';

const router = express.Router();

let latestAssessmentCache = null;

// POST /api/assessment/submit
router.post('/submit', (req, res) => {
  try {
    const assessmentData = req.body;
    const result = calculateCareerRecommendations(assessmentData);
    latestAssessmentCache = result;
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/assessment/latest
router.get('/latest', (req, res) => {
  if (latestAssessmentCache) {
    return res.json(latestAssessmentCache);
  }
  // Default mock assessment
  const defaultRes = calculateCareerRecommendations({
    academic: { favoriteSubjects: ['Mathematics', 'Programming'] },
    skills: [{ name: 'Python', level: 4 }, { name: 'Mathematics', level: 4 }],
    interests: ['Artificial Intelligence', 'Machine Learning']
  });
  res.json(defaultRes);
});

export default router;
