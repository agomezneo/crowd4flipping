import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import BasicAccordion from '../accordions/BasicAccordion';
import {Data} from '../../data/cards/SimpleCardData';

import Steper from '../stepers/MaterialHorizontal';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
        <div className={styles.page_section_header}>
                <h1>¿Por qué <strong>invertir en inmuebles con  <span>Crowd</span>4<span>Flipping</span></strong> ? </h1>
            </div>
            <div className={styles.page_section_body_01}>
              <div className={styles.empty_div_s4} />
              <div className={styles.steps_container}>
                <Steper 
                  data={Data}
                />
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
