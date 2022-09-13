import React from 'react'
import Image from 'next/image'
import icon from '../../public/guides.png'
import styles from './header.module.css'

function Header () {
  return (
    <div className={styles.container}>
      <Image
        alt='Guides icon'
        src={icon}
        height={45}
        width={45}
      />
      <h1
        className={styles.headerText}
      >Find a Climbing Guide!</h1>
    </div>
  )
}

export default Header
