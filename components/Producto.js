import Image from "next/image"
import { formatearDinero } from "../helpers"
import UseQuiosco from "../hooks/useQuiosco"

export default function Producto({ producto }) {

  const { handleSetProducto, handleChangeModal } = UseQuiosco()
  const { imagen, nombre, precio } = producto

  return (
    <div className="border p-3">
      <Image src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`} width={400} height={500} />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>

        <button className="bg-indigo-600 w-full  hover:bg-indigo-800 mt-5 p-3 text-white"
          type="button"
          onClick={() => {
            handleSetProducto(producto)
            handleChangeModal()
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}
