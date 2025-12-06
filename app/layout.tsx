import type { Metadata } from "next";
import { Montserrat, Pacifico } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Leonardo Meza - Desarrollador Full-Stack & Diseñador",
  description: "Portfolio profesional de Leonardo Meza. Desarrollo web, diseño UI/UX y soluciones tecnológicas innovadoras desde Colombia.",
  keywords: ["desarrollo web", "full-stack", "react", "next.js", "diseño ui/ux", "colombia"],
  authors: [{ name: "Leonardo Meza" }],
  openGraph: {
    title: "Leonardo Meza - Desarrollador Full-Stack & Diseñador",
    description: "Portfolio profesional de Leonardo Meza. Desarrollo web, diseño UI/UX y soluciones tecnológicas innovadoras.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${pacifico.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
