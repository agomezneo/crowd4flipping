import React from 'react';
import Header from '../components/headers/header_pages';
import styles from '../styles/about_page.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Logo from '../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Vsteper from '../components/stepers/VerticalMUI';
import { Data } from '../data/cards/AboutCardData';
import Jorge from '../public/images/profiles/jorge_01.png'
import Alex from '../public/images/profiles/alex_01.png'
import Andres from '../public/images/profiles/andres_01.png'
import Pedro from '../public/images/profiles/pedro_01.png'
import Abogado from '../public/images/profiles/abogado_01.png'
import Fiorela from '../public/images/profiles/fio_01.png'
import Footer from '../components/footers';
import Section_8 from '../components/investors_sections/_08';

export default function About() {
  return (
    <>
      <Header />
      <div className={styles.about_page}>
        <section className={`${styles.about_page_section} ${styles.about_page_s1}`}>
          <div className={styles.left}>
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.75,
              }}
            >
              <div className={styles.logo_container}>
                <Image src={Logo} width={900} height={400} alt='Crowd for Flipping' />
              </div>
              <div className={styles.text_container}>
                  <h1>
                    <span>Crowd</span>4<span>Flipping</span> nace de la innovación de una empresa de construcción con <span>más de 25 años de experiencia</span> que revoluciona la inversión inmobiliaria haciéndola accesible <span>a partir de 500€</span>.
                  </h1>
                </div>
            </motion.div>   
          </div>
          <div className={styles.right}></div>
        </section>
        <section className={`${styles.about_page_section} ${styles.about_page_s2}`}>
          <div className={styles.s2_left}></div>
          <div className={styles.s2_right}>
            <div className={styles.s2_text_container}>
              <h1>Nuestro propósito</h1>
              <br/>
              <p>El propósito es la razón de existir que define la contribución que cada uno realiza a la sociedad. El propósito de <span>Crowd</span>4<span>Flipping</span> es hacer accesible para cualquier persona con poco capital la inversión en proyectos inmobiliarios que hasta ahora ha estado reservado para unos pocos.</p>
            </div>
            <div className={styles.s2_box}> 

              <div className={styles.s2_box_container_Title}>
                <h1>Nuestros Valores</h1>
              </div>

              <div className={styles.s2_box_container}>

                <Vsteper data={Data} />

              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.about_page_section} ${styles.about_page_s3}`}>
            <div className={styles.s3_text_container}>
              <h1>Nuestro equipo</h1>
            </div>
            <div className={styles.profile_card_container}>
              <div className={styles.profile_card}>
                <div className={styles.profile_image_container}>
                  <Image src={Jorge} width={250} height={180} alt='Jorge Montosa Profile'/>
                </div>
                <div className={styles.profile_card_text}>
                  <h1>Jorge <span>Montosa</span> </h1>
                  <p>CEO</p>
                </div>
              </div>
              <div className={styles.profile_card}>
                <div className={styles.profile_image_container}>
                  <Image src={Alex} width={250} height={180} alt='Alejandro Castells Profile'/>
                </div>
                <div className={styles.profile_card_text}>
                  <h1>Alex <span>Castells</span></h1>  
                  <p>CFO</p>
                </div>
              </div>
              <div className={styles.profile_card}>
                <div className={styles.profile_image_container}>
                  <Image src={Andres} width={250} height={180} alt='Andrés Gómez Profile'/>
                </div>
                <div className={styles.profile_card_text}>
                  <h1>Andrés <span>Gómez</span></h1>
                  <p>CTO</p>
                </div>
              </div>
              <div className={styles.profile_card}>
                <div className={styles.profile_image_container}>
                  <Image src={Pedro} width={250} height={180} alt='Pedro Quintana Profile'/>
                </div>
                <div className={styles.profile_card_text}>
                  <h1>Pedro <span>Quintana</span></h1>
                  <p>Arquitecto técnico</p>
                </div>
              </div>
              <div className={styles.profile_card}>
                <div className={styles.profile_image_container}>
                  <Image src={Fiorela} width={250} height={180} alt='Fiorella Piazza Profile'/>
                </div>
                <div className={styles.profile_card_text}>
                  <h1>Fiorella <span>Piazza</span></h1>
                  <p>Departamento administrativo</p>
                </div>
              </div>
              <div className={styles.profile_card}>
                <div className={styles.profile_image_container}>
                  <Image src={Abogado} width={250} height={180} alt='Daniel Profile'/>
                </div>
                <div className={styles.profile_card_text}>
                  <h1> Daniel <span>Marqués</span></h1>
                  <p>Departamento legal</p>
                </div>
              </div>
            </div>
        </section>
        <Footer />
      </div>
    </>
  )
} 