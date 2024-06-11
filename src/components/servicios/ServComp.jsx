/* eslint-disable react/prop-types */
import { useEffect } from "react";

export const ServComp = ({k,title,desc,img}) => {

    const trans0 = `${k == 0 ? 'md:row-start-1 col-start-1 md:mt-[20%]' : ''}`;
    const trans1 = `${k == 1 ? 'md:row-start-1 col-start-2 md:translate-y-[50%]' : ''}`;
    const trans2 = `${k == 2 ? 'md:row-start-2 col-start-1' : ''}`;
    const trans3 = `${k == 3 ? 'md:row-start-2 col-start-2 md:translate-y-[50%] md:mb-[60%] lg:mb-[50%] xl:mb-[40%]' : ''}`;
    
    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if( entry.isIntersecting )entry.target.classList.add('animate-fade-up');
          if( entry.isIntersecting )entry.target.classList.add('animate-duration-500');
          if( entry.isIntersecting )entry.target.classList.add('animate-ease-in');
        })
      })

    useEffect(() => {
        const elServ = document.querySelectorAll('.anim');
        elServ.forEach((el) => observador.observe(el));
    }, [])

    return (
    <>
        <section className={`w-full py-12 flex justify-center  ${trans0} ${trans1} ${trans2} ${trans3} `}>
            <div className={`anim`}>
                <div className="flex justify-center pb-4">
                    <img className="w-[120px] lg:w-[140px] " src={`${img}`} alt="" />
                </div>
                <div className="flex justify-center pb-4">
                    <hr className="border-2 border-white rounded-2xl w-[60%] lg:w-[50%] xl:w-[40%]"/>
                </div>
                <p className="font-montserratregular font-bold text-white text-3xl text-center pb-4 lg:text-4xl">{title}</p>
                <p className="font-montserratregular text-white text-xl text-center px-12 lg:text-2xl xl:text-3xl xl:px-36">{desc}</p>
            </div>
        </section>
    </>
    )
}
