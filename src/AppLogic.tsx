import React, { useState } from 'react'
import { Drawer, Grid } from '@material-ui/core'

import { Wrapper, StyledButton } from './AppLogic.styles'
import { AppLogicParams, CartItemType } from './App.types'
import Item from './components/Item/Item'

const AppLogic: React.FC<AppLogicParams> = ({
  data,
  getTotalItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([] as CartItemType[])

  return (
    <Wrapper>
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        Cart goes here...
      </Drawer>

      <Grid container spacing={3}>
        {data?.map(dataItem => (
          <Grid item key={dataItem.id} xs={12} sm={4}>
            <Item item={dataItem} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default AppLogic
