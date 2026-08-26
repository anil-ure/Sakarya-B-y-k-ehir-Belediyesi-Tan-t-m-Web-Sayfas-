import React from 'react';

function Mudurlukler(){ 
    // Bu bölümde müdürlük listesi tanımlanıcak
    const mudurlukListesi = [
        {
            id: 1,
            ad: "Bilişim Sistemleri ve Donanım Şube Müdürlüğü",
           ozet: "Belediyemizin tüm donanım altyapısı, sunucu sistemleri ve teknik destek süreçlerini yönetir."
        },
        {
            id: 2,
            ad: "Coğrafi Bilgi Sistemleri Şube Müdürlüğü",
            ozet: "Kentsel veri altyapısını mekânsal analizler ve harita tabanlı sistemler ile entegre eder."
        },
         {
            id: 3,
            ad: "Elektronik ve Haberleşme Sistemleri Şube Müdürlüğü",
            ozet: "Kent genelindeki haberleşme ağları, telsiz sistemleri ve güvenlik kameralarının sürekliliğini sağlar."
        },
        {
            id: 4,
            ad: "Yazılım Şube Müdürlüğü",
            ozet: "Belediye hizmetlerinin dijitalleşmesi için web, mobil ve iç süreç yazılımlarını geliştirir."
        },

        

       

    ];

    return(
        <section id="mudurlukler">
            <h2 className='section-title'>Bağlı Müdürlüklerimiz</h2>
            <div className='grid-container'>
                {mudurlukListesi.map((m) => (
                    <div key={m.id} className='card'>
                        <h3>{m.ad}</h3>
                        <p>{m.ozet}</p>
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Mudurlukler;