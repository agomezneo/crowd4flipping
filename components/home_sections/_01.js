import React from 'react'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function HomeSection() {
  return (
    <div className={styles.home_section}>
        <div className={styles.home_section_container}>
            <div className={styles.home_section_header}>
                <h1>Section 1</h1>
                <Link href={'/example'}><span>Example</span></Link>
            </div>
            <div className={styles.home_section_body}></div>
            <div className={styles.home_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
