import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Transaction from './components/Transaction';
import PlansComponent from './components/PlansComponent';
import Options from './components/Options';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
      <Transaction />
      <PlansComponent />
      <Options />
    </Router>
  );
}

export default App;
