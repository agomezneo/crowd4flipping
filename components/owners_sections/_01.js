import React from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import styless from '../../styles/Home.module.scss';
import {motion} from 'framer-motion';
import Logo from '../../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo_02.png';
import Image from 'next/image';
import ModalButton from '../buttons/ModalButton';
import Form from './form_modal'; 

function HomeSection() {
  return (
     <>
        <div className={`${styles.video_container} ${styles.video_container_invert}`}>
          <video src='/videos/real_state_01.mp4' autoPlay loop="loop" muted playsInline/>
        </div>
        <div className={styles.page_section}>
          <div className={styless.page_grid_container}>
              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.75,
                }}
                className={`${styless.explore_page_hero_container} ${styless.left}`}
              >
                <div className={styless.logo_container}>
                  <Image src={Logo} width={700} height={300} alt='Crowd4Flipping logo' />
                  <div className={styless.text_container}>
                  <h1>Vende tu casa más rápido y <span>no pagues comisiones</span> </h1>
                  </div>
                </div>
                
                <div className={styless.buttons_container}>
                    <ModalButton > 
                      <Form />
                    </ModalButton> 
                </div>
              </motion.div>   
          </div>
        </div>
     </>
  )
} 

export default HomeSection
 