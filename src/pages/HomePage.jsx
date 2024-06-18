import { Hero } from "../components/Hero"
import { Loading } from "../components/Loading"
import { MaskClip } from "../components/MaskClip"
import { Services } from "../components/Services"

export const HomePage = () => {
  return (
    <>
      {/* <Loading/> */}
      {/* <Hero/> */}
      <Services/>
      {/* <MaskClip/> */}
      <div className="h-[100vh] mt-[200vh] bg-black"></div>
    </>
  )
}
