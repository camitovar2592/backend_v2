import mongoose from "mongoose";

//Schema
const userSchema = mongoose.Schema({

    name: String, 
    lastName: String,
    email: String,
    password: String,
});

//Modelo
export const userModel = mongoose.model('users', userSchema);

