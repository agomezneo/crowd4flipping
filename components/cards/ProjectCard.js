import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion';
import styles from '../../styles/project_card.module.scss';
import Image from 'next/image';

function ProjectCard({img}) {

  return (
    <motion.div
        key={key}
        whileHover={{
            x: -50,
            boxShadow: '1px 1px 4px #131515'
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
        <div className={styles.header}>
            {/* <Image 
                src={img}

            /> */}

            <h1>Image Container</h1>
        </div>
        <div className={styles.body}>
            
        </div>
        <div className={styles.footer}>

            
        </div>
    </motion.div> 
  )
}

export default ProjectCard
