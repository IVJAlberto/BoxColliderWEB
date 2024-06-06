

export const Hero = () => {

  const styleHero = 'font-thefontbold text-primary text-4xl ss:text-5xl sm:text-6xl md:text-7xl '

  return (
    <div id="idHero" className="hero h-[800px] xl:h-screen grid grid-rows-3 lg:grid-rows-4" >

      <section className="row-span-1 overflow-hidden  grid grid-rows-2 bg-slate-800 ss:bg-purple-700 xs:bg-red-400 sm:bg-orange-100 md:bg-yellow-100 lg:bg-green-400 xl:bg-blue-300">
          <p className={`${styleHero} content-end 
                        xs:pl-0 xs:pr-40 xs:text-center xs:text-7xl xl:pr-[18vw]`}>
            WE CREATE
          </p>
          <div className='h-[100%] bg-slate-200 grid grid-cols-7'>
            <p className={`${styleHero} col-span-6 flex justify-end
                            xs:text-7xl md:pr-[0] lg:pr-[10vw] xl:pr-[18vw]`}>
              THE IMPOSSIBLE
            </p>
            <div className='bg-black flex-wrap content-start flex justify-end pt-5 ss:pt-6 xs:pt-7 sm:pt-8 md:pt-9 xl:pt-10'>
              <img className='h-[4px] ss:h-[5px] xs:h-[6px] sm:h-[7px] md:h-[8px] lg:h-[9px] xl:h-[10px]' src="/assets/hero/rectangulo.svg" alt="" />
            </div>
          </div>
      </section>

      <section className="hr row-span-1 lg:row-span-2 lg:pt-12">
          <div className='w-screen flex justify-center overflow-x-hidden'>
            <img className='max-w-7xl xl:h-[160px]' src='/assets/hero/boxcolliderHero.png' alt="" />
          </div>
          <div className=" h-[350px] -translate-y-52 ss:h-[400px] xl:h-[600px] xl:-translate-y-96">
            {/* <Hero3D/> */}
          </div>
      </section>

      <section className="hr row-span-1 content-center lg:content-start lg:pt-12">
        <p className='font-montserratregular text-center text-4xl px-20 md:text-5xl md:px-[20vw]'>
          Transformamos tus ideas en software de calidad de una manera eficiente para lograr tu satisfacción.
        </p>
      </section>
      
    </div>
  )
}
