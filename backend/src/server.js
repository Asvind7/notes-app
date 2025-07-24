import express from "express";
import dotenv from "dotenv"
import cors from "cors"

import notesRoutes from "./routes/notesRoute.js"
import { connectDB } from "./config/db.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT;


//middleware
app.use(cors({
  origin: 'http://localhost:5173' // Allow requests from your front-end origin
}));
app.use(express.json()) //this middleware json file


app.use("/api/notes", notesRoutes);

connectDB().then(()=> {
  app.listen(5001,() =>{
    console.log("server started on port",PORT);
  })
});
