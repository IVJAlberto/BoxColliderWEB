import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <div id="idFooter" className={`h-[500px]  bg-[#414141] grid grid-cols-1 grid-rows-11 md:grid-rows-7`}>

            <section className="row-span-3 flex-wrap content-center flex justify-center">
                <Button style={{ backgroundColor: 'transparent' }} onClick={() => {
                    const element = document.getElementById('idHero');
                    element?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }}>
                <img className="h-16" src="/assets/footer/isotipowhite.svg" alt="" />
                </Button>
            </section>

            <section className="row-span-6 md:row-span-2 grid grid-rows-6 grid-cols-1 md:grid-rows-1 md:grid-cols-6 justify-center md:px-[10vw]">

                <div className="row-span-2 md:col-span-2 md:row-span-1 grid grid-rows-2 md:grid-rows-3 flex-wrap content-center justify-center pt-2 md:pt-0">
                    <h1 className="flex-wrap content-center md:content-start text-white text-xl text-center font-montserratregular">{t('footer01')}</h1>
                    <div className="flex justify-center gap-6 flex-wrap md:content-start pt-4 md:pt-0">
                        <a href="https://www.facebook.com/0MiedoDevs" target="_blank">
                            <img className="h-6" src="/assets/footer/facebook.svg" alt="" />    
                        </a>
                        <a href="https://www.instagram.com/0MiedoDevs/" target="_blank">
                            <img className="h-6"src="/assets/footer/instagram.svg" alt="" />
                        </a>
                        <a href="https://mx.linkedin.com/company/boxcollider" target="_blank">
                            <img className="h-6"src="/assets/footer/linkedin.svg" alt="" />
                        </a>
                    </div>
                </div>
                
                <div className=" row-span-2 md:col-span-2 flex-wrap content-center md:content-start">
                    <h1 className="text-white text-center text-xl font-montserratregular px-[10vw] md:px-[5vw]">Morelia, Michoacán, México</h1>
                </div>

                <div className="row-span-2 md:col-span-2 md:row-span-1 grid grid-rows-2 md:grid-rows-3 flex-wrap content-center justify-center pt-2 md:pt-0">
                    <h1 className="flex-wrap content-center md:content-start text-white text-xl font-montserratregular">{t('footer02')}</h1>
                    <div className=" flex justify-center gap-6 pt-4 md:pt-0">
                        <a href="mailto:contacto@0miedo.com.mx">
                            <img  className="h-6" src="/assets/footer/email.svg" alt="" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5214431819520&amp;text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20una%20cotizaci%C3%B3n." target="_blank">
                            <img className="h-6" src="/assets/footer/whatsapp.svg" alt="" />
                        </a>
                    </div>
                </div>

            </section>

            <section className="row-span-2 flex-wrap content-center flex justify-center px-[30vw]">
                <h1 className="text-white text-center text-sm font-montserratregular"> {t('footer03')}</h1>
            </section>

        </div>
    )
}
