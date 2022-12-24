import Image from "next/image";
import UseQuiosco from "../hooks/useQuiosco";
import Categoria from "./Categoria";
export default function Sidebar()  {

  const {categorias} = UseQuiosco()

  return (
    <>
    <Image src={'/assets/img/logo.svg'} alt='logo' width={150} height={100}/>
    <nav>
      {categorias?.map(categoria => (
        <Categoria
          key={categoria.id}
          categoria = {categoria}
        />
      ))}
    </nav>
    </>
  )
}
