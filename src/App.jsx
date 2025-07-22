import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="top">
      <Header />
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
      {/* <div id="preloader">
        <div id="loader"></div>
      </div> */}
    </div>
  );
};

export default App;