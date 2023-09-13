import React from 'react'
import Container from '../Container/Container'
import { useGlobalContext } from '../../Context/GlobalContext'
import MenuItem from './MenuItem'
const Menu = () => {

  const {menuArr}=useGlobalContext()

  return (
          <section className='menu-wrapper'>
              <Container className='menu-container flex-col' >
                { menuArr.map(
                    ({name,ingredients,
                        price,emoji,id})=>
                          (<MenuItem 
                              key={id}
                              name={name}
                              ingredients={ingredients}
                              price={price}
                              emoji={emoji}
                              id={id}/>
                          ) 
                            )}
                </Container>
          </section>
  )
}

export default Menu