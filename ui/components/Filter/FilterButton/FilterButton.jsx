import React from 'react'
import styles from './filterButton.module.css'

function FilterButton ({ onClick }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.filterButton}>
        Filter
      </button>
    </div>
  )
}

export default FilterButton
