import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Game = () => {
  const [guess, setGuess] = useState('')
  const [guesses, setGuesses] = useState('')
  const [lastResult, setLastResult] = useState('')
  const [lowOrHi, setLowOrHi] = useState('')
  const [count, setCount] = useState(0)
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1)

  const checkGuess = (event) => {

    setGuesses('')
    setLastResult('')
    setLowOrHi('')
    setCount('')
  }

  const resetGame = () => {
    setRandomNum(0)
  }

  return (
    <div className='container w-75'>
        <div class = "container pt-10">
          <div class="input-group">
            <label>予想を入力してください</label>
            <input 
            onChange={(event) => setGuess(event)}
            type={'text'}
            value={guess}/>
            <button 
            onClick={() => checkGuess(guess)}
            class="btn btn-outline-primary" type="submit" id="button-addon2">提出</button>
          </div>
        </div>

        <div className="container">
          <p>{ guesses }</p>
          <p>{ lastResult }</p>
          <p>{ lowOrHi }</p>
          <p>{ count }</p>
          <p>{ randomNum }</p>
        </div>

        <Link to="/result">ゲームクリア</Link>
    </div>
  )
}

export default Game