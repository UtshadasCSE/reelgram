import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URL!;

// checked is mongodb uri exist in env file. Is not throw an error
if (!MONGODB_URI) {
  throw new Error("Please define the mongodb uri in ENV file");
}

let cached = global.mongoose;

// if cached not exist then declare it
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectionToDatabase() {
  // check connection is already in cached
  if (cached.conn) {
    return cached.conn;
  }
  // if not connction is cached then connect db
  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
    };
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then(() => mongoose.connection);
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
  return cached.conn;
}
