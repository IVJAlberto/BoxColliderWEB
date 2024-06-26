import { useEffect, useState } from "react"

import { Helmet } from "react-helmet"

import { Hero } from "../components/Hero"
import { Loading } from "../components/Loading"
import { MaskClip } from "../components/MaskClip"
import { Carousel } from "../components/Carousel"
import { Services } from "../components/Services"
import { Footer } from "../components/Footer"

export const HomePage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [footer, setFooter] = useState(false);

  const options = {
    root: document.querySelector("#idFooter"),
    rootMargin: "0px",
    threshold: 1.0,
  };
  
  const observador = new IntersectionObserver((entries,options) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting )
        setFooter(true)
      else
        setFooter(false)
    })
  })

  useEffect(() => {
    const elFoot = document.querySelectorAll('#idFooter');
    elFoot.forEach((el) => observador.observe(el));
    // console.log(footer);
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
    <Helmet>
        <title> Box Collider</title>
        <meta name='description' content="Box Collider, Desarrollo de Software, Aplicaciones con readidad aumentada, Aplicaciones con readidad virtual, Desarrollo de videojuegos, Desarrollo de páginas web, Desarrollo de aplicaciones móviles, creamos lo imposible, Transformamos tus ideas en software de calidad de una manera eficiente para lograr tu satisfacción,Fusionamos tecnología y creatividad para dar vida a tus visiones digitales. Desde aplicaciones móviles hasta experiencias de realidad aumentada, estamos aquí para llevar tus ideas al siguiente nivel,Utilizamos React, Vue, HTML+CSS+JavaScript y Angular para desarrollar sitios web atractivos y receptivos que se adaptan a tus necesidades específicas,Desde Android Studio hasta Flutter para Android e iOS, creamos aplicaciones móviles de vanguardia que destacan en funcionalidad y diseño,Desarrollamos software inmersivo utilizando el motor Unity3D y el visor Oculus Rift S,Llevamos más allá nuestra visión del mundo real sumándole elementos virtuales, Software Development, Applications with augmented reality, Applications with virtual reality, Video game development, Web page development, Mobile application development, we create the impossible,We transform your ideas into quality software in an efficient way to achieve your satisfaction,We fuse technology and creativity to bring your digital visions to life. From mobile apps to augmented reality experiences, we're here to take your ideas to the next level,We use React, Vue, HTML+CSS+JavaScript and Angular to develop attractive and responsive websites that fit your specific needs,From Android Studio to Flutter for Android and iOS, we create cutting-edge mobile apps that excel in functionality and design,We develop immersive software using the Unity3D engine and the Oculus Rift S headset,We take our vision of the real world further by adding virtual elements"/>
        <link rel="canonical" href={"https://boxcollider.com.mx"}/>
    </Helmet>
    <div className="w-[100vw] overflow-hidden">
      <div className="pt-24"></div>
      {/* <Loading/> */}
      <Hero/>
      <Services/>
      <MaskClip/>
      <Carousel/>
      <Footer/>
      <button onClick={()=> ScrollToTopButton()}
            className={`z-50 scroll-to-top fixed bottom-4 right-4 rounded-full
              transition duration-300 hover:bg-gray-700 hover:text-gray-200
            ${scrollPosition >= 100 && !footer ? 'visible' : 'invisible'}`}>
          <img src="/assets/homepage/toparrow.svg" 
          className="w-12 h-12  rounded-full bg-gray-200" alt=""/>
      </button>
    </div>
    </>
  )
}
