import AdminLayout from "../Layout/AdminLayout";
import useSWR from 'swr'
import axios from "axios";
import Orden from "../components/Orden";
export default function Admin() {

  const fetcher = () => axios('/api/ordenes').then(res => res.data)

  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})
  console.log(data)
  return (
    <AdminLayout pagina={'Admin'}>
      <h1 className="text-4xl font-bold">Panel de Aministración</h1>
      <p className="text-2xl my-10">Administra las ordenes</p>
      {data && data.length ? data.map(orden => (
        <Orden orden={orden} key={orden.id} />
      )) : <p>No Hay Ordenes Pendientes</p>}
    </AdminLayout>
  )
}
