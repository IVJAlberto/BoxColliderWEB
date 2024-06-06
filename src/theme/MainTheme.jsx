import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const MainTheme = createTheme({
    palette:{
        primary: {
            main: '#2c3c44'
        },
        secondary : {
            main: '#f05b72'
        },
        error:{
            main:red.A400
        }
    }
})