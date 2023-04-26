import React from 'react'
import { Container, TodoContent } from './TodoStyles'
import ButtonsMac from '../buttonsmac/ButtonsMac'

const Todo = () => {
  return (
    <>
    <Container>
      <TodoContent>
        <ButtonsMac/>
        <h1>Todo!</h1>
      </TodoContent>
      
    </Container>
    </>
  )
}

export default Todo;