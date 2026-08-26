import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Sakarya Büyükşehir Belediyesi - Bilgi İşlem Dairesi Başkanlığı</p>
      <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Tüm hakları saklıdır. Staj Projesi</p>
    </footer>
  );
}

export default Footer;