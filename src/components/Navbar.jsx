import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { MenuLang } from './MenuLang';
import { useTranslation } from 'react-i18next';

export function Navbar(){

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { t } = useTranslation();

  const navItems = [
    { id: 1, text: t('navbar0') , to: 'idServicios'},
    { id: 2, text: t('navbar1'), to: 'idPortafolio' },
    { id: 3, text: t('navbar2'), to: 'idFooter' },
  ];

  const btnScrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

   return (
    <div className={`z-50 fixed h-16 w-full ${nav ? 'bg-primary md:bg-white' : 'bg-white duration-1000'} flex  items-center mx-auto pl-4 pr-12  text-gray-600`}>
      <img className='w-16 ml-[5vw]' src="assets/isotipo.svg" alt="" />
  
      <div className='flex justify-end w-full ml-[5%] mr-[5%]'>
        <ul className='hidden md:flex '>
          {navItems.map(item => (
            <div key={item.id}>
                <Button className='' onClick={()=> btnScrollTo(item.to)}>
                  <p className='p-3 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 text-gray-600 hover:text-black font-montserratregular text-xl'>
                    {item.text}
                  </p>
                </Button>
            </div>
            // <Link
            //   key={item.id}
            //   to={item.to}
            //   className='p-3 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 hover:text-black font-montserratregular text-xl'
            // >
            //   {item.text}
            // </Link>
          ))}
        </ul>
      </div>
      <div className={`z-50 mr-12`}>
        <MenuLang nav={nav}/>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose color='white' size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? `fixed w-[100%] left-0 top-16 border-r bg-primary animate-flip-down animate-once animate-duration-500 animate-ease-in  md:hidden`
            : `fixed h-[0%] w-[100%] top-[-30%] bottom-0 left-0 bg-primary  text-transparent ease-in-out duration-500 animate-flip-up animate-once animate-duration-500 animate-ease-out`
        }
      >
        {/* Mobile Logo */}
        {/* <div className='w-full flex items-center justify-center'>
          <img className='w-15 h-15 p-5 ' src="assets/isotipo.svg" alt="" />
        </div> */}

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <div key={item.id}>
            <Link
              onClick={() => { handleNav(); btnScrollTo(item.to) }}
              className={`p-6 border-b font-montserratregular text-xl ${nav ? 'text-white border-gray-200 duration-300' : 'text-transparent border-transparent duration-0'}  hover:text-azul-0m cursor-pointer flex items-center justify-center`}
            >
              {item.text}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
      

