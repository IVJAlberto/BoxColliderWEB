import { useEffect, useState,Suspense, lazy } from "react"

import { Helmet } from "react-helmet"

import { Loading } from "../components/Loading"
const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const MaskClip = lazy(() => import('../components/MaskClip'));
const Carousel = lazy(() => import('../components/Carousel'));
import { Footer } from "../components/Footer"
import { Clients } from "../components/Clients";


export const HomePage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [footer, setFooter] = useState(false);
  
  const observador = new IntersectionObserver((entries) => {
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
  }, [footer])

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
        {/* <meta name='description' content="Box Collider, Desarrollo de Software, Aplicaciones con readidad aumentada, Aplicaciones con readidad virtual, Desarrollo de videojuegos, Desarrollo de páginas web, Desarrollo de aplicaciones móviles, creamos lo imposible, Transformamos tus ideas en software de calidad de una manera eficiente para lograr tu satisfacción,Fusionamos tecnología y creatividad para dar vida a tus visiones digitales. Desde aplicaciones móviles hasta experiencias de realidad aumentada, estamos aquí para llevar tus ideas al siguiente nivel,Utilizamos React, Vue, HTML+CSS+JavaScript y Angular para desarrollar sitios web atractivos y receptivos que se adaptan a tus necesidades específicas,Desde Android Studio hasta Flutter para Android e iOS, creamos aplicaciones móviles de vanguardia que destacan en funcionalidad y diseño,Desarrollamos software inmersivo utilizando el motor Unity3D y el visor Oculus Rift S,Llevamos más allá nuestra visión del mundo real sumándole elementos virtuales, Software Development, Applications with augmented reality, Applications with virtual reality, Video game development, Web page development, Mobile application development, we create the impossible,We transform your ideas into quality software in an efficient way to achieve your satisfaction,We fuse technology and creativity to bring your digital visions to life. From mobile apps to augmented reality experiences, we're here to take your ideas to the next level,We use React, Vue, HTML+CSS+JavaScript and Angular to develop attractive and responsive websites that fit your specific needs,From Android Studio to Flutter for Android and iOS, we create cutting-edge mobile apps that excel in functionality and design,We develop immersive software using the Unity3D engine and the Oculus Rift S headset,We take our vision of the real world further by adding virtual elements"/> */}
        <meta name='description' content="Desarrollo de software interactivo."/>
        <link rel="canonical" href={"https://boxcollider.com.mx"}/>
    </Helmet>
    <div id="idHome" className="overflow-hidden">
      <div className="pt-16"></div>
      <Suspense fallback={<Loading/>}>
        <Hero/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <Services/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <Carousel/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <MaskClip/>
      </Suspense>
      <Clients/>
      <Footer/>
      <button tabIndex={0} aria-label="Scroll to top" onClick={()=> ScrollToTopButton()}
            className={`z-50 scroll-to-top fixed bottom-4 right-2 md:right-4 rounded-full
              transition duration-300 hover:bg-gray-700 hover:text-gray-200
            ${scrollPosition >= 100 && !footer ? 'visible' : 'invisible'}`}>
          <img loading="lazy" width={12} height={12} src="/assets/homepage/toparrow.svg" 
          className="w-10 md:w-12 rounded-full bg-gray-200" alt="Top Arrow"/>
      </button>
    </div>
    </>
  )
}
