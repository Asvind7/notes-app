import express from "express"
import { getAllNotes,createNote,updateNote,deleteNote,getNoteByid} from "../controllers/notesController.js";

const router =express.Router();

router.get("/",getAllNotes)
router.get("/:id",getNoteByid)
router.post("/",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router

