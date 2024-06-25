import { useEffect, useState } from "react"

import { Hero } from "../components/Hero"
import { Loading } from "../components/Loading"
import { MaskClip } from "../components/MaskClip"
import { Carousel } from "../components/Carousel"
import { Services } from "../components/Services"
import { Footer } from "../components/Footer"

export const HomePage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToTopButton = document.getElementById('scroll-to-top');

  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const ScrollToTopButton = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <div className="pt-24"></div>
      {/* <Loading/> */}
      <Hero/>
      <Services/>
      <MaskClip/>
      <Carousel/>
      <Footer/>
      <button onClick={()=> ScrollToTopButton()}
            className={`z-50 scroll-to-top fixed bottom-4 right-4 
            bg-gray-800 text-white rounded-full 
            transition duration-300 hover:bg-gray-700 
            hover:text-gray-200
            ${scrollPosition >= 100 ? 'visible' : 'invisible'}`}>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240227155250/up.png" 
        className="w-16 h-16 rounded-full bg-white" alt=""/>
    </button>
    </>
  )
}
