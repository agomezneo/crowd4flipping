import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Cards from '../stepers/HorizontalSteper';
import {CardsData} from '../../data/cards/StepCardsData'
 

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1> Ventajas de ofrecer propiedad a <span>Crowd</span>4<span>Flipping</span></h1>
            </div>
            <div className={styles.page_section_body}>
              <div className={styles.box_1}>
                <div className={styles.image_s3} />
              </div>
              <div className={styles.box_2}>
                <div className={styles.cards_container}>
                  {CardsData.map((item, key) =>{
                    return(
                      <Cards 
                        key={key}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection