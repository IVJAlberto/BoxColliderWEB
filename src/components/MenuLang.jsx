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

    const convertirLenguaje = () =>{
        const lenguaje = window.localStorage.getItem("i18nextLng");
        switch (lenguaje) {
            case 'es':
                return 0;
            case 'en':
                return 1;
            default:
                return 0;
        }
    }
    const [idioma, setIdioma] = useState(convertirLenguaje());

    const { i18n} = useTranslation();
    
    useEffect(() => {
        i18n.changeLanguage(lenguajes[idioma].text);
    }, [idioma])
    
    // convertirLenguaje();
    const cambiarIdioma = (i) =>{
        setIdioma(i);
        window.localStorage.setItem('i18nextLng', lenguajes[i].text);
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
                <MenuList className="z-50 border-secondary bg-secondary rounded-2xl">
                    {lenguajes.map((opcion) =>{
                        if(opcion.id != idioma){
                            return( 
                                <MenuItem key={opcion.id} onClick={ () => { cambiarIdioma(opcion.id)}}>
                                    <div className="grid grid-cols-2 content-center">
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
