import React from 'react';
import styles from '../../styles/Header.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo_02.png'

function Header() {
  return (
    <nav className={styles.header_page}>
        <section>
            <div className={styles.logo_container}>
                <Image src={Logo} width={120} height={50} alt='crowd for flipping logo' />
            </div>
        </section>
        <section>
         {/*  <a className={styles.back_btn}>Solicite una entrevista</a> */}
        </section>
    </nav>
  )
}

export default Header
