import type { Bulletin } from "../../../../lib/news";
import type { AdminSession }             from "../../../../lib/admin-types";
import { LOCALE_FLAGS, LOCALE_LABELS }   from "../../../../lib/admin-types";

const LOCALES = ["tr", "en", "ru", "ar", "fa"];

const CATEGORIES: Record<string, string[]> = {
  tr: ["mevzuat", "duyuru", "gayrimenkul", "yatırım", "hukuk", "siyasi gelişme", "istatistik", "editöryal"],
  en: ["regulation", "announcement", "real-estate", "investment", "legal", "policy", "statistics", "editorial"],
  ru: ["регулирование", "объявление", "недвижимость", "инвестиции", "юридический", "политика", "статистика", "редакция"],
  ar: ["تنظيم", "إعلان", "عقارات", "استثمار", "قانوني", "سياسة", "إحصاء", "تحريري"],
  fa: ["مقررات", "اطلاعیه", "املاک", "سرمایه‌گذاری", "حقوقی", "سیاست", "آمار", "سرمقاله"]
};

type Props = {
  bulletin?: Bulletin;
  session:   AdminSession;
  action:    (formData: FormData) => Promise<void>;
  isNew?:    boolean;
};

export default function BulletinForm({ bulletin, session, action, isNew = false }: Props) {
  const isSuper    = session.role === "super";
  const locale     = bulletin?.locale ?? session.locale ?? "tr";
  const categories = CATEGORIES[locale] ?? CATEGORIES.en;

  return (
    <form action={action} className="admin-form">
      {bulletin?.id && <input type="hidden" name="id" value={bulletin.id} />}
      {/* Row: Locale + Status + Category */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
        <div className="admin-form-group">
          <label className="admin-form-label">Dil *</label>
          <select name="locale" className="admin-form-select" defaultValue={locale} disabled={!isSuper && !isNew}>
            {isSuper ? LOCALES.map((loc) => (
              <option key={loc} value={loc}>{LOCALE_FLAGS[loc]} {LOCALE_LABELS[loc]}</option>
            )) : (
              <option value={locale}>{LOCALE_FLAGS[locale]} {LOCALE_LABELS[locale]}</option>
            )}
          </select>
          {!isSuper && <input type="hidden" name="locale" value={locale} />}
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Durum *</label>
          <select name="status" className="admin-form-select" defaultValue={bulletin?.status ?? "draft"}>
            <option value="draft">⏳ Taslak</option>
            <option value="published">✓ Yayınla</option>
            <option value="archived">📁 Arşivle</option>
          </select>
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Kategori *</label>
          <select name="category" className="admin-form-select" defaultValue={bulletin?.category ?? ""}>
            <option value="">Seçin...</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Title */}
      <div className="admin-form-group">
        <label className="admin-form-label">Başlık *</label>
        <input
          name="title"
          type="text"
          className="admin-form-input"
          defaultValue={bulletin?.title ?? ""}
          placeholder="Bülten başlığı (60-80 karakter)"
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
          defaultValue={bulletin?.slug ?? ""}
          placeholder="yeni-kanun-guncelleme-2026"
          pattern="[a-z0-9\-]+"
          required
        />
        <span className="admin-form-hint">Küçük harf, rakam ve tire. Örn: yatirim-esigi-guncellendi</span>
      </div>

      {/* Summary */}
      <div className="admin-form-group">
        <label className="admin-form-label">Özet *</label>
        <textarea
          name="summary"
          className="admin-form-textarea"
          defaultValue={bulletin?.summary ?? ""}
          placeholder="Ana sayfada ve bülten kartında görünür kısa özet (120-160 karakter)"
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
          defaultValue={bulletin?.content ?? ""}
          placeholder="Bülten içeriğini buraya yazın..."
          required
          style={{ minHeight: "260px" }}
        />
      </div>

      {/* Cover image */}
      <div className="admin-form-group">
        <label className="admin-form-label">Kapak Görseli URL</label>
        <input
          name="coverImage"
          type="url"
          className="admin-form-input"
          defaultValue={bulletin?.coverImage ?? ""}
          placeholder="https://images.unsplash.com/..."
        />
        {bulletin?.coverImage && (
          <div style={{
            marginTop: "8px", height: "100px", borderRadius: "8px",
            background: `url(${bulletin.coverImage}) center/cover no-repeat`,
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
          defaultValue={bulletin?.tags.join(", ") ?? ""}
          placeholder="vatandaşlık, yatırım, 2026"
        />
        <span className="admin-form-hint">Virgülle ayırın</span>
      </div>

      {/* Author */}
      <div className="admin-form-group">
        <label className="admin-form-label">Yazar</label>
        <input
          name="authorName"
          type="text"
          className="admin-form-input"
          defaultValue={bulletin?.authorName ?? session.name}
        />
      </div>

      {/* Featured */}
      <div className="admin-form-group">
        <div className="admin-toggle-row">
          <div className="admin-toggle-info">
            <div className="admin-toggle-title">Öne Çıkan Bülten</div>
            <div className="admin-toggle-desc">Ana sayfada ve haberler sayfasında üstte gösterilir.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }}>
              <input type="radio" name="isFeatured" value="true" defaultChecked={bulletin?.isFeatured === true} />
              <span style={{ color: "#10b981" }}>Evet</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", cursor: "pointer" }}>
              <input type="radio" name="isFeatured" value="false" defaultChecked={!bulletin?.isFeatured} />
              <span style={{ color: "#6b7280" }}>Hayır</span>
            </label>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div style={{ display: "flex", gap: "10px", paddingTop: "8px" }}>
        <button type="submit" name="status" value="published" className="admin-btn admin-btn-gold">
          ✓ Yayınla
        </button>
        <button type="submit" className="admin-btn admin-btn-primary">Kaydet</button>
        <button type="submit" name="status" value="draft" className="admin-btn admin-btn-ghost">
          Taslak
        </button>
      </div>
    </form>
  );
}
