import express from 'express';
import { careersData } from '../../src/data/careersData.js';

const router = express.Router();

// GET /api/careers - all careers
router.get('/', (req, res) => {
  res.json(careersData);
});

// GET /api/careers/search - search and filter
router.get('/search', (req, res) => {
  const { q = '', category = 'All' } = req.query;
  let results = [...careersData];

  if (category && category !== 'All') {
    results = results.filter(c => c.category.toLowerCase() === category.toLowerCase());
  }

  if (q.trim()) {
    const query = q.toLowerCase();
    results = results.filter(c => 
      c.name.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query) ||
      c.requiredSkills.some(s => (s.name || s).toLowerCase().includes(query))
    );
  }

  res.json(results);
});

// GET /api/careers/:id - single career
router.get('/:id', (req, res) => {
  const career = careersData.find(c => c.id === req.params.id);
  if (!career) {
    return res.status(404).json({ message: 'Career not found.' });
  }
  res.json(career);
});

export default router;
