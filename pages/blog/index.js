import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Footer from '../../components/footers/index';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Layout from '../../components/layouts/Layout';
import styles from '../../styles/BlogPage.module.scss';
import BlogCard from '../../components/cards/BlogCard';
import WhatsAppButton from '../../components/buttons/WhatsAppButton';

const blogEntries = [
  { id: '0', title: 'Mi primer entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F02.png?alt=media&token=9a439869-78c5-4403-856e-a88692a1165a' },
  { id: '1', title: 'Mi segunda entrada de blog', description: 'Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet...' , imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F04.png?alt=media&token=4223ab6b-b9b9-45ab-bcb0-0ae1a952bd52' },
  { id: '2', title: 'Mi tercera entrada de blog', description: 'Lorem ipsum dolor sit amet...', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2Fhigh-angle-architectural-project-on-desk.jpg?alt=media&token=73d1fe66-0b4c-4067-a77f-14aedd8c0097' },
  { id: '3', title: 'Mi cuarta entrada de blog', description: 'Lorem ipsum dolor sit amet...', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2F04.png?alt=media&token=4223ab6b-b9b9-45ab-bcb0-0ae1a952bd52' },
  { id: '4', title: 'Mi primer entrada de blog', description: 'Lorem ipsum dolor sit amet...', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2Fhigh-angle-architectural-project-on-desk.jpg?alt=media&token=73d1fe66-0b4c-4067-a77f-14aedd8c0097'},
  { id: '5', title: 'Mi primer entrada de blog', description: 'Lorem ipsum dolor sit amet...', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/crowd4flipping-app.appspot.com/o/blog-entry-images%2FnS4w5FrqH0QFXvqLZJ5TSPTU1FI3%2Fhigh-angle-architectural-project-on-desk.jpg?alt=media&token=73d1fe66-0b4c-4067-a77f-14aedd8c0097'},

];

function Index({BlogEntries}) {

  const [blogEntries] = useState(BlogEntries[0].data)
  let currentIndex = 0;

  return (
    <Layout>
      <Head>
          <title>Crowd4Flipping - Blog</title>
          <meta name="description" content="Todo lo que necesitas saber sobre <strong>inversión inmobiliaria participativa, crowdlending y tecnología blockchain." />        
      </Head>
      <div className={styles.blog_page}>
        <div className={styles.blog_page_container}>
          <div className={styles.blog_page_header}>
            <h1>Todo lo que necesitas saber sobre <strong>inversión inmobiliaria participativa, crowdlending y tecnología blockchain.</strong></h1>
          </div>
          <div className={styles.blog_page_body}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {blogEntries?.map((entry, index) => {
                let lg = currentIndex === 0 ? 8 : currentIndex <= 4 ? 4 : 4;
                currentIndex = currentIndex >= 4 ? 0 : currentIndex + 1 ;
                return(
                  <>
                    <Grid item key={index} lg={lg} xs={12}>
                      <BlogCard 
                        id={entry.id} 
                        lg={lg}
                        title={entry.title} 
                        description={entry.description} i
                        imageUrl={entry.imageUrl}  
                        autor={entry.autor}
                      />
                    </Grid>

                    {currentIndex === 4 && (
                      <Grid item  lg={4} xs={12} key={'empty'}>
                        <h4>news letter</h4>
                      </Grid>
                    )}
                  </>
                ) 
              } )}
            </Grid>
          </Box>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </Layout>
  )
}

export default Index;

export async function getStaticProps(){

  const api = 'http://localhost:5000/crowd4flipping-app/us-central1/app/api/create-blog-entry'
  const BlogEntries = await Promise.all([
    fetch(`${api}`).then((res) => res.json())
  ])

  return{
      props: {
       BlogEntries
      }
  }

}

