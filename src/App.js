import React from "react";
import MyTheme from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes/";
import TopNavigation from "./components/topNavigation";

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={MyTheme}>
          <TopNavigation />
          {routes}
      </MuiThemeProvider>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
