import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 800,
        },
        h2: {
            fontSize: '1.2rem',
            fontWeight: 700,
        },
        h3: {
            fontSize: { xs: '8px', sm: '10px', md: '12px' },
            fontWeight: 600,
        },
        h4: {
            fontSize: { xs: '6px', sm: '8px', md: '10px' },
            fontWeight: 500,
            letterSpacing: { xs: '1px', sm: '0' },
        },
    },
    spacing: 0,
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    fontSize: '1.2em',
                },
            },
        },
    },
});

export default theme;
