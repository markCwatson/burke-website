import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#bddcf2",
        main: "#3573b6",
        dark: "#224684",
        contrastText: "#fff",
      },
      secondary: {
        light: "#f5f5f5",
        main: "#eeeeee",
        dark: "#9e9e9e",
        contrastText: "#000",
      },
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <nav>
          <Navbar />
        </nav>
        <main>
          <Home />
          <Services />
          <Projects />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
