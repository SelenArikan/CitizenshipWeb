<?php
require_once 'includes/schema.php';
$seoKey = 'contact';
include 'includes/header.php';
$copy = __t('contact_page');
echo schema_render_scripts(schema_contact_page($lang));
?>

    <main class="flex min-h-screen w-full flex-col items-center bg-[#E8ECF3]">
      <div class="relative w-full px-4 pb-24 pt-40 text-center" style="background: linear-gradient(135deg, #EEF2F8 0%, #F5F8FD 50%, #EBF0F8 100%);">
        <div class="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" style="background-image: radial-gradient(#0a192f 1px, transparent 1px); background-size: 28px 28px;"></div>
        <h1 class="relative mb-4 text-4xl font-bold text-[#0a192f] md:text-6xl"><?= htmlspecialchars($copy['title']) ?></h1>
        <p class="relative mx-auto max-w-3xl text-xl font-light text-[#0a192f]/60"><?= htmlspecialchars($copy['summary']) ?></p>
      </div>

      <section class="mx-auto flex w-full max-w-7xl flex-col gap-16 px-8 py-20 lg:flex-row">
         
         <div class="flex w-full flex-col space-y-8 lg:w-1/2">
            <h2 class="text-3xl font-bold text-navy"><?= htmlspecialchars($copy['officeTitle']) ?></h2>
            <p class="text-gray-600 text-lg"><?= htmlspecialchars($copy['officeIntro']) ?></p>
            
            <div class="flex flex-col space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <div>
                  <h4 class="mb-1 text-sm font-bold uppercase text-burgundy"><?= htmlspecialchars($copy['addressLabel']) ?></h4>
                  <p class="text-lg font-medium text-navy">Seyitnizam Mah. Mevlana Cad. No:81/83 Kat:2<br/>GINZA PLAZA, 34015 Zeytinburnu, Istanbul</p>
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
                  <h4 class="mb-1 text-sm font-bold uppercase text-burgundy"><?= htmlspecialchars($copy['emailLabel']) ?></h4>
                  <p class="text-lg font-medium text-navy">info@turkeyinvestmentcitizenship.com</p>
                </div>
                <div>
                  <h4 class="mb-1 text-sm font-bold uppercase text-burgundy"><?= htmlspecialchars($copy['phoneLabel']) ?></h4>
                  <p class="text-lg font-medium text-navy">+90 532 449 47 28</p>
                </div>
                <div class="pt-4 border-t border-gray-100">
                  <h4 class="mb-2 text-xs font-bold uppercase text-gray-400"><?= htmlspecialchars($copy['hoursLabel']) ?></h4>
                  <p class="text-gray-600 text-sm"><?= htmlspecialchars($copy['weekdays']) ?></p>
                  <?php if (!empty($copy['weekend'])): ?>
                    <p class="mt-1 text-sm text-gray-600"><?= htmlspecialchars($copy['weekend']) ?></p>
                  <?php endif; ?>
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
                         <?= htmlspecialchars($copy['formTitle']) ?>
                      </h3>
                      <p class="mt-2 text-sm leading-relaxed text-gray-500">
                         <?= htmlspecialchars($copy['formSubtitle']) ?>
                      </p>
                   </div>
                </div>

                <form class="flex flex-col space-y-5" method="POST" action="api/contact.php">
                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars($copy['labels']['fullName']) ?>
                      </label>
                      <input 
                         type="text" 
                         name="full_name" 
                         placeholder="<?= htmlspecialchars($copy['placeholders']['fullName']) ?>" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required 
                      />
                   </div>

                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars($copy['labels']['email']) ?>
                      </label>
                      <input 
                         type="email" 
                         name="email" 
                         placeholder="<?= htmlspecialchars($copy['placeholders']['email']) ?>" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required 
                      />
                   </div>

                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars($copy['labels']['phone']) ?>
                      </label>
                      <input 
                         type="tel" 
                         name="phone" 
                         placeholder="<?= htmlspecialchars($copy['placeholders']['phone']) ?>" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required 
                      />
                   </div>

                   <div class="flex flex-col">
                      <label class="mb-1.5 text-sm font-semibold text-gray-700">
                         <?= htmlspecialchars($copy['labels']['message']) ?>
                      </label>
                      <textarea 
                         name="message" 
                         placeholder="<?= htmlspecialchars($copy['placeholders']['message']) ?>" 
                         rows="4" 
                         class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100" 
                         required
                      ></textarea>
                   </div>

                   <button type="submit" class="w-full rounded-full bg-blue-600 py-4 text-base font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <?= htmlspecialchars($copy['submitLabel']) ?>
                   </button>
                </form>
             </div>
          </div>
      </section>
    </main>

<?php include 'includes/footer.php'; ?>
