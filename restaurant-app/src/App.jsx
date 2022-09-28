import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MealsContextProvider from './context/MealsContext'
import FoodPreCateg from './pages/FoodPreCateg'
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
      <Route path='/categoryFood:id' element={<FoodPreCateg />}></Route>
     </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
