import React from 'react';
import Layout from '../../components/layouts/Layout';
import styles from '../../styles/BlogPage.module.scss';
import Head from 'next/head';
import { useRouter } from 'next/router';
import WhatsAppButton from '../../components/buttons/WhatsAppButton';
import Footer from '../../components/footers/index';
import { Avatar } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import BlogCard from '../../components/cards/BlogCard';

const blogEntries = [
  { id: '0', title: 'Mi primer entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F02.png?alt=media&token=9a439869-78c5-4403-856e-a88692a1165a' },
  { id: '1', title: 'Mi segunda entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...' , imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F04.png?alt=media&token=4223ab6b-b9b9-45ab-bcb0-0ae1a952bd52' },
  { id: '1', title: 'Mi segunda entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...' , imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F04.png?alt=media&token=4223ab6b-b9b9-45ab-bcb0-0ae1a952bd52' },
]

function Index() {

  const router = useRouter();
  const blogId = router.query.blog;



  return (
    <Layout>
      <Head>
      <Head>
          <title>Crowd4Flipping - Blog {}</title>
          <meta name="description" content="Todo lo que necesitas saber sobre <strong>inversión inmobiliaria participativa, crowdlending y tecnología blockchain." />        
      </Head>
      </Head>
      <div className={styles.blog_page}>
        <div className={styles.blog_page_child_container}>
          <div className={styles.blog_page_child_left}></div>
          <div className={styles.blog_page_child_center}>
            <div className={styles.blog_page_social_container}>
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Linkedin</span>
              <span>Twiter</span>
            </div>
            <div className={styles.blog_page_blog_header}>
              <h1>Crowdfunding Inmobiliario: Cómo la Tecnología Blockchain Está Transformando el Crowdlending</h1>
              <div className={styles.blog_page_avatar_container}>
                <Avatar />
                <span>Avatar Name</span>
              </div>
            </div>
            <div className={styles.blog_page_content}>

              <CardMedia
                  className={styles.blog_card_media}
                  component="img"
                  alt="green iguana"
                  height="250"
                  image={'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2Fhigh-angle-architectural-objects-on-desk.jpg?alt=media&token=55b0025a-c114-4935-a4e5-3d6bc3cb8d75'}
              />
              <br/>
              <br/>
              <br/>
              <h2>Crowdfunding inmobiliario o crowdlending</h2>
              <br/>
              <br/>
              <br/>
              <p>
              Si estás interesado en invertir en el mercado inmobiliario, es posible que hayas oído hablar de los términos "crowdfunding inmobiliario" o "crowdlending". Ambos términos se refieren a la inversión en bienes raíces a través de plataformas en línea que permiten a los inversores individuales participar en proyectos inmobiliarios de manera colectiva. Sin embargo, lo que hace que estas plataformas sean tan interesantes es su uso de la tecnología blockchain para facilitar las transacciones.
              <br/>
              <br/>
              <br/>
              <h2>crowdfunding inmobiliario o crowdlending</h2>
              <br/>
              <br/>
              <br/>
              La tecnología blockchain permite que las plataformas de crowdfunding inmobiliario y crowdlending operen de manera más eficiente y transparente que los métodos de financiación tradicionales. Por ejemplo, los contratos inteligentes pueden ser programados en la cadena de bloques para que se ejecuten automáticamente cuando se cumplan ciertas condiciones, lo que reduce la necesidad de intermediarios y aumenta la eficiencia.
              <br/>
              <br/>
              <br/>
              <h2>"rowdfunding inmobiliario o crowdlending</h2>
              <br/>
              <br/>
              <br/>
              Además, la cadena de bloques también permite la tokenización de activos, lo que significa que los bienes raíces pueden ser divididos en tokens digitales y vendidos a inversores individuales en lugar de tener que comprar una propiedad completa. Esto significa que más personas pueden invertir en proyectos inmobiliarios, lo que a su vez puede aumentar la liquidez de los activos.
              <br/>
              <br/>
              <br/>
              <h2>crowdfunding inmobiliario o crowdlending</h2>
              <br/>
              <br/>
              <br/>
              Por último, la tokenización de activos también facilita los proyectos inmobiliarios participativos, que permiten a los inversores contribuir con cantidades más pequeñas de capital en proyectos inmobiliarios específicos. Esto significa que los inversores pueden diversificar sus inversiones inmobiliarias y tener una mayor participación en la dirección de los proyectos.
              <br/>
              <br/>
              <br/>
              <h2>crowdfunding inmobiliario o crowdlending</h2>
              <br/>
              <br/>
              <br/>
              En conclusión, la tecnología blockchain ha transformado el mercado inmobiliario mediante la mejora de la eficiencia y la transparencia del crowdfunding inmobiliario y crowdlending. Al permitir la tokenización de activos y la creación de contratos inteligentes, las plataformas de inversión inmobiliaria en línea pueden ofrecer a los inversores individuales más opciones y oportunidades de inversión. Si estás interesado en invertir en bienes raíces, te recomendamos que investigues las plataformas de crowdfunding inmobiliario y crowdlending que utilizan la tecnología blockchain.

              </p>
            </div>
          </div>
          <div className={styles.blog_page_child_right}>
            <div className={styles.blog_page_cta_card_container}>
              <h1>Contactanos</h1>
              <input 
                placeholder='Teléfono'
              />
              <input 
                type={'button'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blog_page}>
        <div className={styles.blog_page_child_container}>
          <div className={styles.blog_page_child_left}></div>
          <div className={styles.blog_page_child_center}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{placeContent: 'center'}}>
              {blogEntries.map((entry, index) => {
                return(
                  <Grid item key={index} /* lg={8} */ xs={12}>
                    <BlogCard id={entry.id} title={entry.title} description={entry.description} imageUrl={entry.imageUrl} lg={8} />
                  </Grid>
                ) 
              } )}
              
            </Grid>
          </Box>
          </div>
          <div className={styles.blog_page_child_right}></div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </Layout>
  )
}

export default Index
