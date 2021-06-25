import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    typography: {
        // In Japanese the characters are usually larger.
        fontSize: 30,},
    text: {
        primary: "#00000"},
    palette: {
        background: {
          default: "#e4f0e2"
        },
        primary: { // works
          main: '#165788',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#000',
        },
        companyBlue: {
            backgroundColor: '#65CFE9',
            color: '#fff',
        },
        companyRed: { 
            backgroundColor: '#E44D69',
            color: '#000',
        },
        accent: { 
            backgroundColor: red[500], 
            color: '#000',
        },
    },
});