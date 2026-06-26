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
                  <p class="text-[#0a192f] font-medium text-lg">Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2<br/>GINZA PLAZA, 34015 Zeytinburnu, Istanbul</p>
                  <div class="mt-3 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <iframe 
                      src="https://maps.google.com/maps?q=Seyitnizam%20Mah.%20Mevlana%20Cad.%20No:81/83%20Kat:2%20GINZA%20PLAZA,%2034015%20Zeytinburnu,%20Istanbul&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="220" 
                      style="border:0;" 
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"
                      class="w-full shadow-sm"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <h4 class="text-[#8a1c1c] font-bold uppercase text-sm mb-1">E-Posta</h4>
                  <p class="text-[#0a192f] font-medium text-lg">info@turkeyinvestmentcitizenship.com</p>
                </div>
                <div>
                  <h4 class="text-[#8a1c1c] font-bold uppercase text-sm mb-1">Telefon</h4>
                  <p class="text-[#0a192f] font-medium text-lg">+90 532 449 47 28</p>
                </div>
                <div class="pt-4 border-t border-gray-100">
                  <h4 class="text-gray-400 font-bold uppercase text-xs mb-2">Çalışma Saatleri</h4>
                  <p class="text-gray-600 text-sm">Pazartesi - Cuma: 08:30 - 18:00 (GMT+3)</p>
                </div>
            </div>
         </div>

          <div class="w-full lg:w-1/2">
             <div class="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-100 relative">
                <!-- Form Header with Avatar -->
                <div class="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-6 border-b border-gray-100">
                   <div class="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-slate-100 shadow-sm bg-gray-50">
                      <img
                         src="assets/images/team/sevim-dumanli.jpeg"
                         alt="Sevim Dumanlı - Property Consultant"
                         class="h-full w-full object-cover"
                      />
                   </div>
                   <div class="text-center sm:text-left min-w-0">
                      <h3 class="text-xl font-bold leading-tight text-[#0a192f] md:text-2xl">
                         <?= htmlspecialchars(__t('contact_form.title')) ?>
                      </h3>
                      <p class="mt-2 text-sm leading-relaxed text-gray-500">
                         <?= htmlspecialchars(__t('contact_form.subtitle')) ?>
                      </p>
                   </div>
                </div>

                <form class="flex flex-col space-y-5" method="POST" action="api/contact.php">
                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars(__t('contact_form.label_name')) ?>
                      </label>
                      <input 
                         type="text" 
                         name="full_name" 
                         placeholder="<?= htmlspecialchars(__t('contact_form.placeholder_name')) ?>" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required 
                      />
                   </div>

                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars(__t('contact_form.label_email')) ?>
                      </label>
                      <input 
                         type="email" 
                         name="email" 
                         placeholder="<?= htmlspecialchars(__t('contact_form.placeholder_email')) ?>" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required 
                      />
                   </div>

                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars(__t('contact_form.label_phone')) ?>
                      </label>
                      <input 
                         type="tel" 
                         name="phone" 
                         placeholder="<?= htmlspecialchars(__t('contact_form.placeholder_phone')) ?>" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required 
                      />
                   </div>

                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars(__t('contact_form.label_message')) ?>
                      </label>
                      <textarea 
                         name="message" 
                         placeholder="<?= htmlspecialchars(__t('contact_form.placeholder_message')) ?>" 
                         rows="4" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required
                      ></textarea>
                   </div>

                   <button type="submit" class="w-full rounded-full bg-blue-600 py-4 text-base font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <?= htmlspecialchars(__t('contact_form.btn_send')) ?>
                   </button>
                </form>
             </div>
          </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
