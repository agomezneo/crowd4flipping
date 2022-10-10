import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Cards from '../stepers/HorizontalSteper';
import {CardsData} from '../../data/cards/StepCardsData'
import ModalButton from '../buttons/ModalButton';
import Form from './form_modal';

import Steper from '../stepers/VerticalMUI';


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
                  <Steper data={CardsData} />
                  {/* {CardsData.map((item, key) =>{
                    return(
                      <Cards 
                        key={key}
                        title={item.title}
                        text={item.text}
                        image={item.image}
                      />
                    )
                  })} */}
                  
                </div>
              </div>
            </div>
            <div className={styles.page_section_footer}>
                  <div className={styles.owner_left_footer_section}>
                    
                  </div>
                  <div className={styles.owner_right_footer_section}>
                    <ModalButton>
                      <Form />
                    </ModalButton>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection