import { useQuery } from 'react-query'

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'

// Types
import { CartItemType } from './App.types'
import AppLogic from './AppLogic'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useState } from 'react'

const getFakeProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(`https://fakestoreapi.com/products`)).json()

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  const _getTotalItems = (cartItems: CartItemType[]) =>
    cartItems.reduce(
      (acc: number, cartItem: CartItemType) => acc + cartItem.amount,
      0
    )

  const _handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(curCartItems => {
      // check if already existing item`
      const doesItemExist = curCartItems.find(
        item => item.id === clickedItem.id
      )

      if (doesItemExist) {
        return curCartItems.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }

      // first instance of this item
      return [...curCartItems, { ...clickedItem, amount: 1 }]
    })
  }
  const _handleRemoveFromCart = (id: number) => {
    setCartItems(curCartItems =>
      curCartItems.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        } else {
          return [...acc, item]
        }
      }, [] as CartItemType[])
    )
  }

  // use react query to fetch data
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    `fakeProducts`,
    getFakeProducts
  )

  const appLogicParams = {
    data,

    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems,

    getTotalItems: _getTotalItems,
    handleAddToCart: _handleAddToCart,
    handleRemoveFromCart: _handleRemoveFromCart,
  }

  if (isLoading) return <LinearProgress />
  if (error) return <ErrorOutlineIcon />

  return <AppLogic {...appLogicParams} />
}

export default App
