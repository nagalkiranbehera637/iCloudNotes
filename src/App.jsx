import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import About from './components/About'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import NoteProvider from './context/note/note';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Userprovider from "./context/note/user";

function App() {
 
  return (
    <>
    <BrowserRouter>
     <Userprovider>
      <NoteProvider>
      <Navbar/>
     
        
       <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        </Routes>
        </NoteProvider>
        </Userprovider>
     </BrowserRouter>
    </>
  )
}

export default App
