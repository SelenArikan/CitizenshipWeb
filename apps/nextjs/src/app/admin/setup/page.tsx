import { redirect } from "next/navigation";

import { createAdmin, hasAdmins, hashPassword } from "../../../lib/admin-auth";
import { getSiteConfig } from "../../../lib/content";
import type { AdminRole } from "../../../lib/admin-types";

async function setupAction(formData: FormData) {
  "use server";

  const name     = (formData.get("name") as string)?.trim();
  const username = (formData.get("username") as string)?.trim();
  const password = (formData.get("password") as string);
  const locale   = (formData.get("locale") as string) || null;
  const role     = (locale ? "lang" : "super") as AdminRole;

  if (!name || !username || !password || password.length < 6) return;
  if (hasAdmins() && role === "super") {
    redirect("/admin/login");
  }

  createAdmin({
    username,
    name,
    passwordHash: hashPassword(password),
    locale:       locale || null,
    role
  });

  redirect("/admin/login");
}

export default async function SetupPage() {
  const site      = getSiteConfig();
  const firstRun  = !hasAdmins();

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-card" style={{ maxWidth: "500px" }}>
        <div className="admin-auth-logo">
          <div className="admin-auth-logo-mark">C</div>
          <div>
            <h1 className="admin-auth-title">
              {firstRun ? "İlk Kurulum" : "Yeni Admin Ekle"}
            </h1>
            <p className="admin-auth-sub">CitizanShip Yönetim Paneli</p>
          </div>
        </div>

        {firstRun && (
          <div className="admin-success" style={{ marginBottom: "20px" }}>
            Henüz hiç admin hesabı yok. İlk süper admin hesabını oluşturun.
          </div>
        )}

        <form action={setupAction} className="admin-form">
          <div className="admin-form-group">
            <label className="admin-form-label">Ad Soyad</label>
            <input name="name" type="text" className="admin-form-input" placeholder="Ahmet Yılmaz" required />
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Kullanıcı Adı</label>
            <input name="username" type="text" className="admin-form-input" placeholder="admin.tr" required />
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Şifre (min. 6 karakter)</label>
            <input name="password" type="password" className="admin-form-input" placeholder="••••••••" minLength={6} required />
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Dil Yetkisi</label>
            <select name="locale" className="admin-form-select">
              {firstRun ? (
                <option value="">Tüm Diller (Süper Admin)</option>
              ) : (
                <>
                  <option value="">Tüm Diller (Süper Admin)</option>
                  {site.locales.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc.toUpperCase()} — yalnızca {loc === "tr" ? "Türkçe" : loc === "en" ? "İngilizce" : loc === "ru" ? "Rusça" : loc === "ar" ? "Arapça" : "Farsça"} sorular
                    </option>
                  ))}
                </>
              )}
            </select>
            <span className="admin-form-hint">
              Dil seçilirse admin yalnızca o dildeki soruları görür ve cevaplayabilir.
            </span>
          </div>

          <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%", height: "44px" }}>
            {firstRun ? "Hesabı Oluştur ve Giriş Yap" : "Admin Ekle"}
          </button>
        </form>
      </div>
    </div>
  );
}
