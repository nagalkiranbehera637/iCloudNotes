import React, { useContext, useEffect,useRef, useState } from 'react'
import Noteitem from './Noteitem'
import Createnote from './Createnote'
import { NoteContext} from '../context/note/note'
function Notes() {
    const {notes,getAllNotes,editNote}=useContext(NoteContext)
    useEffect(() => {
      getAllNotes()
    }, [])
    
    const Tref = useRef(null)
    const Trefclose=useRef(null)
    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:"general"})
   const  updateNote=(note)=>{
    console.log()
    Tref.current.click()
    setNote({id:note.id,etitle:note.title,edescription:note.description,etag:note.tag})
   }
    const handleclick=()=>{
       
        editNote(note.id,note.etitle,note.edescription,note.etag)
        Trefclose.current.click()
     }
  return (
     <>
    <Createnote/>
   
<button type="button" ref={Tref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <div className="form-group m-2">
            <label htmlFor="etitle">Title</label>
            <input type="text" className="form-control" id="etitle" aria-describedby="" value={note.etitle} placeholder="Enter title" onChange={(e)=>{setNote({...note,[e.target.id]:e.target.value})}}/>
            
        </div>
        <div className="form-group m-2">
            <label htmlFor="edescription">Description</label>
            <input type="text" className="form-control" id="edescription" placeholder="description" value={note.edescription} onChange={(e)=>{setNote({...note,[e.target.id]:e.target.value})}}/>
        </div>
       <div className="form-group m-2">
            <label htmlFor="etag">Tag</label>
            <input type="text" className="form-control" id="etag" placeholder="" value={note.etag} onChange={(e)=>{setNote({...note,[e.target.id]:e.target.value})}}/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" ref={Trefclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={handleclick} className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

    <div className='container'>
        <h3>Notes:</h3>
   <div className='row'>
    {notes.length==0&& <p>Add your "NOTE" from above form...</p>}
        {Array.isArray(notes) && notes.map((note)=>{
            return( <Noteitem  key={note.id} id={note.id}
                title={note.title} description={note.description} tag={note.tag} updateNote={updateNote}/>)
        })}
       
        </div>
    </div>
     </>
  )
}

export default Notes