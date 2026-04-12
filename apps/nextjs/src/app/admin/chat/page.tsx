import { redirect } from "next/navigation";
import { getSession } from "../../../lib/admin-auth";
import Sidebar from "../_components/Sidebar";
import ChatListClient from "./ChatListClient";

export default async function AdminChatPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const sp      = await searchParams;
  const isSuper = session.role === "super";
  const locale  = isSuper ? (sp.locale || undefined) : (session.locale ?? undefined);

  return (
    <div className="admin-root">
      <Sidebar session={session} activePath="chat" />

      <div className="admin-main">
        <div className="admin-topbar">
          <span className="admin-topbar-title">💬 Canlı Sohbetler</span>
        </div>

        <ChatListClient isSuper={isSuper} initialLocale={locale} />
      </div>
    </div>
  );
}
