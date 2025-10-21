import { Title } from "@/components";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function () {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px_10 sm:px-0">
      <div className="w-full xl:w-[1000px] flex flex-col justify-center text-left">
        <Title title="Direccion" subtitle="Direccion de entrega" />

        <div className="grid grid-cols-1 gab-2 sm:gab-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>Nombres</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Apellidos</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Direccion</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Direccion 2 (opcional)</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Codigo Postal</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Ciudad</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Pais</span>
            <select className="p-2 border rounded-md bg-gray-200">
              <option value="">[ Seleccione ]</option>
              <option value="COP">Colombia</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Teléfono</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200"/>
          </div>

          <div className="flex flex-col mb-2 sm:mt-10">
            <Link 
            href="/checkout"
            className="btn-primary flex w-full sm:w-1/2 justify-center">
              Siguiente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
