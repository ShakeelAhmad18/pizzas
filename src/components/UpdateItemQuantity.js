import React from 'react'
import Button from '../utils/Button'

const UpdateItemQuantity = ({pizzaId}) => {
  return (
    <div className="flex gap-1 items-center md:gap-6">
    <Button type='round' >+</Button>
      12
    <Button type='round'>-</Button>
</div>
  )
}

export default UpdateItemQuantity
