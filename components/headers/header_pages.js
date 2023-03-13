import React, {useState, useEffect} from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';
import {linksContent} from './NavBarLinks';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import InstagramIcon from '../../public/images/icons/instagramIcon.webp';
import { motion } from 'framer-motion';

function Header({setOpen}) {

  const [activeFixedNav, setActiveFixedNav] = useState(false) 
    useEffect(() => {
    if(!document){
        return
    }
    window.addEventListener("scroll", ()=>{ 
        if(window.scrollY > 100){
            setActiveFixedNav(true)
        }else if(window.scrollY < 100){
            setActiveFixedNav(false)
        }
    })
    }, [])

    const [isOpen, setIsOpen] = useState(false);

   
   
    const open = () =>{
        setIsOpen(state => !state) 
        setOpen(state => !state)
    }



  return (
    <>
    <nav className={ activeFixedNav ? `${styles.header_page} ${styles.display_none}` : styles.header_page }>
        <section className={styles.logo_container}>
            <Link href={'/'} >
                <Image src={Logo} width={120} height={50} alt='crowd for flipping logo' />
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
                        <h3>
                            <span>{item.icon}</span>
                            {item.span}
                        </h3>
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
    </nav>

       
    </>
  )
}

export default Header 
