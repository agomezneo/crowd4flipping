import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import {StepsData} from '../../data/cards/StepCardsData';
import Steper from '../stepers/MaterialHorizontal';


function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={`${styles.page_section_container} `}>

            <div className={`${styles.page_section_header}`}>
                <h1><span>Sácale partido  a tu dinero </span> con estos sencillos pasos</h1>
            </div>
            <div className={styles.page_section_body_s2}>

              <div className={styles.steps_container}>
                <Steper data={StepsData} /> 
              </div>
              
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
