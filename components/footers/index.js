import React from 'react'
import styles from '../../styles/Footers.module.scss';
import Image from 'next/image';
import Logo from '../../public/images/brand/crowd4flipping/PNG_Files/Transparent_Logo.png';

export default function index() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_container}>
            <div className={styles.footer_logo_container}>
                <Image src={Logo} width={350} height={200} alt='logo crowd4flipping' />
            </div>
            <div className={styles.footer_content}>
                <h4> 
                    <span> Obraplus S.L. </span> Todos los derechos reservados. | Política de privacidad | Aviso Legal | Política de Cookies
                </h4>
            </div>
        </div>
    </div>
  )
}
