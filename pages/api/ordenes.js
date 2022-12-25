import {PrismaClient} from '@prisma/client'



export default async function handler(req, res) {

const prisma = new PrismaClient()

  if( req.method === 'POST'){
    const {nombre, fecha, pedido, total} = req.body
    const orden = await prisma.orden.create({
      data: {
        nombre,
        pedido,
        total: parseFloat(total),
        fecha
      }
    })
  res.json(orden)
  }


  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false
    }
  })
  res.status(200).json(ordenes)

}