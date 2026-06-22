import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn('MONGO_URI missing. API will run, but database writes need MongoDB.');
      return;
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

export default connectDB;
