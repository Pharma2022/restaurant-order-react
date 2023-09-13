import { useEffect, useState } from 'react'

import './App.css'
import Header from './components/Header'
import { menuArray } from './components/data'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import Form from './components/Form/Form'
import OrderItem from './components/Order/OrderItem'
import Order from './components/Order/Order'
import OrderTotal from './components/Order/OrderTotal'
import OrderConfirmation from './components/Order/OrderConfirmation'
function App() {

    const [menuArr,setMenuArr]=useState(menuArray)
    const [orderArr,setOrderArr]=useState([])
    const [orderHtml,setOrderHtml]=useState(null)
    const [isDiscounted,setIsDiscounted]=useState(null)
    const [subTotal,setSubTotal]=useState(0)
    const [isFormShown,setIsFormShown]=useState(false)
    const [isOrderCompleted,setIsOrderCompleted]=useState(false)
    
    
    const [{customerName},setCustomerName]=useState({customerName:''})
    const handleChange=({target:{value}})=>{
      
      console.log(value)
      setCustomerName({customerName:value})}
    
    const handleCompleteOrder=()=>{
        showForm()
    }
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


      return (
        <>        
        <div className="App">
            <Header/>
            {menuArr.length&& (
            <Menu>
                { menuArray.map(({name,ingredients,
                    price,emoji,id,})=>
                      <MenuItem 
                            key={id}
                            name={name}
                            ingredients={ingredients}
                            price={price}
                            emoji={emoji}
                            id={id}
                            addItem={addItem}
                            subtractItem={subtractItem}
                        /> )
                }
            </Menu>)}
            {isOrderCompleted ? <OrderConfirmation customerName={customerName} newOrder={newOrder}/> :
            orderArr.length?(
                <Order>
                    {orderHtml}
                    <OrderTotal handleCompleteOrder={handleCompleteOrder} isDiscounted={isDiscounted} subTotal={subTotal}/>
                </Order>):null


            }
      

        {isFormShown? (
          <Form 
            handleChange={handleChange} 
            customerName={customerName} 
            hideForm={hideForm} 
            handleCompletePayment={handleCompletePayment}
            />) :null}
        </div>
        </>
        
          
  )
          
}

export default App
