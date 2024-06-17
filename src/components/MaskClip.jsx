import { useEffect, useRef } from "react"

import { useDeviceSize } from "./hooks/useDeviceSize";

export const MaskClip = () => {

    const [width, height ] = useDeviceSize();
    let img;
    let targetSize;
    let initialMaskSize;

    const asignarImagen = () => {
        const aspectRatio = width/height;
        if(aspectRatio>=0.8){
            img = '/assets/maskclip/abstractNebula.jpg';
            initialMaskSize = 14;
            targetSize = 13.6;
        }else{
            img = '/assets/maskclip/asian.png';
            targetSize = 13.9;
            initialMaskSize = 14.5;
        } 
    }
    asignarImagen();
    useEffect(() => {
        asignarImagen();
    }, [width])
    

    const refContainer = useRef(null);
    const refStickyMask = useRef(null);

    const easing = 0.1;
    let easedScrollProgress = 0;

    useEffect(() => {
        requestAnimationFrame(animate);
    }, [width])

    const getScrollProgress = () => {
        let scrollProgress = refStickyMask.current.offsetTop / (refContainer.current.getBoundingClientRect().height - window.innerHeight);
        if(scrollProgress > 1 )
            scrollProgress = 1;
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress
        // console.log('scrollprogress: ' + getScrollProgress());
    }

    const animate = () => {
        const maskSizeProgress = targetSize * getScrollProgress();
        
        refStickyMask.current.style.webkitMaskSize = (initialMaskSize - maskSizeProgress) * 100 + "%";
        requestAnimationFrame(animate)
    }

    
    return (
        <section className="">
            <div ref={refContainer} className="absolute h-[200vh] w-full flex justify-center flex-wrap content-start ">
                <div ref={refStickyMask} className="stickyMask sticky top-0 flex h-[100vh] justify-center flex-wrap content-start">
                    <img className="h-full " src={`${img}`} alt="" />
                </div>
            </div>
            <div className="absolute h-[200vh] w-[100%] flex justify-start flex-wrap content-end">
                {/* <div className="w-full font-thefontbold text-primary text-5xl  pb-[60vh] text-center md:pt-[7vh]">
                    SOLUTIONS
                </div> */}
                <div className="w-full font-thefontbold text-primary text-5xl text-center pb-[10vh]  md:pt-[7vh]">
                    FIND THE NEW WORLD
                </div>
            </div>
        </section>
    )
}
