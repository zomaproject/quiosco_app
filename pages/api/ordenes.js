import {PrismaClient} from '@prisma/client'



export default async function handler(req, res) {
const prisma = new PrismaClient()

  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false
    }
  })
  res.status(200).json(ordenes)

  if( req.method === 'POST'){
    const {nombre, fecha, pedido, total} = req.body
    console.log(nombre)
    const orden = await prisma.orden.create({
      data: {
        nombre,
        pedido,
        total,
        fecha
      }
    })
  res.json(orden)
  }
}