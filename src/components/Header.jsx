import React from 'react'
import Container from './Container/Container'
const Header = () => {
  return (
    <header className='flex-row align-center justify-center'>
        
        <Container className="header-container justify-center flex-col">
              <h1 className="title">Shah's Diner</h1>
              <h2 className="subtitle">The Best Diner in town</h2>
          </Container>
    </header>
  )
}

export default Header