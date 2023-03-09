import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import services from "./db/Services";
import projects from "./db/projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services services={services} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
