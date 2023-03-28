import React from 'react'
import './header.css'

const header = () => {
  return (
    <div>
        <span onClick={() => window.scroll(0,0)} className='header'>🎥 Rocking Movies 📺</span>
    </div>
  )
}

export default header
