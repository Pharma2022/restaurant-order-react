import React from 'react'
import {FaMinusCircle,FaPlusCircle} from 'react-icons/fa'
import ContainerRow from '../Container/ContainerRow'
import ContainerCol from '../Container/ContainerCol'
import IconButton from '../Buttons/IconButton'
import { useGlobalContext } from '../../Context/GlobalContext'

const MenuItem = ({name,
    ingredients,
    price,
    emoji,
    id
    }) => {
        const {addItem,subtractItem,orderArr,targetFoodItem}=useGlobalContext()

  return (
    <>
    <ContainerRow className="menu-item">
                <ContainerRow className="menu-content-wrapper flex-row  align-center width-full">
                        <div className="menu-food-emoji ">
                                {emoji}
                        </div>
                        <ContainerCol className="menu-content-food-wrapper  ">
                            <h3 className="menu-food-name">{name}</h3>
                            <p className="menu-food-ingredients flex-col ">
                                {ingredients.map((item,i)=> i < (ingredients.length-1) ? `${item}, ` : `and ${item}`).join("")}
                            </p> 
                            <p className="menu-food-price">${price}</p>
                        </ContainerCol>  
                </ContainerRow>
                <ContainerRow className="menu-button-wrapper">
               { targetFoodItem(orderArr,id)?    <IconButton className="menu-button"  >
                        <FaMinusCircle  onClick={()=>subtractItem(id)}/>
                    </IconButton>:null}
                    <IconButton className="menu-button"  >
                        
                        <FaPlusCircle  onClick={()=>addItem(id)} />
                    </IconButton>
                
                </ContainerRow>
        </ContainerRow>
        <hr className="menu-hr"/>
        </>
  )
}

export default MenuItem