import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className='container'>
          <h1>CH</h1>
            <ul className={styles.list}>
              <li className={styles.active}>
                <Link to='/leader' className={styles.liActive}>
                    leaderBoard
                </Link>
              </li>
            </ul>
        
    </header>
  )
}

export default Header