export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

export type AppFunctions = {
  //   nameRenderer?: (name: string) => React.ReactNode
  getTotalItems: () => number
  handleAddToCart: () => null
  handleRemoveFromCart: () => null
}
