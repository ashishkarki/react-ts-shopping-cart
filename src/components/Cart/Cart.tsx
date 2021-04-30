import React from 'react'
import { CartItemType, CartPropsType } from '../../App.types'
import CartItem from '../CartItem/CartItem'
import { CartWrapper } from './Cart.styles'

const Cart: React.FC<CartPropsType> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0)

  return (
    <CartWrapper>
      <h2>Your Cart Items</h2>

      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}

      <h2>Total amount: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </CartWrapper>
  )
}

export default Cart
