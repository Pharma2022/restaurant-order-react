import './App.css'
import Header from './components/Header'
import Menu from './components/Menu/Menu'
import Form from './components/Form/Form'
import Order from './components/Order/Order'
import OrderTotal from './components/Order/OrderTotal'
import OrderConfirmation from './components/Order/OrderConfirmation'
import { useGlobalContext } from './Context/GlobalContext'


function App() {

    const  {orderArr,orderHtml,isFormShown,isOrderCompleted}=useGlobalContext()
          return (<div className="App">
                    <Header/>
                    <Menu/>
                    {isOrderCompleted ? 
                      <OrderConfirmation /> :
                        orderArr.length?(
                          <Order>
                            {orderHtml}
                            <OrderTotal />
                          </Order>)
                      :null
                    }
                    {isFormShown? (
                    <Form />) 
                    :null}
                  </div>
                )
          
}

export default App
