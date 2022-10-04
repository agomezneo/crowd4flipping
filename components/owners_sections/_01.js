import React from 'react';
import styles from '../../styles/OwnersPage.module.scss'
import ModalButton from '../buttons/ModalButton';
import Form from './form_modal';

function HomeSection() {

  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
            </div>
            <div className={styles.page_section_body}>
              <div className={styles.call_to_action_container_s1}>

                   <h1 className={styles.s1_text}>
                    Vende tu piso en cualquier estado, <span>más rápido y ahorra en comisiones.</span> Vende en menos de 30 días. 
                  </h1>

                  <ModalButton > 
                    <Form />
                  </ModalButton>
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection