import React, { useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Layout.module.scss';
import Header from '../headers/header_pages'
import Link from 'next/link';
import { motion } from 'framer-motion';
import {linksContent} from '../headers/NavBarLinks';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import InstagramIcon from '../../public/images/icons/instagramIcon.webp';

function Layout({children}) {

  const [open, setOpen] = useState(false);

  const effects = { 
    open: {
      x: 0,
      opacity: 1,
      position: 'absolute',
      display: 'flex',
     
    },
    close: { 
      x: -1000,
      opacity: 0,
      display: 'none'
    }
  };
  const effectsLink = { 
    open: {
      opacity: 1,
     
    },
    close: { 
      opacity: 0,
    }
  };


  
  return (
    <div style={{position: 'relative'}}>
         <Head>
            <title>Crowd4Flipping</title>
            <meta name="description" content="La inversión inmobiliaria al alcance de todos." />
        </Head>
        <div className={styles.Layout}>
            <Header 
                setOpen={setOpen}
            />
            {children}
        </div>
        <motion.div 
            className={styles.link_container}
            initial={open}
            variants={effects}
            animate={open ? 'open' : 'close'}

          >
            {linksContent.map((item, key) => (
              <Link 
                href={item.url}
                key={key}
              >
                <motion.h3 
                  initial={open}
                  variants={effectsLink}
                  animate={open ? 'open' : 'close'}
                  transition={{delay: `.${key+3}`, duration: `.${key+3}`,  type: 'spring', stiffness: 100}}
                > 
                    <span>{item.icon}</span>
                    {item.span}
                </motion.h3>
              </Link>
            ) )}

                <motion.a 
                    href='https://www.facebook.com/Crowd4Flipping' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <FaFacebookSquare className={`${styles.icon} ${styles.face_icon}`}/>
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/crowd4flipping' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    {/* <FaInstagram className={`${styles.icon} ${styles.insta_icon}`}/> */}
                    <Image 
                        src={InstagramIcon} 
                        className={`${styles.insta_icon}`}
                        width={40} 
                        height={40} 
                    />
                </motion.a>
          </motion.div>
    </div>
  )
}

export default Layout
