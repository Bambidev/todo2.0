import React from 'react'
import { Container, ContainerLinks } from './NavbarStyles'

const Navbar = () => {
  return (
    <Container>
      <h1>TodoJS</h1>
      <ContainerLinks>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Profile</a>
      </ContainerLinks>
    </Container>
  )
}

export default Navbar