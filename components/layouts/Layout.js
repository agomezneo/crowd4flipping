import React, { useState } from 'react'
import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';
import Header from '../headers/header_pages'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdOutlineAccountCircle } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { TbMapSearch } from "react-icons/tb";


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

  const linksContent = [
    {
        span: 'Programa de transparencia',
        url: '/transparencia',
        icon: <TbMapSearch />
    },
    {
        span: 'Quienes somos',
        url: '/sobre-nosotros',
        icon: <GiTeamIdea />
    },
    {
        span: 'Acceso',
        url: 'https://app.crowd4flipping.com',
        icon: <MdOutlineAccountCircle />
    },
]

  
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
          </motion.div>
    </div>
  )
}

export default Layout
