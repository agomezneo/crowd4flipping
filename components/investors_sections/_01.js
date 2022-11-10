import React, {useState} from 'react';
import styles from '../../styles/Investor&Owner_pages.module.scss';
import styless from '../../styles/Home.module.scss';
import {motion} from 'framer-motion';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../modals';
import ModalButton from '../buttons/ModalButton';
function HomeSection() {

  const [showModal, setShowModal] = useState(false)



  return (
    <>
      <div className={styles.video_container}>
        <video src='/videos/real_state.mp4' autoPlay loop="loop" muted playsInline/>
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
              className={`${styless.explore_page_hero_container} ${styless.left} ${styles.s1_background}`}
            >
              <div className={styless.logo_container}>
                <Image src={Logo} width={700} height={300} alt='Crowd for Flipping' />
                <div className={styless.text_container}>
                <h1 className={styles.s1_pages_title}>Ahorradores que <span>invierten en inmuebles desde 500€ </span></h1>
                </div>
              </div>
              <div className={styless.buttons_container}>
                <div 
                  className={`${styless.back_btn}`}
                  onClick={() => setShowModal(!showModal) }
                >
                    Conoce Crowd<span>4</span>Flipping
                </div>
                <Link href={'https://c4f.vercel.app/'}>
                  <div className={`${styless.back_btn} ${styless.principal_button}`}>Regístrate gratis</div>
                </Link>
              </div>
            </motion.div>   
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.75,
              }}
              className={`${styless.explore_page_hero_container} ${styless.right}`}
            >
            </motion.div>   
        </div>

        {showModal && (
          <Modal setShowModal={setShowModal}>
            <div className={styles.modal_video_container} >
              <video src="/videos/real_state.mp4" controls autoPlay />
            </div>
          </Modal>
        )}
      </div>

      
      
    </>
  )
} 

export default HomeSection
 