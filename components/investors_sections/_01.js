import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'




function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
            </div>
            <div className={styles.page_section_body}>
              <div className={styles.call_to_action_container_s1}>
                <h1><strong>Inversión inmobiliaria <span>desde 500€</span></strong></h1>
                <h2> Recibe una rentabilidad por proyecto y <span>beneficiate de la plusvalía inmobiliaria.</span> </h2>
                <a href='#6' className={styles.call_to_action_button}>
                    <span>¡ Quiero invertir !</span>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection
