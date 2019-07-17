import React from "react";
import MyTheme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import TopNavigation from "./components/topNavigation";
import FooterComponent from "./components/footerComponent";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={MyTheme}>
          <TopNavigation />
          <FooterComponent />
      </MuiThemeProvider>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
