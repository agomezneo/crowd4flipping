import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import { HorizontalStepsData } from '../../data/cards/StepCardsData'
import Steper from '../stepers/VerticalMUI';

function HomeSection() {
  return (
   <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Qué hacemos en <span>Crowd</span>4<span>Flipping</span>?</h1>
            </div>
            <div className={styles.page_section_body}>

              <div className={styles.horizontal_steper_container}>


                <Steper data={HorizontalStepsData} />

              </div>

              <div className={styles.s3_empty_div} />
              
            </div>
            <div className={styles.page_section_footer}>
             
            </div>
        </div>
    </div>
  )
} 

export default HomeSection
 