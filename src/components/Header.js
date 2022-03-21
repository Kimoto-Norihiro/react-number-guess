import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>数字当てゲーム</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/role">ルール</Link>
                </li>
                <li>
                    <Link to="/">はじめから</Link>
                </li>
                <li>
                    <Link to="/ranking">ランキング</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header