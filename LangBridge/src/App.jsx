import { BrowserRouter, Route, Routes } from "react-router";
import { useState,useEffect } from "react";
import './App.css'
import Navbar from "./companets/Nav/Nav"
import Home from "./companets/Home/Home";
function App(){
const [darkMode, setDarkMode] = useState(
  localStorage.getItem("mode") === "dark"
)
  useEffect(()=>{
    const saveMode = localStorage.getItem("mode")
    if(saveMode === "dark"){
      setDarkMode(true)
      document.body.classList.add("dark")
      
    }
  }, [])
  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("mode", newMode ? "dark" : "light");

    if (newMode) {
      document.body.classList.add("dark");

    } else {
      document.body.classList.remove("dark");
    }
  };
   return(
    <BrowserRouter>
      <Navbar darkMode = {darkMode} setDarkMode={setDarkMode} toggleMode={toggleMode}/>
    <Routes>
    <Route path="/" element={<Home darkMode={darkMode}/>}/>

    </Routes>
    </BrowserRouter>
   )
}
export default App
