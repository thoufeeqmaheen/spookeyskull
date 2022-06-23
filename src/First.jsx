import React from 'react'
import './App.css';
import line from'./assets/line.svg'

const First = () => {
  return (
    <div className='firstcontainer'>
        <div className='firsttextcontainer'>
            <div className='title2'>The Labu “Reiza”</div>
            <div className='title3'>The Living Pumpkin</div>
        </div>
        <div>
            <img src={line} />
        </div>
    </div>
  )
}

export default First