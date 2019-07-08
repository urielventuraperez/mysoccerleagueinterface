import React from "react";
import MyTheme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Container from "./containers";
import { Provider } from "react-redux";
import store from "../src/redux/store";

function App() {
  return (
    <Provider store={store}>
    <MuiThemeProvider theme={MyTheme}>
      <Container />
    </MuiThemeProvider>
    </Provider>
  );
}

export default App;