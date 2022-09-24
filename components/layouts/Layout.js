import React from 'react'
import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';

function Layout({children}) {
  return (
    <div>
         <Head>
            <title>Crowd4Flipping | Academia de Criptomonedas en Mallorca</title>
            <meta name="description" content="Academia de Criptomonedas en Mallorca. Recorremos juntos el mundo de la Blockchain. ¡Apúntate a nuestras charlas de Cripto gratuitas cada semana." />
            <link rel="icon" href="/images/brand/crowd4flipping/Favicon/favicon_transparent.png" />
        </Head>
        <div className={styles.Layout}>
            {children}
        </div>
      
    </div>
  )
}

export default Layout
