// import {createContext} from 'react'
//  const NoteContext =  createContext()

//  export default NoteContext
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Your backend API URL
    withCredentials: true, // Allow sending cookies with requests
});

export default api;