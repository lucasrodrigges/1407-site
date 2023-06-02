import { createTheme } from '@mui/material';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

const defaultTheme = createTheme({
  palette: {
    type: 'dark',
    black01: '#0D0D0D',
    black02: '#1F1C26',
    black03: '#332F3C',
    purple01: '#59253E',
    pink01: '#F24B88',
    white01: '#F2F2F2',
    blue01: '#01b2ea',
    green01: '#a3c91a',
    yellow01: '#f1ab02',
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default defaultTheme;
