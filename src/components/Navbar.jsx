import React, { useContext } from 'react'
import {Link,NavLink} from 'react-router-dom'
import { UserContext } from '../context/note/user'

function Navbar() {
  // let loc=useLocation()
  const {LogOut}=useContext(UserContext)
  const handelclick=async()=>{
    
    if(confirm('Do you want to log out?')){
      LogOut()
    }
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-4">
  <Link className="navbar-brand" to="/">CloudNotes</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                About
              </NavLink>
            </li>
          </ul>
          <form className="form-inline ms-auto">
        {localStorage.getItem('token')?(
        <Link className="btn btn-primary mx-1" onClick={handelclick} role="button">Logout</Link>):
        (
        <>
        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
        <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
        </>
        )}
    </form>
  </div>
</nav>
  
   </>
  )
}

export default Navbar 