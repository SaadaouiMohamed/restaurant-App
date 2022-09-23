import { useState } from 'react'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'


function App() {
 

  return (
    <div >
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Main />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/menu' element={<Menu/>}></Route>
     </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
