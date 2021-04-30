import { Button } from '@material-ui/core'
import { CartItemPropsType } from '../../App.types'
import { CartItemWrapper } from './CartItem.styles'

const CartItem: React.FC<CartItemPropsType> = ({
  item,
  addToCart,
  removeFromCart,
}) => (
  <CartItemWrapper>
    <div>
      <h3>{item.title}</h3>

      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>

      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>

        <p>{item.amount}</p>

        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>

    <img src={item.image} alt={item.title} />
  </CartItemWrapper>
)

export default CartItem
