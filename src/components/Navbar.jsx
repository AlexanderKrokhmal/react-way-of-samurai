import React from "react";
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.nav}>
          <div className='item'>
            <a href="#"> Profile</a>
          </div>
          <div className='item'>
            <a href="#"> Messages</a>
          </div>
          <div className='item'>
            <a href="#">News</a>
          </div>
          <div className='item'>
            <a href="#">Music</a>
          </div>
          <div className='item' >
            <a href="#">Settings</a>
          </div>
      </nav>
    )
}


export default Navbar;