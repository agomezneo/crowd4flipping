import React from 'react'
import styles from '../../styles/Home.module.scss'

function HomeSection() {
  return (
    <div className={styles.home_section}>
        <div className={styles.home_section_container}>
            <div className={styles.home_section_header}>
                <h1>Section 5</h1>
            </div>
            <div className={styles.home_section_body}></div>
            <div className={styles.home_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
