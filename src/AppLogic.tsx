import { Badge, Drawer, Grid } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'

import { AppLogicWrapper, StyledButton } from './AppLogic.styles'
import { AppLogicParams } from './App.types'
import Item from './components/Item/Item'
import Cart from './components/Cart/Cart'

const AppLogic: React.FC<AppLogicParams> = ({
  data,

  isCartOpen,
  setIsCartOpen,
  cartItems,
  setCartItems,

  getTotalItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <AppLogicWrapper>
      <Drawer
        anchor='right'
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>

      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCart />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map(dataItem => (
          <Grid item key={dataItem.id} xs={12} sm={4}>
            <Item item={dataItem} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </AppLogicWrapper>
  )
}

export default AppLogic
