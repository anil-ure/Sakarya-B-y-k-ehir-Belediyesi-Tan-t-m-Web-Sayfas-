import React from "react";


const YusufAlemdarInfo = () => {
  return (
    <div style={{
      maxWidth: '1100px',
      margin: '30px auto',
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '30px',
      backgroundColor: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    }}>
      {/* Sol Taraf: Fotoğraf */}
      <div style={{ flexShrink: 0 }}>
        <img 
          src="https://www.sakarya.bel.tr/assets/img/y-alemdar/1-detay.png"
          alt="Yusuf Alemdar" 
          style={{
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '10px',
            border: '3px solid #0056b3',
            display: 'block'
          }} 
        />
      </div>

      {/* Sağ Taraf: Başlık, İsim, Bilgi ve Link */}
      <div style={{ flex: 1, textAlign: 'left' }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#666', fontSize: '1.1rem', fontWeight: '500' }}>
          Sakarya Büyükşehir Belediyesi
        </h3>
        <h2 style={{ margin: '0 0 4px 0', color: '#111', fontSize: '1.8rem' }}>
          Yusuf Alemdar
        </h2>
        <p style={{ margin: '0 0 16px 0', color: '#0056b3', fontWeight: '600', fontSize: '1rem' }}>
          Sakarya Büyükşehir Belediye Başkanı
        </p>
        <a 
          href="https://www.sakarya.bel.tr/1/Baskanlik/Baskan" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#0056b3',
            color: '#fff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: '500'
          }}
        >
          Başkan Hakkında Detaylı Bilgi
        </a>
      </div>
    </div>
  );
};

export default YusufAlemdarInfo;