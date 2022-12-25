import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext()


function QuioscoProvider({ children }) {

  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0)

  const router = useRouter()

  const handleEditar = (orden) => {
    setProducto(orden)
    setModal(!modal)
  }

  const eliminarOrden = id => {
    const pedidoActualizado = pedido.filter(el => el.id !== id)
    setPedido(pedidoActualizado)
  }

  const handleAgregarPedido = ({ categoriaId, ...ProductoPedido }) => {
    let indice = pedido.findIndex(p => p?.id === ProductoPedido?.id)
    if (indice !== -1) {
      pedido[indice].cantidad = ProductoPedido.cantidad
      toast.success('Guardado Correctamente')
    } else {

      setPedido([...pedido, ProductoPedido])
      toast.success('Agregado al pedido')
    }
    setModal(false)
  }
  const handleSetProducto = (producto) => {
    setProducto(producto)
  }
  const handleCategoriaActual = id => {
    const [cat] = categorias.filter(category => category.id === id)
    setCategoriaActual(cat)
    router.push('/')
  }
  const obtenerCategorias = async () => {
    await axios('/api/categorias').then(res => setCategorias(res.data))
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  // const handleChangePaso = paso => {
  //   setPaso(paso)
  // }

  useEffect(() => {
    const nuevoTotal = pedido.reduce((total, el) => (el.cantidad * el.precio) + total, 0)
    setTotal(nuevoTotal)
  }, [pedido])

  const colocarOrden = async (e) => {
    e.preventDefault()
    try {
      setPedido([])
      setTimeout(() => {
        router.push('/')
      }, 3000);
      const { data } =  await axios.post('/api/ordenes', { pedido, nombre, total, fecha: Date.now().toString()})
      setCategoriaActual(categorias[0])
      setTotal(0)
      setNombre('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])



  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        producto,
        modal,
        pedido,
        nombre,
        total,
        setNombre,
        handleSetProducto,
        handleCategoriaActual,
        handleChangeModal,
        handleAgregarPedido,
        handleEditar,
        eliminarOrden,
        colocarOrden
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}


export {
  QuioscoProvider
}

export default QuioscoContext