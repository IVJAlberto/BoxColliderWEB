import { Menu, MenuHandler ,MenuList, MenuItem } from "@material-tailwind/react";
import { Button } from "@mui/material";
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
                    <Button aria-label="Cambiar Lenguaje" className={`h-14 w-24 p-1 grid grid-cols-2 content-center gap-1 ${nav.nav ? '' : 'md:hover:bg-secondary rounded-xl cursor-pointer duration-300'} `}>
                        <div className="flex-wrap content-center">
                            <img loading="lazy" width={24} height={12} className="h-ful" src={lenguajes[idioma].icon} alt="Lenguaje" />
                        </div>
                        <p className={`pl-1 font-montserratregular ${nav.nav ? 'text-white md:text-gray-600' : 'text-gray-600'}`}>{lenguajes[idioma].text}</p>
                    </Button>
                </MenuHandler>
                <MenuList className="z-50 border-none bg-secondary md:bg-primary text-white rounded-xl ">
                    {lenguajes.map((opcion) =>{
                        if(opcion.id != idioma){
                            return( 
                                <MenuItem key={opcion.id} onClick={ () => { cambiarIdioma(opcion.id)}}>
                                    <div className={`h-10 p-1 grid grid-cols-2 content-center ${nav.nav ? 'hover:bg-primary  ' :'bg-primary md:hover:bg-secondary'} rounded-xl duration-300`}>
                                        <img loading="lazy" width={24} height={12} className="h-full" src={opcion.icon} alt="Lenguaje 2" />
                                        <p className={`font-montserratregular pl-2`}>{opcion.text}</p>
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
