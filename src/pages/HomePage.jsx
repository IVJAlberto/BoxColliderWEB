import { Hero } from "../components/Hero"
import { Loading } from "../components/Loading"
import { MaskClip } from "../components/MaskClip"
import { Carousel } from "../components/Carousel"
import { Services } from "../components/Services"

export const HomePage = () => {
  return (
    <>
      {/* <Loading/> */}
      <Hero/>
      <Services/>
      <MaskClip/>
      <section className="h-[100vh] mt-[200vh] pt-24 ss:px-2 xs:px-12 sm:px-32 md:px-0 flex-wrap content-center flex justify-center">
        <Carousel/>
      </section>
    </>
  )
}
