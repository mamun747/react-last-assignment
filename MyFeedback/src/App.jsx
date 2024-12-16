import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Trends from "./component/Home/HeroArea/Trends"
import Home from "./component/Home/Index"
import Navbar from "./component/Navbar"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trend" element={<Trends/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App