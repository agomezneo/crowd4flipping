import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Footer from '../../components/footers/index';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Layout from '../../components/layouts/Layout';
import styles from '../../styles/BlogPage.module.scss';
import BlogCard from '../../components/cards/BlogCard';
import WhatsAppButton from '../../components/buttons/WhatsAppButton';
import NewsLetterSuscription from '../../components/forms/NewsLetterSuscription';
import MiniBlockLoader from '../../components/loaders/MiniBlockLoader';
function Index({BlogEntries}) {
  
  const [blogEntries, setBlogEntries] = useState(BlogEntries[0].data);
  const [lastDoc, setLastDoc] = useState(BlogEntries[0].data[3].id);
  const [message, setMessage] = useState(null);
  const [loadingData, setloadingData] = useState(false);

  const loadMoreEntries = async () => {
    setloadingData(true)
    try {
      const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry?lastDoc=${lastDoc}`;
      const response = await fetch(api);
      const data = await response.json();
      console.log(data.lastDocId)
      if (data.status === 200) {
        setBlogEntries([...blogEntries, ...data.data]);
        setLastDoc(data.data[data.data.length - 1].id);
        setloadingData(false)
      } else {
        setMessage(data.message);
        setloadingData(false)
      }
    } catch (error) {
      console.log(error.message);
      setloadingData(false)
    }
  }

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
                        <NewsLetterSuscription />
                      </Grid>
                    )}
                  </>
                ) 
              } )}
            </Grid>
            {message !== null ? (
              <div>
                <span>{message}</span>
              </div>
            ) : (
              loadingData ? (<MiniBlockLoader/>) : (<div onClick={() => loadMoreEntries()}>Cargar más artículos</div>)
            )}
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
  const api = 'https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry'
  const BlogEntries = await Promise.all([
    fetch(`${api}`).then((res) => res.json())
  ])
  return{
      props: {
       BlogEntries
      }
  }
}


