import React, {useState, useEffect} from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';
import {linksContent} from './NavBarLinks';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import InstagramIcon from '../../public/images/icons/instagramIcon.webp';
import { isMotionComponent, motion } from 'framer-motion';

function Header() {

  const [activeFixedNav, setActiveFixedNav] = useState(false) 
    useEffect(() => {
    if(!document){
        return
    }
    window.addEventListener("scroll", ()=>{ 
        if(window.scrollY > 500){
            setActiveFixedNav(true)
        }else if(window.scrollY < 500){
            setActiveFixedNav(false)
        }
    })
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const effects = { 
        open: {
          x: 0,
          opacity: 1,
          position: 'fixed',
          display: 'flex'
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
          x: 0  
        },
        close: { 
          opacity: 0,
          x: -1000
        }
      };
   
   
    const open = () =>{
        setIsOpen(state => !state) 
    }



  return (
    <>
    <nav className={ activeFixedNav ? `${styles.header_page} ${styles.display_active}` : styles.header_page }>
        <section className={styles.logo_container}>
            <Link href={'/'} >
                <Image src={Logo} width={ activeFixedNav ? 100 : 120} height={activeFixedNav ? 40 : 50} alt='crowd for flipping logo' />
            </Link>
        </section>
        <section  className={styles.header_page_links_container}>
            {linksContent.map((item, key) => (
                <motion.div
                    key={key}
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <Link 
                    href={item.url} 
                    >
                        <div className={styles.link_container}>
                            <span className={styles.icon}>{item.icon}</span>
                            <h3 className={activeFixedNav && `${styles.active_header}`}>
                                {item.span}
                            </h3>
                        </div>
                    </Link>
                </motion.div>
            ))}
            <div className={styles.header_page_social_links_container}>
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
                    <Image 
                        src={InstagramIcon} 
                        className={`${styles.insta_icon}`}
                        width={40} 
                        height={40} 
                    />
                </motion.a>
            </div>
        </section>
        
        <section  className={styles.header_page_links_container_burger_container}>
            <div 
                className={isOpen ? `${styles.header_page_burger} ${styles.open}` : styles.header_page_burger}
                onClick={open}
            >
                    <div className={styles.heder_page_btn_burger}></div>
            </div>
        </section>
        <motion.div 
            className={styles.link_container}
            initial={isOpen}
            variants={effects}
            animate={isOpen ? 'open' : 'close'}

        >
            {linksContent.map((item, key) => (
                <Link 
                href={item.url}
                key={key}
                >
                <motion.h3 
                    initial={isOpen}
                    variants={effectsLink}
                    animate={isOpen ? 'open' : 'close'}
                    transition={{delay: `.${key+2}`, duration: `.${key+2}`,  type: 'spring', stiffness: 100}}
                > 
                    <span>{item.icon}</span>
                    {item.span}
                </motion.h3>
                </Link>
            ))}


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
                    <Image 
                        src={InstagramIcon} 
                        className={`${styles.insta_icon}`}
                        width={40} 
                        height={40} 
                    />
                </motion.a>
        </motion.div>
    </nav>
        
    </>
  )
}

export default Header 
