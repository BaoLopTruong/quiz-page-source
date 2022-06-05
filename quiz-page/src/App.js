import Home from "./components/home-pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './components/login-pages/login.css'
import './components/login-pages/signup.css'

import Login from './components/login-pages/Login'
import SignUp from "./components/login-pages/SignUp"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
       
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
