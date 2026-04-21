import "@/app/global.css";
import { Inter } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "@/app/global.css";
import { Banner } from "fumadocs-ui/components/banner";
import { i18nUI } from "@/lib/layout.shared";

const inter = Inter({
    subsets: ["latin"],
});

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <html lang={lang} className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <Banner variant="rainbow">
                    This is a preview of the new documentation, please report any issues you find (well, except TODOs).
                </Banner>
                <RootProvider i18n={i18nUI.provider(lang)}>
                    {children}
                </RootProvider>
            </body>
        </html>
    );
}
