import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Aranhaverso",
  description: "Carrossel parallax do Aranhaverso com React, Next.js e Framer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="opção de menu"
            width={36}
            height={25}
          />
          <Image src="/spider-logo.svg" alt="logo" width={260} height={70} />
          <Image src="/icons/user.svg" alt="conta" width={36} height={25} />
        </header>
        {children}
      </body>
    </html>
  );
}
