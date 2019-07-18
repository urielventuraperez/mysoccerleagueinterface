import { createMuiTheme } from '@material-ui/core/styles';

const MyTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#57F2D6',
            main: '#6BA5F2',
            dark: '#6695F2',
            text: '#F2F2F2',
            contrastText: '#F28DA8',
          },
          secondary: {
            light: '#ffffff',
            main: '#f5f4ef',
            dark: '#ff8078',
            text: '#e2e3e5',
            contrastText: '#252a2e',
          },
          botton:{
            main: '#57F2D6',
            contrast: '#6695F2',
            danger: '#F28DA8'
          }
      },  
      
      typography: {
        fontFamily: [
          'Palanquin',
          'Roboto',
        ].join(','),
},
});
export default MyTheme;