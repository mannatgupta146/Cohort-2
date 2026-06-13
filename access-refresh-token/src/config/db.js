import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/access-refresh-tokens`)
        console.log("Connected to MongoDB successfully")
    } catch (error) {
        console.error("Failed to connect to MongoDB", error)
    }
}