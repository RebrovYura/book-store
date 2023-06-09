import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import RootLayout from './layouts/RootLayout'
import Genres from './components/Genres'
import './index.css'
import Rules from './pages/Rules'
import Home from './pages/Home'
import Contract from './pages/Contract'
import Basket from './pages/Basket'

const App = () => {
  return (
    <div className='mx-auto h-[100vh]'>
      <RootLayout>
        <Router>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='rules' element={<Rules/>}/>
              <Route path='contract' element={<Contract/>}/>
              <Route path='basket' element={<Basket/>}/>
            </Route>
          </Routes>
        </Router>
      </RootLayout>
    </div>
  )
}

export default App