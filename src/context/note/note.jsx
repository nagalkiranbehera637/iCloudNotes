import  { useState, useEffect, createContext} from 'react';
import axios from 'axios';
import api from './api';
import { useNavigate } from 'react-router-dom';
// import NoteContext from './Usecontext';
// import NoteContext from './Usecontext.js'
// Create context

export  const NoteContext=createContext()
function NoteProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const host = 'http://localhost:3000';
  const navigate=useNavigate()
  // Get all notes
  const getAllNotes = async () => {
    try {
    
      const response = await api.get(`/note`);
    
      // if(response.data.success===false){
      //   navigate('/login')
      // }
      setNotes(response.data); 

      // console.log(notes)
    } catch (error) {
             
     if (error.response?.status === 401) {
        localStorage.removeItem('token');
      navigate("/login");
    } else {
      console.error("Error fetching notes:", error);
    }
    }
  };

  // Add a new note
  const addNote = async (title, description, tag) => {
    try {
        // console.log(title,description,tag,'1111')
      const response = await api.post(`/note`, {
        title,
        description,
        tag,
      });
  
      setNotes((prevNotes) => [...prevNotes, response.data]);
     
    } catch (error) {
      if (error.response?.status === 401) {
             localStorage.removeItem('token');
      navigate("/login");
    } else {
      console.error("Error fetching notes:", error);
    }
    
    }
  };


  const deleteNote = async (id) => {
    try {
      console.log(id)
      console.log('delete')
      await api.delete(`/note/${id}`);
      console.log('delete')
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      getAllNotes()
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  
  const editNote = async (id, title, description, tag) => {
    console.log(id,title,description,tag)
    try {
      await api.put(`/note/${id}`, {
        title,
        description,
        tag,
      });
      
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, title, description, tag } : note
        )
      );
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  return (
    <NoteContext.Provider value={{notes,addNote,getAllNotes,deleteNote,editNote}} >
      {children}
    </NoteContext.Provider>
  );
}

export default NoteProvider;


