import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import BasicAccordion from '../../components/accordions/BasicAccordion';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>Sin complicaciones <span>ni letra pequeña</span>. <br/> Te lo podemos decir más alto, <span> pero no más claro. </span> [FAQS]</h1>
            </div>
            <div className={styles.page_section_body_02}>
              <div className={styles.empty_div} />
              <div className={styles.right}>
                <BasicAccordion />
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
