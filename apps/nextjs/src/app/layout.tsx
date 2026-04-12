import type { Metadata } from "next";
import { headers } from "next/headers";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://citizenshipweb.com"),
  title: {
    default: "CitizenshipWeb",
    template: "%s — CitizenshipWeb",
  },
  description:
    "Vatandaşlık, oturum izni ve göçmenlik süreçlerinizde uzman kadromuzla yanınızdayız.",
  openGraph: {
    siteName: "CitizenshipWeb",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const lang = requestHeaders.get("x-cw-locale") ?? "tr";
  const dir = requestHeaders.get("x-cw-dir") ?? "ltr";

  return (
    <html lang={lang} dir={dir} className="h-full" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
