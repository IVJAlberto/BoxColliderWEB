import { useEffect, useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";

import { ServComp } from "./servicios/ServComp";
import { ParallaxImage } from "../components/ParallaxImage";
import { useDeviceSize } from "./hooks/useDeviceSize";

const Services = () => {

    const ref = useRef(null);
    const [width, height ] = useDeviceSize();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const scrollYProgressSpring = useSpring(scrollYProgress, {
        stiffness: 300,
        damping: 40,
    });
    const [outputRange, setOutputRange] = useState(14);
    let scale = useTransform(scrollYProgressSpring, [0, 1], [1, outputRange]);
    
    useEffect(() => {
        // if(width >= 2560)
        //     setOutputRange(22)
        // else if(width >= 2062)
        //     setOutputRange(22)
        // else if (width >= 1856)
        //     setOutputRange(16)
        // else    
            setOutputRange(20)
    }, [width])
    
    useEffect(() => {
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
    <div id="idServicios" className=" w-full h-full">   

        <ParallaxImage  secDiv={'absolute w-[100%] h-[350px] z-30 opacity-75 md:opacity-100'} 
                cnParallax={'h-[700px] overflow-y-hidden -translate-y-[20%] '} 
                cnDiv={'flex justify-end overflow-x-hidden translate-x-[40%] ss:translate-x-[35%] xs:translate-x-[25%] sm:translate-x-[20%] md:translate-x-[15%] lg:translate-x-[10%] xl:translate-x-[8%]'} 
                cnImage={''}
                speed={10}
                id={'idWireCube'} imgURL={'/assets/servicios/wirecube.png'}/>

        <section ref={ref} className="mask-background relative z-10 overflow-clip h-[200vh] bg-primary">
            <motion.div
                style={{ scale }}
                className="sticky left-0 top-0 grid h-screen origin-[50%_75%] gap-2 [grid-template-rows:4fr_1fr] md:origin-[50%_72%]"
            >

                <div className={`w-full ${height>800 ? 'h-[50vh] pt-24' : ' h-[400px] pt-12'}  grid grid-rows-6 `}>

                    <div className="faderight row-span-1 grid grid-cols-10 animate-fade-right animate-once animate-duration-500 animate-ease-in">
                        <div className="col-span-1 flex-wrap content-end">
                            <div className="h-[50%] flex-wrap content-center xs:content-start xs:pt-2 sm:pt-0">
                                <img className=' ss:h-[5px] xs:h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] xl:h-[10px]' src='/assets/servicios/rectangulo.svg' alt="Rectangulo" />
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
                    <div className={`fadeleft row-span-4 flex-wrap content-center ${height<=675 ? 'content-start pt-8' : ''}`}>
                        <p className={`font-montserratregular text-white text-base px-12 text-center 
                                        ${height<=675 ? 'text-base' : 'ss:text-xl xl:text-3xl'} `}>
                            {t('serv0')}
                        </p>
                    </div>

                </div>

                <div className={`row-span-4 h-[300px] mt-[-20vh] w-full flex-wrap content-center flex justify-center`}>
                    <div className="window-mask">
                        <img className="w-[250px]" src="/assets/isotipo/isotipofullwhite.svg" />
                    </div>
                </div>

            </motion.div>
        </section>

        <section className="h-full  mt-[-50vh] bg-primary md:grid grid-cols-2 grid-rows-2 pb-48 md:pb-6">
            {servicios.map( s => <ServComp key={s.k} {...s} /> )}
        </section>

        <ParallaxImage  secDiv={'z-0 absolute w-[100%] h-[350px]'} 
                cnParallax={'h-[700px] overflow-y-hidden -translate-y-[25%] '} 
                cnDiv={'flex justify-start overflow-x-hidden -translate-x-[40%]  ss:-translate-x-[35%] xs:-translate-x-[25%] sm:-translate-x-[20%] md:-translate-x-[15%] lg:-translate-x-[10%] xl:-translate-x-[8%]'} 
                cnImage={''}
                speed={10}
                id={'idWireCube'} imgURL={'/assets/servicios/cubel.png'}/>

    </div>
    )
}

export default Services;
