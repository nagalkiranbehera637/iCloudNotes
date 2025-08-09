import { useContext ,useState} from "react"
import {NoteContext }from '../context/note/note';

function Createnote() {
    const {notes,addNote}=useContext(NoteContext)
    // console.log(notes)
   const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
     const [tag, settag] = useState('')
     const handleclick=(e)=>{
        e.preventDefault()
        addNote(title,description,tag)
        settitle("")
        setdescription("")
        settag('')
     }
  return (
     <div className='container w-50 d-flex flex-column justify-content-center p-2'>
     <form className='w-70 mx-3 p-2'>
        <div className="form-group m-2">
            <label htmlFor="text">Title</label>
            <input type="text" className="form-control" id="text" aria-describedby="" value={title} placeholder="Enter title" onChange={(e)=>{settitle(e.target.value)}}/>
            
        </div>
        <div className="form-group m-2">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
        </div>
       <div className="form-group m-2">
            <label htmlFor="tag">Tag</label>
            <input type="text" className="form-control" id="tag" placeholder="" value={tag} onChange={(e)=>{settag(e.target.value)}}/>
        </div>
        <button type="submit" disabled={!(title.length>3||description.length>3)} className="btn btn-primary m-2" onClick={handleclick}>Add Note</button>
        </form>
        </div>
  )
}

export default Createnote