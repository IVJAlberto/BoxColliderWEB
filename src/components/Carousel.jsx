import { Swiper, SwiperSlide, } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import 'swiper/css';

export const Carousel = () => {

  const slides = [
    { key: 1,img:"/assets/carousel/app.jpg"},
    { key: 2,img:"/assets/carousel/game.jpg"},
    { key: 3,img:"/assets/carousel/web.jpg"},
    { key: 4,img:"/assets/carousel/rv.jpg"},
    { key: 5,img:"/assets/carousel/ra.jpg"},
  ]

    return (
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          // grabCursor= {false}
          // autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //     pauseOnMouseEnter: true,
          // }}
          initialSlide={0}
          effect="fade"
          modules={[EffectFade, Autoplay]}  
          className="h-[100%] w-[100%]"
      >
          {
              slides.map(slide => (
                  <SwiperSlide key={slide.key}> 
                      <div className={`h-full w-full rounded-2xl`}>
                            <img className="h-[800px] w-[500px]" src={`${slide.img}`} alt="" />
                      </div>
                  </SwiperSlide>
              ))
              
          }
      </Swiper>
    )
}
