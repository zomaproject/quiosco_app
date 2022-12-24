import { PrismaClient } from "@prisma/client"
import Producto from "../components/Producto"
import UseQuiosco from "../hooks/useQuiosco"
import Layout from "../Layout/Layout"

export default function Home({ categorias }) {
  const { categoriaActual } = UseQuiosco()
  return (
    <>
      <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
        <h1 className="text-4xl font-bold">{categoriaActual?.nombre}</h1>
        <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
          {categoriaActual?.productos?.map(producto => (
            <Producto key={producto.id} producto={producto} />
          ))}
        </div>
      </Layout>

    </>
  )
}


// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()

//   const categorias = await prisma.categoria.findMany()

//   return {
//     props: {
//       categorias
//     }
//   }
// }
