import { createTheme } from "@mui/material";

import '@fontsource/raleway';
import "@fontsource/open-sans"
import "@fontsource/roboto";

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: { minHeight: '100vh', backgroundColor: "#EDF3F1" },
                '#root': {
                    minHeight: '100vh'

                }
            },
        },
    },
    typography: {
        fontFamily: 'Raleway',
    },
    palette: {
        primary: {
            main: "#3F48AD"
        },
        secondary: {
            main: "#EDF3F1"
        }
    },
});

export default theme