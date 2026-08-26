import React from "react";

function Ekip(){
const calisanlar = [
    {isim: "Ahmet Yılmaz", unvan:"Yazılım Geliştirici", birim:"Yazılım Şube Müdürlüğü"},  
    {isim: "Ayşe Kaya", unvan:"Ağ ve Güvenlik Uzmanı", birim:"Donanım Şube Müdürlüğü"},
    {isim: "Mehmet Demir", unvan:"CBS Analisti", birim:"Coğrafi Bilgi Müdürlüğü"}
    
];

return(
    <section id="ekip">
        <h2 className="section-title">Ekibimiz</h2>
        <div className="grid-container">
            {calisanlar.map((e,i) => (
                <div key={i} className="card" style={{textAlign: 'center'}}>
                    <h3>{e.isim}</h3>
                    <strong style={{ color:'#0056b3' }}>{e.unvan}</strong>
                    <p style={{marginTop: '5px' , fontSize: '0.9rem'}}>{e.birim}</p>
                    </div>
            ))}
        </div>
    </section>
);
}

export default Ekip;