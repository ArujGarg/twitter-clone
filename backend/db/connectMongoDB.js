import mongoose, { mongo } from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to mongodb: ${error}`)
        process.exit(1);
    }
}

export default connectMongoDB;