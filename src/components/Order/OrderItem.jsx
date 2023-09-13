import React from 'react'
import ContainerRow from '../Container/ContainerRow'

import {FaMinusCircle,FaPlusCircle} from 'react-icons/fa'
import IconButton from '../Buttons/IconButton'

const OrderItem = ({price,name,count,id,addItem,subtractItem,removeItem}) => {

  const onAdd=(ID)=>{
    addItem(ID)
  
  }
  const onSubtract=(ID)=>{
    subtractItem(ID)

  }
  const onRemove=(ID)=>{
    removeItem(ID)
 
  }



  return (
    <ContainerRow className={'order-item-wrapper'}>
         <ContainerRow className={'order-content-wrapper'}>
            <ContainerRow className="order-content-food width-full">
                <span>{name}</span> 
                <span>x {count}</span> 
            </ContainerRow>
            <span onClick={()=>onRemove(id)} >remove</span>
            </ContainerRow >
            <ContainerRow className={'order-price-wrapper'}>
              <ContainerRow className='order-content-button-wrapper flex-row space-around align-center'>
                   <IconButton className="order-content-button"  >
                        <FaMinusCircle onClick={()=>onSubtract(id)} />
                   </IconButton>
                    <IconButton className="order-content-button"  >
                          <FaPlusCircle  onClick={()=>onAdd(id)} />
                    </IconButton>
            </ContainerRow>    
            <p className="order-price">
              ${(price*count).toFixed(2)}
            </p>
          </ContainerRow>
    </ContainerRow >
  )
}

export default OrderItem