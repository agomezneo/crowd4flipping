import React  from 'react';
import Head from 'next/head';
import styles from '../styles/propiedades_form.module.scss';
import Header from '../components/headers/header_pages_form';
import Footer from '../components/footers/index';
import PropertyForm from '../components/forms/Property';
import WhatsAppButton from '../components/buttons/WhatsAppButton';

function Index() {
  return (
    <div className={styles.form_page}>
        <Head>
            <title>Descubre la forma más rentable de sacar provecho de tu propiedad.</title>
            <meta name="description" content="Con unos simples clicks podrás acceder a las oportunidades que ofremos en Crowd4Flipping para tu propiedad." />  
        </Head>
        <Header 
        />

        <WhatsAppButton />
       <div className={styles.body}>
        <PropertyForm type={'OwnerProperty'} tag={'c4f_owner_property'}/>
       </div>
       <Footer />
    </div>
  )
}

export default Index
