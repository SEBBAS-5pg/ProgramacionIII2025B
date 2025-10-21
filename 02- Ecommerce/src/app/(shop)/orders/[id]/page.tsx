import { QuantitySelector, Title } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props{
  params:{
    id:string;
  }
}

export default async function ({params}:Props) {
  const{id} = await params;
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden # ${id}`}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito*/}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
              "flex items-center roundedlg py-2 px-3.5 text-xs font-bold text-white mb-5",
              {
                'bg-red-500':false,
                'bg-green-500':true
              }
            )
            }>
              <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente de Pago</span>*/}
                <span className="mx-2">Pagada</span>
              
            </div>
            {/* Items*/}
            {productsInCart.map((product) => (
              <div key={product.slug} className="mb-5 flex">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>$.{product.price}x3</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout*/}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de Entrega</h2>
            <div className="mb-10">
              <p>Sebastian Puentes</p>
              <p>Avenida Tesoro</p>
              <p>Barrio Katakandru</p>
              <p>Alcaldia de Neiva</p>
              <p>Neiva - Huila</p>
              <p>3152657739</p>

            </div>

            {/*Divisor*/}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>
            <h2 className="text-2xl mb-2">Resumen de la Orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Artículos</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuestos (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl">Total: </span>
              <span className="mt-5 text-2xl text-rigth">$ 100</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer click en "Colocar Orden", Aceptas nuestros{" "}
                  <a href="#" className="underline">
                    {" "}
                    terminos y condiciones{" "}
                  </a>{" "}
                </span>
              </p>
              <Link
                className="flex btn-primary justify-center"
                href="orders/123"
              >
                Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
