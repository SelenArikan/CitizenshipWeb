<?php
require_once 'includes/schema.php';
$seoKey = 'contact';
include 'includes/header.php';
echo schema_render_scripts(schema_contact_page($lang));
?>

    <main class="flex flex-col items-center w-full min-h-screen bg-[#f4f6f8]">
      <div class="w-full bg-[#0a192f] py-24 text-center text-white px-4 mt-20">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Bizimle İletişime Geçin</h1>
          <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">Alanında uzman avukatlarımız ve global danışmanlarımız sorularınızı yanıtlamak için hazır.</p>
      </div>

      <section class="w-full max-w-7xl px-8 py-20 flex flex-col lg:flex-row gap-16">
         
         <div class="w-full lg:w-1/2 flex flex-col space-y-8">
            <h2 class="text-3xl font-bold text-[#0a192f]">İstanbul Merkez Ofis</h2>
            <p class="text-gray-600 text-lg">Hemen randevu alarak ofisimizde uzmanlarımızla karşılıklı görüşebilir veya global online toplantılar planlayabilirsiniz.</p>
            
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col space-y-6">
                <div>
                  <h4 class="text-[#8a1c1c] font-bold uppercase text-sm mb-1">Açık Adres</h4>
                  <p class="text-[#0a192f] font-medium text-lg">Levent Mah. Cömert Sok. No:1 Kat:15<br/>Beşiktaş, İstanbul, Türkiye</p>
                </div>
                <div>
                  <h4 class="text-[#8a1c1c] font-bold uppercase text-sm mb-1">E-Posta</h4>
                  <p class="text-[#0a192f] font-medium text-lg">info@citizenshipweb.com</p>
                </div>
                <div>
                  <h4 class="text-[#8a1c1c] font-bold uppercase text-sm mb-1">Telefon</h4>
                  <p class="text-[#0a192f] font-medium text-lg">+90 212 555 00 00</p>
                </div>
                <div class="pt-4 border-t border-gray-100">
                  <h4 class="text-gray-400 font-bold uppercase text-xs mb-2">Çalışma Saatleri</h4>
                  <p class="text-gray-600 text-sm">Pazartesi - Cuma: 09:00 - 18:00 (GMT+3)</p>
                </div>
            </div>
         </div>

         <div class="w-full lg:w-1/2">
            <div class="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 relative">
               <h3 class="text-2xl font-bold text-[#0a192f] mb-6">İletişim Formu</h3>
               <form class="flex flex-col space-y-5" method="POST" action="api/contact.php">
                  <div class="flex flex-col md:flex-row gap-5">
                    <input type="text" name="first_name" placeholder="Adınız" class="flex-1 px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-[#0a192f] focus:ring-2 focus:ring-[#8a1c1c] outline-none" required />
                    <input type="text" name="last_name" placeholder="Soyadınız" class="flex-1 px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-[#0a192f] focus:ring-2 focus:ring-[#8a1c1c] outline-none" required />
                  </div>
                  <input type="email" name="email" placeholder="E-posta Adresiniz" class="w-full px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-[#0a192f] focus:ring-2 focus:ring-[#8a1c1c] outline-none" required />
                  <input type="tel" name="phone" placeholder="Telefon Numaranız" class="w-full px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-[#0a192f] focus:ring-2 focus:ring-[#8a1c1c] outline-none" required />
                  <textarea name="message" placeholder="Mesajınız veya hedeflerinizi özetleyin..." rows="5" class="w-full px-4 py-4 rounded-xl bg-[#f4f6f8] border-none text-[#0a192f] focus:ring-2 focus:ring-[#8a1c1c] outline-none" required></textarea>
                  <button type="submit" class="w-full py-5 bg-[#8a1c1c] hover:bg-[#a32222] text-white rounded-xl font-bold transition shadow-md text-lg">
                     Mesajı Gönder
                  </button>
               </form>
            </div>
         </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
