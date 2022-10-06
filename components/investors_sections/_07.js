import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import Logo from '../../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo_02.png';
import Image from 'next/image';
import Opiniones from '../../components/carrousels/OpinionesHabitisimo';
import habitissimo_img from '../../public/images/habitissimo.jpeg'
import { FaStar } from "react-icons/fa";
import RefconLogo from '../logos/RefconLogo';

function HomeSection() {
  return (
    <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Qué dicen <span>nuestros clientes</span>?</h1>
            </div>
            <div className={styles.page_section_body}>

              <div className={styles.s5_body_container_left}>
                <div className={styles.logo_container}>
                  <Image src={Logo} width={900} height={372} alt='Crowd for Flipping logo'/>
                  <RefconLogo />
                </div>
              </div>
              
              <div className={styles.s5_body_container}>
                <div className={styles.container_habitisimo}>
                  <div className={styles.call_to_action_habitisshmo}>
                    <Image src={habitissimo_img} height={70} width={300} alt='Logo Habitissimo' />
                    <div className={styles.rate_opnions}>
                      <h3>4.8/5</h3>
                      <div className={styles.stars_container}>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                        <FaStar className={styles.star}/>
                      </div>
                      <a 
                        className={styles.habitissimo_link}
                        href='https://empresas.habitissimo.es/pro/refcon/opiniones'
                        target="_blank" 
                        rel="noreferrer"
                      >
                        <span> Ver 119 opiniones  </span>
                      </a>
                    </div>
                  </div>
                </div>
                <Opiniones />
              </div>

            </div>
            <div className={styles.page_section_footer}>
              
            </div>
        </div>
    </div>
  )
}

export default HomeSection