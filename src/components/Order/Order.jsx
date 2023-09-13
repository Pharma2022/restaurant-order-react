import React from 'react'
import Container from '../Container/Container'
import ContainerCol from '../Container/ContainerCol'

const Order = ({className=null,children,...rest}) => {
  return (
    <section className='order-wrapper'>
    <Container className={`order-container ${className}`}>
      <h3 className="order-title">Your Order</h3>
        <ContainerCol className="order-items-container" {...rest}>
            {children}
        </ContainerCol> 
      </Container>
    
    </section>
  )
}

export default Order