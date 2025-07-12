import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
        }
    },
    custom: {
        fontColor: '#6d2affff'
    }
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#2f2e2eff',
        }
    },
    custom: {
        fontColor: '#90caf9'
    }
});