import { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { useDeviceSize } from "./hooks/useDeviceSize";
import { Button } from "@mui/material";

const Carousel = () => {

    const sliderRef = useRef(null);
    const [slides, setSlides] = useState(1);
    const [width, height ] = useDeviceSize();

    useEffect(() => {
      if(width <= 800)
        setSlides(1)
      else if(width <= 1400)
        setSlides(2)
      else
        setSlides(3)
    }, [width])

    const handlePrev = useCallback(() => {
      sliderRef.current.swiper.slidePrev();
    },[],)

    const handleNext = useCallback(() => {
        sliderRef.current.swiper.slideNext();
    },[],)

    const { t } = useTranslation();
    const productos = t("prods[]",{returnObjects: true});

    return (
      <section id="idPortafolio" className={` ${height>=800 ? ' py-24' : 'pt-0'} h-[100vh]  ss:px-2 xs:px-12 sm:px-32 md:px-0 flex-wrap content-center flex justify-center`}>
        <div className="h-[90%] w-[100%] grid grid-rows-10 grid-cols-1 md:grid-rows-1 md:grid-cols-10">
          <div tabIndex={0} className="z-40 h-[100%] row-span-1 md:col-span-1 flex-wrap content-end md:content-center flex justify-between md:justify-end px-10 md:px-0 translate-y-14 md:translate-y-0">
            <Button aria-label="Slide Anterior" disableRipple style={{ backgroundColor: 'transparent' }}>
              <img loading="lazy" width={48} height={48} className="h-[36px] md:h-[50px] invisible md:visible bg-black rounded-full p-1" onClick={handlePrev} src="/assets/carousel/leftarrow.svg" alt="Left Arrow" />
            </Button>
          </div>
          
          <Swiper
              spaceBetween={5}
              slidesPerView={slides}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
              }}
              initialSlide={0}
              loop={true}
              navigation={true}
              pagination={{
                el: ".swiper-pagination",
                dynamicBullets: true,
                clickable: true,
              }}
              modules={[Navigation, Autoplay, Pagination]}  
              ref={sliderRef}
              className="h-[100%] w-[100%] row-span-9 md:col-span-8"
            >
              {
                  productos.map(slide => (
                      <SwiperSlide key={slide.k}> 
                          <div onClick={()=>{ console.log(slide.title);}} className={`h-full w-full mt-8 px-8 md:p-8`}>
                            <div className="h-[90%]">
                              <img loading='lazy' className="h-full w-full flex justify-center object-cover rounded-2xl" src={`${slide.img}`} alt={`${slide.title}`} />
                            </div>
                          </div>
                      </SwiperSlide>
                  ))
                  
              } 
          <div className="swiper-pagination visible md:invisible"></div>
          </Swiper>
          <div tabIndex={0} className="z-40 h-[0%] md:h-[100%] row-span-0 col-span-1 flex-wrap content-center flex justify-start">
            <Button aria-label="Slide Siguiente" disableRipple style={{ backgroundColor: 'transparent' }}>
              <img loading="lazy" width={48} height={48} className="h-[50px] bg-black rounded-full p-1 invisible md:visible" onClick={handleNext} src="/assets/carousel/rightarrow.svg" alt="Right Arrow" />
            </Button>
          </div>
        </div>
      </section>
    )
}

export default Carousel;