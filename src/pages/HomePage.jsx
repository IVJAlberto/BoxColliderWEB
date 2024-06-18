import { Hero } from "../components/Hero"
import { Loading } from "../components/Loading"
import { MaskClip } from "../components/MaskClip"
import { Carousel } from "../components/Carousel"
import { Services } from "../components/Services"

export const HomePage = () => {
  return (
    <>
      {/* <Loading/> */}
      {/* <Hero/>
      <Services/>
      <MaskClip/> */}
      <section className="h-[100vh]  flex-wrap content-cente">
        <Carousel/>
      </section>
    </>
  )
}
