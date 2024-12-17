import Footer from "@/component/Common/Footer"
import Activities from "./Activities"
import ExploreSection from "./ExploreSection"
import HeroCarousel from "./HeroCarousel"
import Trends from "./Trends"

function MainSection() {
  return (
    <>
    <HeroCarousel/>
    <Trends/>
    <ExploreSection/>
    <Activities/>
    <Footer/>
    </>
  )
}

export default MainSection