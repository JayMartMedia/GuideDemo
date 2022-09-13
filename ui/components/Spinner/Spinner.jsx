import React from 'react'
import styles from './spinner.module.css'

function Spinner() {
    return (
        <span className={styles.container}>
            <svg
                className={styles.spinner}
                viewBox="0 0 40 40"
            >
                <circle cx="20" cy="20" r="18"></circle>
            </svg>
        </span>
    )
}

export default Spinner
