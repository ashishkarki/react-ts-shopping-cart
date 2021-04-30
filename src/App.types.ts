export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

export type ItemPropsType = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
}

export type AppLogicParams = {
  data: CartItemType[] | undefined
  getTotalItems: () => number
  handleAddToCart: (clickedItem: CartItemType) => null
  handleRemoveFromCart: () => null
}
