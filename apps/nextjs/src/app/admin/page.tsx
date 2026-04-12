import { redirect } from "next/navigation";

import { getSession } from "../../lib/admin-auth";
import { hasAdmins }  from "../../lib/admin-auth";

export default async function AdminRoot() {
  const session = await getSession();
  if (session) redirect("/admin/dashboard");

  const firstRun = !hasAdmins();
  if (firstRun) redirect("/admin/setup");

  redirect("/admin/login");
}
