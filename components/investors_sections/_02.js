import React from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import {StepsData} from '../../data/cards/StepCardsData';
import Steper from '../stepers/MaterialHorizontal'; 

import ModalButton from '../buttons/ModalButtonSecundary';
import InvestmentForm from '../forms/InvestmentForm';

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
            <div className={styles.page_section_footer}>
                <div className={styles.footer_left_side}></div>
                <div className={styles.footer_right_side}>

                    <a href='#8' className={styles.modal_button_secundary}>
                      <span>Lista de espera</span>
                    </a>

                    {
                    /* 
                     TODO 
                    <ModalButton>
                      <InvestmentForm />
                    </ModalButton> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection
