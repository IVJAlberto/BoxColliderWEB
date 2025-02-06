import { useEffect, useRef } from "react"

import { useDeviceSize } from "./hooks/useDeviceSize";

const MaskClip = () => {

    const [width, height ] = useDeviceSize();
    let img = '/assets/maskclip/americana.webp';
    let targetSize;
    let initialMaskSize;

    const asignarImagen = () => {
        const aspectRatio = width/height;
        if(aspectRatio>=0.8){
            initialMaskSize = 14;
            targetSize = 13.7;
        }else{
            targetSize = 15.5;
            initialMaskSize = 16.2;
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
        <section className="h-full">
            <div ref={refContainer} className="absolute h-[200vh] w-[100vw]flex justify-center flex-wrap content-start ">
                <div ref={refStickyMask} className="stickyMask sticky top-0 flex h-[100vh] justify-center flex-wrap content-start">
                    <img loading='lazy' className="h-full w-[100vw] object-cover" src={`${img}`} alt="Tecno Girl" />
                </div>
            </div>
            <div className="absolute h-[200vh] w-[100%] flex justify-start flex-wrap content-end">
                {/* <div className="w-full font-thefontbold text-primary text-5xl  pb-[60vh] text-center md:pt-[7vh]">
                    SOLUTIONS
                </div> */}
                <div className={`w-full font-thefontbold text-primary text-5xl text-center pb-[5vh]`}>
                    FIND THE NEW WORLD
                </div>
            </div>
        </section>
    )
}

export default MaskClip;