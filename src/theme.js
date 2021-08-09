import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "rgba(99,63,181,0.93)",
    },
    secondary: {
      // main: "#ffa726",
      main: "#9C66F3",
    },
    error: {
      main: "#d32f2f",
    },
    background: {
      default: "#192231",
      paper: "#24344d",
    },
  },
  typography: {
    fontFamily: "Roboto,sans-serif",
    // fontFamily: "Arial",
  },
});

export default theme;

// const theme = createMuiTheme({
//   palette: {
//     type: "dark",
//     primary: {
//       main: "rgba(99,63,181,0.93)",
//     },
//     secondary: {
//       main: "#9c66f3",
//     },
//     background: {
//       default: "#192231",
//       paper: "#24344d",
//     },
//   },
// });

// export default theme;
