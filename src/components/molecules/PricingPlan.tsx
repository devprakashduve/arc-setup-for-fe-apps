import React from 'react'
import Badge from '../atoms/Badge'
import Button from '../atoms/Button'

interface PricingPlanProps {
  name: string
  price: number
  features: string[]
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, features }) => {
  return (
    <div className="pricing-plan">
      <h3>{name}</h3>
      <p>${price}/month</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Button
        text="Choose Plan"
        onClick={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
      <Badge text="Popular" />
    </div>
  )
}

export default PricingPlan
