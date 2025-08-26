import { Poppins } from "next/font/google";
import { Navbar } from "../components";

// 1. Importamos y configuramos la nueva fuente
const poppins = Poppins({
  weight: ["400", "700"], // Elige los pesos que necesites
  subsets: ["latin"],
  variable: "--font-poppins", // Creamos su propia variable CSS
});

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. NO usamos <html> ni <body> aquí.
  //    Envolvemos a los hijos en un div (o section, main, etc.)
  //    y le aplicamos la clase de la nueva fuente.
  //https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=es
  return (
    <>
      <Navbar />
      <div className={`${poppins.variable} font-sans`}>
      
      {children}
    </div>
    </>
  );
}