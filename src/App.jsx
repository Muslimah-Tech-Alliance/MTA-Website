import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AboutUs from "./components/Landing Page Components/AboutUs.jsx"
import PastEvents from "./components/PastEvents.jsx"
import Resources from "./components/Resources.jsx"
import LandingPage from "./pages/LandingPage.jsx"


import Programs from "./components/Landing Page Components/Programs.jsx";
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<LandingPage/>}/>
      <Route path ="/about-us" element={<AboutUs/>}/>
      <Route path ="/past-events" element={<PastEvents/>}/>
      <Route path ="/programs" element={<Programs/>}/>
      <Route path ="/resources" element={<Resources/>}/>
    </Routes>
    </BrowserRouter>
        
  )
}

export default App
