import { Hero } from "../components/Hero"
import { Loading } from "../components/Loading"
import { MaskClip } from "../components/MaskClip"
import { Carousel } from "../components/Carousel"
import { Services } from "../components/Services"
import { Footer } from "../components/Footer"

export const HomePage = () => {
  return (
    <>
      {/* <Loading/> */}
      <Hero/>
      <Services/>
      <MaskClip/>
      <Carousel/>
      <Footer/>
    </>
  )
}
