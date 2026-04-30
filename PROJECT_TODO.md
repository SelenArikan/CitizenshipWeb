# CitizanShip Project TODO

## 🔥 Aktif Sprint — 2026-04-20

- [x] **1. Footer** — Google Maps haritasını geri ekle; footer'ı 4'lü değil 5'li yan yana grid yap (Marka, Menü, Destek, İletişim, Harita)
- [x] **2. Navbar i18n** — Dil değişince menü öğeleri değişiyor (EN'de "Adımlar"/"Bilgi Bankası" gibi TR metinler çıkıyordu → şimdi dict'ten geliyor ama kontrol et)
- [x] **3. Timeline i18n** — "Başvurunun Yol Haritası" TR'ye özel; diğer dillerde farklı adım sayısı ve içerik düzgün çalışmıyor; timeline'ı dinamik adım sayısına göre yeniden yaz
- [x] **4. Navbar dropdown** — "Hakkımızda" dropdown'a tıklayınca kaybolup seçim yapılamıyor (hover/focus sorunu)
- [x] **5. Responsive / Hamburger menü** — Küçük ekranda menü öğeleri kayboluyor veya üst üste geliyor; belirli bir breakpoint'ten sonra hamburger menü ikonu göster
- [x] **6. Timeline node yazı çakışması** — TR'de 3. ve 4. node yazıları iç içe giriyor; node yazılarını üst/alt alternatif düzende göster (alternating above/below pattern)
- [x] **SEO analizi** — Yukarıdaki tüm maddeler bittikten sonra SEO raporu oluştur

Bu dosya, `2026-04-12` tarihli repo + chat denetimi ile güncellendi.

Not:
- `[x]` = Kodda veya dokümanda doğrulanabildi
- `[ ]` = Eksik, kırık, kısmi veya repo içinde doğrulanamadı

Ana denetim notları:
- `2026-04-12` chat denetiminde Next.js ve PHP public widget akışları karşılaştırıldı.
- Next.js `ChatWidget` ve PHP `chat-widget.php` sayfa dilini public `send` endpoint'ine iletiyor; yeni sohbet ilk açılışta doğru locale ile oluşuyor.
- Hem Next.js hem PHP public chat akışında günlük aynı `chat_id` yeniden kullanıldığı için kullanıcı aynı gün dil değiştirirse mevcut sohbetin `lang` değeri eski dilde kalabiliyor.
- Hem Next.js hem PHP public `send` endpoint'inde istemciden gelen `sender_type` alanına güveniliyor; bu alan backend tarafından zorlanmalı.
- Next.js admin chat API rotalarında server-side session/locale doğrulaması eksik; mevcut dil filtresi büyük ölçüde UI/query seviyesinde kalıyor.
- PHP admin `chat.php` tarafında locale erişim kontrolü mevcut; aynı açık burada birebir tekrarlanmıyor.
- Next.js production build düzeltildi; eksik `knowledge`, `news` ve `questions` veri katmanları eklendi.
- Next.js locale middleware için eksik `/{lang}/...` public rotaları eklendi, ancak içerikler hâlâ tam i18n değil.
- PHP admin tarafında eksik sayfalar tamamlandı: `knowledge.php`, `chat.php`, `setup.php`, `question-detail.php`, `news-edit.php`.
- `2026-04-11` SEO denetimi sonrası route bazlı metadata, canonical, head hreflang, Open Graph ve Twitter Card temeli Next.js + PHP public sayfalara eklendi.
- Next.js SSR düzeyinde `html lang/dir` üretimi locale bazlı çözüldü.
- JSON-LD altyapısı her iki stackte public sayfalara yayıldı; ancak `SearchAction`, `logo`, `geo` gibi bazı ayrıntılar hâlâ eksik.
- PHP sitemap gerçek çalışan `?lang=` URL yapısıyla hizalandı.
- PHP public `questions` akışı ve diğer public veri bağlantıları hâlâ ayrı iş kalemi olarak duruyor.

Son yapılanlar:
- [x] `2026-04-12` chat denetimi tamamlandı; Next.js + PHP locale routing ve admin erişim akışı karşılaştırıldı.
- [x] `2026-04-12` Next.js admin chat API rotalarına session + locale yetki kontrolü eklendi.
- [x] `2026-04-12` Next.js ve PHP public chat widget oturumları locale bazlı ayrıştırıldı.
- [x] `2026-04-12` Next.js ve PHP public `send` endpoint'lerinde istemci `sender_type` güveni kaldırıldı.
- [x] `2026-04-12` Next.js + PHP chat akışında 30 dakika pasif sohbetler için otomatik arşivleme aktifleştirildi.
- [x] `2026-04-12` Legacy global `chat_id` anahtarları locale bazlı storage anahtarlarına tek seferlik taşındı.
- [x] `2026-04-12` Chat widget karşılama ve durum metinleri tüm dillerde i18n sözlüklerinden beslenir hale getirildi.
- [x] Next.js build ve eksik veri katmanları düzeltildi.
- [x] Teknik SEO denetimi tamamlandı ve raporlandı.
- [x] PHP admin eksik sayfaları eklendi ve SQLite bootstrap düzeltildi.
- [x] Public sayfalarda title/description, canonical, hreflang, OG ve Twitter meta temeli kuruldu.
- [x] Next.js SSR `html lang/dir` locale bazlı üretilecek şekilde düzeltildi.
- [x] Next.js + PHP public sayfalara JSON-LD structured data eklendi.

## Bekleyenler

- [x] Global: Chat auth hardening completed — Next.js admin chat API rotalarında session + locale yetkisi backend'de zorlandı
- [x] Global: Chat locale consistency fixed — kullanıcı aynı gün farklı dil sayfasına geçtiğinde sohbet oturumu locale bazlı ayrıştırıldı
- [x] Global: Chat public send endpoints hardened — istemciden gelen `sender_type` alanı yok sayılıyor, public mesajlar backend'de zorunlu `user` olarak yazılıyor

- [ ] Global: Organization schema enhanced — logo, address, `contactPoint`
- [ ] Global: i18n UI blocks — questions form + knowledge library + news UI in all 5 locales
- [ ] Global: Node.js versiyon kontrolü güncellendi — Node 25/26 ile çalışacak şekilde genişletildi
- [ ] Global: AI question-answer data model and ingestion flow designed
- [ ] Global: Performance optimization pass completed
- [ ] Global: Accessibility QA pass completed
- [ ] Global: Cross-browser and device QA completed

- [ ] Home: Admin gizli cevap verdiğinde soruyu soran kişiye e-posta gönderme (`Resend` veya `Nodemailer`)
- [ ] Home: Structured data finalized — `FAQPage` + `WebSite (SearchAction)` + `Organization`

- [ ] Questions: Public answer visibility logic approved — admin toggle per question
- [ ] Questions: i18n form in all 5 languages
- [ ] Questions: AI assistant interaction model finalized
- [ ] Questions: Structured data finalized — `QAPage` + `CollectionPage` schema

- [ ] Contact: Structured data finalized — `LocalBusiness` + `LegalService` schema (`çalışma saatleri`, `geo`, `contactPoint`)

## Devam Edenler

- [ ] Global: Responsive production UI implemented in both stacks — ekranlar var ve Next.js derleniyor, ancak içerik bütünlüğü, i18n kapsamı ve SEO teslimi hâlâ kısmi
- [ ] Global: Shared content blocks completed in all five languages — `shared/i18n` içinde esasen home blokları var, site geneline yayılmış değil
- [ ] Global: Sitemap `x-default` hreflang + knowledge & news article URLs — sitemap içinde `x-default` var; article/detail URL kapsamı ve genel URL bütünlüğü hâlâ net değil
- [ ] Global: Admin panel built — login ve setup ekranları var, ancak HMAC cookie iddiası doğrulanmıyor
- [ ] Global: Public questions page — i18n form (5 dil), approved public Q&A accordion
- [ ] Global: Knowledge Library public page — featured + all articles with cover image cards
- [ ] Global: News public page — bulletin archive with category filter
- [ ] Global: Homepage latest bulletins section — 3 most recent bulletins as cards
- [ ] Global: Canlı chat sistemi (PHP) — SQLite + polling, dil filtresi, yeşil/kırmızı gösterge, 30dk arşiv
- [ ] Global: Canlı chat sistemi (Next.js) — JSON + API routes, `ChatWidget` client component, admin panel

- [ ] Home: Responsive design implemented in both stacks
- [ ] Home: Internal linking and conversion CTA finalized — all sections link to relevant pages
- [ ] Home: Latest bulletins component — 3 most recent news from admin

- [ ] Services: Responsive design implemented in both stacks
- [ ] Services: Internal linking and conversion CTA finalized

- [ ] Citizenship Process: Responsive design implemented in both stacks

- [ ] Knowledge Library: Responsive design implemented in both stacks

- [ ] News / Bulletins: Responsive design implemented in both stacks
- [ ] News / Bulletins: Article card and archive structure approved — category filter, date, summary
- [ ] News / Bulletins: Homepage latest 3 bulletins component

- [ ] Questions: Responsive design implemented in both stacks

- [ ] Contact: Responsive design implemented in both stacks

## Tamamlananlar

- [x] Global: Monorepo structure created for `apps/php-html` and `apps/nextjs`
- [x] Global: Shared content and i18n data model created under `shared/`
- [x] Global: Five-language foundation prepared: `tr`, `en`, `ru`, `ar`, `fa`
- [x] Global: Core page inventory and route map defined
- [x] Global: Initial SEO rules documented for H1, per-page description, canonical, and hreflang
- [x] Global: Initial per-page H1 content drafted
- [x] Global: Initial per-page meta descriptions drafted
- [x] Global: Final visual design system approved — tremglobal.com inspired: navy + gold, sticky nav, full-hero, premium footer
- [x] Global: Open Graph + Twitter Card meta added to all pages
- [x] Global: Sitemap, `robots.txt`, and technical SEO assets created — `sitemap.ts` + `robots.ts` (Next.js), `sitemap.xml.php` + `robots.txt` (PHP)
- [x] Global: `robots.txt` `/admin/` disallow added
- [x] Global: Structured data coverage completed — `Organization`, `FAQPage`, `BreadcrumbList` JSON-LD in both stacks
- [x] Global: Questions admin — list with lang/status filter, answer form, visibility toggle, delete
- [x] Global: Knowledge Library admin — article CRUD with rights-focused categories (5 dil)
- [x] Global: News/Bulletins admin — bulletin CRUD, per-locale, status management
- [x] Global: Scroll-based citizenship timeline fully designed and implemented — PHP + Next.js

- [x] Home: Initial H1 defined
- [x] Home: Initial meta description defined
- [x] Home: Final section order approved — Hero → Programs → Metrics → ServiceShowcase → FAQ+Advisor → Benefits → Timeline → Insights → LatestBulletins → CTA

- [x] Services: Initial H1 defined
- [x] Services: Initial meta description defined
- [x] Services: Service grouping approved
- [x] Services: Structured data finalized — `ItemList` + `Service` schema (6 hizmet)

- [x] Citizenship Process: Initial H1 defined
- [x] Citizenship Process: Initial meta description defined
- [x] Citizenship Process: Scroll-based stage experience approved — alternating timeline, fade+slide animation, stats hero, document pills
- [x] Citizenship Process: AI and contact CTA integration finalized
- [x] Citizenship Process: Structured data finalized — `HowTo` schema (6 adım)

- [x] Knowledge Library: Admin edit workflow finalized — CRUD + featured + locale filter
- [x] Knowledge Library: Initial H1 defined
- [x] Knowledge Library: Initial meta description defined
- [x] Knowledge Library: Category and content model approved — rights-focused (`vatandaşlık`, `oturum`, `mülkiyet`, `yatırım`, `aile`, `çalışma`, `seyahat`, `sosyal haklar`)
- [x] Knowledge Library: Structured data finalized — `CollectionPage` schema

- [x] News / Bulletins: Admin edit workflow finalized — CRUD + locale filter + status
- [x] News / Bulletins: Initial H1 defined
- [x] News / Bulletins: Initial meta description defined
- [x] News / Bulletins: Structured data finalized — `CollectionPage` schema

- [x] Questions: Initial H1 defined
- [x] Questions: Initial meta description defined

- [x] Contact: Initial H1 defined
- [x] Contact: Initial meta description defined
- [x] Contact: Contact conversion flow approved
- [x] Contact: Trust and office information blocks finalized
