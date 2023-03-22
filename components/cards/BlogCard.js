import React, {useState, useEffect} from 'react'
import styles from  '../../styles/BlogCard.module.scss';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { Avatar } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export default function BlogCard({id, title, description, imageUrl, lg, autor}) {

    const [_description, setDescription] = useState('')

    function shortenString(str) {
        console.log(str)
        let words = str.split(" ");
        if (words.length > 20) {
          words = words.slice(0, 20);
          words.push("...");
        }
        return words.join(" ");
    }

    useEffect(() =>{
        if(!description)return
        let shortString = shortenString(description);
        setDescription(shortString);
    }, [description])

  return (
    <motion.div 
        className={styles.blog_card}
        whileHover={{ 
            y: -10,
            boxShadow: '1px 1px 4px #131515',
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
    >
        <div className={styles.blog_card_image_container}>
            <CardMedia
                className={styles.blog_card_media}
                component="img"
                alt="green iguana"
                height="150"
                image={imageUrl}
            />
        </div>
        <div className={styles.blog_card_text_container}> 
            <h2> {title} </h2>
            <p>  {_description} </p>
        </div>
        <div className={styles.blog_card_footer}>
            <div className={styles.blog_card_avatar_container}>
                <Avatar />
                <span> {autor?.name ? autor.name : 'Avatar Name'} </span>
            </div>
            <div className={styles.blog_card_footer_cta}>
                <Link href={`/blog/${id}`}>
                    <span> leer más...</span>
                </Link>
                
            </div>
        </div>
    </motion.div>
  )
}
