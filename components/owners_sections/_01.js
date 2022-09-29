import React from 'react';
import styles from '../../styles/OwnersPage.module.scss'

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
            </div>
            <div className={styles.page_section_body}>
              <h1 className={styles.s1_text}>
              Vende tu piso en cualquier estado, <span>más rápido y ahorra en comisiones.</span>
              Vende en menos de 30 días. <span>Infórmate gratis</span>
              </h1>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection