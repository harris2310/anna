import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/style.css';

function App() {
  const handleFormSubmit = () => {
  };

  const handleCarouselChange = (index) => {
    index += 2;
    return index;
  };

  const [laugh, setLaugh] = useState(0);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={(
            <Main
              handleCarouselChange={handleCarouselChange}
              setLaugh={setLaugh}
            />
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
