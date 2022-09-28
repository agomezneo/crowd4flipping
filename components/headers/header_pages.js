import React from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/SVG_Vector_Files/Transparent_Logo.svg'

function Header() {
  return (
    <nav className={styles.header_page}>
        <section>
            <div className={styles.logo_container}>
                <Image src={Logo} width={250} height={100} alt='crowd for flipping logo' />
            </div>
        </section>
        <section>
          <ul className={styles.links_list}>
            <a href="#1" className={styles.nav_link}><span>section 1</span></a>
            <a href="#2" className={styles.nav_link}><span>section 2</span></a>
            <a href="#3" className={styles.nav_link}><span>section 3</span></a> 
            <a href="#4" className={styles.nav_link}><span>section 4</span></a> 
            <a href="#5" className={styles.nav_link}><span>section 5</span></a> 
            <a href="#6" className={styles.nav_link}><span>section 6</span></a> 
            <a href="#7" className={styles.nav_link}><span>section 7</span></a> 
          </ul>
        </section>
    </nav>
  )
}

export default Header
