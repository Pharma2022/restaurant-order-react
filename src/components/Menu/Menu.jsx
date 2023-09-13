import React from 'react'
import Container from '../Container/Container'

const Menu = ({children}) => {
  return (
    <section className='menu-wrapper'>
       <Container className='menu-container flex-col' >{children}</Container>

    </section>
  )
}

export default Menu