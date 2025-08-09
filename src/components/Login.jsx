import React, { useContext, useState } from 'react'
import { UserContext } from '../context/note/user'
import Spinner from './Spinner'

function Login() {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const {Validuser}=useContext(UserContext)
  const [spinner, setspinner] = useState(false)
  const handleclick=async(e)=>{
   e.preventDefault()

   setspinner(true)
   await Validuser(username,password)
   setspinner(false)
} 
  return (
    <div className='container d-flex flex-column align-items-center'>
        <form className='w-50  m-3' onSubmit={handleclick}>
        <div className="form-group m-2">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>{setusername(e.target.value)}}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group m-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" onChange={(e)=>{setpassword(e.target.value)}}/>
        </div>
        {/* <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" disabled={(spinner) || !(password.length>0 && username.length>0) } className="btn btn-primary m-2" >Submit</button>
        </form>
        {spinner&&<Spinner />}
    </div>
  )
}

export default Login