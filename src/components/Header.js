// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Beranda</Link>
        <Link to="/tentang">Tentang</Link>
        <Link to="/kontak">Kontak</Link>
      </nav>
    </header>
  );
}

export default Header;
