import GlobalStyles from './Styles/GlobalStyles'
import Navbar from './components/navbar/Navbar'
import Todo from './components/todo/Todo'
import React from 'react'

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Todo/>
    </>
  )
}

export default App;

