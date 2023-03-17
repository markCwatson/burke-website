import * as React from 'react';

import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Root() {
  return (
    <React.Fragment>
      <Navbar home={true} />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer home={true} />
    </React.Fragment>
  );
}
