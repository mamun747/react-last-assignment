import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Trends from "./component/Home/HeroArea/Trends"
import Home from "./component/Home/Index"
import Navbar from "./component/Navbar"
import SearchResult from "./component/SearchResult/SearchResult"
import Details from "./component/SearchResult/Details"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/trend" element={<Trends/>}/>
      <Route path="/result" element={<SearchResult/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App