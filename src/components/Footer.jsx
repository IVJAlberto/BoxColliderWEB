
export const Footer = () => {
  return (
    <div className="h-[50vh] bg-[#414141] grid grid-cols-1 grid-rows-5">

        <section className="row-span-1 flex-wrap content-center flex justify-center">
            <img className="h-16" src="/assets/footer/isotipowhite.svg" alt="" />
        </section>

        <section className="row-span-1 flex-wrap content-center grid justify-center grid-rows-2">
            <div className="grid grid-rows-2">
                <h1 className="text-white text-xl font-montserratregular">Síguenos</h1>
                <div className="grid grid-cols-3 gap-4">
                    <img src="/assets/footer/facebook.svg" alt="" />
                    <img src="/assets/footer/instagram.svg" alt="" />
                    <img src="/assets/footer/linkedin.svg" alt="" />
                </div>
            </div>
        </section>
        
        <section className="row-span-1">
            <h1 className="text-white text-center text-xl font-montserratregular">Morelia, Michoacán, México</h1>
        </section>

        <section className="row-span-1 flex-wrap content-center grid justify-center grid-rows-2 bg-slate-900">
            <h1 className="text-white text-xl text-center font-montserratregular">Contáctanos</h1>
            <div className="grid grid-cols-2">
                <img className="col-span-1 bg-black h-[28px]" src="/assets/footer/email.svg" alt="" />
                <img className="col-span-1 h-[28px]" src="/assets/footer/whatsapp.svg" alt="" />
            </div>
        </section>

        <section className="row-span-1">
            <h1 className="text-white text-center text-xl font-montserratregular">Morelia, Michoacán, México</h1>
        </section>

    </div>
  )
}
