
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import My_Project from "./pages/My_Project";


function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my_project" element={<My_Project />} />
    </Routes>
    
    </>
  )
}

export default App
