import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const mongoUri = process.env.MONGO_DB_URI; // MongoDB connection URI from environment variables
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error;
  }
};

export default connectToMongoDB;
