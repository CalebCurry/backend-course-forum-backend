import { Post, User } from './models.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.MONGO_URL!;
mongoose.connect(connectionString);

const posts = await Post.find().exec();

console.log(posts);

mongoose.connection.close();
