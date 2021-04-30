export type CartItemType = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  amount: number
}

// Item that is shown in the main page which can be added to the cart
export type ItemPropsType = {
  item: CartItemType
  handleAddToCart: (clickedItem: CartItemType) => void
}

// the item that has been added to the cart
export type CartPropsType = {
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

export type CartItemPropsType = {
  item: CartItemType
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id: number) => void
}

export type AppLogicParams = {
  data: CartItemType[] | undefined

  isCartOpen: boolean
  setIsCartOpen: (isCartOpen: boolean) => void
  cartItems: CartItemType[]
  setCartItems: (cartItems: CartItemType[]) => void

  getTotalItems: (cartItems: CartItemType[]) => number
  handleAddToCart: (clickedItem: CartItemType) => void
  handleRemoveFromCart: (id: number) => void
}
