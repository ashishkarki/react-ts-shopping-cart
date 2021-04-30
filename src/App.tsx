import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { Drawer, LinearProgress, Grid } from '@material-ui/core'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'

// styles
import { Wrapper } from './App.styles'

// Types
import { CartItemType } from './App.types'
import AppLogic from './AppLogic'

const getFakeProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(`https://fakestoreapi.com/products`)).json()

const App = () => {
  const _getTotalItems = () => 0
  const _handleAddToCart = () => null
  const _handleRemoveFromCart = () => null

  const appLogicFunctions = {
    getTotalItems: _getTotalItems,
    handleAddToCart: _handleAddToCart,
    handleRemoveFromCart: _handleRemoveFromCart,
  }

  // use react query to fetch data
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    `fakeProducts`,
    getFakeProducts
  )

  return (
    <div className='App'>
      <AppLogic {...appLogicFunctions} />
    </div>
  )
}

export default App
