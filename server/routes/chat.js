import express from 'express';
import { processAIChatMessage } from '../services/aiChatService.js';

const router = express.Router();

// POST /api/chat
router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ message: 'Message text is required.' });
    }

    const response = await processAIChatMessage(message, history);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
