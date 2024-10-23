import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Aplikasi Penjadwalan Energi Gedung</h1>
      <nav>
        <ul>
          <li><a href="#scheduler">Jadwalkan Energi</a></li>
          <li><a href="#usage-list">Daftar Penggunaan</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
