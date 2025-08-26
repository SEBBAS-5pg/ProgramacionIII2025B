import { Metadata } from "next";


export const metadata: Metadata={
   title: "Acerca de",
  description: "Casanova vende gorras :P",
  keywords: ["gorras", "en el sur","cerca unicentro", "Neiva"]
}


export default function AboutPage() {
  return (
    <> 
    <span className="flex flex-col items-center text-5xl p-24">
        <h2 className="text-emerald-700">Hola Mundo, Hagamos Quiz :3!</h2>
    </span>   
    </>
  );
}