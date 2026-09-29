import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';
import careerRoutes from './routes/careers.js';
import assessmentRoutes from './routes/assessment.js';
import resourceRoutes from './routes/resources.js';
import chatRoutes from './routes/chat.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/careers', careerRoutes);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'CareerAI API Service',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
});

// Serve frontend static build in production (All-in-One deployment)
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// For SPA routing, send index.html for non-API routes
app.get('/{splat}', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    res.status(404).json({ error: 'Endpoint not found' });
  }
});

// Start Server on 0.0.0.0 for Cloud Deployment (Render/Railway/Heroku)
async function startServer() {
  try {
    await connectDB();
  } catch (err) {
    console.warn('Database initialization warning:', err.message);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 CareerAI Server listening on 0.0.0.0:${PORT}`);
  });
}

startServer();
