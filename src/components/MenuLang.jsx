import { Menu, MenuHandler ,MenuList, MenuItem } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const MenuLang = (nav) => {
    const lenguajes = [
        {
            id: 0,
            text: 'es',
            icon: '/assets/navbar/mexicoflag.svg',
        },
        {
            id: 1,
            text: 'en',
            icon: '/assets/navbar/usaflag.svg',
        },
    ];

    const [idioma, setIdioma] = useState(0);

    const { i18n} = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lenguajes[idioma].text)
    }, [idioma])
    
    const cambiarIdioma = (i) =>{
        setIdioma(i)
    }

    return (
        <>
            <Menu>
                <MenuHandler>
                    <div className="grid grid-cols-2 content-center gap-2">
                        <img className="w-8 h-full" src={lenguajes[idioma].icon} alt="" />
                        <p className={`font-montserratregular ${nav.nav ? 'text-white md:text-gray-600' : 'text-gray-600'}`}>{lenguajes[idioma].text}</p>
                    </div>
                </MenuHandler>
                <MenuList>
                    {lenguajes.map((opcion) =>{
                        if(opcion.id != idioma){
                            return( 
                                <MenuItem key={opcion.id} onClick={ () => { cambiarIdioma(opcion.id)}}>
                                    <div className="grid grid-cols-2 content-center mb-2">
                                        <img className="w-6 h-full" src={opcion.icon} alt="" />
                                        <p className={`font-montserratregular `}>{opcion.text}</p>
                                    </div>
                                </MenuItem>
                            )
                        }
                    })}
                </MenuList>
            </Menu>
        </>
    )
}
