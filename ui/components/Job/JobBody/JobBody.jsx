import React from 'react'
import styles from './jobBody.module.css'

function JobBody ({ description, isSelected }) {
  function getDescription(isSelected){
    if(isSelected){
      return description
    }else{
      return description.substring(0,400)
    }
  }
  return (
    <div className={styles.container}>
      <p className={styles.description}>{getDescription(isSelected)}</p>
    </div>
  )
}

export default JobBody
