import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  education: {
    level: { type: String, default: 'Undergraduate' },
    college: { type: String, default: 'Institute of Technology' },
    degree: { type: String, default: 'Computer Science' }
  },
  skills: [
    {
      name: String,
      level: { type: Number, default: 3 }
    }
  ],
  interests: [String],
  careerGoals: {
    industry: String,
    targetRole: String,
    timeline: String
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
