import React from "react";
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom"

function Navbar() {
    const navLinkActiveClassName = ({ isActive }) => [styles.nav_link,  isActive ? styles.active : null].filter(Boolean).join(' ')
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" className={navLinkActiveClassName}>
                  Profile
            </NavLink>
            <NavLink to="/dialogs" className={navLinkActiveClassName}>
                Messages
            </NavLink>
          {/*  <NavLink to="#">News</NavLink>*/}
          {/*  <NavLink to="#">Music</NavLink>*/}
          {/*  <NavLink to="#">Settings</NavLink>*/}
      </nav>
    )
}


export default Navbar;