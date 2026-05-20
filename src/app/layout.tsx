import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "mp-services-immo | Excellence en Construction et Immobilier",
  description: "Expert en construction, rénovation et génie civil au Congo. Nous transformons vos visions en réalités durables.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable}`}>
      <body className="antialiased bg-white text-navy font-montserrat">
        {children}
      </body>
    </html>
  );
}
