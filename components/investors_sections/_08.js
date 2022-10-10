import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import InvestmentForm from '../../components/forms/InvestmentForm';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Quieres ser el primero en enterarte de la <br/> <span>próxima oportunidad inmobiliaria</span> ?</h1>
            </div>
            <div className={styles.page_section_body_02}>
              <div className={styles.form_container}>
                <h2>Te lo haremos saber de <span>inmediato</span>.</h2>
                <InvestmentForm  />
              </div>
              <div className={styles.clientService_card_container}>
                <div className={styles.clientService_card}>
                  <h1>Servicio al cliente</h1>
                  <p>Lunes a viernes de 9h a 19h</p>
                  <p>+34 xxxxxxxxxx</p>
                  <p>info@crowd4flipping.com</p>
                </div>
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
