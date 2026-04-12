import { redirect } from "next/navigation";
import { getSession } from "../../../../lib/admin-auth";
import { getChatAccessRow, canAdminAccessChat } from "../../../../lib/admin-chat";
import ChatSessionClient from "./ChatSessionClient";

export default async function AdminChatSessionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login?error=unauthorized");

  const { id } = await params;
  const chat = getChatAccessRow(id);

  if (!chat) {
    redirect("/admin/chat?error=notfound");
  }

  if (!canAdminAccessChat(session, chat.lang)) {
    redirect("/admin/chat?error=noaccess");
  }

  return <ChatSessionClient sessionId={id} />;
}
