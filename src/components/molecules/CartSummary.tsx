import React from 'react'
import Badge from '../atoms/Badge'

interface CartSummaryProps {
  itemCount: number
  totalPrice: number
}

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
