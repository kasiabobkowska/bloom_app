import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import { errorResponderHandler, invalidPathHandler } from "./middleware/errorHandler.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Server is running");
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// static assets
const uploadsPath = new URL('uploads', import.meta.url).pathname;
console.log('uploadsPath:', uploadsPath);
app.use('/uploads', express.static(uploadsPath));




app.use(invalidPathHandler);
app.use(errorResponderHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));