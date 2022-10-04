import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Steper from '../stepers/MaterialHorizontal';
import {MaterialHorizontalData} from '../../data/cards/StepCardsData'
import ModalButton from '../buttons/ModalButton';
import Form from './form_modal';


function HomeSection() {

  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
              <h1> ¿Cómo funciona? </h1>
            </div>
            <div className={styles.page_section_body}>
                <div className={styles.empty_div_s3_owner}>
                </div>
                <div className={styles.horizontal_steper_container}>
                  <Steper data={MaterialHorizontalData}/>
                </div>
              
            </div>
            <div className={styles.page_section_footer}>
              <ModalButton > 
                <Form />
              </ModalButton>
            </div>
        </div>
    </div>
  )
}

export default HomeSection  