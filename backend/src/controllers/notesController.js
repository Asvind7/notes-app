import Note from "../models/Note.js"


export async function getAllNotes(req ,res){
  try {
    const notes = await Note.find().sort({createdAt:-1});  //newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getAll notes controller")
    res.status(500).json({message:"Internal server error",error})
  }
}

export async function getNoteByid(req,res){
  try {
    const notes = await Note.findById(req.params.id);
    if(!notes)  return res.status(404).json({message:"Note not found"});
    res.status(200).json(notes)
  } catch (error) {
    console.error("error in getAll notes controller")
    res.status(500).json({message:"Internal server error",error})
  }
}

export async function createNote(req,res){
  try {
    const {title,content}= req.body
    const notes=new Note({title,content})
    await notes.save();
    res.status(201).json({message:"Note created successfully"});
  } catch (error) {
    console.error("error in creating notes controller")
    res.status(500).json({message:"Internal server error",error})
  }
}

export async function updateNote(req,res){
  try {
    const {title,content}=req.body;
    const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content});
    if(!updatedNote) return res.status(404).json({message:"Note not found"})
    res.status(200).json({message:"Note updated successfly"})
  } catch (error) {
    console.error("error in updating notes controller")
    res.status(500).json({message:"Internal server error",error})
  }
}

export  async function deleteNote(req,res){
  try {
    const {title,content}=req.body;
    const deletedNote=await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message:"Note not found"});
    res.status(200).json({message:"Note deleted successfly"})
  } catch (error) {
    console.error("error in updating notes controller")
    res.status(500).json({message:"Internal server error",error})
  }
}

