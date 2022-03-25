import React from 'react'
import styles from './jobHeader.module.css'

function JobHeader ({
  type,
  city,
  state,
  schedule,
  payRate
}) {
  const payString = payRate.value || `${payRate.range[0]}-${payRate.range[1]}`

  const typeMap = new Map([
    ['gym', {
      title: 'Gym',
      color: '#e07f4a'
    }],
    ['single pitch', {
      title: 'Single Pitch',
      color: '#f5e871'
    }],
    ['multi-pitch', {
      title: 'Multi-Pitch',
      color: '#eb5b4d'
    }]
  ])
  return (
    <div className={styles.container}>
      <div className={styles.topLine}>
        <p
          className={styles.jobTypePill}
          style={{ backgroundColor: typeMap.get(type).color }}
        >
          {typeMap.get(type).title}
        </p>
        <div className={styles.rateContainer}>
          <span className={styles.rateSymbol}>$</span>
          <span className={styles.ratePrice}>{payString}</span>
          <span className={styles.rateSuffix}>/hr</span>
        </div>
      </div>
      <div className={styles.bottomLine}>
        <div className={styles.daysOfTheWeek}>
          <span
            className={schedule.includes('Sunday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            S
          </span>
          <span
            className={schedule.includes('Monday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            M
          </span>
          <span
            className={schedule.includes('Tuesday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            T
          </span>
          <span
            className={schedule.includes('Wednesday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            W
          </span>
          <span
            className={schedule.includes('Thursday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            T
          </span>
          <span
            className={schedule.includes('Friday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            F
          </span>
          <span
            className={schedule.includes('Saturday') ? styles.dayOfWeekSelected : styles.dayOfWeek}
          >
            S
          </span>
        </div>
        <div className={styles.location}>
          {city}, {state}
        </div>
      </div>
    </div>
  )
}

export default JobHeader
