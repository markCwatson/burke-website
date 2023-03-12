import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import services from "./db/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services services={services} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
