import React from 'react'
import { Container } from './ItemStyle'

const Item = (props) => {
  return (
    <Container>
      <p>{props.task}</p>
    </Container>
  )
}

export default Item