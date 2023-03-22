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
  { id: '1', title: 'Mi segunda entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...' , imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F04.png?alt=media&token=4223ab6b-b9b9-45ab-bcb0-0ae1a952bd52' },
  { id: '1', title: 'Mi segunda entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...' , imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F04.png?alt=media&token=4223ab6b-b9b9-45ab-bcb0-0ae1a952bd52' },
]

function Index({blogEntry}) {

  console.log(blogEntry)

  return (
    <Layout>
      <Head>
      <Head>
          <title>Crowd4Flipping - {`${blogEntry.title}`}</title>
          <meta name="description" content={`${blogEntry.description}`} />        
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
              <h1>{blogEntry.title}</h1>
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
                  image={blogEntry.imageUrl}
              />

              <div className={styles.blog_page_entry_container}>
                <div  
                  dangerouslySetInnerHTML={{__html: blogEntry.body}} 
                />
              </div>
              
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
          <h3>Artículos relacionados</h3>
          <br/>
          <br/>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{placeContent: 'center'}}>
              {blogEntries.map((entry, index) => {
                return(
                  <Grid item key={index} lg={6} xs={12}>
                    <BlogCard id={entry.id} title={entry.title} description={entry.description} imageUrl={entry.imageUrl} lg={6} />
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

export async function getServerSideProps(context){

  const id = context.query.blog;
  const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry/${id}`
  const blogEntry = await fetch(`${api}`).then((res) => res.json());

  return{
      props: {
        blogEntry,
      }
  }

}
