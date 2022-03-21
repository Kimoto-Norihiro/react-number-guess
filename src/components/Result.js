import React from 'react'
import { Link } from 'react-router-dom'

const Result = () => {
  return (
    <div className='result'>
        <p>ゲームクリアです</p>
        <Link to="/">ゲームをはじめる</Link>
    </div>
  )
}

export default Result