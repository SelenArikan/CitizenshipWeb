import { redirect } from "next/navigation";

import {
  createAdmin,
  findAdminByUsername,
  getAdminMutationErrorMessage,
  getSession,
  hasAdmins,
  hashPassword,
  setSession,
} from "../../../lib/admin-auth";
import { getSiteConfig } from "../../../lib/content";
import { getDbRuntimeInfo } from "../../../lib/db";
import type { AdminRole } from "../../../lib/admin-types";

async function setupAction(formData: FormData) {
  "use server";

  const name = (formData.get("name") as string)?.trim();
  const username = (formData.get("username") as string)?.trim();
  const password = formData.get("password") as string;
  const localeValue = (formData.get("locale") as string)?.trim();
  const locale = localeValue || null;
  const role = (locale ? "lang" : "super") as AdminRole;
  const firstRun = !hasAdmins();
  const session = await getSession();

  if (!firstRun) {
    if (!session) {
      redirect("/admin/login?error=unauthorized");
    }

    if (session.role !== "super") {
      redirect("/admin/dashboard");
    }
  }

  if (!name || !username || !password || password.length < 6) {
    redirect("/admin/setup?error=Ad%2C+kullan%C4%B1c%C4%B1+ad%C4%B1+ve+en+az+6+karakterli+%C5%9Fifre+zorunludur.");
  }

  if (findAdminByUsername(username)) {
    redirect("/admin/setup?error=Bu+kullan%C4%B1c%C4%B1+ad%C4%B1+zaten+kullan%C4%B1l%C4%B1yor.");
  }

  let admin;

  try {
    admin = createAdmin({
      username,
      name,
      passwordHash: hashPassword(password),
      locale,
      role,
    });
  } catch (error) {
    redirect(`/admin/setup?error=${encodeURIComponent(getAdminMutationErrorMessage(error))}`);
  }

  if (firstRun) {
    await setSession(admin);
    redirect("/admin/dashboard");
  }

  redirect("/admin/setup?success=Yeni+admin+hesab%C4%B1+eklendi.");
}

export default async function SetupPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const site = getSiteConfig();
  const firstRun = !hasAdmins();
  const session = await getSession();
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : undefined;
  const success = typeof params.success === "string" ? params.success : undefined;
  const dbInfo = getDbRuntimeInfo();

  if (!firstRun) {
    if (!session) redirect("/admin/login?error=unauthorized");
    if (session.role !== "super") redirect("/admin/dashboard");
  }

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

        {dbInfo.isEphemeral && (
          <div className="admin-error" style={{ marginBottom: "20px" }}>
            Sunucu geçici disk kullanıyor. Vercel üzerinde oluşturulan admin, sohbet ve içerik değişiklikleri kalıcı olmayabilir.
          </div>
        )}

        {error && (
          <div className="admin-error" style={{ marginBottom: "20px" }}>
            {error}
          </div>
        )}

        {success && (
          <div className="admin-success" style={{ marginBottom: "20px" }}>
            {success}
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
