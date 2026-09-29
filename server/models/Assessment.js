import mongoose from 'mongoose';

const AssessmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  answers: {
    academic: Object,
    skills: Array,
    interests: Array,
    preferences: Object,
    goals: Object
  },
  scores: {
    readinessScore: Number,
    topMatchScore: Number
  },
  recommendations: [
    {
      id: String,
      name: String,
      category: String,
      match: Number,
      demand: String,
      salaryRange: String,
      personalizedReasons: [String]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Assessment = mongoose.models.Assessment || mongoose.model('Assessment', AssessmentSchema);
