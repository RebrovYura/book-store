import {useState} from 'react'
import RootLayout from './layouts/RootLayout'
import Genres from './components/Genres'
import './index.css'

const App = () => {
  return (
    <div className='mx-auto'>
      <RootLayout>
        <Genres/>
      </RootLayout>
    </div>
  )
}

export default App