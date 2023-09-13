import React from 'react'

const FormInput = ({...rest}) => {
  return (
    <input className='payment-form-input' {...rest} aria-required/>
  )
}

export default FormInput