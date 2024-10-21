import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import RealEstateJourney from "./components/RealEstateJourney";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#703BF7",
    },
    background: {
      default: "#1A1A1A",
      paper: "#262626",
    },
    text: {
      secondary: "#999999",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      laptop: 1440,
      desktop: 1920,
    },
  },
  typography: {
    fontFamily: '"Urbanist", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Outlet />
      <RealEstateJourney />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
