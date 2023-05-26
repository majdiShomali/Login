import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar0 from "./components/Navbar"
import Registration from "./components/RegistrationForm"
import Example from "./components/LogInForm"

export default function App() {
  return (
  
    <BrowserRouter>
    <Navbar0/>
      <Routes>
          <Route index element={<Home />} />
          <Route path='Registration' element={<Registration />} />
          <Route path='Login' element={<Example />} />
      </Routes>
    </BrowserRouter>
  )
}


