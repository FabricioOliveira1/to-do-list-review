import React from "react"

import styles from './Header.module.css';


export function Header () {
  return (
    <div className={styles.header}>
      <img src="./src/assets/Logo.png"/>
    </div>
  )
}