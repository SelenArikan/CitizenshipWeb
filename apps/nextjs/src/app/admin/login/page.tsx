"use server";

import { redirect } from "next/navigation";

import {
  findAdminByUsername,
  getSession,
  hasAdmins,
  setSession,
  verifyPassword
} from "../../../lib/admin-auth";

async function loginAction(formData: FormData) {
  "use server";

  const username = (formData.get("username") as string)?.trim();
  const password = (formData.get("password") as string);

  if (!username || !password) {
    redirect("/admin/login?error=Kullan%C4%B1c%C4%B1+ad%C4%B1+ve+%C5%9Fifre+gereklidir.");
  }

  const admin = findAdminByUsername(username);
  if (!admin || !verifyPassword(password, admin.passwordHash)) {
    redirect("/admin/login?error=Kullan%C4%B1c%C4%B1+ad%C4%B1+veya+%C5%9Fifre+hatal%C4%B1.");
  }

  await setSession(admin);
  redirect("/admin/dashboard");
}

export default async function LoginPage({
  searchParams
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (session) redirect("/admin/dashboard");

  const firstRun = !hasAdmins();
  if (firstRun) redirect("/admin/setup");

  const params = await searchParams;
  const error  = params.error;

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-card">
        <div className="admin-auth-logo">
          <div className="admin-auth-logo-mark">C</div>
          <div>
            <h1 className="admin-auth-title">Admin Girişi</h1>
            <p className="admin-auth-sub">CitizanShip Yönetim Paneli</p>
          </div>
        </div>

        {error && (
          <div className="admin-error" style={{ marginBottom: "16px" }}>
            {error === "unauthorized" ? "Bu sayfaya erişmek için giriş yapmanız gerekiyor." : error}
          </div>
        )}

        <form action={loginAction} className="admin-form">
          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="username">Kullanıcı Adı</label>
            <input
              id="username"
              name="username"
              type="text"
              className="admin-form-input"
              placeholder="admin.tr"
              autoComplete="username"
              required
            />
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label" htmlFor="password">Şifre</label>
            <input
              id="password"
              name="password"
              type="password"
              className="admin-form-input"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit" className="admin-btn admin-btn-primary" style={{ width: "100%", height: "44px" }}>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
