import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { NoteContext } from '../context/note/note'
function Noteitem(props) {
  const {deleteNote}=useContext(NoteContext)
  const handleDelete=async(id)=>{
     await deleteNote(id)
  }
  return (
    <div className="col-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.id}</p>
        <Link to="/" className="btn  mx-1" onClick={()=>{props.updateNote({'id':props.id ,'title':props.title,'description':props.description,'tag':props.tag})}}><i className="ri-edit-box-line "></i></Link>
        <Link to="/" className="btn mx-1 " id={props.id} onClick={()=>{handleDelete(props.id)}}><i className="ri-delete-bin-line"></i></Link>
      </div>
    </div>
  </div>
  )
}

export default Noteitem