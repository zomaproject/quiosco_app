import { createContext, useEffect, useState } from "react";
import axios from 'axios'


const QuioscoContext = createContext()


function QuioscoProvider({ children }) {

  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({}) 
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)

  const handleSetProducto = (producto) =>{
    setProducto(producto)
  }
  const handleCategoriaActual = id => {
    const [cat] = categorias.filter(category => category.id === id)
    setCategoriaActual(cat)
  } 
  const obtenerCategorias = async () => {
    await axios('/api/categorias').then(res => setCategorias(res.data))
  }

const handleChangeModal = () => {
  setModal(!modal)
}
  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(()=> {
    setCategoriaActual(categorias[0])
  },[categorias])
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        producto,
        modal,
        handleSetProducto,
        handleCategoriaActual,
        handleChangeModal
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