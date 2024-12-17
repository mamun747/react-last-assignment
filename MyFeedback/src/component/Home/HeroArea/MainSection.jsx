import Footer from "@/component/Common/Footer"
import Activities from "./Activities"
import ExploreSection from "./ExploreSection"
import HeroCarousel from "./HeroCarousel"
import Trends from "./Trends"
import Hero from "../Hero/SelectionArea"

function MainSection() {
  return (
    <>
    <Hero/>
    <HeroCarousel/>
    <Trends/>
    <ExploreSection/>
    <Activities/>
    <Footer/>
    </>
  )
}

export default MainSection