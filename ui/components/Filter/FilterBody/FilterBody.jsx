import React from 'react'
import Image from 'next/image'
import plusIcon from '../../../public/plus-icon.png'
import minusIcon from '../../../public/minus-icon.png'
import styles from './filterBody.module.css'

function FilterBody ({
  handleApplyFilterClick,
  handleApplyMobileFilterClick,
  maxRate,
  setMaxRate,
  selectedTypes,
  setSelectedTypes
}) {
  function handleCheckboxChange (e) {
    if (e.target.checked) {
      setSelectedTypes([...selectedTypes, e.target.name])
    } else {
      setSelectedTypes([...selectedTypes.filter((type) => type !== e.target.name)])
    }
  }

  function incrementmaxRate () {
    setMaxRate(maxRate += 1)
  }
  function decrementmaxRate () {
    setMaxRate(maxRate -= 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h3 className={styles.subHeading}>Find</h3>
        <div>
          <label className={styles.label} htmlFor='gym'>
            Gym
            <input
              type='checkbox'
              name='gym'
              id='Gym'
              className={styles.input}
              onChange={handleCheckboxChange}
              checked={selectedTypes.includes('gym')}
            />
          </label>
          <label className={styles.label} htmlFor='single pitch'>
            Single Pitch
            <input
              type='checkbox'
              name='single pitch'
              id='Single Pitch'
              className={styles.input}
              onChange={handleCheckboxChange}
              checked={selectedTypes.includes('single pitch')}
            />
          </label>
          <label className={styles.label} htmlFor='multi-pitch'>
            Multi-Pitch
            <input
              type='checkbox'
              name='multi-pitch'
              id='Multi-Pitch'
              className={styles.input}
              onChange={handleCheckboxChange}
              checked={selectedTypes.includes('multi-pitch')}
            />
          </label>
        </div>
        <h3 className={styles.subHeading}>Maximum rate</h3>
        <div className={styles.maximumRateFilter}>
          <span className={styles.rate}>${maxRate}/hr</span>
          <button className={styles.rateModifierButtonMinus} onClick={decrementmaxRate}>
            <Image
              alt='Minus icon to decrease the maximum rate'
              height={45}
              src={minusIcon}
              width={45}
            />
          </button>
          <button className={styles.rateModifierButton} onClick={incrementmaxRate}>
            <Image
              alt='Plus icon to increase the maximum rate'
              height={45}
              src={plusIcon}
              width={45}
            />
          </button>

        </div>
        <br />
      </div>
      <div className={styles.applyFilterButtonWrapper}>
        <button onClick={handleApplyMobileFilterClick} className={styles.mobileApplyFilterButton}>SEE GUIDES</button>
        <button onClick={handleApplyFilterClick} className={styles.desktopApplyFilterButton}>SEE GUIDES</button>
      </div>
    </div>
  )
}

export default FilterBody
