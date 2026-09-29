import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: String,
  shortDescription: String,
  skills: [
    {
      name: String,
      requiredLevel: Number,
      category: String
    }
  ],
  education: String,
  salaryRange: String,
  demand: String,
  growth: String,
  toolsAndTech: [String],
  typicalRoles: [String],
  roadmap: [
    {
      phase: String,
      title: String,
      description: String,
      estimatedWeeks: String,
      topics: [String]
    }
  ]
});

export const Career = mongoose.models.Career || mongoose.model('Career', CareerSchema);
