import { useTranslation } from "react-i18next"

import Cube3D from "./Cube3D"
import { useDeviceSize } from "./hooks/useDeviceSize";


const Hero = () => {

  const { t } = useTranslation();
  const [width, height ] = useDeviceSize();

  const styleHero = 'font-thefontbold text-primary text-3xl ss:text-4xl xs:text-5xl sm:text-6xl md:text-7xl '
  const colores = 'bg-slate-800 ss:bg-purple-700 xs:bg-red-400 sm:bg-orange-100 md:bg-yellow-100 lg:bg-green-400 xl:bg-blue-300'

  return (
    <div id="idHero" className={`relative ${height>800 ?'h-[100vh]' : 'h-[800px]'} pt-16`} >
      
      <section className="h-[20%] grid grid-rows-2 ">
          <div className="content-end grid grid-cols-10 animate-fade-right animate-once animate-duration-500 animate-ease-in">
            <p className={`${styleHero} col-span-7 sm:col-span-8 text-center`}>
              WE CREATE
            </p>
          </div>
          <div className='grid grid-cols-7 animate-fade-left animate-once animate-duration-500 animate-ease-in'>
            <p className={`${styleHero} col-span-6 flex justify-end
                            md:pr-[0] lg:pr-[10vw] xl:pr-[18vw]`}>
              THE IMPOSSIBLE
            </p>
            <div className='flex-wrap content-start flex justify-end pt-[40%] ss:pt-5 xs:pt-6 sm:pt-8 md:pt-9 xl:pt-10'>
              <img  height={4} width={48} className='' src="/assets/hero/rectangulo.svg" alt="Rectangulo" />
            </div>
          </div>
      </section>

      <section className="h-[50%] flex justify-center">
          <div className='absolute w-full flex justify-center  '>
            <h1 className="w-full text-center mt-32 font-thefontbold text-gray-200 text-[3.5rem] ss:text-[4rem]  xs:text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-9xl xl:text-[9rem]">Box Collider</h1>
          </div>
          <div className="absolute  overflow-hidden h-[450px] ">
            <Cube3D/>
          </div>
      </section>

      <section className="h-[20%] content-center animate-fade-up animate-once animate-duration-500 animate-ease-in">
        <p className='font-montserratregular text-azul-0m text-center text-xl px-10 md:text-2xl md:px-[20vw] lg:px-[25vw] xl:text-3xl'>
            {t('hero0')}
        </p>
      </section>
      
    </div>
  )
}

export default Hero;