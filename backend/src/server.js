import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT || 5001;
const __dirname=path.resolve()


//middleware
if(process.env.NODE_ENV !== "production"){
  app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from your front-end origin
  }));
}

app.use(express.json()) //this middleware json file



// Middleware for production CORS (if needed for deployment)
if (process.env.NODE_ENV === "production") {
  app.use(cors());
}

app.use("/api/notes", notesRoutes);

// Export for Vercel serverless functions
export default app;

// Local development server start
if (process.env.NODE_ENV !== "production") {
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log("Server started locally on port", PORT);
    });
  });
} else {
  // Establish connection for serverless environment
  connectDB();
}
