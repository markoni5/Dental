import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  const connectionStatus = mongoose.connection.readyState;
  console.log("MongoDB connection status:", connectionStatus);
  if (connectionStatus === 1) {
    console.log("MongoDB already connected");
    return;
  }
  if (connectionStatus === 2) {
    console.log("MongoDB connection in progress...");
    return;
  }
  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "dentalStore",
      bufferCommands: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
