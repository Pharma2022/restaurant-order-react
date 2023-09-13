import React,{useState,useEffect} from 'react'
import { menuArray } from '../components/data'
import OrderItem from '../components/Order/OrderItem'
const useGlobal = () => {
    const [menuArr,setMenuArr]=useState(menuArray)
    const [orderArr,setOrderArr]=useState([])
    const [orderHtml,setOrderHtml]=useState(null)
    const [isDiscounted,setIsDiscounted]=useState(null)
    const [subTotal,setSubTotal]=useState(0)
    
    const [isFormShown,setIsFormShown]=useState(false)
    const [isOrderCompleted,setIsOrderCompleted]=useState(false)
    const [{customerName},setCustomerName]=useState({customerName:''})
    const handleChange=({target:{value}})=>setCustomerName({customerName:value})
    
    const handleCompleteOrder=()=>showForm()
    
    const handleCompletePayment=(e)=>{   
      e.preventDefault()
        hideForm()
        completeOrder()
    }

    const showForm=()=> setIsFormShown(true)
    const hideForm=()=>setIsFormShown(false)
    const completeOrder=()=>setIsOrderCompleted(true)
    const newOrder=()=>{  
      setIsOrderCompleted(false)
      clearOrderArr()
      clearOrderHtml()
    }
    
    const clearOrderArr=()=>setOrderArr([])

    useEffect(()=>{
      clearOrderHtml()

      if(orderArr.length){
        applySubTotal()
        targetType('food') &&  targetType('drink') ? addDiscount() :removeDiscount()
        renderOrder()
      } 

    },[orderArr])
   
    const addItem=(ID)=>{
      
      const targetOrderItem=targetFoodItem(orderArr,ID)
      const targetMenuItem=targetFoodItem(menuArr,ID)
      setOrderArr(
          targetOrderItem? 
              prev=>prev.map(item=> item.id===ID && item.count? 
                    ({...item,count:item.count+1}) : item)
            : prev=> [...prev, {...targetMenuItem,count:1}]    
                  )
    }  
    const subtractItem=(ID)=>{
      const targetOrderItem=targetFoodItem(orderArr,ID)
      targetOrderItem.count===1&&removeItem(ID)

      setOrderArr( prev=>targetOrderItem? prev.map(item=>
        item.id===ID?  
              ({...item,
                count:item.count-1            
               })
           :item )          
       : prev)
     
      
      }
    const removeItem=(ID)=>setOrderArr(prev=>prev.filter(({id})=>id!==ID))   


    const applySubTotal=()=>setSubTotal( orderArr.reduce((acc,{price})=>acc+price,0).toFixed(2))
    const clearOrderHtml=()=>setOrderHtml(null)
    const addDiscount=()=>setIsDiscounted(true)
    const removeDiscount=()=>setIsDiscounted(false)

    const targetType=(typ)=>orderArr.filter(({type})=>type===typ)[0]
    const targetFoodItem=(arr,ID)=>arr.filter(({id})=>id===ID)[0]


    const renderOrder=()=>  setOrderHtml(orderArr.map(({price,name,count,id})=>(
          <OrderItem
              key={id}  
              price={price}
              name={name}
              count={count}
              id={id}
              addItem={addItem}
              subtractItem={subtractItem}
              removeItem={removeItem}/>)))



  return {  menuArr,orderArr,targetFoodItem, orderHtml,isDiscounted,subTotal,isFormShown,isOrderCompleted,
            handleCompleteOrder,newOrder,addItem,subtractItem,
            hideForm,handleCompletePayment,handleChange,customerName,}


}

export default useGlobal