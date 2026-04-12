export default function Contact() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div className="w-full bg-navy py-24 text-center text-white px-4 pt-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bizimle İletişime Geçin</h1>
          <p className="text-xl font-light text-gray-300 max-w-2xl mx-auto">Alanında uzman avukatlarımız ve global danışmanlarımız sorularınızı yanıtlamak için hazır.</p>
      </div>

      <section className="w-full max-w-7xl px-8 py-20 flex flex-col lg:flex-row gap-16">
         
         <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <h2 className="text-3xl font-bold text-navy">İstanbul Merkez Ofis</h2>
            <p className="text-gray-600 text-lg">Hemen randevu alarak ofisimizde uzmanlarımızla karşılıklı görüşebilir veya global online toplantılar planlayabilirsiniz.</p>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col space-y-6">
                <div>
                  <h4 className="text-burgundy font-bold uppercase text-sm mb-1">Açık Adres</h4>
                  <p className="text-navy font-medium text-lg">Levent Mah. Cömert Sok. No:1 Kat:15<br/>Beşiktaş, İstanbul, Türkiye</p>
                </div>
                <div>
                  <h4 className="text-burgundy font-bold uppercase text-sm mb-1">E-Posta</h4>
                  <p className="text-navy font-medium text-lg">info@citizenshipweb.com</p>
                </div>
                <div>
                  <h4 className="text-burgundy font-bold uppercase text-sm mb-1">Telefon</h4>
                  <p className="text-navy font-medium text-lg">+90 212 555 00 00</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-gray-400 font-bold uppercase text-xs mb-2">Çalışma Saatleri</h4>
                  <p className="text-gray-600 text-sm">Pazartesi - Cuma: 09:00 - 18:00 (GMT+3)</p>
                </div>
            </div>
         </div>

         <div className="w-full lg:w-1/2">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative">
               <h3 className="text-2xl font-bold text-navy mb-6">İletişim Formu</h3>
               <form className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row gap-5">
                    <input type="text" placeholder="Adınız" className="flex-1 px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-navy focus:ring-2 focus:ring-burgundy outline-none" required />
                    <input type="text" placeholder="Soyadınız" className="flex-1 px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-navy focus:ring-2 focus:ring-burgundy outline-none" required />
                  </div>
                  <input type="email" placeholder="E-posta Adresiniz" className="w-full px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-navy focus:ring-2 focus:ring-burgundy outline-none" required />
                  <input type="tel" placeholder="Telefon Numaranız" className="w-full px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-navy focus:ring-2 focus:ring-burgundy outline-none" required />
                  <textarea placeholder="Mesajınız veya hedeflerinizi özetleyin..." rows={5} className="w-full px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-navy focus:ring-2 focus:ring-burgundy outline-none" required></textarea>
                  <button type="submit" className="w-full py-5 bg-burgundy hover:bg-burgundy-light text-white rounded-xl font-bold transition shadow-md text-lg">
                     Mesajı Gönder
                  </button>
               </form>
            </div>
         </div>
      </section>
    </main>
  );
}
