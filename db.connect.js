import mongoose from "mongoose";

const dbName = process.env.DB_NAME
const dbUserName=process.env.DB_USERNAME;

const dbPass = encodeURIComponent(process.env.DB_PASSWORD)

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPass}@cluster0.f6lxmpg.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};
