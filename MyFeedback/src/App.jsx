import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./component/Home/Index"
import Trends from "./component/Home/Trends/Trends"

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