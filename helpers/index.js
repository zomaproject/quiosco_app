export const formatearDinero = (dinero) => {
  return dinero.toLocaleString('en-Us', {
    style: 'currency',
    currency: 'USD'
  })
}
