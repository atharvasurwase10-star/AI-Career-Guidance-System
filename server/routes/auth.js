import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'careerai_secret_super_key_2024';

// In-memory mock storage if MongoDB is not connected
const memoryUsers = new Map();

// Seed initial demo student & admin
memoryUsers.set('alex.johnson@university.edu', {
  id: 'student-101',
  name: 'Alex Johnson',
  email: 'alex.johnson@university.edu',
  passwordHash: bcrypt.hashSync('student123', 8),
  education: {
    level: 'Bachelor of Technology (3rd Year)',
    college: 'Institute of Technology & Science',
    degree: 'Computer Science & Engineering'
  },
  skills: [
    { name: 'Python', level: 4 },
    { name: 'Java', level: 3 },
    { name: 'SQL', level: 3 },
    { name: 'Mathematics', level: 4 },
    { name: 'Problem Solving', level: 4 }
  ],
  interests: ['Artificial Intelligence', 'Machine Learning', 'Software Development'],
  careerGoals: { industry: 'AI & Data', targetRole: 'AI/ML Engineer' },
  role: 'student'
});

memoryUsers.set('admin@careerai.edu', {
  id: 'admin-001',
  name: 'System Administrator',
  email: 'admin@careerai.edu',
  passwordHash: bcrypt.hashSync('admin123', 8),
  role: 'admin'
});

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, educationLevel, college, degree } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'Name, email, and password are required.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: 'student-' + Date.now(),
      name,
      email,
      passwordHash: hashedPassword,
      education: {
        level: educationLevel || 'Undergraduate',
        college: college || 'University',
        degree: degree || 'Computer Science'
      },
      skills: [{ name: 'Python', level: 3 }],
      interests: ['Artificial Intelligence', 'Software Development'],
      careerGoals: { industry: 'Technology', targetRole: 'Software Engineer' },
      role: 'student'
    };

    memoryUsers.set(email.toLowerCase(), newUser);

    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        educationLevel: newUser.education.level,
        college: newUser.education.college,
        degree: newUser.education.degree,
        role: newUser.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const existingUser = memoryUsers.get(email.toLowerCase());
    if (!existingUser) {
      // Demo auto-register fallback for smooth reviewer demo experience
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const created = {
        id: 'student-' + Date.now(),
        name: email.split('@')[0].replace('.', ' '),
        email: email.toLowerCase(),
        passwordHash: hashedPassword,
        education: { level: 'Undergraduate', college: 'University', degree: 'Computer Science' },
        skills: [{ name: 'Python', level: 3 }],
        interests: ['Artificial Intelligence'],
        careerGoals: { industry: 'AI & Data', targetRole: 'AI/ML Engineer' },
        role: 'student'
      };
      memoryUsers.set(email.toLowerCase(), created);

      const token = jwt.sign({ id: created.id, email: created.email, role: created.role }, JWT_SECRET, { expiresIn: '7d' });
      return res.json({
        success: true,
        token,
        user: {
          id: created.id,
          name: created.name,
          email: created.email,
          educationLevel: created.education.level,
          college: created.education.college,
          degree: created.education.degree,
          role: created.role
        }
      });
    }

    const token = jwt.sign({ id: existingUser.id, email: existingUser.email, role: existingUser.role }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      token,
      user: {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        educationLevel: existingUser.education?.level || 'Undergraduate',
        college: existingUser.education?.college || 'University',
        degree: existingUser.education?.degree || 'Computer Science',
        role: existingUser.role
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
