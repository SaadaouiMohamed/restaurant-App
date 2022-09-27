import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Menu from './pages/Menu'


function App() {
 

  return (
    <div >
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Main />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/menu' element={<Menu />}></Route>
     </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
