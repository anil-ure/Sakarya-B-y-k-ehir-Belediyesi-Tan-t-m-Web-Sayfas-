import React, { useState } from 'react';

function iletisim(){
    const [formData, setFormData] = useState({ad: '', eposta:'', mesaj:''});
    const [bildirim, setBildirim] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

       
    if (!formData.ad || !formData.eposta || !formData.mesaj) {
      setBildirim('Lütfen tüm alanları doldurunuz!');
      return;
    }

   
    setBildirim('Mesajınız başarıyla iletildi. Teşekkür ederiz!');
    setFormData({ ad: '', eposta: '', mesaj: '' }); // Formu temizle
  };

  return (
    <section id="iletisim">
      <h2 className="section-title">İletişim</h2>
      <div className="contact-container">
        <div>
          <h3>İletişim Bilgileri</h3>
          <p><strong>Adres:</strong> Sakarya Büyükşehir Belediyesi Hizmet Binası</p>
          <p><strong>E-posta:</strong> bilgiislem@sakarya.bel.tr</p>
          <p><strong>Telefon:</strong> 444 40 54</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {bildirim && <p style={{ padding: '10px', background: '#e0f7fa', color: '#006064' }}>{bildirim}</p>}
          
          <input 
            type="text" 
            placeholder="Adınız Soyadınız" 
            value={formData.ad}
            onChange={(e) => setFormData({...formData, ad: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="E-posta Adresiniz" 
            value={formData.eposta}
            onChange={(e) => setFormData({...formData, eposta: e.target.value})}
          />
          <textarea 
            rows="4" 
            placeholder="Mesajınız"
            value={formData.mesaj}
            onChange={(e) => setFormData({...formData, mesaj: e.target.value})}
          ></textarea>
          <button type="submit">Gönder</button>
        </form>
      </div>
    </section>
  );

}
export default iletisim;