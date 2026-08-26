import  React from 'react';
import { Link } from 'react-router-dom';

function Projeler() {
    const projeler = [
        {title: "AKILLI ŞEHİR REHBERİ", desc:"Vatandaşların şehirdeki tüm ulaşım ve hizmet noktalarına eriştiği platform.", link: "https://www.sakarya.bel.tr/tr/Haber/buyuksehirin-mobil-ekrani-simdi-yeni-yuzuyle/23827"},
       
        {title: "E-BELEDİYE KAPISI", desc:"Tüm belediye işlemlerinin internet üzerinden hızlıca yapılması sağlayan sistem.", link:"https://ebelediye.sakarya.bel.tr/"},

        {title: "SBB MOBİL UYGULAMA", desc:"Anlık duyurular ve belediye hizmetlerinin cebinize taşındığı mobil uygulama.", link:"https://www.sakarya.bel.tr/tr/Haber/buyuksehirin-mobil-ekrani-simdi-yeni-yuzuyle/23827",},

         {title: "BAĞIMLILIKLA MÜCADELE", desc:"Belediyemizin son derece hassas olduğu bağımlılıkla mücadele projesi.", link:"/bagimlilik-testi",},
    ];

    return(
        <section id='projeler'>
            <h2 className='section-title'>Projelerimiz</h2>
            <div className='grid-container'>
                {projeler.map((p, index) => (
                    <a 
                    key={index}
                    href={p.link}
                    target="_blank"
                    rel="noopener norerferrer"
                    className='card-link'>
                        
                   

                    <div key={index} className='card'>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                        <p className='click-text'>Detaylar İçin tıklayınız</p>
                    </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
export default Projeler;