import { createMuiTheme } from "@material-ui/core/styles";

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#57F2D6",
      main: "#6BA5F2",
      dark: "#6695F2",
      text: "#F2F2F2",
      contrastText: "#F28DA8"
    },
    secondary: {
      light: "#F2F2F2",
      main: "#F28DA8",
      dark: "#ff8078",
      text: "#D9D9D9",
      contrastText: "#40403E"
    },
    background: {
      paper: "#F2F2F2"
    },
    text: {
      primary: "#0D0D0C",
      secondary: "#6695F2",
      disabled: "#BFBFBF",
      hint: "#8C8C8C"
    },
    divider: "#D9D9D9",
    action: {
      hoverOpacity: 0.08,
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "rgba(0, 0, 0, 0.14)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabled: "rgba(0, 0, 0, 0.26)",
      active: "rgba(0, 0, 0, 0.54)"
    }
  },

  typography: {
    fontFamily: ["Palanquin", "Roboto"].join(",")
  }
});
export default MyTheme;
