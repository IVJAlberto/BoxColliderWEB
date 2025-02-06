import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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
    <div className={`z-50 fixed h-16 bg-primary w-full ${nav ? 'bg-primary md:bg-white' : 'bg-white duration-1000'} flex  items-center mx-auto pl-4 pr-12  text-gray-600`}>
      
      <div className='pl-8 w-[100%]'>
        <Button tabIndex={0}  aria-label="Isotipo" disableRipple className='h-full' style={{ backgroundColor: 'transparent' }} onClick={()=> btnScrollTo('idHome')}>
          <img loading="lazy" height={36} width={36}  src="assets/navbar/isotipo.svg" alt="Isotipo" />
          <img loading="lazy" height={36} width={125} className=' ml-1 invisible md:visible' src="assets/navbar/collider.webp" alt="Collider" />
        </Button>
      </div>
  
      <div className='h-16 flex justify-end w-full'>
        <ul className='hidden md:flex bg-white'>
          {navItems.map(item => (
            <li tabIndex={0} key={item.id} className='mx-4'>
                <Button aria-label={`${item.text}`} disableRipple style={{ backgroundColor: 'transparent' }} onClick={()=> btnScrollTo(item.to)}>
                  <p className='h-14 p-1 flex-wrap content-center hover:bg-secondary rounded-xl cursor-pointer duration-300 text-gray-600 hover:text-black font-montserratregular text-base'>
                    {item.text}
                  </p>
                </Button>
            </li>
          ))}
        </ul>
      </div>
      <div tabIndex={0}>
        <Button aria-label="Idioma" disableRipple style={{ backgroundColor: 'transparent' }} className={`z-50 `}>
          <MenuLang nav={nav}/>
        </Button>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden ml-6'>
        {nav ? <AiOutlineClose color='white' size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul tabIndex={0}
        className={
          nav
            ? `fixed w-[100%] left-0 top-16 border-r bg-primary animate-flip-down animate-once animate-duration-500 animate-ease-in  md:hidden`
            : `fixed h-[0%] w-[100%] top-[-100%] bottom-0 left-0 bg-primary  text-transparent ease-in-out duration-500 animate-flip-up animate-once animate-duration-500 animate-ease-out`
        }
      >

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li tabIndex={0} key={item.id}>
            <Link
              onClick={() => { handleNav(); btnScrollTo(item.to) }}
              className={`p-6 border-b font-montserratregular text-xl ${nav ? 'text-white border-gray-200 duration-300' : 'text-transparent border-transparent duration-0'}  hover:text-azul-0m cursor-pointer flex items-center justify-center`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
      

