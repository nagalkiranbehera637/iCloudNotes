 import {Children, createContext} from 'react'
 import {useNavigate} from 'react-router-dom'
import axios from 'axios'
//  import { NoteContext } from './note' 
import api from './api'
export const UserContext=createContext()
 const Userprovider =({children})=>{
    const host="http://localhost:3000"
    const navigate=useNavigate();
    const Validuser = async(username,password)=>{
        const response=await api.post(`${host}/login`,{'email':username,password})
      //    const success= response
      //   console.log(response.data)
        if(response.data.success===true){
             localStorage.setItem('token','true');
            navigate('/')
        }
        return response.data;
    }
    const LogOut=async()=>{
      const response=await api.get(`${host}/logout`)
      if(response.data.success===false){
       localStorage.removeItem('token')
            navigate('/login')
        }
    }
    const Createuser= async(email,password,name)=>{
          const response=await api.post(`${host}/register`,{email:email,password:password,name:name})
         //  console.log(response.data)
          if(response.data.success===true){
            localStorage.setItem('token','true')
            navigate('/')
        }
          return response.data;
    }
    return (
       <UserContext.Provider value={{Validuser,LogOut,Createuser}}>
        {children}
       </UserContext.Provider> 
    )
 }
 export default Userprovider