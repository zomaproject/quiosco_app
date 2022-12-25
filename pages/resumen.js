import ResumenPedido from "../components/ResumenPedido";
import UseQuiosco from "../hooks/useQuiosco";
import Layout from "../Layout/Layout";

export default function Resumen() {
  const { pedido } = UseQuiosco()
  return (
    <Layout pagina={'Resumen'}>
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu Pedido</p>
      {pedido.length ? pedido.map(orden => (
        <ResumenPedido
          key={orden.id}
          orden={orden}
        />
      )) : 'Aún no tienes Peididos'}
    </Layout>
  )
}
