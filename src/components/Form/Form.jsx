import React, { useState } from 'react'
import FormInput from './FormInput'
import Container from '../Container/Container'
import ContainerRow from '../Container/ContainerRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import SubmitBtn from '../Buttons/SubmitBtn'
import { useGlobalContext } from '../../Context/GlobalContext'

const Form = () => {

  const  {handleCompletePayment,handleChange, hideForm,customerName}=useGlobalContext()

  return (
    <section className="form-wrapper">
        <Container className='form-container flex-col justify-center'>
            <ContainerRow>
            <h4 class="form-title ">Enter Card Details</h4>    
            <FontAwesomeIcon className='close-form' icon={faXmark} onClick={hideForm} />
            </ContainerRow>
        <form className="container payment-form flex-col" onSubmit={handleCompletePayment}>
            <FormInput  placeholder="Enter your name"  name='customerName' value={customerName} onChange={handleChange} />
            <FormInput  placeholder="Enter your card number" type='number' maxLength={16} minLength={16}/>
            <FormInput  placeholder="Enter your cvv" type='number' maxLength={3} minLength={3}/>
            <SubmitBtn className="payment-button btn-primary"  >Pay</SubmitBtn>
        </form>

        </Container>

   </section>



  )
}

export default Form