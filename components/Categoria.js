import Image from "next/image"
import UseQuiosco from "../hooks/useQuiosco"

export default function Categoria({ categoria }) {
  const {handleCategoriaActual, categoriaActual} = UseQuiosco()
  const { nombre, id, icono } = categoria
  return (
    <div className={`${categoriaActual?.id === categoria.id ? "bg-amber-400" : null } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image src={`/assets/img/icono_${icono}.svg`} alt={`imagen de ${nombre}`} width={100} height={100} />
      <button
        type={'submit'}
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={()=> handleCategoriaActual(id)}
      >
        {nombre}
      </button>
    </div>
  )
}
