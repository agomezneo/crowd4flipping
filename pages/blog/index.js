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
import {ImDownload} from 'react-icons/im';
import {TbListSearch} from 'react-icons/tb';

function Index({BlogEntries}) {
  
  const [blogEntries, setBlogEntries] = useState(BlogEntries[0].data);
  const [lastDoc, setLastDoc] = useState(blogEntries.length > 4 ? BlogEntries[0].data[3].id : BlogEntries[0].lastDocId);
  const [message, setMessage] = useState(null);
  const [loadingData, setloadingData] = useState(false);
  const [screen, setScreen] = useState(false);
  const [query, setQuery] = useState('');
  const keys = ['title', 'description'];
  const [tags, setTags] = useState(null)
  const [consult, setConsult] = useState('all')
  let currentIndex = 0;

  const loadMoreEntries = async () => {
    setloadingData(true)
    try {
      const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry?lastDoc=${lastDoc}`;
      const response = await fetch(api);
      const data = await response.json();
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

  useEffect(() => { 
    let document = window.screen.width; 
    if(document < 991){
        setScreen(true)
        return
    }
  }, []);


  const handleFilterChange = (event)  =>{
    setConsult(event.target.value); 
  }

  const search = () =>{
    let filteredEntries = blogEntries;
    if (consult !== 'all') {
      filteredEntries = filteredEntries.filter(entry => {
          return entry?.tags.includes(consult);
      });
    }

    return filteredEntries?.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  const getAllTagsFromBlogEntries = () =>{
    const tags = new Set();
    blogEntries.forEach((doc) => {
      const blogEntry = doc;
      blogEntry.tags?.forEach((tag) => {
        tags.add(tag);
      });
    });
    return setTags(Array.from(tags));
  }

  useEffect(() =>{
    if(!blogEntries)return
    getAllTagsFromBlogEntries();
  }, [blogEntries])


  return (
    <Layout>
      <Head>
          <title>Crowd4Flipping - Blog</title>
          <meta name="description" content="Todo lo que necesitas saber sobre inversión inmobiliaria participativa, crowdlending y tecnología blockchain." />        
      </Head>
      <div className={styles.blog_page}>
        <div className={styles.blog_page_container}>
          <div className={styles.blog_page_header}>
            <h1>Todo lo que necesitas saber sobre <strong>inversión inmobiliaria participativa, crowdlending y tecnología blockchain.</strong></h1>
            <div className={styles.blog_page_searcher_container}> 
              <h2>Busca lo que te interesa entre nuestros artículos:</h2>
              <div className={styles.blog_page_input_container}>
                <input 
                  type='text' 
                  placeholder='Buscar...' 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />  
                <TbListSearch />
              </div>  
            </div>
            {tags !== null && (
              <>
              <div className={styles.blog_page_searcher_container}> 
                <div className={styles.blog_page_tags} >
                  <h2>Filtrar por etiquetas:</h2>
                  <div className={styles.blog_page_tags_container}>
                    {tags?.map((item, key) => (
                      <span 
                          key={key}
                          onClick={() => setConsult(item)}
                      >
                        #{item} 
                      </span>))}
                  </div>
                </div>  
              </div>
              <span 
                onClick={() => {
                setMessage(null)
                setConsult('all')
                setQuery('')
                }}
                className={styles.blog_page_searcher_cleaner_button}
              >
                Limpiar busqueda
              </span>
              </>
            )}
          </div>
          <div className={styles.blog_page_body}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{padding: '5px'}}>
              {blogEntries && (
                search().map((entry, index) => {
                  let lg = currentIndex === 0 ? 8 : currentIndex <= 4 ? 4 : 4;
                  currentIndex = currentIndex >= 4 ? 0 : currentIndex + 1;
                  return(
                    <>
                      <Grid item key={index} lg={lg} xs={12}>
                        <BlogCard 
                          id={entry.id} 
                          lg={screen ? 12 : lg}
                          title={entry.title} 
                          description={entry.description} 
                          imageUrl={entry.imageUrl}  
                          autor={entry.author}
                        />
                      </Grid>

                      {currentIndex === 4 && (
                        <Grid item  lg={4} xs={12} key={'empty'}>
                          <NewsLetterSuscription />
                        </Grid>
                      )}
                    </>
                  ) 
                })
              )}
            </Grid>
            {message !== null ? (
              <div className={styles.blog_page_more_articles_container}>
                <span>{message}</span>
              </div>
            ) : (
              <div className={styles.blog_page_more_articles_container}>
                  {loadingData ? (<MiniBlockLoader/>) : (
                  <div 
                    className={styles.blog_page_more_articles_button}
                    onClick={() => loadMoreEntries()}
                  >
                    <span><ImDownload /> </span>
                    <h4>Cargar más artículos</h4>
                  </div>)}
              </div>
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
      },
      revalidate: 30
  }
}


