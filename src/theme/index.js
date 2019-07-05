import { createMuiTheme } from '@material-ui/core/styles';

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#CFD8DC',
            main: '#607D8B',
            dark: '#455a64',
            contrastText: '#FFFFFF',
          },
          secondary: {
            light: '#212121',
            main: '#FF5252',
            dark: '#BDBDBD',
            contrastText: '#FFFFFF',
          },
      },  
      
      typography: {
        fontFamily: [
          'Palanquin',
          'Roboto',
        ].join(','),
},
});
export default MyTheme;