import { useState } from 'react'
import { Link } from 'react-router-dom';

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
    { id: 1, text: t('navbar0') , to: '/'},
    { id: 2, text: t('navbar1'), to: '/' },
    { id: 3, text: t('navbar2'), to: '/' },
  ];

   return (
    <div className={`fixed h-24 w-full ${nav ? 'bg-azul-0m md:bg-white' : 'bg-white'} flex  items-center mx-auto pl-4 pr-12  text-gray-600`}>
      <img className='w-16 ml-[5vw]' src="assets/isotipo.svg" alt="" />
  
      <div className='flex justify-end w-full ml-[5%] mr-[5%]'>
        <ul className='hidden md:flex '>
          {navItems.map(item => (
            <Link
            key={item.id}
            to={item.to}
            className='p-3 hover:bg-secondary rounded-xl m-2 cursor-pointer duration-300 hover:text-black font-montserratregular text-xl'
            >
              {item.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className={`mr-12`}>
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
            ? `fixed h-full] w-[100%] left-0 top-24 border-r border-r-gray-900 bg-azul-0m ease-in-out duration-500 md:hidden`
            : `fixed h-[0%] w-[100%] top-[-30%] bottom-0 left-0 ease-in-out duration-500 opacity-0`
        }
      >
        {/* Mobile Logo */}
        {/* <div className='w-full flex items-center justify-center'>
          <img className='w-15 h-15 p-5 ' src="assets/isotipo.svg" alt="" />
        </div> */}

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.to}
            onClick={handleNav}
            className='p-6 border-b  font-montserratregular text-xl text-gray-200 duration-300 hover:text-black cursor-pointer border-gray-200  flex items-center justify-center'
          >
            {item.text}
          </Link>
        ))}
      </ul>
    </div>
  );
}
      

