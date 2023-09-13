import React from 'react'
import ContainerRow from '../Container/ContainerRow'
import { useGlobalContext } from '../../Context/GlobalContext'

const OrderTotal = () => {
    
    const {isDiscounted=false,subTotal,handleCompleteOrder}=useGlobalContext()


    const total=isDiscounted? (subTotal*0.9).toFixed(2) :subTotal
    const discount =isDiscounted ? (subTotal-total).toFixed(2) :null


    return ( 
        <>
        {isDiscounted? 
            <>
                <hr className='order-hr'/>
                <ContainerRow className="total-price-wrapper">
                    <span className="total-price-text">Subtotal: </span>
                    <span className="total-price-amount">${subTotal}</span>
                </ContainerRow>
                <ContainerRow className="total-price-wrapper  ">
                    <span className="total-price-text discount ">Meal Deal Discount 10%: </span>
                    <span className="total-price-amount discount">-${discount}</span>
                </ContainerRow>
            </>
            :"" }
            
            <hr className='order-hr'/>
            <ContainerRow className="total-price-wrapper">
                <span className="total-price-text">Grand Total:</span>
                <span className="total-price-amount">${total}</span>
            </ContainerRow>
            
            <button className="order-button btn-primary" onClick={handleCompleteOrder} >Complete Order</button>
        </>
  )
}

export default OrderTotal