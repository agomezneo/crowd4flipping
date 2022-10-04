import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import HorizontalSteper from '../../components/stepers/HorizontalSteper'
import { HorizontalStepsData } from '../../data/cards/StepCardsData'

function HomeSection() {
  return (
   <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Qué hacemos en <span>Crowd</span>4<span>Flipping</span>?</h1>
            </div>
            <div className={styles.page_section_body}>
              <div className={styles.horizontal_steper_container}>
                {HorizontalStepsData.map((item, index) =>{
                  return(
                    <HorizontalSteper
                      key={index} 
                      image={item.image}
                      title={item.title}
                      text={item.text}
                    />
                  )
                } )}
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
 