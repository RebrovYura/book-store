import {useState} from 'react'
import RootLayout from './layouts/RootLayout'
import './styles/global.scss'

const App = () => {
  return (
    <div className='container'>
      <RootLayout>
        content
      </RootLayout>
    </div>
  )
}

export default App