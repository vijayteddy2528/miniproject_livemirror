import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [text, setText]= useState('')
  return (
    <div className='container'>
      <h2>Live Mirror Text</h2>
      <input type="text" placeholder='Type Something...' value={text} onChange={(e) => setText(e.target.value)}/>
      <div className='mirror'>{text}</div>
    </div>
  )
}

export default App
