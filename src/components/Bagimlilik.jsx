import React, { useState } from 'react';

export default function Bagimlilik() {
  const [basladi, setBasladi] = useState(false);

  const [bilgi, setBilgi] = useState({
    yas: "",
    cinsiyet: "",
    kiminIcin: "",
    hitap: ""
  });

  const [skor, setSkor] = useState(0);
  const [soruIndex, setSoruIndex] = useState(0);
  const [bitti, setBitti] = useState(false);

  const sorular = [
    "Gün içinde boş kaldığında aklına gelen ilk şey bu alışkanlığın mı oluyor?",
    "Bu durum iş, okul veya aile hayatını olumsuz etkilemeye başladı mı?",
    "Bunu azaltmaya çalışıp başarısız olduğun oldu mu?",
    "Yapmadığınız zaman huzursuz, gergin veya sinirli oluyor musunuz?",
    "Sorumluluklarınızı aksattığınız oluyor mu?",
    "Kendinizi iyi hissetmek için buna ihtiyaç duyuyor musunuz?",
    "Daha önce yaptığınız miktar artık yeterli gelmiyor mu?"
  ];

  const cevapVer = (evetMi) => {
    if (evetMi) {
      setSkor(skor + 1);
    }

    if (soruIndex + 1 < sorular.length) {
      setSoruIndex(soruIndex + 1);
    } else {
      setBitti(true);
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", minHeight: "60vh", color:"blue"}}>

      {!basladi ? (

        <div>
          <h2>Bağımlılık Farkındalık Testi</h2>

          <input style={{padding:"5px",}}
            type="number"
            placeholder="Yaşınız"
            value={bilgi.yas}
            onChange={(e) =>
              setBilgi({ ...bilgi, yas: e.target.value })
            }
          />

          <br /><br />

          <select style={{padding:"5px",}}
            value={bilgi.cinsiyet}
            onChange={(e) =>
              setBilgi({ ...bilgi, cinsiyet: e.target.value })
            }
          >
            <option value="" >Cinsiyet Seçiniz</option>
            <option>Erkek</option>
            <option>Kadın</option>
            <option>Belirtmek istemiyorum</option>
          </select>

          <br /><br />

          <select style={{padding:"5px",}}
            value={bilgi.kiminIcin}
            onChange={(e) =>
              setBilgi({ ...bilgi, kiminIcin: e.target.value })
            }
          >
            <option value="">Test kimin için?</option>
            <option>Kendim için</option>
            <option>Ailemden biri için</option>
          </select>

          <br /><br />

          <input style={{padding:"5px",}}
            type="text"
            placeholder="Size nasıl hitap edelim?"
            value={bilgi.hitap}
            onChange={(e) =>
              setBilgi({ ...bilgi, hitap: e.target.value })
            }
           
          />

          <br /><br />

          <button onClick={() => setBasladi(true)}
            style={{color:"blue",
                backgroundColor:"white",
                fontFamily:"gothic",
                padding:"5px",
                fontSize:"20px"
            }}>
            Teste Başla
          </button>

        </div>

      ) : (

        !bitti ? (

          <div>
            <h2>Merhaba {bilgi.hitap}</h2>

            <p style={{ fontSize: "30px" }}>
              {sorular[soruIndex]}
            </p>

            <button 
              onClick={() => cevapVer(true)}
              style={{ marginRight: "20px", 
                fontSize:"30px",
                marginTop:"20px",
                marginLeft:"20px",
                color:"white",
                backgroundColor:"brown",
                borderRadius:"0.2cm"

              }}
            >
              Evet
            </button>

            <button onClick={() => cevapVer(false)}
                 style={{ marginRight: "20px", 
                fontSize:"30px",
                marginTop:"20px",
                marginLeft:"20px",
                color:"white",
                backgroundColor:"brown",
                borderRadius:"0.2cm"
                 }}>
                    
              Hayır
            </button>

          </div>

        ) : (

          <div>
            <h3>Test Tamamlandı</h3>

            <h2>
              {bilgi.hitap}, sonuçlarınız hazır.
            </h2>

            <p>
              Toplam puanınız: {skor} / {sorular.length}
            </p>


            {skor >= 4 ? (

              <div>

                <p>
                  Değerlendirmenize göre bağımlılık açısından
                  riskli bir durum olabilir.
                  Profesyonel destek almanız önerilir.
                </p>

                <h4>Destek Alabileceğiniz Yerler</h4>


                <a
                  href="tel:182"
                  style={{
                    display: "block",
                    margin: "15px",
                    color: "blue"
                  }}
                >
                  📞 Sağlık Danışma Hattı: 182
                </a>


                <a
                  href="https://www.saglik.gov.tr/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    margin: "15px",
                    color: "blue"
                  }}
                >
                  🌐 Sağlık Bakanlığı Destek Sayfası
                </a>

              </div>

            ) : (

              <p>
                Sonuçlarınıza göre düşük risk düzeyindesiniz.
                Sağlıklı alışkanlıklarınızı sürdürmeye devam edin.
              </p>

            )}

          </div>

        )

      )}

    </div>
  );
}