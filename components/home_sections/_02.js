import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import SimpleCard from '../../components/cards/SimpleCard';
import StepCard from '../../components/cards/StepCard';
import {Data} from '../../data/cards/SimpleCardData';
import {StepsData} from '../../data/cards/StepCardsData';
import VerticalSteper from '../../components/stepers/VerticalSteper';




function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Por qué <strong>invertir en inmuebles con  <span>Crowd</span>4<span>Flipping</span></strong> ? </h1>
            </div>
            <div className={`${styles.page_section_body} ${styles.page_section_body_grid}`}>
              <div className={styles.simple_card_container}>
                  {Data.map((item, key) =>{
                    return(
                      <SimpleCard 
                        key={key}
                        image={item.image}
                        title={item.title}
                        text={item.text}
                      />
                    )
                  } )}
              </div>
              <div className={styles.steps_container}>
                    <h2> Sácale partido a tu dinero con estos sencillos pasos</h2>
                    <VerticalSteper steps={StepsData}/>
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
