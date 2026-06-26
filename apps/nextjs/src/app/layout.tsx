import type { Metadata } from "next";
import { headers } from "next/headers";
import { Open_Sans } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citizenshipweb.com"),
  title: {
    default: "CitizenshipWeb",
    template: "%s — CitizenshipWeb",
  },
  description:
    "Expert consultancy for Turkish citizenship by investment, residence permits and immigration. Serving clients in TR, EN, RU, AR and FA.",
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
      <head>
      {/* LCP görseli erken keşif — "LCP request discovery" hatasını giderir */}
        <link
          rel="preload"
          as="image"
          href="/hero/gayrimenkul-vatandaslik.webp"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body className={`${openSans.variable} min-h-full flex flex-col font-sans antialiased`}>{children}</body>
    </html>
  );
}
