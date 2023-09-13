import React from 'react'
import SubmitBtn from '../Buttons/SubmitBtn'
import Container from '../Container/Container'
import { useGlobalContext } from '../../Context/GlobalContext'

const OrderConfirmation = () => {

    const {customerName,newOrder}=useGlobalContext()
  return (
    <Container className="order-confirmation-container flex-col  " >
          
    <h3 className="order-confirmation-text" >Thanks {customerName}, your order is on the way  </h3>
    <SubmitBtn className="btn-primary new-order-button" onClick={newOrder} >New Order</SubmitBtn>
</Container>
  )
}

export default OrderConfirmation  