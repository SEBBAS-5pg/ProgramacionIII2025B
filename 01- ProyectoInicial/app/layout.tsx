import type { Metadata } from "next";
// 1. Importamos las nuevas fuentes de Google Fonts
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/Navbar";

// 2. Configuramos la fuente 'Inter' para el texto general
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Creamos una variable CSS para usarla
});

// 3. Configuramos 'Roboto Mono' para código o texto monoespaciado
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono", // Creamos su variable CSS
});

export const metadata: Metadata = {
  title: "Creado por Ing. Julian Quimbayo",
  description: "Creado con amor <3 por mi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Aplicamos las variables de las fuentes a la etiqueta <html>

    
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body>
        
        {children}
      </body>
    </html>
  
    
  );
}