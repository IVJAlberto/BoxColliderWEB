import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { ServComp } from "./servicios/ServComp";

export const Services = () => {

    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.target.className.includes('fadeleft')){
                if( entry.isIntersecting )entry.target.classList.add('animate-fade-left');
            }else if(entry.target.className.includes('faderight')){
                if( entry.isIntersecting )entry.target.classList.add('animate-fade-right');
            }
            if( entry.isIntersecting )entry.target.classList.add('animate-duration-500');
            if( entry.isIntersecting )entry.target.classList.add('animate-ease-in');
        })
      })

    useEffect(() => {
        const elServ0 = document.querySelectorAll('.fadeleft');
        elServ0.forEach((el) => observador.observe(el));
        const elAnimDerecha = document.querySelectorAll('.faderight');
        elAnimDerecha.forEach((el) => observador.observe(el));
    }, [])

    const { t, ready } = useTranslation();
    const styleServices = 'font-thefontbold text-white text-3xl ss:text-4xl xs:text-5xl sm:text-6xl'
    if(!ready) return 'Loading...';
    const servicios = t("servs[]",{returnObjects: true});


    return (
    <div id="idServicios" className="w-full h-full bg-primary">   

        <section className="w-full h-[500px] grid grid-rows-6 pt-24">

            <div className="faderight row-span-1 grid grid-cols-10 animate-fade-right animate-once animate-duration-500 animate-ease-in">
                <div className="col-span-1 flex-wrap content-end">
                    <div className="h-[50%] flex-wrap content-center xs:content-start xs:pt-2 sm:pt-0">
                        <img className=' ss:h-[5px] xs:h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] xl:h-[10px]' src='/assets/servicios/rectangulo.svg' alt="" />
                    </div>
                </div>
                <div className="col-span-7 flex-wrap content-end pl-[5vw]">
                    <p className={`${styleServices} sm:col-span-8 text-start md:text-center`}>
                        SOLUTIONS
                    </p>
                </div>
            </div>
            <div className="fadeleft row-span-1 animate-fade-left animate-once animate-duration-500 animate-ease-in">
                <p className={`${styleServices} col-span-7 sm:col-span-8 text-center md:pl-[9vw]`}>
                    FOR YOU
                </p>
            </div>
            <div className="fadeleft row-span-4 flex-wrap content-start xs:content-center md:content-end">
                <p className="font-montserratregular text-white text-base pl-16 pr-8 text-end 
                            ss:text-xl xs:pl-[30vw] sm:text-2xl md:pr-24 lg:pl-[40vw] xl:pl-[50vw] xl:text-3xl">
                    {t('serv0')}
                </p>
            </div>

        </section>

        <section className="h-full md:grid grid-cols-2 grid-rows-2">
            {servicios.map( s => <ServComp key={s.k} {...s} /> )}
        </section>

    </div>
    )
}
