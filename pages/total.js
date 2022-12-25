import { useEffect } from "react"
import { formatearDinero } from "../helpers"
import UseQuiosco from "../hooks/useQuiosco"
import Layout from "../Layout/Layout"
export default function Total() {


  const { total, pedido, nombre, setNombre, colocarOrden } = UseQuiosco()


  const comprobarPedido = () => {
    return pedido.length === 0 || !nombre || nombre.length < 3 
  }

  useEffect(() => {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  return (

    <Layout pagina={'Total y Confirmar Pedido'}>
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Confirmar Pedido</p>
      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl "> Nombre </label>
          <input type="text" id="nombre" className="bg-gray-200 w-full lg:w-1/3 p-2 mt-3 rounded-md" 
            value={nombre}
            onChange={e=> setNombre(e.target.value)}
           />
        </div>
        <div className="mt-10"><p className="text-2xl"> Total a pagar: {''} <span className="font-bold">{formatearDinero(total)}</span></p></div>
        <div className="mt-5">
          <input
            disabled={comprobarPedido()}
            className={` ${comprobarPedido() ? "bg-indigo-100" : 'bg-indigo-600 hover:bg-indigo-800'} text-center w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white`}
            type="submit" value={'Confirmar Pedido'} />
        </div>
      </form>
    </Layout>
  )
}
