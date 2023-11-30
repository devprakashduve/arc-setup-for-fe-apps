// CartSummary/CartSummary.tsx

import React from 'react'
import Badge from '@/components/atoms/Badge'
import './CartSummary.scss'
import { CartSummaryProps } from './interface'

const CartSummary: React.FC<CartSummaryProps> = ({ itemCount, totalPrice }) => {
  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <p>
        Items in Cart: <Badge text={`${itemCount}`} />
      </p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  )
}

export default CartSummary
