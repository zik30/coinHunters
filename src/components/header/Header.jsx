import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className='container'>
      <Link to='/' style={{color: 'white'}}>
        <h1>CH</h1>
      </Link>
            <ul className={styles.list}>
              <li className={styles.active}>
                <Link to='/leaderboard' className={styles.liActive}>
                    leaderBoard
                </Link>
              </li>
            </ul>
        
    </header>
  )
}

export default Header