import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Carousel from './components/Carousel';
import './css/style.css';

function App() {
  return (
    <Routes>
      <NavBar />
      <Route
        path="/"
        element={(
          <div>
            <Title />
            <Carousel />
          </div>
        )}
      />
    </Routes>
  );
}

export default App;
