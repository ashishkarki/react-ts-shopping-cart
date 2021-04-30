import React from 'react'
import { AppFunctions } from './App.types'

const AppLogic: React.FC<AppFunctions> = ({
  getTotalItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <div>
      Hello from App Logic <br /> Total items: {getTotalItems()}
    </div>
  )
}

export default AppLogic
