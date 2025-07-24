import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import api from '../lib/axios';
import toast from 'react-hot-toast';
import NoteCard from '../components/NoteCard';
import { NoNotesFound } from '../components/NoNotesFound';


const HomePage = () => {
  const [notes, setNotes]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    const fetchNotes =async() =>{
      try {
        const res=await api.get("/notes")
        setNotes(res.data);
      } catch (error) {
        console.log("Error in fetching");
        toast.error("error in fetching notes")
      }finally{
        setLoading(false)
      }
    };
  
    fetchNotes();
  },[]);

  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading  && <div className="text-center text-primary py-10">Loading notes...</div>}
        
        {notes.length ===0 && <NoNotesFound />}

        {notes.length>0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note =>( 
              <div>
                <NoteCard key={note._id} note={note} setNotes={setNotes}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div> 

 )};

export default HomePage;
