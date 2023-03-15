import React, {useState, useEffect} from 'react';
import styles from '../../styles/investor_secctions/S1.module.scss' 
import styless from '../../styles/Home.module.scss';
import {motion} from 'framer-motion';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../modals';
import ModalButton from '../buttons/ModalButton';

function HomeSection() {


  const [showModal, setShowModal] = useState(false)
  const fromWeb = 'fw'
  const [modalVisible, setModalVisible] = useState(false);
  const [divHeight, setDivHeight] = useState(0);

 
/* 
  useEffect(() => {
        const parallax = document.getElementById('parallax_container');
        const handleScroll = () => {
          window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            parallax.style.transform = `translateY(${scrollPosition}px)`;
          });
        if (window.scrollY >= parallax) {
          setModalVisible(true);
        } else {
          setModalVisible(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [divHeight]); */


  return (
    <>
      <div className={styles.s1_container}>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
          className={styles.s1_background}
        >
          <div 
            className={styles.content}
            
          >
            <div class={styles.parallax_container} id='parallax_container'>
              <div class={styles.parallax_background} >
                <div className={styles.video_container}>
                  <video src='/videos/video_01.mp4' autoPlay loop="loop" muted playsInline/>
                </div>  
              </div>
              <div 
                className={styles.parallax_content}
                /* initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                }} */
              >
                <div className={styles.text_container}>
                  <h1 className={styles.s1_pages_title}>Plataforma de inversión participativa para ahorradores. <span>Inicia desde 500€</span></h1>
                  <p>Nuestra plataforma de <strong>préstamos colaborativos</strong> permite a nuestros usuarios <strong>invertir en proyectos inmobiliarios de alta calidad </strong>sin tener que comprometer grandes sumas de dinero. El equipo de expertos de <strong>Crowd4Flipping se encarga de la diligencia debida y el análisis de riesgos</strong> para asegurarse de presentar solo los mejores proyectos a los inversores.</p>
                </div>
                <div className={styles.buttons_container}>
                  <Link
                    href={'#video_section'}
                  >
                    <motion.div 
                      className={`${styless.back_btn}`}
                      whileHover={{y: -7  }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                        Conoce Crowd<span>4</span>Flipping
                    </motion.div>
                  </Link>
                  <Link href={`https://app.crowd4flipping.com/?${fromWeb}`}>
                    <motion.div 
                      className={`${styless.back_btn} ${styles.green_bg_button}`}
                      whileHover={{y: -7  }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >Regístrate gratis
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div> 
      </div>
    </>
  )
} 

export default HomeSection
 