import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Menu from './components/Menu';
import NavBar from './components/NavBar';
import DigitalCollages from './components/DigitalCollages';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Tarrot from './components/Tarrot';
import Astronaut from './components/Astronaut';
import Sandman from './components/Sandman';
import Footer from './components/Footer';
import './css/style.css';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const location = useLocation();

  const handleFormSubmit = (e) => {
    const serviceId = 'service_qq1m8dp';
    const templateId = 'template_standard';
    const userId = 'user_LOSNyooKn4kN1NC1ZmDb5';
    console.log(e);
    emailjs.send(serviceId, templateId, e, userId)
      .then((res) => {
        setFormSubmitted(true);
      }, (err) => {
        console.log(err);
      });
  };

  const handleHamClick = () => {
    setMenuClicked(true);
  };

  const handleTitleClick = () => {
    setMenuClicked(false);
  };

  return (
    <div>
      <NavBar
        handleHamClick={handleHamClick}
        handleTitleClick={handleTitleClick}
      />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path="/"
            element={
              menuClicked
                ? <Menu />
                : <Main />
            }
          />
          <Route
            path="/collages"
            element={(
              <div>
                <DigitalCollages />
              </div>
            )}
          />
          <Route
            path="/tarrot"
            element={(
              <div>
                <Tarrot />
              </div>
            )}
          />
          <Route
            path="/astronaut"
            element={(
              <div>
                <Astronaut />
              </div>
            )}
          />
          <Route
            path="/sandman"
            element={(
              <div>
                <Sandman />
              </div>
            )}
          />
          <Route
            path="/about"
            element={(
              <div>
                <About />
              </div>
            )}
          />
          <Route
            path="/contact"
            element={(
              <div>
                <Contact
                  handleFormSubmit={handleFormSubmit}
                  formSubmitted={formSubmitted}
                />
              </div>
            )}
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
