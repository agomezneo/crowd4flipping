import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import InvestmentForm from '../../components/forms/InvestmentForm';
import { RiWhatsappLine } from 'react-icons/ri'
import { GiRotaryPhone } from 'react-icons/gi'
import { FaFacebookSquare } from 'react-icons/fa'
import Image from 'next/image';
import InstagramIcon from '../../public/images/icons/instagramIcon.webp';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Tienes alguna duda antes de empezar? <span>Estaremos encantados de atenderte.</span></h1>
            </div>
            <div className={styles.page_section_body_02}>

              <div className={styles.form_container}>
                <InvestmentForm  />
              </div>

              <div className={styles.clientService_card_container}>
                <div className={styles.clientService_card}>

                  <div className="clientService_card_content">
                    <h1>Servicio al cliente</h1>
                    <p>De lunes a viernes, de 09:00h a 18:00h </p>
                    <p> <GiRotaryPhone />+34 971 105 648</p>
                    <p className={styles.clientService_card_wp_link}> 
                      <a 
                        href={`https://wa.me/34672126268?text=Hola, quiero participar en proyectos inmobiliarios con Crowd4Flipping. ¿Podrías darme más información?`}
                        target="_blank"
                        rel="noreferrer"  
                    > <RiWhatsappLine /> +34 672 126 268 </a>
                    </p>
                    <p>contacto@crowd4flipping.com</p>
                  </div>

                  <div className={styles.clientService_card_social_icons}>
                    <h3>Siguenos en redes</h3>
                    <div className={styles.clientService_card_social_icons_container}>
                      <FaFacebookSquare className={styles.face_icon}/>
                      <Image src={InstagramIcon} height={70} width={70} alt='instagram icon'/>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className={styles.page_section_footer}></div>
        </div>
    </div>
  )
}

export default HomeSection
