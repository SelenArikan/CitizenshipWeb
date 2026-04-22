import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ChatWidget from "@/components/ChatWidget";
import { DocumentLang } from "@/components/DocumentLang";
import { getDictionary } from "@/lib/dictionary";

export const metadata: Metadata = {
  title: {
    default: "CitizenshipWeb — Global Citizenship & Immigration Consultancy",
    template: "%s | CitizenshipWeb",
  },
  description: "Expert consultancy for citizenship by investment, residence permits, and immigration processes worldwide. Serving clients in TR, EN, RU, AR, FA.",
  metadataBase: new URL("https://citizenshipweb.com"),
};

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);
  const dir = dict.dir === "rtl" ? "rtl" : "ltr";

  return (
    <>
      <DocumentLang lang={dict.lang} dir={dir} />
      <div className="min-h-full flex flex-col pt-20">
        <ScrollReveal />
        <Navbar dict={dict.nav} lang={dict.lang} />
        {children}
        <Footer dict={dict.footer} lang={dict.lang} />
        <ChatWidget lang={dict.lang} copy={dict.chat} />
      </div>
    </>
  );
}
