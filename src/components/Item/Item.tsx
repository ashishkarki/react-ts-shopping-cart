import React from 'react'

import { ItemPropsType } from '../../App.types'
import { Wrapper } from './Item.styles'

const Item: React.FC<ItemPropsType> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />

    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>

    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
  </Wrapper>
)

export default Item
