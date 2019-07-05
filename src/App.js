import React from "react";
import MyTheme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Container from "./containers";

function App() {
  return (
    <MuiThemeProvider theme={MyTheme}>
      <Container />
    </MuiThemeProvider>
  );
}

export default App;
