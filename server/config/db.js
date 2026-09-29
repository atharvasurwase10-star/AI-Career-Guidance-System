import mongoose from 'mongoose';

export async function connectDB() {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/careerai_db';

  try {
    // Attempt connecting to local/remote MongoDB instance
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 2000 // Quick timeout so backend starts immediately with fallback
    });
    console.log('✅ Connected to MongoDB successfully.');
    return true;
  } catch (err) {
    console.warn('⚠️ MongoDB connection could not be established:', err.message);
    console.log('ℹ️ Running Express API in resilient in-memory/mock fallback mode.');
    return false;
  }
}
