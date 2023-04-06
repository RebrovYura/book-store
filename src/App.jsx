import {useState} from 'react'
import RootLayout from './layouts/RootLayout'
import Genres from './components/Genres/Genres'
import './styles/global.scss'

const App = () => {
  return (
    <div className='container'>
      <RootLayout>
        <Genres/>
      </RootLayout>
    </div>
  )
}

export default App