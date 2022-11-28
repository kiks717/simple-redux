import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'
import Theme from './components/Theme'

function App() {
  return (
    <div className='App'>
      <Profile/>
      <Login/>
      <Theme/>
    </div>
  )
}

export default App