import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export const Clients = () => {

  const slides = [
    { key: 1,img:"Delta"},
    { key: 2,img:"K&J"},
    { key: 3,img:"Capital C"},
    { key: 4,img:"Yeko"},
    { key: 5,img:"TTM"},
    { key: 6,img:"0Miedo"},

  ];

  return (
    <section className="h-[128px] mt-[210vh] flex-wrap content-center">
       <Swiper
              spaceBetween={5}
              slidesPerView={4}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
              }}
              initialSlide={0}
              // loop={true}
              modules={[Autoplay]}  
              className="h-[100%] w-[100%] bg-black"
            >
              {
                  slides.map(slide => (
                      <SwiperSlide key={slide.key}> 
                        <div className="w-full h-full bg-slate-200 flex-wrap content-center">
                          <h1 className="text-base font-montserratregular text-azul-0m text-center">{slide.img}</h1>
                        </div>
                      </SwiperSlide>
                  ))
                  
              } 
          </Swiper>
    </section>
  )
}
