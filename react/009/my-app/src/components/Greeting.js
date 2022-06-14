import React from 'react'
import { useState } from 'react';
import '../App.css'

function Greeting() {
    const [message, setMessage] = useState('여기를 주목하세요!')
    const onMouseEnter = () => {
        setMessage('안녕하세요!');
    }
    const onMouseLeave = () => {
        setMessage('안녕히가세요!');
    }
  return (
    <div>
      <p onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        여기에 마우스를 올려보세요!
      </p>
      <p>{message}</p>
    </div>
  )
}

export default Greeting;