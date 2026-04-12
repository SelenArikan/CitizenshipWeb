import type { Article } from "../../../../lib/knowledge";
import type { AdminSession } from "../../../../lib/admin-types";
import { LOCALE_FLAGS, LOCALE_LABELS } from "../../../../lib/admin-types";

const LOCALES = ["tr", "en", "ru", "ar", "fa"];

const CATEGORIES: Record<string, string[]> = {
  tr: [
    "vatandaşlık hakları", "oturum hakları", "mülkiyet hakları",
    "yatırım hakları", "aile hakları", "çalışma hakları",
    "seyahat hakları", "sosyal haklar", "şirket hakları", "hukuki güvenceler"
  ],
  en: [
    "citizenship rights", "residency rights", "property rights",
    "investment rights", "family rights", "work rights",
    "travel rights", "social rights", "corporate rights", "legal guarantees"
  ],
  ru: [
    "права гражданства", "права на проживание", "права на собственность",
    "права инвестора", "семейные права", "трудовые права",
    "права на передвижение", "социальные права", "корпоративные права", "правовые гарантии"
  ],
  ar: [
    "حقوق الجنسية", "حقوق الإقامة", "حقوق الملكية",
    "حقوق الاستثمار", "حقوق الأسرة", "حقوق العمل",
    "حقوق السفر", "الحقوق الاجتماعية", "حقوق الشركات", "الضمانات القانونية"
  ],
  fa: [
    "حقوق شهروندی", "حقوق اقامت", "حقوق مالکیت",
    "حقوق سرمایه‌گذار", "حقوق خانواده", "حقوق کار",
    "حقوق سفر", "حقوق اجتماعی", "حقوق شرکت", "تضمینات قانونی"
  ]
};

type Props = {
  article?: Article;
  session: AdminSession;
  action: (formData: FormData) => Promise<void>;
  error?: string;
  isNew?: boolean;
};

export default function ArticleForm({ article, session, action, error, isNew = false }: Props) {
  const isSuper    = session.role === "super";
  const locale     = article?.locale ?? session.locale ?? "tr";
  const categories = CATEGORIES[locale] ?? CATEGORIES.en;

  return (
    <form action={action} className="admin-form">
      {article?.id && <input type="hidden" name="id" value={article.id} />}
      {error && <div className="admin-error">{error}</div>}

      {/* Row 1: Locale + Status + Featured */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
        <div className="admin-form-group">
          <label className="admin-form-label">Dil *</label>
          <select name="locale" className="admin-form-select" defaultValue={locale} disabled={!isSuper && !isNew}>
            {isSuper ? LOCALES.map((loc) => (
              <option key={loc} value={loc}>{LOCALE_FLAGS[loc]} {LOCALE_LABELS[loc]} ({loc.toUpperCase()})</option>
            )) : (
              <option value={locale}>{LOCALE_FLAGS[locale]} {LOCALE_LABELS[locale]}</option>
            )}
          </select>
          {!isSuper && <input type="hidden" name="locale" value={locale} />}
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Durum *</label>
          <select name="status" className="admin-form-select" defaultValue={article?.status ?? "draft"}>
            <option value="draft">⏳ Taslak</option>
            <option value="published">✓ Yayınla</option>
            <option value="archived">📁 Arşivle</option>
          </select>
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Kategori *</label>
          <select name="category" className="admin-form-select" defaultValue={article?.category ?? ""}>
            <option value="">Seçin...</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Title */}
      <div className="admin-form-group">
        <label className="admin-form-label">Makale Başlığı *</label>
        <input
          name="title"
          type="text"
          className="admin-form-input"
          defaultValue={article?.title ?? ""}
          placeholder="Başlık (60-80 karakter önerilir)"
          required
        />
      </div>

      {/* Slug */}
      <div className="admin-form-group">
        <label className="admin-form-label">URL Slug *</label>
        <input
          name="slug"
          type="text"
          className="admin-form-input"
          defaultValue={article?.slug ?? ""}
          placeholder="makale-basligi-seo-uyumlu"
          pattern="[a-z0-9\-]+"
          required
        />
        <span className="admin-form-hint">Küçük harf, rakam ve tire kullanın. Örn: turkiye-vatandasligi</span>
      </div>

      {/* Summary */}
      <div className="admin-form-group">
        <label className="admin-form-label">Özet (Meta Açıklama) *</label>
        <textarea
          name="summary"
          className="admin-form-textarea"
          defaultValue={article?.summary ?? ""}
          placeholder="Makalenin kısa özeti — arama motorları bu metni kullanır (120-160 karakter önerilir)"
          required
          style={{ minHeight: "80px" }}
        />
      </div>

      {/* Content */}
      <div className="admin-form-group">
        <label className="admin-form-label">İçerik *</label>
        <textarea
          name="content"
          className="admin-form-textarea"
          defaultValue={article?.content ?? ""}
          placeholder="Makale içeriğini buraya yazın..."
          required
          style={{ minHeight: "280px" }}
        />
        <span className="admin-form-hint">Şimdilik düz metin. İlerik fazda Markdown/zengin metin desteği eklenecek.</span>
      </div>

      {/* Cover image */}
      <div className="admin-form-group">
        <label className="admin-form-label">Kapak Görseli URL</label>
        <input
          name="coverImage"
          type="url"
          className="admin-form-input"
          defaultValue={article?.coverImage ?? ""}
          placeholder="https://images.unsplash.com/photo-...?auto=format&fit=crop&w=800"
        />
        {article?.coverImage && (
          <div style={{
            marginTop: "8px",
            height: "120px",
            borderRadius: "8px",
            background: `url(${article.coverImage}) center/cover no-repeat`,
            border: "1px solid #e5e7eb"
          }} />
        )}
      </div>

      {/* Tags */}
      <div className="admin-form-group">
        <label className="admin-form-label">Etiketler</label>
        <input
          name="tags"
          type="text"
          className="admin-form-input"
          defaultValue={article?.tags.join(", ") ?? ""}
          placeholder="vatandaşlık, yatırım, türkiye"
        />
        <span className="admin-form-hint">Virgülle ayırın. Örn: vatandaşlık, yatırım, türkiye</span>
      </div>

      {/* Author */}
      <div className="admin-form-group">
        <label className="admin-form-label">Yazar Adı</label>
        <input
          name="authorName"
          type="text"
          className="admin-form-input"
          defaultValue={article?.authorName ?? session.name}
          placeholder="CitizanShip Uzman Ekibi"
        />
      </div>

      {/* Featured toggle */}
      <div className="admin-form-group">
        <div className="admin-toggle-row">
          <div className="admin-toggle-info">
            <div className="admin-toggle-title">Öne Çıkan Makale</div>
            <div className="admin-toggle-desc">Açılırsa bu makale bilgi kütüphanesi sayfasında üstte gösterilir.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }}>
              <input type="radio" name="isFeatured" value="true" defaultChecked={article?.isFeatured === true} />
              <span style={{ color: "#10b981" }}>Evet</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }}>
              <input type="radio" name="isFeatured" value="false" defaultChecked={!article?.isFeatured} />
              <span style={{ color: "#6b7280" }}>Hayır</span>
            </label>
          </div>
        </div>
      </div>

      {/* Submit buttons */}
      <div style={{ display: "flex", gap: "10px", paddingTop: "8px" }}>
        <button type="submit" name="status" value="published" className="admin-btn admin-btn-gold">
          ✓ Yayınla
        </button>
        <button type="submit" className="admin-btn admin-btn-primary">
          Kaydet
        </button>
        <button type="submit" name="status" value="draft" className="admin-btn admin-btn-ghost">
          Taslak olarak kaydet
        </button>
      </div>
    </form>
  );
}
