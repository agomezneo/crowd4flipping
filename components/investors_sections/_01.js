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

 

  useEffect(() => {
        const parallax = document.getElementById('parallax_container');
        const section2 = document.getElementById('2');
        const handleScroll = () => {
          window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            parallax.style.transform = `translateY(${scrollPosition}px)`;
          });
        if (window.scrollY >= section2) {
          setModalVisible(true);
        } else {
          setModalVisible(false);
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [divHeight]);

  console.log(modalVisible)
  

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
          <motion.div 
            className={styles.content}
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.2,
            }}
          >
            <div class={styles.parallax_container} id='parallax_container'>
              <div class={styles.parallax_background} />
              <div class={styles.parallax_content}>
                <div className={styles.text_container}>
                  <h1 className={styles.s1_pages_title}>Ahorradores que <span>invierten en inmuebles desde 500€ </span></h1>
                  <p>Nuestra plataforma de <strong>préstamos colaborativos</strong> permite a nuestros usuarios <strong>invertir en proyectos inmobiliarios</strong> de alta calidad sin tener que comprometer grandes sumas de dinero. El equipo de expertos de <strong>Crowd4Flipping se encarga de la diligencia debida y el análisis de riesgos</strong> para asegurarse de presentar solo los mejores proyectos a los inversores.</p>
                </div>
                <div className={styles.buttons_container}>
                  <Link
                    href={'#2'}
                  >
                    <div 
                      className={`${styless.back_btn}`}
                    >
                        Conoce Crowd<span>4</span>Flipping
                    </div>
                  </Link>
                  <Link href={`https://app.crowd4flipping.com/?${fromWeb}`}>
                    <div className={`${styless.back_btn} ${styles.green_bg_button}`}>Regístrate gratis</div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div> 
      </div>
    </>
  )
} 

export default HomeSection
 