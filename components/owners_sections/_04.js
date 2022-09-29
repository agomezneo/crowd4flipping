import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Steper from '../stepers/MaterialHorizontal';
import Form from '../forms/OwnerForm';


function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
              <h1> ¿Cómo funciona? </h1>
            </div>
            <div className={styles.page_section_body}>
                <div className={styles.steper_container}>
                  <Steper />
                </div>
                <div className={styles.form_container}>
                  <Form />
                </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection  