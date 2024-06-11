import { useTranslation } from "react-i18next"
import Cube3D from "./Cube3D"


export const Hero = () => {

  const { t } = useTranslation();

  const styleHero = 'font-thefontbold text-primary text-3xl ss:text-4xl xs:text-5xl sm:text-6xl md:text-7xl '
  const colores = 'bg-slate-800 ss:bg-purple-700 xs:bg-red-400 sm:bg-orange-100 md:bg-yellow-100 lg:bg-green-400 xl:bg-blue-300'

  return (
    <div id="idHero" className="relative h-[900px] pt-24 " >
      
      <section className="h-[20%] grid grid-rows-2 ">
          <div className="content-end grid grid-cols-10">
            <p className={`${styleHero} col-span-7 sm:col-span-8 text-center`}>
              WE CREATE
            </p>
          </div>
          <div className='grid grid-cols-7'>
            <p className={`${styleHero} col-span-6 flex justify-end
                            md:pr-[0] lg:pr-[10vw] xl:pr-[18vw]`}>
              THE IMPOSSIBLE
            </p>
            <div className='flex-wrap content-start flex justify-end pt-[40%] ss:pt-5 xs:pt-6 sm:pt-8 md:pt-9 xl:pt-10'>
              <img className='h-[4px] ss:h-[5px] xs:h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] xl:h-[10px]' src="/assets/hero/rectangulo.svg" alt="" />
            </div>
          </div>
      </section>

      <section className="h-[50%] ">
          <div className='absolute w-screen flex justify-center overflow-x-hidden'>
            <img className='max-w-7xl mt-32 sm:h-[140px] lg:h-[160px] opacity-80 ' src='/assets/hero/boxcolliderHero.png' alt="" />
          </div>
          <div className="absolute w-full overflow-hidden h-[450px]">
            <Cube3D/>
          </div>
      </section>

      <section className="h-[30%] content-center ">
        <p className='font-montserratregular text-center text-xl px-10 md:text-2xl md:px-[20vw] lg:px-[25vw]'>
            {t('hero0')}
        </p>
      </section>
      
    </div>
  )
}
