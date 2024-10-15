import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const mongoUri =
      "mongodb+srv://vidhi2005ajmera:k4n1UR2C5AHLhhnL@cluster0.9zswp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // MongoDB connection URI from environment variables
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
