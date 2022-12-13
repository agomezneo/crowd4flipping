import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import styless from '../../styles/Home.module.scss';
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
              <div className={styles.box_2}>

                <div className={styles.image_s3} />

              </div>
              <div className={styles.box_1}>
                <div className={styles.cards_container}>
                  <Steper data={CardsData} />
                </div>
              </div>
            </div>
            <div className={styles.page_section_footer}>
              <div className={styless.buttons_container}>
                  <a href={`#4`}>
                    <div className={`${styless.back_btn} ${styless.principal_button}`}>Solicitar información</div>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection