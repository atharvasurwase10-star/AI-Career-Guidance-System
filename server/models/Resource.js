import mongoose from 'mongoose';

const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  type: {
    type: String, // Course, YouTube, Documentation, Book, Certification, Project
    default: 'Course'
  },
  url: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'All Levels'],
    default: 'Beginner'
  },
  isPaid: {
    type: String,
    default: 'Free'
  },
  description: String
});

export const Resource = mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);
