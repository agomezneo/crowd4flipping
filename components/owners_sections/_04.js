import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';



function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
              <h1> ¿Cómo funciona? </h1>
            </div>
            <div className={styles.page_section_body_01}></div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection  