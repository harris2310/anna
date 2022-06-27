import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/style.css';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <Main />
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
      <Footer />
    </div>
  );
}

export default App;
