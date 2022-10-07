import React from 'react'
import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';

function Layout({children}) {
  return (
    <div>
         <Head>
            <title>Crowd4Flipping</title>
            <meta name="description" content="La inversión inmobiliaria al alcance de todos" />
            <link rel="icon" href="/images/brand/crowd4flipping/Favicon/favicon_transparent.png" />
        </Head>
        <div className={styles.Layout}>
            {children}
        </div>
      
    </div>
  )
}

export default Layout
