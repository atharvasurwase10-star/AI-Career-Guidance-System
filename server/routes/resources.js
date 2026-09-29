import express from 'express';
import { mockResources } from '../../src/data/mockResources.js';

const router = express.Router();

// GET /api/resources
router.get('/', (req, res) => {
  const { category, careerId } = req.query;
  let results = [...mockResources];

  if (category && category !== 'All') {
    results = results.filter(r => r.category.toLowerCase() === category.toLowerCase());
  }

  if (careerId && careerId !== 'All') {
    results = results.filter(r => r.careerId === careerId);
  }

  res.json(results);
});

// GET /api/resources/career/:careerId
router.get('/career/:careerId', (req, res) => {
  const results = mockResources.filter(r => r.careerId === req.params.careerId);
  res.json(results);
});

export default router;
