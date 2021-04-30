import { useQuery } from 'react-query'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import Badge from '@material-ui/core/Badge'

// Types
import { CartItemType } from './App.types'
import AppLogic from './AppLogic'
import LinearProgress from '@material-ui/core/LinearProgress'

const getFakeProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(`https://fakestoreapi.com/products`)).json()

const App = () => {
  const _getTotalItems = () => 0
  const _handleAddToCart = () => null
  const _handleRemoveFromCart = () => null

  // use react query to fetch data
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    `fakeProducts`,
    getFakeProducts
  )

  const appLogicParams = {
    data,
    getTotalItems: _getTotalItems,
    handleAddToCart: _handleAddToCart,
    handleRemoveFromCart: _handleRemoveFromCart,
  }

  if (isLoading) return <LinearProgress />
  if (error) return <ErrorOutlineIcon />

  return <AppLogic {...appLogicParams} />
}

export default App
