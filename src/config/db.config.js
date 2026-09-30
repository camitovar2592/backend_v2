import mongoose from "mongoose";
import { env } from "./env.config.js"

//crear una funcion para conectarnos a DB
export async function connectDB() {
    try {
        await mongoose.connect(env.dburl);
        console.log('connected');
    } catch (error) {
        console.log(error)
    }
}