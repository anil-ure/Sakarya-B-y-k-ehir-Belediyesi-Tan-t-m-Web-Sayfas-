import React from 'react';

function Navbar() {
    return(
        <nav className='navbar'>
            <div className='logo'>
                Sakarya Belediyesi I Bilgi İşlem
            </div>
             <ul className='nav-links'>
                <li> <a href='#anasayfa'>Anasayfa</a></li>
                <li> <a href='#mudurlukler'>Müdürlükler</a></li>
                <li> <a href='#projeler'>Projeler</a></li>
                <li> <a href='#ekip'>Ekip</a></li>
                <li> <a href='#iletisim'>İletişim</a></li>
            </ul>
         </nav>
    );
}

export default Navbar;