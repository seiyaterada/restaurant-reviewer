import mongoose from 'mongoose';

const connectionString = 'mongodb://MongoDB:27017/mydatabase';

export default async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}