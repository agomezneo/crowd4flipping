import React from 'react';
import styles from '../../styles/OwnersPage.module.scss';
import Form from '../forms/OwnerForm';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
            </div>
            <div className={`${styles.page_section_body} ${styles.page_section_body_form} `}>
              <div className={styles.box_1}>
                <Form />
              </div>
              <div className={`${styles.box_2} ${styles.image_s2}`} />
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection 