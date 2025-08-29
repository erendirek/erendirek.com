import type { Metadata } from "next";
import "@/ui/globals.css";
import "@/ui/general.css";
import { fira_code } from "@/ui/fonts";

export const metadata: Metadata = {
    title: "Eren Direk",
    description: "by eren direk",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${fira_code.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
