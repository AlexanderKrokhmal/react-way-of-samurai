import React from "react";
import styles from './Header.module.css';

function Header() {
    return (
      <header className={styles.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/833px-Apple_logo_black.svg.png'alt="App logo"/>
      </header>
    );
}

export default Header;