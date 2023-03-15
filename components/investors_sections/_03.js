import React from 'react'
import styles from '../../styles/Investor&Owner_pages.module.scss'
import { HorizontalStepsData } from '../../data/cards/StepCardsData'
import Steper from '../stepers/VerticalMUI';
import { motion } from "framer-motion";
import Image from 'next/image';
import Build3d from '../../public/images/pages_images/news/11.png'

function HomeSection() {
  return (
   <div className={styles.page_section}>
        <div className={styles.page_section_container}>
            <div className={styles.page_section_header}>
                <h1>¿Qué hacemos en <span>Crowd</span>4<span>Flipping</span>?</h1>
            </div>
            <div className={styles.page_section_body}>

              <div className={styles.horizontal_steper_container}>


                <Steper data={HorizontalStepsData} />

              </div>

              <motion.div 
                className={styles.s3_empty_div} 
                animate={{ y: [-50, 20]}} 
                transition={{
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse", 
                  ease: "easeInOut",
                }}
              >
                <Image src={Build3d} objectFit='cover' />
              </motion.div>

              
            </div>
            <div className={styles.page_section_footer}>
             
            </div>
        </div>
    </div>
  )
} 

export default HomeSection
  