import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { useDeviceSize } from "./hooks/useDeviceSize";

export const Clients = () => {

  const [slides, setSlides] = useState(1);
  const [width, height ] = useDeviceSize();

  useEffect(() => {
    if(width <= 800)
      setSlides(2)
    else if(width <= 1400)
      setSlides(3)
    else
      setSlides(4)
  }, [width])

  const clients = [
    { key: 1, img:"/assets/clients/delta.png" ,alt:"Delta"},
    { key: 2, img:"/assets/clients/capc.png" ,alt:"Capital C"},
    { key: 3, img:"/assets/clients/irekani.png" ,alt:"Irekani"},
    { key: 4, img:"/assets/clients/leon.png" ,alt:"Leon"},
    { key: 5, img:"/assets/clients/ttm.png" ,alt:"TTM"},
    { key: 6, img:"/assets/clients/ek.png" ,alt:"EK"},
    { key: 7, img:"/assets/clients/jaime.png" ,alt:"JaimeCP"},
    { key: 8, img:"/assets/clients/knj.png" ,alt:"K&J"},
    { key: 9, img:"/assets/clients/yeko.png" ,alt:"Yeko"},
    { key: 10, img:"/assets/clients/olu.png" ,alt:"Olu"},
    { key: 11, img:"/assets/clients/tesemex.png" ,alt:"Tesemex"},

  ];

  return (
    <section className="h-[128px] mt-[210vh] flex-wrap content-center">
       <Swiper
              spaceBetween={0}
              slidesPerView={slides}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
              }}
              initialSlide={0}
              modules={[Autoplay]}  
              className="h-[100%] w-[100%] bg-slate-200"
            >
              {
                  clients.map(slide => (
                      <SwiperSlide key={slide.key}> 
                        <div className="w-full h-full  flex-wrap content-center flex justify-center">
                          <img className="sm:h-[60%]" src={`${slide.img}`} alt={`${slide.alt}`} />
                        </div>
                      </SwiperSlide>
                  ))
                  
              } 
          </Swiper>
    </section>
  )
}
