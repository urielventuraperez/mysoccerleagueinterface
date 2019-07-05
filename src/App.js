import React from "react";
import Button from "@material-ui/core/Button";
import Bookmarks from '@material-ui/icons/Bookmarks';
import MyTheme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={MyTheme}>
      {console.log(MyTheme)}
      <Button variant="contained" color='secondary'>
      <Bookmarks></Bookmarks>
          Chaper 2
      </Button>
    </MuiThemeProvider>
  );
}

export default App;
