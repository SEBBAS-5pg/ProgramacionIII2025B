import { Metadata } from "next";


export const metadata: Metadata={
   title: "Contacto",
  description: "Sebas en la juega",
  keywords: ["MAC", "agripao","programador", "Neiva"]
}


export default function ContactPage() {
  return (
    <> 
    <span className="flex flex-col items-center text-6xl p-24">
        <h2 className="text-amber-700">Hola Mundo, Tengo Sueño!</h2>
    </span>   
    </>
  );
}