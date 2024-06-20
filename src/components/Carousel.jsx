import { useCallback, useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import { useDeviceSize } from "./hooks/useDeviceSize";

export const Carousel = () => {

    const sliderRef = useRef(null);
    const [slides, setSlides] = useState(1);
    const [width] = useDeviceSize();

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
      <div className="h-[90%] w-[100%] grid grid-rows-10 grid-cols-1 md:grid-rows-1 md:grid-cols-10">
        <div className="h-[80%] row-span-1 md:col-span-1 flex-wrap content-end md:content-center flex justify-between md:justify-end px-10 md:px-0 translate-y-14 z-20 md:translate-y-0">
          <img className="h-[36px] md:h-[50px] bg-black rounded-full p-1" onClick={handlePrev} src="/assets/carousel/leftarrow.svg" alt="" />
          <img className="h-[36px] bg-black rounded-full p-1 md:invisible" onClick={handleNext} src="/assets/carousel/rightarrow.svg" alt="" />
        </div>
        <Swiper
            spaceBetween={5}
            slidesPerView={slides}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            initialSlide={0}
            rewind={true}
            navigation={true}
            modules={[Navigation, Autoplay]}  
            ref={sliderRef}
            className="h-[100%] w-[100%] row-span-9 md:col-span-8 "
          >
            {
                productos.map(slide => (
                    <SwiperSlide key={slide.k}> 
                        <div className={`h-full w-full px-8 md:p-8`}>
                          <div className="h-[90%]">
                            <img className="h-full w-full flex justify-center object-cover rounded-2xl" src={`${slide.img}`} alt="" />
                          </div>
                          <div className="h-[10%] flex-wrap content-center">
                            <h1 className="text-xl md:text-2xl font-montserratregular text-azul-0m text-center">{slide.title}</h1>
                          </div>
                        </div>
                    </SwiperSlide>
                ))
                
            }
        </Swiper>
        <div className="h-[0%] md:h-[80%] row-span-0 col-span-1 flex-wrap content-center flex justify-center">
          <img className="h-[50px] bg-black rounded-full p-1 invisible md:visible" onClick={handleNext} src="/assets/carousel/rightarrow.svg" alt="" />
        </div>
      </div>
    )
}
