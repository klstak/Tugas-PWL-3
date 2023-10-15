// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      <Header />
      <MainContent />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
    </Router>
  );
}

export default App;
