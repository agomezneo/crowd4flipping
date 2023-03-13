import React, {useState, useEffect} from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/logo/Crowd4Flipping.png';
import Link from 'next/link';
import {motion} from 'framer-motion';

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
            <Link href={'/transparencia'} >
                <span className={styles.header_page_link}>Programa de transparencia</span>
            </Link>
            <Link href={'/sobre-nosotros'} >
                <span className={styles.header_page_link}>Quienes somos</span>
            </Link>
            <Link href={'https://app.crowd4flipping.com'}>
                <span className={styles.header_page_link}>Acceso</span>
            </Link>
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
