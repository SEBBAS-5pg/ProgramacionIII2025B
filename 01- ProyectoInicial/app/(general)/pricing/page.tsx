
import { Metadata } from "next";

export const metadata: Metadata={
   title: "Precios",
  description: "Sebas en la juega",
  keywords: ["MAC", "agripao","programador", "Neiva"]
}

export default function PricingPage() {
  return (
   <> 
    <span className="flex flex-col items-center text-3xl p-35">
        <h2 className="text-blue-800">Hola Mundo, Quiero Empanada!</h2>
    </span>   
    </>
  );
}